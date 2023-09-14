import { HiOutlineMoon } from 'react-icons/hi2'

const Header = () => {
    return (
        <header className="bg-white px-20 py-6 flex justify-between drop-shadow-md shadow-dark-blue-dm capitalize">
            <h1 className='text-2xl font-extrabold'>where in the world?</h1>
            <button className="flex items-center text-lg font-semibold gap-3">
                <HiOutlineMoon />
                <p className='capitalize'>dark mode</p>
            </button>
        </header>
    )
}

export default Header