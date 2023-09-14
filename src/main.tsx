import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CountriesContextProvider from './context/CountriesContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CountriesContextProvider>
    <Router>
      <App />
    </Router>
  </CountriesContextProvider>

)
