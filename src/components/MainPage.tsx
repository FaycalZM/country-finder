import CountriesContainer from "./CountriesContainer"
import FilterSection from "./FilterSection"


const MainPage = () => {
    return (
        <div className="bg-very-light-gray px-20 py-6">
            <FilterSection />
            <CountriesContainer />
        </div>
    )
}

export default MainPage