import DropdownMenu from "./DropdownMenu"
import SearchForm from "./SearchForm"


const FilterSection = () => {
    return (
        <section className="flex justify-between mt-4">
            <SearchForm />
            <DropdownMenu />
        </section>
    )
}

export default FilterSection