import { useState, useEffect } from "react";
import {
  feature1,
  checkIcon,
  cloudIcon,
  layoutIcon,
  starIcon,
  codeIcon,
  phoneIcon,
  shopIcon,
  graphIcon,
} from "../";

const Icon = ({ icon, bg }) => {
  return (
    <span
      className={`w-12 h-12 flex-shrink-0 grid place-items-center rounded-full ${bg}`}
    >
      <img className="w-7 h-7" src={icon} alt="icon" />
    </span>
  );
};

const FeatureCard = ({ head, text, icon, position }) => {
  return (
    <div
      className={`card flex items-center gap-7 bg-white dark:bg-slate-950 py-6 px-8 rounded-30px absolute shadow-3xl ${
        position === "top"
          ? "top-6 -right-3 md:-right-7"
          : "bottom-6 -left-3 md:-left-7 flex-row-reverse"
      }`}
    >
      <Icon
        icon={icon}
        bg={position === "top" ? "bg-indigo-200" : "bg-green-100"}
      />
      <div>
        <p className="text-xl font-semibold dark:font-medium text-left mb-3">
          {head}
        </p>
        <p className="text-sm dark:text-slate-300 dark:font-normal font-semibold">
          {text}
        </p>
      </div>
    </div>
  );
};

const FeatureCard2 = ({ text1, text2, text3, icon, bg, focused }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let myInterval;
    const handleFocus = () => {
      myInterval = setInterval(() => {
        if (number < parseInt(text1)) setNumber(number + 1);
      }, 5000 / parseInt(text1));
    };
    if (focused) handleFocus();

    return () => clearInterval(myInterval);
  });

  return (
    <figure className="card flex flex-col gap-5 p-7 md:p-8 mb-8 shadow-3xl rounded-3xl">
      <Icon icon={icon} bg={bg} />
      <span className="text-3xl md:text-42px font-semibold leading-none">
        {number < parseInt(text1) ? number : text1}
      </span>
      <span className="text-lg md:text-xl leading-none dark:font-medium font-bold">
        {text2}
      </span>
      <span className="text-sm md:text-base dark:text-slate-300 font-semibold">
        {text3}
      </span>
    </figure>
  );
};

const FeatureCard3 = ({ start, head, text, icon, bg }) => {
  return (
    <figure
      className={`card min-w-lg w-11/12 flex items-center gap-8 p-7 md:p-8 shadow-3xl rounded-3xl ${
        start ? "self-start" : "self-end"
      }`}
    >
      <Icon icon={icon} bg={bg} />
      <div>
        <h6 className="text-lg md:text-xl dark:font-medium font-bold mb-2">
          {head}
        </h6>
        <p className="text-sm md:text-base dark:text-slate-300 dark:font-normal font-semibold">
          {text}
        </p>
      </div>
    </figure>
  );
};

const Feature = ({ head, text, list, reverse, children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20 md:gap-28 mt-20">
      <div className={`order-1${reverse ? "" : " md:order-none"}`}>
        <h3 className="text-4xl md:text-5xl font-semibold mb-8">{head}</h3>
        <p className="text-xl dark:text-slate-300 dark:font-normal font-medium mb-8">
          {text}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
          {list.map((item, idx) => (
            <li
              key={idx}
              className="text-md md:text-lg dark:text-slate-300 dark:font-normal font-semibold md:font-medium"
            >
              <i className="fa-solid fa-check mr-1"></i> {item}
            </li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
};

function Features() {
  const [focused, setFocus] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const revealCard = (entries, observer) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      entry.target.classList.remove("hidden--card");
      setFocus(true);
      observer.unobserve(entry.target);
    };
    const cardObserver = new IntersectionObserver(revealCard, {
      root: null,
      threshold: 0.6,
    });

    cards.forEach((card) => {
      cardObserver.observe(card);
      card.classList.add("hidden--card");
    });
  });

  return (
    <section
      id="features"
      className="container pt-16"
      onFocus={() => console.log("focused")}
    >
      <h2 className="text-42px leading-none md:text-6xl max-w-2xl mx-auto text-center font-bold md:font-semibold">
        Powerful features for your business
      </h2>
      <Feature
        head="Helping you focus on what really matters"
        text="With its user-friendly interface and extensive range of customizable themes and plugins, WordPress offers unparalleled flexibility and control over your online presence."
        list={[
          "Easy to use",
          "Smart features",
          "Multiple users",
          "Secure platform",
        ]}
      >
        <div className="p-16 rounded-2xl relative shadow-3xl">
          <p className="font-flow text-gray-100 dark:text-slate-800 text-2xl md:text-42px leading-snug md:leading-none">
            Lorem ipsum dolor sit amet, consectetur adipis iquip ex ea Duis
            autLorem ipsu m adipis iquip ex ea aut
          </p>
          <FeatureCard
            head="Smart features"
            text="All the tools you need"
            icon={feature1}
            position="top"
          />
          <FeatureCard
            head="Easy to use"
            text="Made for everyone"
            icon={checkIcon}
            position="bottom"
          />
        </div>
      </Feature>
      <Feature
        head="Designed to scale when your business grows"
        text="Saasify’s platform is designed to scale with your business, so you can easily accommodate more users and customers as your SaaS grows."
        list={[
          "Designed to scale",
          "Split CSS loading",
          "Latest PHP support",
          "100% TypeScript backend",
        ]}
        reverse
      >
        <div className="flex gap-8">
          <div className="mt-10 w-full">
            <FeatureCard2
              focused={focused}
              icon={cloudIcon}
              text1="100+"
              text2="Cloud APIs"
              text3="Only load what’s needed"
              bg="bg-fuchsia-100"
            />
            <FeatureCard2
              focused={focused}
              icon={starIcon}
              text1="5 stars"
              text2="User reviews"
              text3="See all testimonials"
              bg="bg-orange-100"
            />
          </div>
          <div className="w-full">
            <FeatureCard2
              focused={focused}
              icon={layoutIcon}
              text1="100%"
              text2="Open Source"
              text3="Free to download"
              bg="bg-cyan-100"
            />
            <FeatureCard2
              focused={focused}
              icon={codeIcon}
              text1="600+"
              text2="PHP support"
              text3="Supports the latest"
              bg="bg-violet-200"
            />
          </div>
        </div>
      </Feature>
      <Feature
        head="Compatible with all your favorite software tools"
        text="Full integration and support for most popular tools and platforms. If there’s an integration missing that you need, let us know and we’ll happily add support."
        list={[
          "eCommerce plugins",
          "Form plugins",
          "Conversion rate",
          "Custom integrations",
        ]}
      >
        <div className="flex flex-col gap-8">
          <FeatureCard3
            head="Responsive settings"
            text="Fully responsive positioning system"
            icon={phoneIcon}
            bg="bg-green-100"
          />
          <FeatureCard3
            start
            head="WooCommerce"
            text="Full support for WooCommerce and EDD"
            icon={shopIcon}
            bg="bg-violet-200"
          />
          <FeatureCard3
            head="Conversion focussed"
            text="Convert more visitors into customers"
            icon={graphIcon}
            bg="bg-fuchsia-100"
          />
        </div>
      </Feature>
    </section>
  );
}

export default Features;
