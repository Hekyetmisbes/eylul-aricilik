import React, { useState } from "react";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  kvkkConsent: boolean;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  message?: string;
  kvkkConsent?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    subject: "Ürün Bilgisi",
    message: "",
    kvkkConsent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Ad Soyad alanı zorunludur.";
    } else if (formData.fullName.trim().split(" ").length < 2) {
      tempErrors.fullName = "Lütfen adınızı ve soyadınızı tam giriniz.";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Telefon numarası zorunludur.";
    } else if (!/^[0-9+() \-]{10,15}$/.test(formData.phone.replace(/\s+/g, ''))) {
      tempErrors.phone = "Lütfen geçerli bir telefon numarası giriniz.";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "E-posta adresi zorunludur.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Lütfen geçerli bir e-posta adresi giriniz.";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Mesaj alanı boş bırakılamaz.";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Lütfen kendinizi açıklayan en az 10 karakterlik bir mesaj yazınız.";
    }

    if (!formData.kvkkConsent) {
      tempErrors.kvkkConsent = "Devam etmek için KVKK şartlarını kabul etmelisiniz.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API submit for static-first layout (e.g. serverless worker post)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus("success");
      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        subject: "Ürün Bilgisi",
        message: "",
        kvkkConsent: false,
      });
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-card">
      {submitStatus === "success" && (
        <div className="form-success-alert" role="alert">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="success-icon">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <div>
            <h4>Talebiniz Başarıyla Alındı!</h4>
            <p>Bilgi talebiniz Eylül Arıcılık'a iletildi. En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz.</p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="form-error-alert" role="alert">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="error-icon">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <div>
            <h4>Hata Oluştu</h4>
            <p>Form gönderilirken teknik bir sorun yaşandı. Lütfen daha sonra tekrar deneyin veya doğrudan telefonla ulaşın.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="form-element">
        {/* Ad Soyad */}
        <div className={`form-group ${errors.fullName ? "has-error" : ""}`}>
          <label htmlFor="fullName" className="form-label">Ad Soyad *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="form-input"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Örn: Ahmet Yılmaz"
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "error-fullName" : undefined}
          />
          {errors.fullName && <span id="error-fullName" className="error-message">{errors.fullName}</span>}
        </div>

        <div className="form-row">
          {/* Telefon */}
          <div className={`form-group ${errors.phone ? "has-error" : ""}`}>
            <label htmlFor="phone" className="form-label">Telefon *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Örn: 0555 555 55 55"
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "error-phone" : undefined}
            />
            {errors.phone && <span id="error-phone" className="error-message">{errors.phone}</span>}
          </div>

          {/* E-posta */}
          <div className={`form-group ${errors.email ? "has-error" : ""}`}>
            <label htmlFor="email" className="form-label">E-posta Adresi *</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="Örn: ahmet@mail.com"
              disabled={isSubmitting}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "error-email" : undefined}
            />
            {errors.email && <span id="error-email" className="error-message">{errors.email}</span>}
          </div>
        </div>

        {/* Konu */}
        <div className="form-group">
          <label htmlFor="subject" className="form-label">İlgilendiğiniz Konu</label>
          <select
            id="subject"
            name="subject"
            className="form-select"
            value={formData.subject}
            onChange={handleChange}
            disabled={isSubmitting}
          >
            <option value="Ürün Bilgisi">Ürün Bilgisi Talebi</option>
            <option value="Apiterapi Bilgisi">Apiterapi Laboratuvar Bilgisi</option>
            <option value="Mağaza Bilgisi">Mağaza Bilgisi & Yol Tarifi</option>
            <option value="Genel Bilgi">Genel Konular</option>
          </select>
        </div>

        {/* Mesaj */}
        <div className={`form-group ${errors.message ? "has-error" : ""}`}>
          <label htmlFor="message" className="form-label">Mesajınız *</label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mesajınızı buraya yazınız..."
            disabled={isSubmitting}
            rows={5}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "error-message" : undefined}
          />
          {errors.message && <span id="error-message" className="error-message">{errors.message}</span>}
        </div>

        {/* KVKK / Privacy checkbox */}
        <div className={`form-group-checkbox ${errors.kvkkConsent ? "has-error" : ""}`}>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="kvkkConsent"
              className="form-checkbox"
              checked={formData.kvkkConsent}
              onChange={handleCheckboxChange}
              disabled={isSubmitting}
              aria-required="true"
            />
            <span className="checkbox-text">
              Eylül Arıcılık Aydınlatma Metni kapsamında kişisel verilerimin işlenmesini ve benimle iletişim kurulmasını kabul ediyorum.
            </span>
          </label>
          {errors.kvkkConsent && <span className="error-message block-error">{errors.kvkkConsent}</span>}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="form-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="loader-spinner-wrapper">
              <svg className="spinner-svg" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="spinner-bg"/>
                <path d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor"/>
              </svg>
              Gönderiliyor...
            </span>
          ) : "Talep Gönder"}
        </button>
      </form>

      <style>{`
        .contact-form-card {
          background-color: var(--color-white);
          border: 1px solid rgba(92, 58, 33, 0.08);
          border-radius: var(--radius-md);
          padding: 24px;
          box-shadow: var(--shadow-card);
        }

        .form-element {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 640px) {
          .form-row {
            grid-template-columns: 1fr 1fr;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-brown-700);
        }

        .form-input, .form-textarea, .form-select {
          min-height: 48px;
          border: 1px solid var(--color-gray-300);
          border-radius: 10px;
          background: var(--color-white);
          padding: 12px 14px;
          font-family: inherit;
          font-size: 0.95rem;
          color: var(--color-charcoal);
          width: 100%;
          transition: all 0.2s ease;
        }

        .form-textarea {
          resize: vertical;
        }

        .form-input:focus, .form-textarea:focus, .form-select:focus {
          outline: 3px solid rgba(245, 197, 66, 0.25);
          border-color: var(--color-honey-600);
        }

        /* Error States */
        .has-error .form-input,
        .has-error .form-textarea,
        .has-error .form-checkbox {
          border-color: var(--color-error);
          background-color: rgba(184, 69, 61, 0.02);
        }

        .has-error .form-input:focus,
        .has-error .form-textarea:focus {
          outline: 3px solid rgba(184, 69, 61, 0.15);
        }

        .error-message {
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--color-error);
          margin-top: 2px;
        }

        .block-error {
          display: block;
          margin-top: 6px;
        }

        /* Checkbox Group */
        .form-group-checkbox {
          display: flex;
          flex-direction: column;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          cursor: pointer;
        }

        .form-checkbox {
          width: 18px;
          height: 18px;
          border: 1px solid var(--color-gray-300);
          border-radius: 4px;
          margin-top: 3px;
          accent-color: var(--color-honey-500);
          flex-shrink: 0;
        }

        .checkbox-text {
          font-size: 0.85rem;
          color: var(--color-gray-700);
          line-height: 1.4;
          user-select: none;
        }

        /* Submit Button */
        .form-submit-btn {
          font-family: inherit;
          font-size: 1rem;
          font-weight: 700;
          height: 48px;
          background-color: var(--color-honey-500);
          color: var(--color-black-soft);
          border: none;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(245, 197, 66, 0.2);
          transition: all 0.2s ease;
          width: 100%;
        }

        .form-submit-btn:hover:not(:disabled) {
          background-color: var(--color-honey-600);
          box-shadow: 0 6px 16px rgba(245, 197, 66, 0.3);
          transform: translateY(-1px);
        }

        .form-submit-btn:active:not(:disabled) {
          transform: translateY(1px);
        }

        .form-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Success/Error Alerts */
        .form-success-alert, .form-error-alert {
          display: flex;
          gap: 16px;
          padding: 16px 20px;
          border-radius: 10px;
          margin-bottom: 24px;
        }

        .form-success-alert {
          background-color: rgba(78, 122, 67, 0.08);
          border: 1px solid rgba(78, 122, 67, 0.2);
          color: var(--color-success);
        }

        .form-success-alert h4, .form-error-alert h4 {
          margin-bottom: 4px;
          font-size: 1rem;
          font-weight: 700;
          color: inherit;
        }

        .form-success-alert p, .form-error-alert p {
          font-size: 0.85rem;
          color: var(--color-gray-700);
          margin-bottom: 0;
          line-height: 1.4;
        }

        .form-error-alert {
          background-color: rgba(184, 69, 61, 0.08);
          border: 1px solid rgba(184, 69, 61, 0.2);
          color: var(--color-error);
        }

        .success-icon, .error-icon {
          flex-shrink: 0;
        }

        /* Loader */
        .loader-spinner-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .spinner-svg {
          width: 18px;
          height: 18px;
          animation: rotateSpinner 0.8s linear infinite;
        }

        .spinner-bg {
          opacity: 0.25;
        }

        @keyframes rotateSpinner {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
export default ContactForm;
