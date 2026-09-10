import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

document.title = 'Kamalakannan R - Full Stack Developer';
document.querySelector('meta[name="description"]')?.setAttribute('content', 'Full Stack Developer specializing in C#, .NET, ASP.NET Core Web API, React.js, Vue.js, microservices, REST APIs, and AWS serverless solutions.');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)