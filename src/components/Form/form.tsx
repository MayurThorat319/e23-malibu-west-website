import { useState } from "react";
import axios from "axios";
import "./form.css";

interface EnquiryDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryDialog({ isOpen, onClose }: EnquiryDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    optIn: true,
  });
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const { name, value } = target;
    const checked = target instanceof HTMLInputElement ? target.checked : false;
    const type = target.type;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const respData = {
      name: formData.name,
      phoneNumber: `${formData.countryCode.replace("+", "")}${formData.phone}`,
      email: formData.email,
    };

    try {
      const res = await axios.post(
        "https://api.evhomes.tech/add-contact-malibu-west",
        respData,
      );
      if (res.data != null) {
        setSubmitted(true);
        setCountdown(10);
        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              handleClose();
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      countryCode: "+91",
      phone: "",
      email: "",
      optIn: true,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="aspire-enquiry-wrapper">
      <div className="dialog-overlay" onClick={handleClose}>
        {submitted ? (
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose} aria-label="Close dialog">
              ×
            </button>
            <div style={{ textAlign: "center", padding: "48px 28px" }}>
              <div style={{ fontSize: "50px", color: "#7be3b8", marginBottom: "20px" }}>✓</div>
              <h2 className="dialog-title" style={{ textAlign: "center" }}>Thank You!</h2>
              <p className="dialog-subtitle" style={{ textAlign: "center" }}>
                Your enquiry has been submitted successfully. Our team will contact you soon.
              </p>
              <p style={{ fontSize: "14px", color: "#7e9b8b", marginTop: "16px" }}>
                This window will close in <b style={{ color: "#7be3b8" }}>{countdown} seconds</b>...
              </p>
              <button className="submit-btn" style={{ marginTop: "24px" }} onClick={handleClose}>
                CLOSE
              </button>
            </div>
          </div>
        ) : (
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose} aria-label="Close dialog">
              ×
            </button>

            <div className="dialog-header">
              <h2 className="dialog-title">Step Into Refined Living</h2>
              <p className="dialog-subtitle">
                Share your details to explore a world of thoughtfully crafted residences, designed for those who expect nothing less than exceptional.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="dialog-form">
              <div className="form-group">
                <label className="form-label">
                  <span className="required">*</span>Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                  autoComplete="one-time-code"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    <span className="required">*</span>Mobile Number
                  </label>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="form-select"
                      style={{ width: "auto", minWidth: "120px" }}
                    >
                      <option value="+91">🇮🇳 +91 (India)</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      autoComplete="one-time-code"
                      placeholder="Enter your phone"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <span className="required">*</span>Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your email address"
                    autoComplete="one-time-code"
                    required
                  />
                </div>
              </div>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="optIn"
                  name="optIn"
                  checked={formData.optIn}
                  onChange={handleInputChange}
                  className="checkbox-input"
                />
                <label htmlFor="optIn" className="checkbox-label">
                  I would like to receive curated updates, private previews, and exclusive offers via WhatsApp, Email, SMS, or Call.
                </label>
              </div>

              <button type="submit" className="submit-btn">
                Begin Your Next Chapter →
              </button>
            </form>

            <div className="dialog-footer">
              <p className="footer-text">
                Your Private Consultation Awaits: <span className="phone-number">+91 8291668777</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
