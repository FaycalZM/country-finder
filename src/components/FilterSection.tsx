import DropdownMenu from "./DropdownMenu"
import SearchForm from "./SearchForm"


const FilterSection = () => {
    return (
        <section className="flex tablet:flex-row flex-col tablet:justify-between tablet:gap-0 gap-8 mt-4">
            <SearchForm />
            <DropdownMenu />
        </section>
    )
}

export default FilterSection