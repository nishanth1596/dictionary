import { DictionaryEntry } from "./Dicitionary";
import newWindowIcon from "../../assets/images/icon-new-window.svg";

type SourceProps = {
  data: DictionaryEntry;
};

function Source({ data }: SourceProps) {
  const sourceUrl = data.sourceUrls[0];

  return (
    <div className="mt-6">
      <p className="text-Gray-500">Source</p>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-Black-800 mt-2 mb-[85px] flex items-center gap-2.5 text-sm leading-[1.06rem] font-normal"
      >
        {sourceUrl} <img src={newWindowIcon} alt="" aria-hidden="true" />
      </a>
    </div>
  );
}

export default Source;
