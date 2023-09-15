import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { FaArrowLeftLong } from 'react-icons/fa6'

const CountryDetails = () => {
    const navigate = useNavigate();
    const { country_name } = useParams();
    const [country, setCountry] = useState<any>();
    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const url = `https://restcountries.com/v3.1/name/${country_name}?fullText=true&fields=name,capital,currencies,tld,region,subregion,languages,population,flags,borders`;
    useEffect(
        () => {
            if (!url) return;
            fetch(url)
                .then(resposne => resposne.json())
                .then(result => setCountry(result[0]))
                .then(() => setIsLoading(false))
                .catch(setError)
        }, []
    )
    let languages: string[] = [];
    if (country) {
        languages = Object.values(country.languages) as Array<string>;
    }
    if (isLoading) {
        return <h1 className='text-5xl text-center mt-16'>LOADING...</h1>
    }
    if (error) {
        return <h1 className='text-5xl text-center mt-16'>error fetching data : {error} </h1>
    }

    return (
        <section className='tablet:px-20 px-6 py-6 mt-8 '>
            <button
                onClick={() => { navigate(-1) }}
                className='flex gap-3 items-center bg-white dark:bg-dark-blue-dm px-8 py-2 rounded shadow'>
                <FaArrowLeftLong />
                <p>Back</p>
            </button>
            <div className='laptop:mt-20 mt-12 flex laptop:flex-row flex-col tablet:items-center justify-center laptop:gap-24 gap-12'>
                <img
                    className='laptop:w-[40%] w-full laptop:h-[45vh] tablet:h-[35vh] h-[25vh] rounded-md'
                    src={country.flags.png}
                    alt={`${country_name} flag`} />
                <div className='px-4 py-3'>
                    <p className='text-3xl font-extrabold mb-8'>{country.name.common}</p>
                    <div className='flex tablet:flex-row flex-col tablet:gap-24 gap-12'>
                        <div className='flex flex-col gap-2'>
                            <p><span className='font-extrabold'>Native Name : </span> {country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}</p>
                            <p><span className='font-extrabold'>Population : </span>{country.population} </p>
                            <p><span className='font-extrabold'>Region : </span>{country.region} </p>
                            <p><span className='font-extrabold'>Sub Region : </span>{country.subregion} </p>
                            <p><span className='font-extrabold'>Capital : </span>{country.capital ? country.capital[0] : null} </p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p><span className='font-extrabold'>Top Level Domain : </span>{country.tld} </p>
                            <p><span className='font-extrabold'>Currencies : </span>{Object.keys(country.currencies)[0]}</p>
                            <p><span className='font-extrabold'>Languages : </span>
                                {
                                    languages
                                        ? languages.map(
                                            (language, index) => {
                                                return <span key={index}>{language}{index == languages.length - 1 ? null : ','} </span>
                                            }
                                        )
                                        : null
                                }
                            </p>
                        </div>
                    </div>
                    <div className='mt-12 flex tablet:flex-row flex-col tablet:items-center justify-center'>
                        <p className='font-extrabold mr-2'>Border Countries : </p>
                        <div className='flex flex-wrap tablet:mt-0 mt-3 gap-y-3'>
                            {
                                country.borders
                                    ? country.borders.map((border: string, index: number) => {
                                        return <p
                                            className='w-fit shadow bg-white dark:bg-dark-blue-dm px-4 py-1 tablet:mr-2 mr-4 '
                                            key={index}>{border}</p>
                                    })
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default CountryDetails