import { useRef } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useCountriesContext } from '../context/CountriesContextProvider';

const SearchForm = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { setFetchURL } = useCountriesContext();
    return (
        <form className='w-[35%] h-fit flex items-center gap-4 text-dark-gray dark:text-very-light-gray bg-white dark:bg-dark-blue-dm px-6 py-3 rounded shadow'>
            <BiSearchAlt2 />
            <input
                ref={inputRef}
                onChange={() => {
                    let searchName = inputRef.current?.value;
                    let searchURL = searchName
                        ? `https://restcountries.com/v3.1/name/${searchName}?fields=name,capital,currencies,tld,region,subregion,languages,population,flags`
                        : 'https://restcountries.com/v3.1/all?fields=name,capital,currencies,tld,region,subregion,languages,population,flags';
                    setFetchURL(searchURL);
                }}
                className='bg-transparent text-base w-full'
                type="text" placeholder='Search for a country...' />
        </form>
    )
}

export default SearchForm