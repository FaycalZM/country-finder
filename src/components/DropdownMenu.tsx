import { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

const regions = [
    'Africa', 'America', 'Asia', 'Europe', 'Oceania'
];

const DropdownMenu = () => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
    const toggleMenu = () => {
        setIsMenuOpened(prevState => !prevState);
    }
    return (
        <div className='text-very-dark-blue-dm relative'>
            <button
                onClick={toggleMenu}
                className='flex items-center gap-4 bg-white p-3 font-light rounded'>
                <p>Filter by Region</p>
                {
                    isMenuOpened ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />
                }
            </button>
            {
                isMenuOpened
                    ? <div className='bg-white mt-1 rounded p-3 flex flex-col gap-1 absolute w-full z-10'>
                        {
                            regions.map((region, index) => {
                                return <p key={index} className='cursor-pointer hover:text-very-dark-blue-lm'>{region}</p>
                            })
                        }

                    </div>
                    : null
            }

        </div>
    )
}

export default DropdownMenu