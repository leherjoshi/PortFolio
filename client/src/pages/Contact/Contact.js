import React, { useState } from "react";
import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setStatus({
      type: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill all fields.",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:8080/api/v1/portfolio/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I will get back to you soon.",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.log("Contact form error:", error);

      setStatus({
        type: "error",
        message: "Server error. Please make sure backend is running.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-tag">Get In Touch</span>
          <h1>Contact Me</h1>
          <p>
            Have a project, opportunity, or collaboration idea? Feel free to
            reach out. I would love to connect with you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-image">
              <img src="/contact-me.webp" alt="Contact Me" />
            </div>

            <div className="contact-info">
              <div className="contact-info-card">
                <span>
                  <FaEnvelope />
                </span>
                <div>
                  <h3>Email</h3>
                  <p>leherjoshi9@gmail.com</p>
                </div>
              </div>

              <div className="contact-info-card">
                <span>
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <h3>Location</h3>
                  <p>Jaipur, India</p>
                </div>
              </div>

              <div className="contact-info-card">
                <span>
                  <FaPhoneAlt />
                </span>
                <div>
                  <h3>Availability</h3>
                  <p>Open to internships and SDE roles</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/leherjoshi"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/lahar-joshi-120411302"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a href="mailto:leherjoshi9@gmail.com" title="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.type === "success" ? (
                  <FaCheckCircle />
                ) : (
                  <FaExclamationCircle />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <div className="input-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Your Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-btn" disabled={loading}>
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;