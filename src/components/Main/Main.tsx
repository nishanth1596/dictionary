import { useEffect, useState } from "react";
import Dictionary from "./Dicitionary";
import Search from "./Search";
import { fetchData } from "../../api/fetchData";
import ErrorMessage from "../../ui/ErrorMessage";

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
        <ErrorMessage />
      ) : (
        <Dictionary data={data} isLoading={isLoading} />
      )}
    </main>
  );
}

export default Main;
