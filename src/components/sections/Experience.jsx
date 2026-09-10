import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';
import { resumeData } from '../../data/resumeData';
import Section from '../ui/Section';
import styles from './Experience.module.css';

const Experience = () => {
  const { experience } = resumeData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="A timeline of my professional journey"
    >
      <motion.div
        className={styles.timeline}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experience.map((job) => (
          <motion.div
            key={job.id}
            className={styles.timelineItem}
            variants={itemVariants}
          >
            <div className={styles.timelineDot} />
            <div className={styles.timelineContent}>
              <div className={styles.header}>
                <h3>{job.position}</h3>
                <div className={styles.company}>
                  <FiBriefcase />
                  <span>{job.company}</span>
                </div>
              </div>

              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <FiCalendar />
                  <span>{job.duration}</span>
                </div>
                <div className={styles.metaItem}>
                  <FiMapPin />
                  <span>{job.location}</span>
                </div>
              </div>

              <p className={styles.description}>{job.description}</p>

              <ul className={styles.achievements}>
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>

              <div className={styles.technologies}>
                {job.technologies.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Experience;
