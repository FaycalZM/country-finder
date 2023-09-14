import { HiOutlineMoon } from 'react-icons/hi2'
import { BsSun } from 'react-icons/bs'
import { useCountriesContext } from '../context/CountriesContextProvider'

const Header = () => {
    const { toggleDarkMode, isDarkMode } = useCountriesContext();
    console.log(isDarkMode)
    return (
        <header className="bg-white dark:bg-dark-blue-dm tablet:px-20 px-6 py-6 flex justify-between drop-shadow-md shadow-dark-blue-dm capitalize">
            <h1 className='tablet:text-2xl text-lg font-extrabold'>where in the world?</h1>
            <button
                onClick={() => {
                    toggleDarkMode();
                }}
                className="flex items-center tablet:text-lg text-base font-semibold gap-3">
                {
                    isDarkMode ? <BsSun /> : <HiOutlineMoon />
                }
                <p className='capitalize'>{isDarkMode ? 'light' : 'dark'} mode</p>
            </button>
        </header>
    )
}

export default Header