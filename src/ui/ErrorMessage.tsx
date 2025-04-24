function ErrorMessage() {
  return (
    <article className="mx-6 mt-6 flex flex-col items-center justify-center text-center md:mx-auto md:mt-[50px] md:max-w-96 lg:mx-auto lg:max-w-[46.06rem]">
      <span>🫤</span>
      <h3 className="text-Black-800 dark:text-White mt-6 text-xl leading-6 font-bold md:mt-11">
        No Definitions Found
      </h3>
      <p className="text-Gray-500 mt-6 text-lg leading-6 md:mt-8">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </article>
  );
}

export default ErrorMessage;
