import { motion } from 'framer-motion';
import { resumeData } from '../../data/resumeData';
import Section from '../ui/Section';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    { title: 'Languages', skills: resumeData.skills.languages },
    { title: 'Frameworks', skills: resumeData.skills.frameworks },
    { title: 'Databases', skills: resumeData.skills.databases },
    { title: 'Cloud & Devops', skills: resumeData.skills.cloudDevOps },
    { title: 'Dev Tools', skills: resumeData.skills.devTools },
    { title: 'AI Tools', skills: resumeData.skills.aiTools },
  ];
  return (
    <Section id="skills" title="Technical Skills" subtitle="Technologies and tools I work with">
      <motion.div className={styles.skillsGrid} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}>
        {skillCategories.map((category, categoryIndex) => (
          <motion.div key={category.title} className={styles.skillCategory} variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skillsList}>{category.skills.map((skill) => (
              <div key={skill.name} className={styles.skillItem}>
                <div className={styles.skillInfo}><span className={styles.skillName}>{skill.name}</span><span className={styles.skillLevel}>{skill.level}%</span></div>
                <div className={styles.progressBar}><motion.div className={styles.progressFill} initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: categoryIndex * 0.1, ease: 'easeOut' }} /></div>
              </div>
            ))}</div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
export default Skills;