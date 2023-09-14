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
        <section className='bg-very-light-gray px-20 py-6 mt-8 text-very-dark-blue-lm'>
            <button
                onClick={() => { navigate(-1) }}
                className='flex gap-3 items-center bg-white px-8 py-2 rounded shadow'>
                <FaArrowLeftLong />
                <p className='text-very-dark-blue-lm'>Back</p>
            </button>
            <div className='mt-20 flex items-center justify-center gap-24'>
                <img
                    className='w-[40%] h-[45vh] '
                    src={country.flags.png}
                    alt={`${country_name} flag`} />
                <div className='px-4 py-3'>
                    <p className='text-3xl font-extrabold mb-8'>{country.name.common}</p>
                    <div className='flex gap-24'>
                        <div className='flex flex-col gap-2'>
                            <p><span className='font-semibold'>Native Name : </span> {country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}</p>
                            <p><span className='font-semibold'>Population : </span>{country.population} </p>
                            <p><span className='font-semibold'>Region : </span>{country.region} </p>
                            <p><span className='font-semibold'>Sub Region : </span>{country.subregion} </p>
                            <p><span className='font-semibold'>Capital : </span>{country.capital ? country.capital[0] : null} </p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p><span className='font-semibold'>Top Level Domain : </span>{country.tld} </p>
                            <p><span className='font-semibold'>Currencies : </span>{Object.keys(country.currencies)[0]}</p>
                            <p><span className='font-semibold'>Languages : </span>
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
                    <p className='mt-12'><span className='font-semibold mr-2'>Border Countries : </span>
                        {
                            country.borders
                                ? country.borders.map((border: string, index: number) => {
                                    return <span
                                        className='shadow bg-white px-4 py-1 mr-2'
                                        key={index}>{border}</span>
                                })
                                : null
                        }
                    </p>
                </div>
            </div>

        </section >
    )
}

export default CountryDetails