import React, { useState, useEffect } from "react";

export const CookieNotice: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check local storage for consent
    const consent = localStorage.getItem("eylul_cookies_accepted");
    if (!consent) {
      // Show notice after a small delay for better user experience
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("eylul_cookies_accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-notice" role="alert" aria-live="polite">
      <div className="cookie-container">
        <div className="cookie-text">
          <p>
            Size daha iyi bir kullanıcı deneyimi sunabilmek amacıyla web sitemizde çerezler kullanmaktayız. 
            Detaylı bilgi için çerez politikamızı inceleyebilirsiniz.
          </p>
        </div>
        <div className="cookie-actions">
          <button 
            type="button" 
            className="cookie-btn cookie-decline"
            onClick={() => setIsVisible(false)}
          >
            Kapat
          </button>
          <button 
            type="button" 
            className="cookie-btn cookie-accept"
            onClick={acceptCookies}
          >
            Kabul Et
          </button>
        </div>
      </div>

      <style>{`
        .cookie-notice {
          position: fixed;
          bottom: 24px;
          left: 24px;
          right: 24px;
          background: rgba(27, 27, 27, 0.95);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(245, 197, 66, 0.25);
          color: var(--color-white);
          padding: 16px 24px;
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(46, 27, 16, 0.25);
          z-index: 99;
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          max-width: 800px;
          margin-inline: auto;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cookie-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
          justify-content: space-between;
        }

        @media (min-width: 768px) {
          .cookie-container {
            flex-direction: row;
            gap: 24px;
          }
        }

        .cookie-text p {
          font-size: 0.9rem;
          color: var(--color-gray-300);
          line-height: 1.5;
          margin-bottom: 0;
          text-align: center;
        }

        @media (min-width: 768px) {
          .cookie-text p {
            text-align: left;
          }
        }

        .cookie-actions {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
        }

        .cookie-btn {
          font-family: inherit;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 8px;
          cursor: pointer;
          min-height: 38px;
          transition: all 0.2s ease;
        }

        .cookie-decline {
          background-color: transparent;
          color: var(--color-gray-300);
          border: 1px solid var(--color-gray-500);
        }

        .cookie-decline:hover {
          color: var(--color-white);
          border-color: var(--color-white);
          background-color: rgba(255, 255, 255, 0.05);
        }

        .cookie-accept {
          background-color: var(--color-honey-500);
          color: var(--color-black-soft);
          border: 1px solid var(--color-honey-500);
        }

        .cookie-accept:hover {
          background-color: var(--color-honey-600);
          border-color: var(--color-honey-600);
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
};

export default CookieNotice;
