function SideNav({ handleNav }) {
  return (
    <nav className="fixed top-0 w-full h-screen bg-white dark:bg-slate-950 p-10 text-right overflow-hidden">
      <i onClick={handleNav} className="fa-solid fa-xmark text-3xl mb-7"></i>
      <ul className="font-semibold flex flex-col gap-3">
        <li>
          <a onClick={handleNav} className="font-semibold" href="#features">
            Features
          </a>
        </li>
        <li>
          <a onClick={handleNav} className="font-semibold" href="#pricing">
            Pricing
          </a>
        </li>
        <li>
          <a onClick={handleNav} className="font-semibold" href="#FAQs">
            FAQs
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
