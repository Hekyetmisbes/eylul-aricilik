import React from "react";
import type { Product } from "../../data/products";
import { siteConfig } from "../../config/site";

interface ProductCardProps {
  product: Product;
  onInfoClick: (product: Product) => void;
  categoryName: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onInfoClick, categoryName }) => {
  const whatsappMessage = encodeURIComponent(`Merhaba, ${product.name} ürününüz hakkında bilgi almak istiyorum.`);
  const whatsappLink = `${siteConfig.whatsappUrl}?text=${whatsappMessage}`;

  return (
    <article id={product.id} className="product-card">
      <div className="product-image-container">
        {/* Fallback pattern background if image is not loaded */}
        <div className="product-image-placeholder">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15L80 32.5V67.5L50 85L20 67.5V32.5L50 15Z" stroke="var(--color-honey-500)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M50 30V70" stroke="var(--color-honey-500)" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="50" cy="50" r="12" fill="rgba(245, 197, 66, 0.2)" stroke="var(--color-honey-500)" strokeWidth="2"/>
          </svg>
          <span className="placeholder-text">{product.name}</span>
        </div>
        {/* We use a standard image tag with fallback to placeholder */}
        <img 
          src={product.image} 
          alt={product.imageAlt} 
          className="product-image"
          onError={(e) => {
            // Hide the broken img element and show placeholder
            e.currentTarget.style.display = 'none';
          }}
          loading="lazy"
        />
        <div className="product-category-badge">{categoryName}</div>
      </div>
      
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-short-desc">{product.shortDescription}</p>
        
        {product.warning && (
          <div className="product-warning-alert">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="warn-icon">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            Alerji Uyarısı Var
          </div>
        )}

        <div className="product-actions">
          <button 
            type="button" 
            className="prod-btn btn-info"
            onClick={() => onInfoClick(product)}
            aria-label={`${product.name} detaylarını gör`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="btn-icon-svg">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            Bilgi Al
          </button>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="prod-btn btn-wa"
            aria-label={`${product.name} için WhatsApp'tan sor`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="btn-icon-svg">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            WhatsApp'tan Sor
          </a>
        </div>
      </div>

      <style>{`
        .product-card {
          background-color: var(--color-white);
          border: 1px solid rgba(92, 58, 33, 0.08);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          container-type: inline-size;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card-hover);
          border-color: rgba(245, 197, 66, 0.2);
        }

        .product-image-container {
          position: relative;
          height: 200px;
          width: 100%;
          background-color: var(--color-cream);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-image-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
          background: linear-gradient(135deg, var(--color-cream) 0%, rgba(245, 197, 66, 0.1) 100%);
        }

        .placeholder-text {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-brown-700);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 8px;
        }

        .product-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 2;
          transition: transform 0.5s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.03);
        }

        .product-category-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background-color: rgba(46, 27, 16, 0.85);
          color: var(--color-white);
          padding: 4px 10px;
          font-size: 0.75rem;
          font-weight: 700;
          border-radius: var(--radius-pill);
          z-index: 3;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .product-content {
          padding: var(--space-4);
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .product-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-brown-900);
          margin-bottom: var(--space-2);
          line-height: 1.3;
        }

        .product-short-desc {
          font-size: 0.9rem;
          color: var(--color-gray-700);
          line-height: 1.5;
          margin-bottom: var(--space-4);
          flex-grow: 1;
        }

        .product-warning-alert {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-warning);
          background-color: rgba(198, 123, 25, 0.08);
          padding: 6px 12px;
          border-radius: 8px;
          margin-bottom: var(--space-4);
          width: fit-content;
        }

        .warn-icon {
          flex-shrink: 0;
        }

        .product-actions {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
          margin-top: auto;
        }

        @container (min-width: 320px) {
          .product-actions {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
        }

        .prod-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          height: 40px;
          border-radius: 8px;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .btn-info {
          background-color: transparent;
          color: var(--color-brown-700);
          border: 1px solid var(--color-brown-500);
        }

        .btn-info:hover {
          background-color: rgba(139, 94, 52, 0.05);
          color: var(--color-brown-900);
          border-color: var(--color-brown-700);
        }

        .btn-wa {
          background-color: #25d366;
          color: var(--color-white);
          border: 1px solid #25d366;
        }

        .btn-wa:hover {
          background-color: #20ba5a;
          border-color: #20ba5a;
          box-shadow: 0 4px 10px rgba(37, 211, 102, 0.2);
          transform: translateY(-1px);
        }

        .btn-icon-svg {
          flex-shrink: 0;
        }
      `}</style>
    </article>
  );
};
export default ProductCard;
