import React, { useState, useEffect, useRef } from "react";
import { products } from "../../data/products";
import { categories } from "../../data/categories";
import ProductCard from "./ProductCard";
import ProductInfoModal from "./ProductInfoModal";
import type { Product } from "../../data/products";

export const ProductFilters: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const isDraggingRef = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDown.current = true;
    el.classList.add("active-drag");
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
    isDraggingRef.current = false;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    const el = scrollRef.current;
    if (el) el.classList.remove("active-drag");
  };

  const handleMouseUp = () => {
    isDown.current = false;
    const el = scrollRef.current;
    if (el) el.classList.remove("active-drag");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const distance = Math.abs(x - startX.current);
    if (distance > 5) {
      isDraggingRef.current = true;
      e.preventDefault();
      const walk = (x - startX.current) * 1.5;
      el.scrollLeft = scrollLeft.current - walk;
    }
  };

  const handleCategoryClick = (catId: string, e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      e.preventDefault();
      return;
    }
    setSelectedCategory(catId);
  };

  // Initialize filters from URL parameters on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const catParam = params.get("category");
    const searchFocus = params.get("search");

    if (catParam) {
      const foundCat = categories.find(c => c.slug === catParam);
      if (foundCat) {
        setSelectedCategory(foundCat.id);
      }
    }

    if (searchFocus === "true") {
      // Focus on search input
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    }
  }, []);

  // Filter products based on search query and category
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get category name for a product
  const getCategoryName = (catId: string) => {
    return categories.find(c => c.id === catId)?.name || "Diğer";
  };

  const clearSearch = () => {
    setSearchQuery("");
    searchInputRef.current?.focus();
  };

  return (
    <div className="catalog-workspace">
      {/* Search and Category Filter Section */}
      <div className="filter-controls-bar">
        {/* Search Input */}
        <div className="search-input-wrapper">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-brown-500)" strokeWidth="2.5" className="search-icon">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={searchInputRef}
            type="text"
            className="search-input"
            placeholder="Ürün adı veya açıklama yazın..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Katalogda ara"
          />
          {searchQuery && (
            <button type="button" className="search-clear-btn" onClick={clearSearch} aria-label="Aramayı Temizle">
              &times;
            </button>
          )}
        </div>

        {/* Categories Bar */}
        <div 
          ref={scrollRef}
          className="categories-filter-scroll" 
          role="tablist" 
          aria-label="Ürün Kategorileri"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <button
            role="tab"
            aria-selected={selectedCategory === "all"}
            type="button"
            className={`category-pill ${selectedCategory === "all" ? "active" : ""}`}
            onClick={(e) => handleCategoryClick("all", e)}
          >
            Tüm Ürünler
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={selectedCategory === cat.id}
              type="button"
              className={`category-pill ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={(e) => handleCategoryClick(cat.id, e)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Results */}
      <div className="catalog-results-section">
        {filteredProducts.length > 0 ? (
          <div className="grid-catalog">
            {filteredProducts.map((product) => (
              <div key={product.id} className="grid-catalog-item">
                <ProductCard
                  product={product}
                  onInfoClick={setSelectedProduct}
                  categoryName={getCategoryName(product.category)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="catalog-empty-state" role="alert">
            <svg width="64" height="64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="empty-icon">
              <circle cx="50" cy="50" r="35" stroke="var(--color-gray-300)" strokeWidth="4" strokeDasharray="6 6"/>
              <path d="M50 35V65" stroke="var(--color-gray-300)" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="50" cy="50" r="10" fill="rgba(138, 137, 130, 0.1)"/>
            </svg>
            <h3>Sonuç Bulunamadı</h3>
            <p>Aradığınız kriterlere uygun ürün bulunamadı. Lütfen kelimelerinizi kontrol edin ya da farklı bir kategori seçin.</p>
            <button 
              type="button" 
              className="empty-clear-btn"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
            >
              Filtreleri Sıfırla
            </button>
          </div>
        )}
      </div>

      {/* Modal Dialog */}
      {selectedProduct && (
        <ProductInfoModal
          product={selectedProduct}
          categoryName={getCategoryName(selectedProduct.category)}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <style>{`
        .catalog-workspace {
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
        }

        .filter-controls-bar {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Search input bar styles */
        .search-input-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
          margin-inline: auto;
        }

        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          min-height: 48px;
          border: 1px solid var(--color-gray-300);
          border-radius: 10px;
          background: var(--color-white);
          padding: 12px 14px 12px 42px;
          font-family: inherit;
          font-size: 0.95rem;
          color: var(--color-charcoal);
        }

        .search-input:focus {
          outline: 3px solid rgba(245, 197, 66, 0.25);
          border-color: var(--color-honey-600);
        }

        .search-clear-btn {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 1.5rem;
          line-height: 1;
          color: var(--color-gray-500);
          cursor: pointer;
          padding: 4px;
        }

        .search-clear-btn:hover {
          color: var(--color-error);
        }

        /* Category scroller styles */
        .categories-filter-scroll {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 8px;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          cursor: grab;
          user-select: none;
          -webkit-user-select: none;
        }

        .categories-filter-scroll.active-drag {
          cursor: grabbing;
          scroll-behavior: auto;
        }

        /* Hide scrollbars but preserve functionality */
        .categories-filter-scroll::-webkit-scrollbar {
          height: 6px;
        }

        .categories-filter-scroll::-webkit-scrollbar-track {
          background: rgba(92, 58, 33, 0.03);
          border-radius: var(--radius-pill);
        }

        .categories-filter-scroll::-webkit-scrollbar-thumb {
          background: rgba(92, 58, 33, 0.1);
          border-radius: var(--radius-pill);
        }

        .categories-filter-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(245, 197, 66, 0.4);
        }

        .category-pill {
          white-space: nowrap;
          padding: 8px 18px;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: var(--radius-pill);
          border: 1px solid rgba(92, 58, 33, 0.1);
          background-color: var(--color-white);
          color: var(--color-brown-700);
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s ease;
          user-select: none;
          -webkit-user-select: none;
        }

        .category-pill:hover {
          border-color: var(--color-honey-500);
          color: var(--color-brown-900);
          background-color: rgba(245, 197, 66, 0.05);
        }

        .category-pill.active {
          background-color: var(--color-honey-500);
          border-color: var(--color-honey-500);
          color: var(--color-black-soft);
          box-shadow: 0 4px 10px rgba(245, 197, 66, 0.15);
        }

        /* Grid */
        .grid-catalog {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-4);
        }

        @media (min-width: 640px) {
          .grid-catalog {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-5);
          }
        }

        @media (min-width: 1024px) {
          .grid-catalog {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1280px) {
          .grid-catalog {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Empty state styling */
        .catalog-empty-state {
          text-align: center;
          padding: 60px 20px;
          max-width: 500px;
          margin-inline: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: var(--color-white);
          border: 1px dashed var(--color-gray-300);
          border-radius: var(--radius-md);
        }

        .empty-icon {
          color: var(--color-gray-300);
          margin-bottom: var(--space-3);
        }

        .catalog-empty-state h3 {
          color: var(--color-brown-900);
          font-size: 1.25rem;
          margin-bottom: var(--space-2);
        }

        .catalog-empty-state p {
          font-size: 0.9rem;
          color: var(--color-gray-500);
          margin-bottom: var(--space-4);
          line-height: 1.5;
        }

        .empty-clear-btn {
          font-family: inherit;
          font-size: 0.875rem;
          font-weight: 600;
          background-color: var(--color-honey-500);
          color: var(--color-black-soft);
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .empty-clear-btn:hover {
          background-color: var(--color-honey-600);
        }
      `}</style>
    </div>
  );
};
export default ProductFilters;
