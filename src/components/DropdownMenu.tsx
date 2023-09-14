import { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { useCountriesContext } from '../context/CountriesContextProvider';

const regions = [
    'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
];

const DropdownMenu = () => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
    const { setFetchURL } = useCountriesContext();
    const toggleMenu = () => {
        setIsMenuOpened(prevState => !prevState);
    }
    return (
        <div className='relative tablet:w-fit w-1/2'>
            <button
                onClick={toggleMenu}
                className='flex items-center gap-4 bg-white dark:bg-dark-blue-dm p-3 w-full font-light rounded shadow'>
                <p>Filter by Region</p>
                {
                    isMenuOpened ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />
                }
            </button>
            {
                isMenuOpened
                    ? <div className='bg-white dark:bg-dark-blue-dm mt-1 rounded flex flex-col absolute w-full shadow z-10'>
                        {
                            regions.map((region, index) => {
                                return <p
                                    key={index}
                                    onClick={() => {
                                        setFetchURL(`https://restcountries.com/v3.1/region/${region}`);
                                        toggleMenu();
                                    }}
                                    className='px-3 py-2 cursor-pointer hover:text-very-dark-blue-lm hover:bg-very-light-gray transition'>{region}</p>
                            })
                        }

                    </div>
                    : null
            }

        </div>
    )
}

export default DropdownMenu