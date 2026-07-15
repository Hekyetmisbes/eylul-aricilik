import React, { useEffect, useRef } from "react";
import type { Product } from "../../data/products";
import { siteConfig } from "../../config/site";

interface ProductInfoModalProps {
  product: Product | null;
  categoryName: string;
  onClose: () => void;
}

export const ProductInfoModal: React.FC<ProductInfoModalProps> = ({ product, categoryName, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (product) {
      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden";
      
      // Escape key listener
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);

      // Focus trapping
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex="0"]'
      );
      if (focusableElements && focusableElements.length > 0) {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleFocusTrap = (e: KeyboardEvent) => {
          if (e.key === "Tab") {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
              }
            }
          }
        };

        window.addEventListener("keydown", handleFocusTrap);
        firstElement.focus();

        return () => {
          window.removeEventListener("keydown", handleFocusTrap);
          window.removeEventListener("keydown", handleKeyDown);
          document.body.style.overflow = "";
        };
      }
    }
  }, [product, onClose]);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(`Merhaba, ${product.name} hakkında detaylı bilgi alabilir miyim?`);
  const whatsappLink = `${siteConfig.whatsappUrl}?text=${whatsappMessage}`;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()} 
        ref={modalRef}
      >
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-category">{categoryName}</span>
            <h2 id="modal-title" className="modal-title">{product.name}</h2>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Pencereyi Kapat">
            &times;
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-layout">
            {/* Left/Top: Image and quick info */}
            <div className="modal-aside">
              <div className="modal-image-wrapper">
                <img 
                  src={product.image} 
                  alt={product.imageAlt} 
                  className="modal-image"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="modal-image-placeholder">
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 15L80 32.5V67.5L50 85L20 67.5V32.5L50 15Z" stroke="var(--color-honey-500)" strokeWidth="4"/>
                    <circle cx="50" cy="50" r="10" fill="var(--color-honey-500)"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right/Bottom: Full Details */}
            <div className="modal-main">
              <div className="modal-section">
                <h3 className="modal-sec-title">Ürün Açıklaması</h3>
                <p className="modal-desc">{product.description}</p>
              </div>

              {product.features && product.features.length > 0 && (
                <div className="modal-section">
                  <h3 className="modal-sec-title">Öne Çıkan Özellikler</h3>
                  <ul className="modal-features-list">
                    {product.features.map((feat, idx) => (
                      <li key={idx}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-honey-600)" strokeWidth="3" className="feat-check-icon">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.storage && (
                <div className="modal-section secondary-bg">
                  <h4 className="modal-sec-title-small">Saklama Koşulları</h4>
                  <p className="modal-meta-text">{product.storage}</p>
                </div>
              )}

              {product.warning && (
                <div className="modal-section warning-bg">
                  <h4 className="modal-sec-title-small warning-color">Önemli Uyarı ve Hassasiyetler</h4>
                  <p className="modal-meta-text">{product.warning}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-contact-promo">
            <span>Sipariş ve detaylı bilgi için: <strong>{siteConfig.phoneFormatted}</strong></span>
          </div>
          <div className="modal-footer-actions">
            <button type="button" className="modal-btn-close" onClick={onClose}>
              Kapat
            </button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="modal-btn-wa">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="btn-icon">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              WhatsApp'tan Bilgi Al
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(46, 27, 16, 0.6);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 16px;
          animation: fadeIn 0.25s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-container {
          background-color: var(--color-white);
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          border-radius: var(--radius-lg);
          box-shadow: 0 24px 64px rgba(46, 27, 16, 0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          border: 1px solid rgba(92, 58, 33, 0.1);
        }

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .modal-header {
          padding: 24px;
          border-bottom: 1px solid var(--color-gray-100);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-shrink: 0;
        }

        .modal-title-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .modal-category {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-brown-500);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .modal-title {
          margin-bottom: 0;
          color: var(--color-brown-900);
          font-size: var(--font-size-2xl);
        }

        .modal-close-btn {
          font-size: 2.25rem;
          line-height: 1;
          border: none;
          background: none;
          color: var(--color-gray-500);
          cursor: pointer;
          padding: 0 8px;
          transition: color 0.2s ease;
        }

        .modal-close-btn:hover {
          color: var(--color-error);
        }

        .modal-body {
          padding: 24px;
          overflow-y: auto;
          flex-grow: 1;
        }

        .modal-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 768px) {
          .modal-layout {
            grid-template-columns: 1fr 1.8fr;
          }
        }

        .modal-aside {
          display: flex;
          flex-direction: column;
        }

        .modal-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          border-radius: var(--radius-md);
          background-color: var(--color-cream);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 2;
        }

        .modal-image-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .modal-main {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .modal-section {
          display: flex;
          flex-direction: column;
        }

        .modal-sec-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-brown-700);
          margin-bottom: var(--space-2);
        }

        .modal-sec-title-small {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-brown-900);
          margin-bottom: 6px;
        }

        .modal-desc {
          font-size: 0.95rem;
          color: var(--color-gray-700);
          line-height: 1.6;
          margin-bottom: 0;
        }

        .modal-features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .modal-features-list li {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.9rem;
          color: var(--color-gray-700);
        }

        .feat-check-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .secondary-bg {
          background-color: var(--color-off-white);
          border: 1px solid var(--color-gray-100);
          padding: 12px 16px;
          border-radius: 10px;
        }

        .warning-bg {
          background-color: rgba(184, 69, 61, 0.05);
          border: 1.5px dashed rgba(184, 69, 61, 0.2);
          padding: 12px 16px;
          border-radius: 10px;
        }

        .warning-color {
          color: var(--color-error);
        }

        .modal-meta-text {
          font-size: 0.85rem;
          color: var(--color-gray-700);
          line-height: 1.5;
          margin-bottom: 0;
        }

        .modal-footer {
          padding: 20px 24px;
          border-top: 1px solid var(--color-gray-100);
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
          justify-content: space-between;
          background-color: var(--color-off-white);
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .modal-footer {
            flex-direction: row;
          }
        }

        .modal-contact-promo {
          font-size: 0.9rem;
          color: var(--color-brown-700);
        }

        .modal-contact-promo strong {
          color: var(--color-brown-900);
        }

        .modal-footer-actions {
          display: flex;
          gap: 12px;
          width: 100%;
          justify-content: flex-end;
        }

        @media (min-width: 768px) {
          .modal-footer-actions {
            width: auto;
          }
        }

        .modal-btn-close {
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          background-color: transparent;
          color: var(--color-gray-700);
          border: 1px solid var(--color-gray-300);
          min-height: 44px;
        }

        .modal-btn-close:hover {
          background-color: var(--color-gray-100);
          color: var(--color-black-soft);
        }

        .modal-btn-wa {
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 10px 22px;
          border-radius: 8px;
          cursor: pointer;
          background-color: #25d366;
          color: var(--color-white);
          border: 1px solid #25d366;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          min-height: 44px;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.15);
          justify-content: center;
          flex-grow: 1;
        }

        @media (min-width: 768px) {
          .modal-btn-wa {
            flex-grow: 0;
          }
        }

        .modal-btn-wa:hover {
          background-color: #20ba5a;
          border-color: #20ba5a;
          box-shadow: 0 6px 16px rgba(37, 211, 102, 0.25);
          transform: translateY(-1px);
        }

        .btn-icon {
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
};
export default ProductInfoModal;
