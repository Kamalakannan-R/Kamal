import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { resumeData } from '../../data/resumeData';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { name, linkedin, email } = resumeData.personal;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.socialLinks}>
            <motion.a
              href={`https://${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </motion.a>
            <motion.a
              href={`mailto:${email}`}
              className={styles.socialLink}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <FiMail size={24} />
            </motion.a>
          </div>

          <div className={styles.copyright}>
            <p>
              © {currentYear} {name}. All rights reserved.
            </p>
          </div>

          <motion.button
            className={styles.scrollTop}
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp size={24} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
