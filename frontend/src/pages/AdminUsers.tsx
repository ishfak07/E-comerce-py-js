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
      items.map((u) => ({
        ...u,
        is_active: u.is_active ?? true,
        is_staff: u.is_staff ?? false,
        is_superuser: u.is_superuser ?? false,
      })),
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
            <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" style={{ marginRight: 12 }}>
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
            User Management
          </h1>
          <p className="page-subtitle">Manage user accounts and permissions</p>
        </div>
        <div className="page-header-stats">
          <div className="stat-card">
            <div className="stat-value">{normalized.length}</div>
            <div className="stat-label">Total Users</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{normalized.filter(u => u.is_active).length}</div>
            <div className="stat-label">Active</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{normalized.filter(u => u.is_superuser).length}</div>
            <div className="stat-label">Admins</div>
          </div>
        </div>
      </div>

      {error && (
        <div className="alert-error">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
          </svg>
          {error}
        </div>
      )}

      {/* Users List */}
      <div className="card-modern">
        <div className="card-header">
          <h2 className="card-title">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ marginRight: 8 }}>
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
            </svg>
            All Users
          </h2>
          <span className="badge-count">{normalized.length} total</span>
        </div>

        {loading ? (
          <div className="loading-state">
            <svg className="spinner" width="48" height="48" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.25"/>
              <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" opacity="0.75"/>
            </svg>
            <p>Loading users...</p>
          </div>
        ) : normalized.length === 0 ? (
          <div className="empty-state-large">
            <svg width="64" height="64" viewBox="0 0 20 20" fill="currentColor" opacity="0.2">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
            <h3>No Users Yet</h3>
            <p>No registered users in the system</p>
          </div>
        ) : (
          <div className="users-table">
            <div className="table-header-users">
              <div className="th-email">Email</div>
              <div className="th-status">Active</div>
              <div className="th-role">Staff</div>
              <div className="th-role">Superuser</div>
              <div className="th-actions-users">Actions</div>
            </div>
            
            {normalized.map((u) => (
              <div key={u.id} className="table-row-users">
                <div className="td-email">
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
                      <div className="user-id">ID: {u.id}</div>
                    </div>
                  </div>
                </div>
                <div className="td-status">
                  <span className={`status-pill ${u.is_active ? 'active' : 'inactive'}`}>
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
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
                        </svg>
                        Blocked
                      </>
                    )}
                  </span>
                </div>
                <div className="td-role">
                  <span className={`role-badge ${u.is_staff ? 'yes' : 'no'}`}>
                    {u.is_staff ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="td-role">
                  <span className={`role-badge ${u.is_superuser ? 'yes' : 'no'}`}>
                    {u.is_superuser ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="td-actions-users">
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
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        /* Page Layout */
        .users-page {
          max-width: 100%;
        }
        
        .page-header {
          margin-bottom: 32px;
        }
        
        .page-header-content {
          margin-bottom: 20px;
        }
        
        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 8px 0;
          display: flex;
          align-items: center;
        }
        
        .page-subtitle {
          font-size: 14px;
          color: #718096;
          margin: 0;
        }
        
        .page-header-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 16px;
        }
        
        .stat-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
        }
        
        .stat-value {
          font-size: 32px;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }
        
        .stat-label {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }
        
        .card-modern {
          background: white;
          border-radius: 16px;
          padding: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }
        
        .card-header {
          padding: 24px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a202c;
          margin: 0;
          display: flex;
          align-items: center;
        }
        
        .badge-count {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 6px 14px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
        }
        
        .loading-state {
          text-align: center;
          padding: 60px 20px;
          color: #a0aec0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        
        .loading-state p {
          margin: 0;
          font-size: 14px;
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .empty-state-large {
          text-align: center;
          padding: 60px 20px;
          color: #a0aec0;
        }
        
        .empty-state-large h3 {
          color: #4a5568;
          margin: 16px 0 8px 0;
          font-size: 20px;
        }
        
        .empty-state-large p {
          margin: 0;
          color: #a0aec0;
          font-size: 14px;
        }
        
        .alert-error {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 2px solid rgba(239, 68, 68, 0.2);
          border-radius: 12px;
          color: #ef4444;
          margin-bottom: 24px;
        }
        
        /* Users Table */
        .users-table {
          display: flex;
          flex-direction: column;
        }
        
        .table-header-users {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 140px;
          gap: 16px;
          padding: 16px 24px;
          background: #f7fafc;
          font-weight: 600;
          font-size: 13px;
          color: #4a5568;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .table-row-users {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 140px;
          gap: 16px;
          padding: 16px 24px;
          border-bottom: 1px solid #e2e8f0;
          align-items: center;
          transition: all 0.2s;
        }
        
        .table-row-users:hover {
          background: #f7fafc;
        }
        
        .td-email, .td-status, .td-role, .td-actions-users {
          display: flex;
          align-items: center;
        }
        
        .user-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 16px;
          overflow: hidden;
        }
        .user-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
        
        .user-info {
          display: flex;
          flex-direction: column;
        }
        
        .user-email {
          font-weight: 600;
          color: #2d3748;
          font-size: 14px;
        }
        
        .user-id {
          font-size: 12px;
          color: #a0aec0;
        }
        
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
        }
        
        .status-pill.active {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }
        
        .status-pill.inactive {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .role-badge {
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .role-badge.yes {
          background: rgba(59, 130, 246, 0.1);
          color: #2563eb;
        }
        
        .role-badge.no {
          background: rgba(156, 163, 175, 0.1);
          color: #6b7280;
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .btn-action {
          width: 36px;
          height: 36px;
          border-radius: 8px;
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
          background: rgba(251, 191, 36, 0.1);
          color: #d97706;
        }
        
        .btn-block:hover:not(:disabled) {
          background: #d97706;
          color: white;
          transform: scale(1.05);
        }
        
        .btn-unblock {
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
        }
        
        .btn-unblock:hover:not(:disabled) {
          background: #059669;
          color: white;
          transform: scale(1.05);
        }
        
        .btn-delete {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .btn-delete:hover:not(:disabled) {
          background: #ef4444;
          color: white;
          transform: scale(1.05);
        }
        
        @media (max-width: 900px) {
          .table-header-users, .table-row-users {
            grid-template-columns: 2fr 1fr 120px;
          }
          .td-role, .th-role {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
