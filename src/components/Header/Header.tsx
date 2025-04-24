import { useEffect, useRef, useState } from "react";
import bookLogo from "../../assets/images/logo.svg";

function Header() {
  const [isToggled, setIsToggled] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [currentFont, setCurrentFont] = useState("font-SansSerif");

  const theme = isToggled ? "dark" : "light";
  const previousFont = useRef("font-SansSerif");

  useEffect(() => {
    document.body.classList.remove(previousFont.current);
    document.body.classList.add(currentFont);
    previousFont.current = currentFont;
  }, [currentFont]);

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsToggled(true);
    }
  }, []);

  return (
    <header className="m-6 mb-0 flex justify-between md:mx-10 md:mt-14 lg:mx-auto lg:max-w-[46.06rem]">
      <img src={bookLogo} alt="Book Logo" />

      <div className="flex gap-4">
        <label htmlFor="font" className="sr-only">
          Choose your preferred font theme
        </label>
        <select
          name="font"
          id="font"
          value={currentFont}
          onChange={(e) => setCurrentFont(e.target.value)}
          className="dark:text-White cursor-pointer"
        >
          <option value="font-SansSerif">Sans Serif</option>
          <option value="font-Serif">Serif</option>
          <option value="font-Mono">Mono</option>
        </select>

        <div className="border-Gray-100 flex items-center gap-3 border-l-[1px] pl-4">
          <input
            type="checkbox"
            id="themeSwitcher"
            className="peer hidden h-0 w-0"
            checked={isToggled}
            onChange={(e) => setIsToggled(e.target.checked)}
          />
          <label
            htmlFor="themeSwitcher"
            className="bg-Gray-500 after:bg-White dark:bg-Primary dark:hover:bg-Gray-500 hover:bg-Primary relative block h-5 w-10 cursor-pointer rounded-[10px] transition-all after:absolute after:top-1/2 after:left-[3px] after:h-3.5 after:w-3.5 after:-translate-y-1/2 after:rounded-full after:transition-transform after:content-[''] peer-checked:after:translate-x-5"
          ></label>
          <button
            className="cursor-pointer"
            aria-label="click to toggle theme"
            onClick={() => setIsToggled((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
                className="text-Gray-500 dark:text-Primary"
              />
            </svg>
            {/* <img src={moonIcon} alt="Moon Icon" /> */}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
