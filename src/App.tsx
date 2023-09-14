import './App.css'
import Header from './components/Header'
import MainPage from './components/MainPage'
import { Routes, Route } from 'react-router'
import NotFound from './components/NotFound'
import CountryDetails from './components/CountryDetails'
import { useCountriesContext } from './context/CountriesContextProvider'

function App() {
  const { isDarkMode } = useCountriesContext();

  return (
    <main className={`${isDarkMode ? 'dark' : null}`}>
      <section className='font-nunito-sans bg-very-light-gray dark:bg-very-dark-blue-dm text-very-dark-blue-lm dark:text-white min-h-screen'>
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path='/home' element={<MainPage />} />
          <Route path=':country_name' element={<CountryDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </section>
    </main>
  )
}

export default App
