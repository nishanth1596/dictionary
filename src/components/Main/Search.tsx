import searchIcon from "../../assets/images/icon-search.svg";

function Search() {
  return (
    <section className="relative mx-6 mt-6">
      <input
        type="text"
        placeholder="Keyboard"
        className="bg-Gray-50 text-Black-800 placeholder:text-Black-800 w-full rounded-2xl px-6 py-3.5 leading-[19px] font-bold"
      />
      <img
        src={searchIcon}
        alt="Search Icon"
        className="absolute top-1/2 right-4 -translate-y-1/2"
      />
    </section>
  );
}

export default Search;
