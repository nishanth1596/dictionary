import { DictionaryEntry } from "./Dicitionary";

type NounProps = {
  data: DictionaryEntry;
};

function Noun({ data }: NounProps) {
  const { meanings } = data;

  const definitions = meanings[0].definitions;
  const synonyms = meanings[0].synonyms;

  return (
    <article className="mt-[2.63rem]">
      <h4 className="flex items-center gap-4">
        noun
        <span className="border-Gray-100 block w-full border-t-[1px] line-through"></span>
      </h4>

      <h5 className="text-Gray-500 mt-8">Meaning</h5>
      <ul className="custom-bullets mt-4 ml-4 list-disc space-y-3.5 *:pl-2">
        <li className="text-Black-800 text-[0.94rem] leading-6 font-normal">
          {definitions[0].definition}
        </li>
        <li className="text-Black-800 text-[0.94rem] leading-6 font-normal">
          {definitions[1].definition}
        </li>
        <li className="text-Black-800 text-[0.94rem] leading-6 font-normal">
          {definitions[2].definition}
        </li>
      </ul>

      <h5 className="text-Gray-500 mt-6 flex gap-6">
        Synonyms{" "}
        <span className="text-Primary block font-bold">{synonyms}</span>
      </h5>
    </article>
  );
}

export default Noun;
