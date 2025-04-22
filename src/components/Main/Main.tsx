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

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const newData = await fetchData(searchInput);
        setData(newData);
      } catch (error) {
        console.error("Error fetching dictionary data: ", error);
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
      <Dictionary data={data} isLoading={isLoading} />
    </main>
  );
}

export default Main;
