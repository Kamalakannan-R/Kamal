import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import { resumeData } from '../../data/resumeData';
import Section from '../ui/Section';
import styles from './Projects.module.css';

const Projects = () => {
  const { projects } = resumeData;
  return (
    <Section id="projects" title="Professional Work" subtitle="Selected case studies drawn from my professional experience">
      <motion.div className={styles.projectsGrid} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}>
        {projects.map((project) => (
          <motion.article key={project.id} className={styles.projectCard} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} whileHover={{ y: -8 }}>
            <div className={styles.cardHeader}><div className={styles.folderIcon}><FiBriefcase size={24} /></div></div>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.projectMeta}><span><strong>Role:</strong> {project.role}</span><span><strong>Period:</strong> {project.duration}</span></div>
            <ul className={styles.highlights}>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            <div className={styles.technologies}>{project.technologies.map((tech) => <span key={tech} className={styles.techTag}>{tech}</span>)}</div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;