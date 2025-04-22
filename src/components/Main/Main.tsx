import { useEffect, useState } from "react";
import Dictionary from "./Dicitionary";
import Search from "./Search";
import { fetchData } from "../../api/fetchData";

type LicenseEntry = {
  name: string;
  url: string;
};

type definitionsEntry = {
  antonyms: string[];
  definition: string;
  synonyms: string[];
  example: string;
};

type MeaningsEntry = {
  partOfSpeech: string;
  definitions: definitionsEntry[];
  antonyms: string[];
  synonyms: string[];
};

type PhoneticsEntry = {
  text: string;
  audio: string;
  sourceUrl?: string;
  license: LicenseEntry;
};

export type DictionaryEntry = {
  license: LicenseEntry;
  meanings: MeaningsEntry[];
  phonetic: string;
  phonetics: PhoneticsEntry[];
  sourceUrls: string;
  word: string;
};

function Main() {
  const [data, setData] = useState<DictionaryEntry[]>();
  const [searchInput, setSearchInput] = useState("keyboard");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setError("");
      try {
        const newData = await fetchData(searchInput);

        if (!newData || newData.length === 0) {
          setError("No results found for your search");
          setData(undefined);
        } else {
          setData(newData);
        }
      } catch (error) {
        console.error("Error fetching dictionary data: ", error);
        setError("Something went wrong. Please try again");
        setData(undefined);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [searchInput]);

  function handleSearch(value: string) {
    setSearchInput(value);
  }

  return (
    <main>
      <Search onClick={handleSearch} />
      {error ? (
        <article className="mx-6 mt-6 flex flex-col items-center justify-center text-center md:mx-auto md:mt-[50px] md:max-w-96 lg:mx-auto lg:max-w-[46.06rem]">
          <span>🫤</span>
          <h3 className="text-Black-800 mt-6 text-xl leading-6 font-bold md:mt-11">
            No Definitions Found
          </h3>
          <p className="text-Gray-500 mt-6 text-lg leading-6 md:mt-8">
            Sorry pal, we couldn't find definitions for the word you were
            looking for. You can try the search again at later time or head to
            the web instead.
          </p>
        </article>
      ) : (
        <Dictionary data={data} isLoading={isLoading} />
      )}
    </main>
  );
}

export default Main;
