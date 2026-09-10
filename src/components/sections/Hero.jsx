import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { resumeData } from '../../data/resumeData';
import Button from '../ui/Button';
import styles from './Hero.module.css';

const Hero = () => {
  const { name, title, summary, linkedin, email } = resumeData.personal;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className={styles.hero}>
      <div className="container">
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.greeting}>
            <p>Hi, this is</p>
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.name}>
            {name}
          </motion.h1>

          <motion.h2 variants={itemVariants} className={styles.title}>
            {title}
          </motion.h2>

          <motion.p variants={itemVariants} className={styles.description}>
            {summary}
          </motion.p>

          <motion.div variants={itemVariants} className={styles.ctaGroup}>
            <Button href="#contact" size="large">
              Get In Touch
            </Button>
            <Button
              variant="secondary"
              size="large"
              href="/resume.pdf"
              download
            >
              <FiDownload />
              Download Resume
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.socialLinks}>
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
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  );
};

export default Hero;
