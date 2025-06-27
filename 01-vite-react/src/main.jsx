import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import First_component from './First_component.jsx'; // Import your component


createRoot(document.getElementById('root')).render(
  <>
    <First_component />
    <App />

  </>
)
