import { DictionaryEntry } from "./Main";
import newWindowIcon from "../../assets/images/icon-new-window.svg";

type SourceProps = {
  data: DictionaryEntry;
};

function Source({ data }: SourceProps) {
  const sourceUrl = data.sourceUrls[0];

  return (
    <div className="mt-6 text-sm md:mt-10 md:flex md:gap-6">
      <p className="text-Gray-500 underline md:no-underline">Source</p>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-Black-800 dark:text-White mt-2 mb-[85px] flex items-center gap-2.5 text-sm leading-[1.06rem] font-normal md:mt-0 md:mb-[118px]"
      >
        {sourceUrl} <img src={newWindowIcon} alt="" aria-hidden="true" />
      </a>
    </div>
  );
}

export default Source;
