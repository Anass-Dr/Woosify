import Btn from "./global/Btn";
import logoDark from "/images/logo-dark.png";
import logoLight from "/images/logo-light.png";

function Navbar({ darkMode, handleTheme, handleNav }) {
  return (
    <nav className="flex justify-between items-center py-5 container">
      <div className="w-28">
        <img
          className="max-w-full"
          src={darkMode ? logoLight : logoDark}
          alt="logo"
        />
      </div>
      <ul className="hidden md:flex items-center dark:text-slate-300 dark:font-medium gap-9 font-bold">
        <li>
          <a className="font-semibold" href="#features">
            Features
          </a>
        </li>
        <li>
          <a className="font-semibold" href="#pricing">
            Pricing
          </a>
        </li>
        <li>
          <a className="font-semibold" href="#FAQs">
            FAQs
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <div
          className="flex items-center gap-1 px-1 py-2px dark:text-black text-white dark:bg-white bg-black relative rounded-xl"
          onClick={handleTheme}
        >
          <input
            className="w-full h-full absolute opacity-0 z-10 cursor-pointer"
            type="checkbox"
            name="theme"
            id="theme__input"
          />
          <i className="fa-regular fa-sun text-mini opacity-0 transition duration-200 ease-linear"></i>
          <svg
            className="w-3 h-3 dark:fill-black fill-white transition duration-200 ease-linear"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.5287 15.9294C21.3687 15.6594 20.9187 15.2394 19.7987 15.4394C19.1787 15.5494 18.5487 15.5994 17.9187 15.5694C15.5887 15.4694 13.4787 14.3994 12.0087 12.7494C10.7087 11.2994 9.90873 9.40938 9.89873 7.36938C9.89873 6.22938 10.1187 5.12938 10.5687 4.08938C11.0087 3.07938 10.6987 2.54938 10.4787 2.32938C10.2487 2.09938 9.70873 1.77938 8.64873 2.21938C4.55873 3.93938 2.02873 8.03938 2.32873 12.4294C2.62873 16.5594 5.52873 20.0894 9.36873 21.4194C10.2887 21.7394 11.2587 21.9294 12.2587 21.9694C12.4187 21.9794 12.5787 21.9894 12.7387 21.9894C16.0887 21.9894 19.2287 20.4094 21.2087 17.7194C21.8787 16.7894 21.6987 16.1994 21.5287 15.9294Z" />
          </svg>
          <div className="w-3 h-3 rounded-full dark:bg-black bg-white absolute top-2 -translate-y-1/2 left-0 translate-x-1"></div>
        </div>
        <div className="hidden md:block">
          <Btn text="Get Started" sm />
        </div>
        <i
          onClick={handleNav}
          className="fa-solid fa-bars-staggered text-xl ml-2 md:hidden"
        ></i>
      </div>
    </nav>
  );
}

export default Navbar;
