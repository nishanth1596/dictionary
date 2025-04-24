import { DictionaryEntry } from "./Main";

type NounProps = {
  data: DictionaryEntry;
};

function Noun({ data }: NounProps) {
  const { meanings } = data;
  const nounData = meanings.find((item) => item.partOfSpeech === "noun");

  if (!nounData || !nounData.definitions) return null;

  const definitions = nounData?.definitions;
  const synonyms = nounData?.synonyms;

  return (
    <article className="mt-[2.63rem]">
      <h4 className="dark:text-White flex items-center gap-4">
        noun
        <span className="border-Gray-100 dark:border-Black-700 block w-full border-t-[1px] line-through"></span>
      </h4>

      <h5 className="text-Gray-500 mt-8 md:mt-11">Meaning</h5>
      <ul className="custom-bullets mt-4 ml-4 list-disc space-y-3.5 *:pl-2 md:ml-12">
        {definitions.slice(0, 3).map((def, index) => (
          <li
            key={index}
            className="text-Black-800 dark:text-White text-[0.94rem] leading-6 font-normal md:pr-5 md:text-lg"
          >
            {def.definition}
          </li>
        ))}
      </ul>

      <h5 className="text-Gray-500 mt-6 flex flex-wrap gap-6 md:mt-10">
        <span>Synonyms</span>
        <span className="text-Primary font-bold">{synonyms}</span>
      </h5>
    </article>
  );
}

export default Noun;
