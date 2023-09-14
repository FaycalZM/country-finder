import { CountryProps } from "../types/Types";
import { useNavigate } from 'react-router';

const CountryCard = (
    { name, flags, capital, region, population }: CountryProps
) => {
    const navigate = useNavigate();
    return (
        <article
            onClick={() => {
                navigate(`/${name.common}`);
            }}
            className="bg-white rounded-md shadow-lg cursor-pointer">
            <img
                className="h-[22.5vh] w-full rounded-t-md"
                src={flags.png}
                alt={`${name.common} flag`} />
            <div className="p-6">
                <p className="font-extrabold text-xl pb-4">{name.common}</p>
                <p><span className="font-semibold">Population</span> : {population} </p>
                <p><span className="font-semibold">Region</span> : {region} </p>
                <p><span className="font-semibold">Capital</span> : {capital ? capital[0] : null}</p>
            </div>
        </article>
    )
}

export default CountryCard