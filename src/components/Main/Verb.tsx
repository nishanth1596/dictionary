import { DictionaryEntry } from "./Main";

type VerbProps = {
  data: DictionaryEntry;
};

function Verb({ data }: VerbProps) {
  const verbDataSet = data.meanings.find(
    (item) => item.partOfSpeech === "verb",
  );

  if (!verbDataSet) return null;

  const definitions = verbDataSet.definitions;

  const verbData = definitions.find((item) => item.example) ?? definitions[0];
  if (!verbData) return null;

  const verb = verbData.definition;
  const example = verbData.example;

  return (
    <article className="mt-8 md:mt-10">
      <h4 className="flex items-center gap-4">
        verb
        <span className="border-Gray-100 block w-full border-t-[1px] line-through"></span>
      </h4>

      <h5 className="text-Gray-500 mt-8 md:mt-11">Meaning</h5>
      <ul className="custom-bullets border-Gray-100 mx-4 mt-4 list-disc border-b-[1px] pb-8 text-[0.94rem] leading-6 font-normal md:ml-12 md:text-lg">
        <li className="text-Black-800 pl-2">{verb}</li>

        {example && (
          <li className="text-Gray-500 mt-3.5 -mr-2 list-none pl-2">
            "{example}"
          </li>
        )}
      </ul>
    </article>
  );
}

export default Verb;
