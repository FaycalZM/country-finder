export type CountryProps = {
    name: any;
    flags: any;
    capital: Array<string>;
    region: string;
    population: number;
}

export type CountriesContextProviderProps = {
    children: React.ReactNode;
}
export type CountriesContextType = {
    countries: Array<any>;
    isDarkMode: boolean;
    fetchURL: string;
    setCountries: React.Dispatch<React.SetStateAction<any[]>>;
    toggleDarkMode: () => void;
    setFetchURL: React.Dispatch<React.SetStateAction<string>>;
}