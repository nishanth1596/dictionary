import { DictionaryEntry } from "./Main";
import playIcon from "../../assets/images/icon-play.svg";

type TitleProps = {
  data: DictionaryEntry;
};

function Title({ data }: TitleProps) {
  const { word, phonetic } = data;

  return (
    <div className="mt-6 flex items-center justify-between">
      <div>
        <h2>{word}</h2>
        <p className="text-Primary font-SansSerif mt-2">{phonetic}</p>
      </div>

      <button aria-label={`Play pronunciation of ${word}`}>
        <img src={playIcon} alt="" className="h-12 w-12" />
      </button>
    </div>
  );
}

export default Title;
