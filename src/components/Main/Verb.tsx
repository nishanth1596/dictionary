import { DictionaryEntry } from "./Dicitionary";

type VerbProps = {
  data: DictionaryEntry;
};

function Verb({ data }: VerbProps) {
  const verb = data.meanings[1].definitions[0].definition;
  const example = data.meanings[1].definitions[0].example;

  return (
    <article className="mt-8">
      <h4 className="flex items-center gap-4">
        verb
        <span className="border-Gray-100 block w-full border-t-[1px] line-through"></span>
      </h4>

      <h5 className="text-Gray-500 mt-8">Meaning</h5>
      <ul className="custom-bullets border-Gray-100 mx-4 mt-4 list-disc border-b-[1px] pb-8 text-[0.94rem] leading-6 font-normal">
        <li className="text-Black-800 pl-2">{verb}</li>
        <li className="text-Gray-500 mt-3.5 -mr-2 list-none pl-2">
          "{example}"
        </li>
      </ul>
    </article>
  );
}

export default Verb;
