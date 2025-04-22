import Title from "./Title";
import LoadingSpinner from "../../ui/LoadingSpinner";
import Noun from "./Noun";
import Verb from "./Verb";
import Source from "./Source";
import { DictionaryEntry } from "./Main";

type DictionaryProp = {
  data: DictionaryEntry[] | undefined;
};

function Dictionary({ data }: DictionaryProp) {
  return (
    <section className="relative mx-6 mt-6 md:mx-10 md:mt-[50px] lg:mx-auto lg:max-w-[46.06rem]">
      {!data ? (
        <LoadingSpinner />
      ) : (
        <>
          <Title data={data[0]} />
          <Noun data={data[0]} />
          <Verb data={data[0]} />
          <Source data={data[0]} />
        </>
      )}
    </section>
  );
}

export default Dictionary;
