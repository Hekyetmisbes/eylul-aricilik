import React, { useState } from "react";

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="accordion-container">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className={`accordion-item ${isOpen ? "open" : ""}`}>
            <button
              className="accordion-trigger"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              id={`accordion-btn-${item.id}`}
            >
              <span className="accordion-question">{item.question}</span>
              <span className="accordion-icon-wrapper" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="accordion-icon"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>
            <div
              id={`accordion-panel-${item.id}`}
              className="accordion-panel"
              role="region"
              aria-labelledby={`accordion-btn-${item.id}`}
              hidden={!isOpen}
            >
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}

      <style>{`
        .accordion-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
          max-width: 800px;
          margin-inline: auto;
        }

        .accordion-item {
          background-color: var(--color-white);
          border: 1px solid rgba(92, 58, 33, 0.08);
          border-radius: 14px;
          box-shadow: 0 4px 12px rgba(46, 27, 16, 0.03);
          overflow: hidden;
          transition: all 0.25s ease;
        }

        .accordion-item.open {
          border-color: rgba(245, 197, 66, 0.3);
          box-shadow: var(--shadow-card);
        }

        .accordion-trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 20px 24px;
          background: none;
          border: none;
          text-align: left;
          color: var(--color-brown-900);
          font-weight: 700;
          font-size: 1.05rem;
          font-family: inherit;
          cursor: pointer;
        }

        .accordion-trigger:hover {
          color: var(--color-honey-700);
        }

        .accordion-question {
          padding-right: 16px;
        }

        .accordion-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: var(--color-gray-100);
          color: var(--color-brown-700);
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .accordion-item.open .accordion-icon-wrapper {
          background-color: var(--color-honey-500);
          color: var(--color-black-soft);
        }

        .accordion-icon {
          transition: transform 0.25s ease;
        }

        .accordion-item.open .accordion-icon {
          transform: rotate(180deg);
        }

        .accordion-panel {
          transition: all 0.3s ease;
        }

        .accordion-content {
          padding: 0 24px 24px 24px;
          font-size: 0.95rem;
          color: var(--color-gray-700);
          line-height: 1.6;
        }

        .accordion-content p {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
};

export default Accordion;
