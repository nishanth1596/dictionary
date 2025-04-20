import { useState } from "react";
import bookLogo from "../../assets/images/logo.svg";
import moonIcon from "../../assets/images/icon-moon.svg";

function Header() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <header className="m-6 flex justify-between">
      <img src={bookLogo} alt="Book Logo" />

      <div className="flex gap-4">
        <label htmlFor="font" className="sr-only">
          Choose your preferred font theme
        </label>
        <select name="font" id="font">
          <option value="sansSerif">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="mono">Mono</option>
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
            className="bg-Gray-500 after:bg-White relative block h-5 w-10 cursor-pointer rounded-[10px] transition-all after:absolute after:top-1/2 after:left-[3px] after:h-3.5 after:w-3.5 after:-translate-y-1/2 after:rounded-full after:transition-transform after:content-[''] peer-checked:after:translate-x-5"
          ></label>
          <button
            className="cursor-pointer"
            aria-label="click to toggle theme"
            onClick={() => setIsToggled(true)}
          >
            <img src={moonIcon} alt="Moon Icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
