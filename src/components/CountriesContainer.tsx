import { useEffect, useState } from 'react';
import { useCountriesContext } from '../context/CountriesContextProvider';

import CountryCard from './CountryCard'



const CountriesContainer = () => {
    const { fetchURL } = useCountriesContext();
    const { countries, setCountries } = useCountriesContext();
    const [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(
        () => {
            if (!fetchURL) return;
            fetch(fetchURL)
                .then(resposne => resposne.json())
                .then(result => setCountries(result))
                .then(() => setIsLoading(false))
                .catch(setError)
        }, [fetchURL]
    );


    if (isLoading) {
        return <h1 className='text-5xl text-center mt-16'>LOADING...</h1>
    }
    if (error) {
        return <h1 className='text-5xl text-center mt-16'>error fetching data : {error} </h1>
    }
    return (
        <section className="mt-8 py-2 grid laptop:grid-cols-4 tablet:grid-cols-2 grid-cols-1 laptop:gap-x-24 gap-x-16 tablet:gap-y-16 gap-y-10">
            {
                countries.length
                    ? countries.map(
                        (country, index) => {
                            return <CountryCard key={index} {...country} />
                        }
                    )
                    : <p>no items here</p>
            }
        </section>
    )
}

export default CountriesContainer