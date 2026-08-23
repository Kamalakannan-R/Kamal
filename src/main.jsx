import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Update document title
document.title = 'Purusothkumar S - Data Engineer';

// Update meta description
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Data Engineer with 3+ years of experience designing scalable batch and real-time data pipelines, CDC workflows, and cloud-based lakehouse architectures. Skilled in Kafka, Flink, Python, SQL, Airflow, Databricks, and Snowflake.';
document.head.appendChild(metaDescription);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
