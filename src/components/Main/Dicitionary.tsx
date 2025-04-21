import { useEffect, useState } from "react";
import Title from "./Title";
import { fetchData } from "../../api/fetchData";
import LoadingSpinner from "../../ui/LoadingSpinner";
import Noun from "./Noun";
import Verb from "./Verb";

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
  sourceUrls: string[];
  word: string;
};

function Dictionary() {
  const [data, setData] = useState<DictionaryEntry[]>();

  useEffect(() => {
    const getData = async () => {
      try {
        const newData = await fetchData();
        console.log(newData);
        setData(newData);
      } catch (error) {
        console.error("Error fetching dictionary data: ", error);
      }
    };

    getData();
  }, []);

  return (
    <section className="mx-6">
      {!data ? (
        <LoadingSpinner />
      ) : (
        <>
          <Title data={data[0]} />
          <Noun data={data[0]} />
          <Verb data={data[0]} />
        </>
      )}
    </section>
  );
}

export default Dictionary;
