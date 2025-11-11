import { useEffect, useMemo, useState } from 'react'
import { api } from '../lib/api'

type UserId = string

type U = {
  id: UserId
  email: string
  is_active?: boolean
  is_staff?: boolean
  is_superuser?: boolean
  avatar_url?: string | null
}

type UsersResponse = {
  items: U[]
}

type ApiError = {
  response?: { status?: number; data?: { detail?: string; message?: string } }
  message?: string
}

export default function AdminUsers() {
  const [items, setItems] = useState<U[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [acting, setActing] = useState<boolean>(false)

  const normalized = useMemo(
    () =>
      items
        .map((u) => ({
          ...u,
          is_active: u.is_active ?? true,
          is_staff: u.is_staff ?? false,
          is_superuser: u.is_superuser ?? false,
        }))
        .sort((a, b) => (b.is_superuser ? 1 : 0) - (a.is_superuser ? 1 : 0)),
    [items]
  )

  async function load() {
    setLoading(true)
    setError(null)
    try {
      const r = await api.get<UsersResponse>('/admin/users')
      const arr = Array.isArray(r.data?.items) ? r.data.items : []
      setItems(arr)
    } catch (e) {
      const err = e as ApiError
      const status = err?.response?.status
      if (status === 401) {
        try {
          window.location.href = '/login'
        } catch {}
        return
      }
      setError(err?.response?.data?.detail || err?.response?.data?.message || 'Failed to load')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Single effect to load; no duplicate calls
    load()
  }, [])

  async function block(id: UserId, b: boolean) {
    setActing(true)
    try {
      await api.put(`/admin/users/${id}/block`, null, { params: { block: b } })
      await load()
    } catch (e) {
      const err = e as ApiError
      const status = err?.response?.status
      if (status === 401) {
        try {
          window.location.href = '/login'
        } catch {}
        return
      }
      setError(err?.response?.data?.detail || err?.response?.data?.message || 'Failed to update user')
    } finally {
      setActing(false)
    }
  }

  async function remove(id: UserId) {
    setActing(true)
    try {
      await api.delete(`/admin/users/${id}`)
      await load()
    } catch (e) {
      const err = e as ApiError
      const status = err?.response?.status
      if (status === 401) {
        try {
          window.location.href = '/login'
        } catch {}
        return
      }
      setError(err?.response?.data?.detail || err?.response?.data?.message || 'Failed to delete user')
    } finally {
      setActing(false)
    }
  }

  return (
    <div className="users-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          <h1 className="page-title">
            <div className="title-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
            </div>
            User Management
          </h1>
          <p className="page-subtitle">Manage user accounts, permissions, and access control</p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">
        <div className="stat-card-modern total">
          <div className="stat-icon-modern">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
          </div>
          <div className="stat-content-modern">
            <div className="stat-label-modern">Total Users</div>
            <div className="stat-value-modern">{normalized.length}</div>
          </div>
        </div>

        <div className="stat-card-modern active">
          <div className="stat-icon-modern">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
            </svg>
          </div>
          <div className="stat-content-modern">
            <div className="stat-label-modern">Active Users</div>
            <div className="stat-value-modern">{normalized.filter(u => u.is_active).length}</div>
          </div>
        </div>

        <div className="stat-card-modern staff">
          <div className="stat-icon-modern">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
            </svg>
          </div>
          <div className="stat-content-modern">
            <div className="stat-label-modern">Staff Members</div>
            <div className="stat-value-modern">{normalized.filter(u => u.is_staff).length}</div>
          </div>
        </div>

        <div className="stat-card-modern admins">
          <div className="stat-icon-modern">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
            </svg>
          </div>
          <div className="stat-content-modern">
            <div className="stat-label-modern">Administrators</div>
            <div className="stat-value-modern">{normalized.filter(u => u.is_superuser).length}</div>
          </div>
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="alert-error">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
          </svg>
          <span>{error}</span>
        </div>
      )}

      {/* Users List */}
      <div className="card-modern">
        <div className="card-header-users">
          <div>
            <h2 className="card-title-users">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
              </svg>
              All Users
            </h2>
            <p className="card-subtitle-users">View and manage registered users</p>
          </div>
          <span className="badge-count-users">{normalized.length} total</span>
        </div>

        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner-modern">
              <div className="spinner-ring-modern"></div>
              <div className="spinner-ring-modern"></div>
              <div className="spinner-ring-modern"></div>
            </div>
            <p>Loading users...</p>
          </div>
        ) : normalized.length === 0 ? (
          <div className="empty-state-large">
            <svg width="80" height="80" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
            <h3>No Users Yet</h3>
            <p>No registered users in the system</p>
          </div>
        ) : (
          <div className="users-table">
            <div className="table-header-users">
              <div className="th-user">User</div>
              <div className="th-status">Status</div>
              <div className="th-role">Staff</div>
              <div className="th-role">Admin</div>
              <div className="th-actions-users">Actions</div>
            </div>
            
            {normalized.map((u) => (
              <div key={u.id} className={`table-row-users ${u.is_superuser ? 'admin-row' : ''}`}>
                <div className="td-user">
                  <div className="user-cell">
                    <div className="user-avatar">
                      {u.avatar_url ? (
                        <img src={u.avatar_url} alt="" />
                      ) : (
                        u.email.charAt(0).toUpperCase()
                      )}
                    </div>
                    <div className="user-info">
                      <div className="user-email">{u.email}</div>
                      <div className="user-id">ID: {u.id.substring(0, 8)}...</div>
                    </div>
                  </div>
                </div>
                <div className="td-status">
                  <span className={`status-badge ${u.is_active ? 'active' : 'inactive'}`}>
                    {u.is_active ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                        </svg>
                        Active
                      </>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"/>
                        </svg>
                        Blocked
                      </>
                    )}
                  </span>
                </div>
                <div className="td-role">
                  <span className={`role-badge ${u.is_staff ? 'yes' : 'no'}`}>
                    {u.is_staff ? (
                      <>
                        <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        Yes
                      </>
                    ) : (
                      <>
                        <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                        </svg>
                        No
                      </>
                    )}
                  </span>
                </div>
                <div className="td-role">
                  <span className={`role-badge ${u.is_superuser ? 'admin' : 'no'}`}>
                    {u.is_superuser ? (
                      <>
                        <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                        </svg>
                        Yes
                      </>
                    ) : (
                      <>
                        <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                        </svg>
                        No
                      </>
                    )}
                  </span>
                </div>
                <div className="td-actions-users">
                  {u.is_superuser ? (
                    <div className="admin-indicator">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                      </svg>
                      <span>System Admin</span>
                    </div>
                  ) : (
                    <div className="action-buttons">
                      <button 
                        onClick={() => block(u.id, u.is_active)} 
                        disabled={acting}
                        type="button"
                        className={`btn-action ${u.is_active ? 'btn-block' : 'btn-unblock'}`}
                        title={u.is_active ? 'Block user' : 'Unblock user'}
                      >
                        {u.is_active ? (
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"/>
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                          </svg>
                        )}
                      </button>
                      <button 
                        onClick={() => remove(u.id)} 
                        disabled={acting}
                        type="button"
                        className="btn-action btn-delete"
                        title="Delete user"
                      >
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"/>
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        /* Global Styles */
        * {
          box-sizing: border-box;
        }
        
        .users-page {
          max-width: 100%;
          padding: 24px;
          background: #f8fafc;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
          opacity: 0;
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        
        /* Page Header */
        .page-header {
          margin-bottom: 32px;
          opacity: 0;
          animation: slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .page-header-content {
          margin-bottom: 24px;
        }
        
        .page-title {
          font-size: 32px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
          gap: 12px;
          letter-spacing: -0.5px;
        }
        
        .title-icon-wrapper {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .page-subtitle {
          font-size: 15px;
          color: #64748b;
          margin: 0;
        }
        
        /* Statistics Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
          opacity: 0;
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .stat-card-modern {
          background: white;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          border: 1px solid #e5e7eb;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        
        .stat-card-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: currentColor;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .stat-card-modern:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }
        
        .stat-card-modern:hover::before {
          opacity: 1;
        }
        
        .stat-card-modern.total { color: #667eea; }
        .stat-card-modern.active { color: #10b981; }
        .stat-card-modern.staff { color: #3b82f6; }
        .stat-card-modern.admins { color: #f59e0b; }
        
        .stat-icon-modern {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s;
        }
        
        .stat-card-modern.total .stat-icon-modern {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          color: #667eea;
        }
        
        .stat-card-modern.active .stat-icon-modern {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }
        
        .stat-card-modern.staff .stat-icon-modern {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }
        
        .stat-card-modern.admins .stat-icon-modern {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }
        
        .stat-card-modern:hover .stat-icon-modern {
          transform: scale(1.1) rotate(5deg);
        }
        
        .stat-content-modern {
          flex: 1;
        }
        
        .stat-label-modern {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        
        .stat-value-modern {
          font-size: 32px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1;
        }
        
        /* Alert */
        .alert-error {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 12px;
          color: #dc2626;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 24px;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.1);
        }
        
        /* Card Modern */
        .card-modern {
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          border: 1px solid #e5e7eb;
          overflow: hidden;
          opacity: 0;
          animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .card-header-users {
          padding: 24px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        
        .card-title-users {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .card-subtitle-users {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }
        
        .badge-count-users {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 8px 16px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
        }
        
        /* Loading State */
        .loading-state {
          text-align: center;
          padding: 80px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        
        .loading-spinner-modern {
          position: relative;
          width: 80px;
          height: 80px;
        }
        
        .spinner-ring-modern {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 4px solid transparent;
          border-top-color: #667eea;
          border-radius: 50%;
          animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }
        
        .spinner-ring-modern:nth-child(2) {
          width: 70%;
          height: 70%;
          top: 15%;
          left: 15%;
          border-top-color: #764ba2;
          animation-delay: -0.5s;
        }
        
        .spinner-ring-modern:nth-child(3) {
          width: 40%;
          height: 40%;
          top: 30%;
          left: 30%;
          border-top-color: #10b981;
          animation-delay: -1s;
        }
        
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        
        .loading-state p {
          font-size: 16px;
          color: #64748b;
          font-weight: 600;
          margin: 0;
        }
        
        /* Empty State */
        .empty-state-large {
          text-align: center;
          padding: 80px 40px;
        }
        
        .empty-state-large svg {
          opacity: 0.2;
          margin-bottom: 20px;
        }
        
        .empty-state-large h3 {
          font-size: 24px;
          color: #475569;
          margin: 0 0 8px 0;
        }
        
        .empty-state-large p {
          font-size: 15px;
          color: #94a3b8;
          margin: 0;
        }
        
        /* Users Table */
        .users-table {
          display: flex;
          flex-direction: column;
        }
        
        .table-header-users {
          display: grid;
          grid-template-columns: 2.5fr 1.2fr 1fr 1fr 140px;
          gap: 16px;
          padding: 16px 24px;
          background: #f8fafc;
          font-weight: 700;
          font-size: 13px;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 2px solid #e5e7eb;
        }
        
        .table-row-users {
          display: grid;
          grid-template-columns: 2.5fr 1.2fr 1fr 1fr 140px;
          gap: 16px;
          padding: 20px 24px;
          border-bottom: 1px solid #e5e7eb;
          align-items: center;
          transition: all 0.3s;
          position: relative;
        }
        
        .table-row-users:hover {
          background: #f8fafc;
        }
        
        .admin-row {
          background: linear-gradient(90deg, rgba(245, 158, 11, 0.05) 0%, transparent 100%);
          border-left: 4px solid #f59e0b;
          position: relative;
        }
        
        .admin-row::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, rgba(245, 158, 11, 0.03), transparent);
          pointer-events: none;
        }
        
        .admin-row:hover {
          background: linear-gradient(90deg, rgba(245, 158, 11, 0.08) 0%, transparent 100%);
        }
        
        .td-user, .td-status, .td-role, .td-actions-users {
          display: flex;
          align-items: center;
        }
        
        .user-cell {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .user-avatar {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 18px;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
        }
        
        .user-avatar img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
        }
        
        .user-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .user-email {
          font-weight: 600;
          color: #0f172a;
          font-size: 15px;
        }
        
        .user-id {
          font-size: 12px;
          color: #94a3b8;
          font-family: 'Monaco', 'Menlo', monospace;
        }
        
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          text-transform: capitalize;
        }
        
        .status-badge.active {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }
        
        .status-badge.inactive {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
        }
        
        .role-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .role-badge.yes {
          background: rgba(59, 130, 246, 0.1);
          color: #2563eb;
        }
        
        .role-badge.admin {
          background: rgba(245, 158, 11, 0.1);
          color: #d97706;
        }
        
        .role-badge.no {
          background: rgba(148, 163, 184, 0.1);
          color: #64748b;
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .admin-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: rgba(245, 158, 11, 0.1);
          border-radius: 12px;
          color: #d97706;
          font-weight: 700;
          font-size: 13px;
        }
        
        .btn-action {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        
        .btn-action:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .btn-block {
          background: rgba(245, 158, 11, 0.1);
          color: #f59e0b;
        }
        
        .btn-block:hover:not(:disabled) {
          background: #f59e0b;
          color: white;
          transform: scale(1.1);
        }
        
        .btn-unblock {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }
        
        .btn-unblock:hover:not(:disabled) {
          background: #10b981;
          color: white;
          transform: scale(1.1);
        }
        
        .btn-delete {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .btn-delete:hover:not(:disabled) {
          background: #ef4444;
          color: white;
          transform: scale(1.1);
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .table-header-users, .table-row-users {
            grid-template-columns: 2fr 1fr 120px;
          }
          
          .td-role, .th-role {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .users-page {
            padding: 16px;
          }
          
          .page-title {
            font-size: 24px;
          }
          
          .title-icon-wrapper {
            width: 40px;
            height: 40px;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          
          .stat-card-modern {
            padding: 20px;
          }
          
          .stat-value-modern {
            font-size: 28px;
          }
          
          .table-header-users, .table-row-users {
            grid-template-columns: 2fr 120px;
          }
          
          .td-status, .th-status {
            display: none;
          }
          
          .user-avatar {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }
          
          .card-header-users {
            flex-direction: column;
            gap: 12px;
          }
          
          .badge-count-users {
            align-self: flex-start;
          }
        }
        
        @media (max-width: 480px) {
          .user-cell {
            gap: 12px;
          }
          
          .user-email {
            font-size: 14px;
          }
          
          .stat-icon-modern {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </div>
  )
}
