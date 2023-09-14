import CountriesContainer from "./CountriesContainer"
import FilterSection from "./FilterSection"


const MainPage = () => {
    return (
        <section className="px-20 py-6">
            <FilterSection />
            <CountriesContainer />
        </section>
    )
}

export default MainPage