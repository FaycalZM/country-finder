import './App.css'
import Header from './components/Header'
import MainPage from './components/MainPage'
import { Routes, Route } from 'react-router'
import NotFound from './components/NotFound'
import CountryDetails from './components/CountryDetails'

function App() {


  return (
    <main className='font-nunito-sans bg-very-light-gray text-very-dark-blue-lm min-h-screen'>
      <Header />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/home' element={<MainPage />} />
        <Route path=':country_name' element={<CountryDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </main>
  )
}

export default App
