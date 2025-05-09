import { DictionaryEntry } from "./Main";
import playIcon from "../../assets/images/icon-play.svg";

type TitleProps = {
  data: DictionaryEntry;
};

function Title({ data }: TitleProps) {
  const { word, phonetic, phonetics } = data;

  const audioURl = phonetics.find((item) => item.audio !== "")?.audio;

  function handlePlay() {
    if (!audioURl) return;
    const audio = new Audio(audioURl);
    audio.play();
  }

  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="dark:text-White">{word}</h2>
        <h3 className="text-Primary font-SansSerif mt-2 md:mt-3">{phonetic}</h3>
      </div>

      <button
        aria-label={`Play pronunciation of ${word}`}
        onClick={handlePlay}
        className="cursor-pointer"
      >
        <img
          src={playIcon}
          alt=""
          className="h-12 w-12 md:h-[75px] md:w-[75px]"
        />
      </button>
    </div>
  );
}

export default Title;
