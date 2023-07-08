import Btn from "../global/Btn";

function Header() {
  return (
    <header>
      <div className="max-w-4xl mx-auto text-center px-6 pt-8 md:pt-16 pb-10">
        <h1 className="text-5xl md:px-0 md:text-80px leading-tight font-bold md:font-semibold">
          Maximize Your Business's Potential with WordPress
        </h1>
        <p className="text-xl dark:text-slate-300 dark:font-medium font-semibold mt-5 mb-8 md:mx-14">
          We help businesses focus on solving problems for their customers
          through innovative solutions
        </p>
        <div className="flex justify-center gap-5 mb-20">
          <Btn text="Get Started" />
          <Btn text="Learn More" outline />
        </div>
        <figure className="md:mx-12 h-48 md:h-96 bg-black rounded-3xl overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/I9zeIth3h50"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </figure>
      </div>
    </header>
  );
}

export default Header;
