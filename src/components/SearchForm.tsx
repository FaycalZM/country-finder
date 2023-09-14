import { BiSearchAlt2 } from 'react-icons/bi'

const SearchForm = () => {
    return (
        <form className='w-[35%] h-fit flex items-center gap-4 text-dark-gray bg-white px-6 py-3 rounded'>
            <BiSearchAlt2 />
            <input
                className='bg-transparent text-base w-full'
                type="text" placeholder='Search for a country...' />
        </form>
    )
}

export default SearchForm