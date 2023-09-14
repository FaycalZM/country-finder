import CountriesContainer from "./CountriesContainer"
import FilterSection from "./FilterSection"


const MainPage = () => {
    return (
        <section className="tablet:px-20 px-6 py-6">
            <FilterSection />
            <CountriesContainer />
        </section>
    )
}

export default MainPage