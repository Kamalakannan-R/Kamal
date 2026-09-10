import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { resumeData } from '../../data/resumeData';
import Section from '../ui/Section';
import styles from './Contact.module.css';

const Contact = () => {
  const { email, linkedin, phone, location } = resumeData.personal;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated form submission
    // In production, integrate with EmailJS or similar service
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Feel free to reach out for opportunities or just a friendly hello"
    >
      <div className={styles.contactContainer}>
        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Let's Connect</h3>
          <p className={styles.intro}>
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology and software development.
          </p>

          <div className={styles.contactMethods}>
            <a href={`mailto:${email}`} className={styles.contactMethod}>
              <div className={styles.icon}>
                <FiMail size={24} />
              </div>
              <div className={styles.details}>
                <span className={styles.label}>Email</span>
                <span className={styles.value}>{email}</span>
              </div>
                        </a>

            <a href={`tel:${phone.replace(/\s/g, '')}`} className={styles.contactMethod}>
              <div className={styles.icon}>
                <FiPhone size={24} />
              </div>
              <div className={styles.details}>
                <span className={styles.label}>Phone</span>
                <span className={styles.value}>{phone}</span>
              </div>
            </a>

            <a
              href={`https://${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactMethod}
            >
              <div className={styles.icon}>
                <FiLinkedin size={24} />
              </div>
              <div className={styles.details}>
                <span className={styles.label}>LinkedIn</span>
                <span className={styles.value}>Connect with me</span>
              </div>
            </a>
            <div className={styles.contactMethod}>
              <div className={styles.icon}>
                <FiMapPin size={24} />
              </div>
              <div className={styles.details}>
                <span className={styles.label}>Location</span>
                <span className={styles.value}>{location}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.contactForm}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <motion.div
                className={styles.successMessage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className={styles.errorMessage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Failed to send message. Please try again or email directly.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
