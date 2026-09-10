import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';
import { resumeData } from '../../data/resumeData';
import Section from '../ui/Section';
import styles from './Education.module.css';

const Education = () => (
  <Section id="education" title="Education & Recognition" subtitle="Academic foundation and professional recognition">
    <div className={styles.grid}>
      <motion.div className={styles.card} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h3>{resumeData.education[0].degree}</h3><p className={styles.institution}>{resumeData.education[0].institution}</p>
        <p><FiCalendar /> {resumeData.education[0].duration}</p><p><FiMapPin /> {resumeData.education[0].location}</p><p><strong>Final CGPA:</strong> {resumeData.education[0].gpa}</p>
      </motion.div>
      <motion.div className={styles.card} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
        <h3>Recognition</h3><ul>{resumeData.awards.map((award) => <li key={award}><FiAward /> {award}</li>)}</ul>
      </motion.div>
    </div>
  </Section>
);
export default Education;