import { ChangeEvent, FormEvent, useState } from "react";
import searchIcon from "../../assets/images/icon-search.svg";

type SearchProps = {
  onClick: (value: string) => void;
};

function Search({ onClick }: SearchProps) {
  const [searchValue, setSearchValue] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (searchValue.trim()) {
      onClick(searchValue.trim());
    }
  }

  return (
    <section className="relative mx-6 mt-6 md:mx-10 md:mt-14 lg:mx-auto lg:max-w-[46.06rem]">
      <form action="searchBar" onSubmit={handleOnSubmit}>
        <input
          type="text"
          id="searchBar"
          placeholder="Keyboard"
          onChange={handleChange}
          className="bg-Gray-50 dark:text-White dark:bg-Black-900 text-Black-800 placeholder:text-Black-800 dark:placeholder:text-White w-full rounded-2xl px-6 py-3.5 leading-[19px] font-bold md:py-[22px] md:text-xl md:leading-[21px]"
        />

        <button type="submit" aria-label="Submit Search">
          <img
            src={searchIcon}
            alt="Search Icon"
            className="absolute top-1/2 right-4 -translate-y-1/2"
          />
        </button>
      </form>
    </section>
  );
}

export default Search;
