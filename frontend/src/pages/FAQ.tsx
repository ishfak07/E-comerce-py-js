import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Search, 
  Book, 
  ExternalLink, 
  HelpCircle, 
  Filter, 
  Star, 
  ArrowUp, 
  Hash, 
  MessageCircle 
} from 'lucide-react';
import '../faq-fallback.css';

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

interface FAQSection {
  title: string;
  icon: string;
  items: FAQItem[];
}

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [expandAll, setExpandAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [popularQuestions] = useState<string[]>([
    'How do I create an account?',
    'What payment methods are available?',
    'How do I view my order history?',
    'How do I add items to my cart?'
  ]);

  // Track scroll position for floating button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqData: FAQSection[] = [
    {
      title: 'General Questions',
      icon: '❓',
      items: [
        {
          question: 'What is this platform?',
          answer: 'This is a modern e-commerce platform built with FastAPI backend and React frontend, offering a complete shopping experience with product catalog, secure checkout, order tracking, and administrative management tools.'
        },
        {
          question: 'Do I need to create an account to shop?',
          answer: 'Yes, you must register and login to access shopping features including the product catalog, cart, checkout, and order history. This ensures a secure and personalized shopping experience.'
        },
        {
          question: 'What currency is used?',
          answer: 'All prices are displayed in Sri Lankan Rupees (LKR). The platform is optimized for Sri Lankan customers with local payment methods and shipping.'
        }
      ]
    },
    {
      title: 'Account & Authentication',
      icon: '🔐',
      items: [
        {
          question: 'How do I create an account?',
          answer: 'Click on "Register" in the navigation menu, fill in your details including name, email, and password, then submit the form. You\'ll be automatically logged in after registration.'
        },
        {
          question: 'I forgot my password. What should I do?',
          answer: (
            <>
              Currently, password reset functionality is not implemented. Please contact support through the{' '}
              <Link to="/contact" className="text-[#6D74FF] hover:text-[#9b87f5] underline">
                contact page
              </Link>{' '}
              for assistance.
            </>
          )
        },
        {
          question: 'How do I logout?',
          answer: 'Click on your user avatar in the top navigation and select "Logout" from the dropdown menu.'
        },
        {
          question: 'Can I update my account information?',
          answer: 'Yes, after logging in, access your profile settings to update your name, email, and other account details.'
        }
      ]
    },
    {
      title: 'Shopping & Products',
      icon: '🛍️',
      items: [
        {
          question: 'How do I browse products?',
          answer: 'After logging in, click "Shop" in the navigation menu. You\'ll see all available products with images, prices, and descriptions. Click on any product to view detailed information.'
        },
        {
          question: 'Can I see multiple images for products?',
          answer: 'Yes! Products can have up to 5 images. In the product detail view, you can browse through all available images to see the product from different angles.'
        },
        {
          question: 'How do I add items to my cart?',
          answer: 'On the product detail page, select the quantity you want and click "Add to Cart". The item will be added to your shopping cart, which you can access from the navigation menu.'
        },
        {
          question: 'Can I modify items in my cart?',
          answer: 'Yes, visit your cart page to update quantities or remove items. Changes are saved automatically.'
        },
        {
          question: 'What if a product is out of stock?',
          answer: 'Out of stock products will be clearly marked. You can check back later or contact support to inquire about restocking dates.'
        }
      ]
    },
    {
      title: 'Checkout & Payments',
      icon: '💳',
      items: [
        {
          question: 'What payment methods are available?',
          answer: (
            <>
              We accept two payment methods:
              <br />• <strong>Stripe:</strong> Credit/debit cards (Visa, Mastercard, American Express)
              <br />• <strong>Bank Transfer:</strong> Direct bank transfer to our account
            </>
          )
        },
        {
          question: 'How does bank transfer payment work?',
          answer: 'During checkout, select "Bank Transfer" as payment method. You\'ll receive payment details including account number, account holder name, and reference number. Transfer the exact amount to our bank account and use the reference number. Your order status will be updated once payment is verified.'
        },
        {
          question: 'What information do I need to provide during checkout?',
          answer: (
            <>
              You\'ll need to provide:
              <br />• Customer name and contact information
              <br />• Shipping address (pre-filled for Sri Lanka)
              <br />• Payment method selection and details
            </>
          )
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Yes, we use industry-standard security measures. Stripe payments are processed through Stripe\'s secure servers. Bank transfer details are displayed securely without storing sensitive payment information on our servers.'
        },
        {
          question: 'Can I use international credit cards?',
          answer: 'Yes, Stripe supports international credit and debit cards. However, currency conversion fees may apply from your card issuer.'
        }
      ]
    },
    {
      title: 'Orders & Tracking',
      icon: '📦',
      items: [
        {
          question: 'How do I view my order history?',
          answer: 'After logging in, click "Orders" in the navigation menu. You\'ll see all your orders with status, date, and total amount. Click on any order to view detailed information.'
        },
        {
          question: 'What do the order statuses mean?',
          answer: (
            <>
              Order statuses include:
              <br />• <strong>Pending Verification:</strong> Order placed, payment being verified
              <br />• <strong>Processing:</strong> Payment verified, order being prepared
              <br />• <strong>Shipped:</strong> Order has been dispatched
              <br />• <strong>Delivered:</strong> Order completed successfully
              <br />• <strong>Cancelled:</strong> Order was cancelled
            </>
          )
        },
        {
          question: 'How do I download my invoice?',
          answer: 'Once your payment is verified, an "Invoice" button will appear in your order details. Click it to download a professional PDF invoice with all order details, pricing, and payment information.'
        },
        {
          question: 'Can I cancel my order?',
          answer: 'Orders can only be cancelled before payment verification. Please contact support immediately if you need to cancel an order after payment.'
        },
        {
          question: 'What is your shipping policy?',
          answer: 'We ship within Sri Lanka. Shipping times vary based on location. You\'ll receive tracking information once your order is shipped.'
        }
      ]
    },
    {
      title: 'Admin Panel',
      icon: '👑',
      items: [
        {
          question: 'How do I access the admin panel?',
          answer: 'Admin access requires special permissions. If you have admin privileges, you\'ll see an "Admin" button in the navigation after logging in. Click it to access the admin dashboard.'
        },
        {
          question: 'What can I do in the admin panel?',
          answer: (
            <>
              Admin users can:
              <br />• Manage products (add, edit, delete, upload images)
              <br />• View and manage user accounts
              <br />• Update order statuses and track orders
              <br />• View dashboard metrics and analytics
            </>
          )
        },
        {
          question: 'How do I add new products?',
          answer: 'In the admin panel, go to "Products" section, click "Add Product", fill in the details including name, price, stock, and upload 1-5 product images. The product will appear in the shop immediately.'
        },
        {
          question: 'Can I bulk upload products?',
          answer: 'Currently, products must be added individually through the admin panel. Bulk upload functionality may be added in future updates.'
        }
      ]
    },
    {
      title: 'Technical Issues',
      icon: '⚙️',
      items: [
        {
          question: 'The website is not loading properly.',
          answer: 'Try clearing your browser cache and cookies, or try a different browser. If the issue persists, check if both backend and frontend servers are running.'
        },
        {
          question: 'I can\'t login even with correct credentials.',
          answer: 'Clear your browser\'s localStorage (press F12 → Application → Local Storage → Clear All), then try logging in again. Make sure you\'re using the correct email and password format.'
        },
        {
          question: 'Images are not displaying.',
          answer: 'Product images are served from the backend server. Make sure the backend is running and the static files are properly configured. Try refreshing the page.'
        },
        {
          question: 'Payment is not processing.',
          answer: 'For Stripe payments, ensure your card details are correct and you have sufficient funds. For bank transfers, double-check the account details and reference number. Contact support if issues persist.'
        },
        {
          question: 'The site is slow or unresponsive.',
          answer: 'Check your internet connection first. If the problem persists, try clearing your cache or using a different browser. Contact support if issues continue.'
        }
      ]
    }
  ];

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const key = `${sectionIndex}-${itemIndex}`;
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedItems(newExpanded);
  };

  const toggleExpandAll = () => {
    if (expandAll) {
      setExpandedItems(new Set());
    } else {
      const allKeys = new Set<string>();
      faqData.forEach((section, sIndex) => {
        section.items.forEach((_, iIndex) => {
          allKeys.add(`${sIndex}-${iIndex}`);
        });
      });
      setExpandedItems(allKeys);
    }
    setExpandAll(!expandAll);
  };

  const filteredFAQData = useMemo(() => {
    let filtered = faqData;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(section =>
        section.title.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered
        .map(section => ({
          ...section,
          items: section.items.filter(
            item =>
              item.question.toLowerCase().includes(query) ||
              (typeof item.answer === 'string' && item.answer.toLowerCase().includes(query))
          )
        }))
        .filter(section => section.items.length > 0);
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionTitle: string) => {
    const element = document.getElementById(`section-${sectionTitle.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="faq-page">
      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="faq-scroll-top"
          aria-label="Scroll to top"
        >
          <ArrowUp />
        </button>
      )}

      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <div className="faq-header-content">
            <div className="faq-title-section">
              <div className="faq-icon-wrapper">
                <HelpCircle className="faq-icon" />
                <div className="faq-ping"></div>
              </div>
              <div>
                <h1 className="faq-title">
                  FAQ Center
                </h1>
                <p className="faq-subtitle">
                  Your comprehensive guide to our e-commerce platform. Find instant answers or
                  <Link to="/contact"> contact support</Link>.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="faq-stats">
              <div className="faq-stat-card">
                <div className="faq-stat-value">
                  {faqData.reduce((acc, section) => acc + section.items.length, 0)}
                </div>
                <div className="faq-stat-label">Questions</div>
              </div>
              <div className="faq-stat-card">
                <div className="faq-stat-value">{faqData.length}</div>
                <div className="faq-stat-label">Categories</div>
              </div>
              <div className="faq-stat-card">
                <div className="faq-stat-value">24h</div>
                <div className="faq-stat-label">Response</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="faq-search-wrapper">
          <div className="faq-search-container">
            <Search className="faq-search-icon" />
            <input
              type="text"
              placeholder="Search questions, answers, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="faq-search-clear"
              >
                ✕
              </button>
            )}
          </div>
          <div className="faq-search-footer">
            <p className="faq-search-count">
                {filteredFAQData.reduce((acc, section) => acc + section.items.length, 0)} questions available
              </p>
              <button
                onClick={toggleExpandAll}
                className="faq-expand-btn"
              >
                <Hash />
                {expandAll ? 'Collapse All' : 'Expand All'}
              </button>
            </div>
        </div>

        {/* Category Filters */}
        <div className="faq-filters">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`faq-filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          >
            <Filter />
            All Categories
            </button>
            {faqData.map((section) => (
              <button
                key={section.title}
                onClick={() => setSelectedCategory(section.title)}
                className={`faq-filter-btn ${selectedCategory === section.title ? 'active' : ''}`}
              >
                <span>{section.icon}</span>
                {section.title}
              </button>
            ))}
        </div>

        {/* Popular Questions & Quick Navigation */}
        <div className="faq-feature-grid">
          {/* Popular Questions */}
          <div className="faq-feature-card">
            <div className="faq-feature-header">
              <Star className="faq-feature-icon" />
              <h3 className="faq-feature-title">Popular Questions</h3>
            </div>
            <div className="faq-feature-list">
              {popularQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(question)}
                  className="faq-feature-item"
                >
                  <span className="faq-feature-number">#{index + 1}</span>
                  <span className="faq-feature-text">{question}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="faq-feature-card">
            <div className="faq-feature-header">
              <MessageCircle className="faq-feature-icon" />
              <h3 className="faq-feature-title">Quick Navigation</h3>
            </div>
            <div className="faq-quick-nav">
              {faqData.map((section) => (
                <button
                  key={section.title}
                  onClick={() => scrollToSection(section.title)}
                  className="faq-nav-item"
                >
                  <div className="faq-nav-item-header">
                    <span className="faq-nav-emoji">{section.icon}</span>
                    <span className="faq-nav-count">
                      {section.items.length} Q&A
                    </span>
                  </div>
                  <span className="faq-nav-title">
                    {section.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="faq-sections">
          {filteredFAQData.length > 0 ? (
            filteredFAQData.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                id={`section-${section.title.replace(/\s+/g, '-').toLowerCase()}`}
                className="faq-section"
              >
                <div className="faq-section-header">
                  <div className="faq-section-icon-wrapper">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="faq-section-title">{section.title}</h2>
                    <p className="faq-section-count">{section.items.length} questions</p>
                  </div>
                </div>

                <div className="faq-items">
                  {section.items.map((item, itemIndex) => {
                    const key = `${sectionIndex}-${itemIndex}`;
                    const isExpanded = expandedItems.has(key);

                    return (
                      <div
                        key={itemIndex}
                        className="faq-item"
                      >
                        <button
                          onClick={() => toggleItem(sectionIndex, itemIndex)}
                          className="faq-question-btn"
                        >
                          <h3 className="faq-question-text">
                            {item.question}
                          </h3>
                          <div className={`faq-chevron-wrapper ${isExpanded ? 'expanded' : ''}`}>
                            <ChevronDown className="faq-chevron" />
                          </div>
                        </button>

                        <div className={`faq-answer-wrapper ${isExpanded ? 'expanded' : ''}`}>
                          <div className="faq-answer">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className="faq-no-results">
              <Search className="faq-no-results-icon" />
              <h3 className="faq-no-results-title">No results found</h3>
              <p className="faq-no-results-text">
                Try adjusting your search terms or{' '}
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="faq-no-results-btn"
                >
                  clear filters
                </button>
                .
              </p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="faq-contact-section">
          <h2 className="faq-contact-title">Still Need Help?</h2>
          <p className="faq-contact-text">
            If you couldn't find the answer to your question, our support team is here to assist you.
            We typically respond within 24 hours with detailed solutions.
          </p>
          <div className="faq-contact-buttons">
            <Link to="/contact" className="faq-btn-primary">
              <MessageCircle />
              Contact Support
            </Link>
            <Link to="/about" className="faq-btn-secondary">
              <HelpCircle />
              About Us
            </Link>
          </div>
        </div>

        {/* Documentation Links */}
        <div className="faq-docs-section">
          <div className="faq-docs-header">
            <div className="faq-docs-icon-wrapper">
              <Book className="faq-docs-icon" />
            </div>
            <div>
              <h3 className="faq-docs-title">Technical Documentation</h3>
              <p className="faq-docs-subtitle">
                Comprehensive guides for developers covering implementation details and system architecture.
              </p>
            </div>
          </div>

          <div className="faq-docs-grid">
            {[
              { name: '🚀 Quick Start Guide', url: '/docs/QUICK_START.md', desc: 'Get started in minutes' },
              { name: '🔐 Authentication Guide', url: '/docs/AUTHENTICATION_IMPLEMENTATION.md', desc: 'User management & security' },
              { name: '📦 Order Status System', url: '/docs/ORDER_STATUS_TECHNICAL_DOCS.md', desc: 'Order lifecycle management' },
              { name: '📄 Invoice Feature', url: '/docs/INVOICE_FEATURE_COMPLETE.md', desc: 'PDF generation & billing' },
              { name: '📸 Multiple Images Guide', url: '/docs/MULTIPLE_IMAGES_FEATURE.md', desc: 'Product image handling' },
              { name: '💰 Currency Configuration', url: '/docs/CURRENCY_CHANGE.md', desc: 'Multi-currency support' },
              { name: '👑 Admin Panel Fixes', url: '/docs/ADMIN_PANEL_FIXES.md', desc: 'Admin interface updates' },
              { name: '🏦 Bank Transfer Payments', url: '/docs/BANK_TRANSFER_UPGRADE.md', desc: 'Payment processing' },
              { name: '🖼️ Image Upload System', url: '/docs/IMAGE_UPLOAD_FIX.md', desc: 'File upload & storage' }
            ].map((doc, index) => (
              <a
                key={index}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="faq-doc-card"
              >
                <div className="faq-doc-card-header">
                  <span className="faq-doc-emoji">{doc.name.split(' ')[0]}</span>
                  <ExternalLink className="faq-doc-external-icon" />
                </div>
                <div className="faq-doc-name">
                  {doc.name.substring(doc.name.indexOf(' ') + 1)}
                </div>
                <div className="faq-doc-desc">
                  {doc.desc}
                </div>
              </a>
            ))}
          </div>

          <div className="faq-footer-stats">
            <div className="faq-footer-stat">
              <div className="faq-footer-stat-value">9</div>
              <div className="faq-footer-stat-label">Documentation</div>
              <div className="faq-footer-stat-desc">Technical guides</div>
            </div>
            <div className="faq-footer-stat">
              <div className="faq-footer-stat-value">7</div>
              <div className="faq-footer-stat-label">Categories</div>
              <div className="faq-footer-stat-desc">Organized topics</div>
            </div>
            <div className="faq-footer-stat">
              <div className="faq-footer-stat-value">{faqData.reduce((acc, section) => acc + section.items.length, 0)}</div>
              <div className="faq-footer-stat-label">Q&A Total</div>
              <div className="faq-footer-stat-desc">Common questions</div>
            </div>
            <div className="faq-footer-stat">
              <div className="faq-footer-stat-value">24/7</div>
              <div className="faq-footer-stat-label">Support</div>
              <div className="faq-footer-stat-desc">Always available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
