import { createContext, useContext, useState } from 'react'
import { CountriesContextType, CountriesContextProviderProps } from '../types/Types';



const CountriesContext = createContext<CountriesContextType | null>(null);

export const useCountriesContext = () => {
    const context = useContext(CountriesContext);
    if (!context) {
        throw new Error("useCountriesContext must be used within a CountriesProvider")
    }
    return context;
}



const CountriesContextProvider = ({ children }: CountriesContextProviderProps) => {

    const [countries, setCountries] = useState<Array<any>>([]);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [fetchURL, setFetchURL] = useState<string>("https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags");
    const toggleDarkMode = () => {
        setIsDarkMode(prevState => !prevState);
    }
    return <CountriesContext.Provider value={{
        countries,
        isDarkMode,
        fetchURL,
        setCountries,
        toggleDarkMode,
        setFetchURL,
    }}>
        {children}
    </CountriesContext.Provider >
}


export default CountriesContextProvider;