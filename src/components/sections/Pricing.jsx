const Plan = ({ head, price, total, feature, special }) => {
  return (
    <figure className="p-10 w-full md:w-1/3 rounded-3xl bg-transparent relative shadow-3xl">
      <div className="w-full h-full absolute top-0 left-0 dark:bg-slate-900 bg-white opacity-50 z-0 rounded-3xl"></div>
      <div className="relative">
        <h4 className="text-xl md:text-3xl font-bold md:font-semibold text-center">
          {head}
        </h4>
        <h6 className="text-42px md:text-5xl mt-5 md:mt-8 font-bold text-center leading-none">
          <sup className="text-xl md:text-2xl align-middle">$</sup>
          {price}
          <span className="text-xl">/mo</span>
        </h6>
        <p className="text-xs md:text-sm font-semibold dark:text-slate-300 text-center mt-3">
          Save 50% <span className="line-through font-bold">${total}</span>
        </p>
        <ul className="w-fit mt-8 text-base md:text-lg dark:text-slate-300 dark:font-normal font-semibold flex flex-col gap-3 mx-auto">
          <li>
            <i className="fa-solid fa-check mr-1"></i> {feature}
          </li>
          <li>
            <i className="fa-solid fa-check mr-1"></i> Feature benefit one
          </li>
          <li>
            <i className="fa-solid fa-check mr-1"></i> Feature benefit two
          </li>
          <li>
            <i className="fa-solid fa-check mr-1"></i> Feature benefit three
          </li>
          <li>
            <i className="fa-solid fa-check mr-1"></i> Feature benefit four
          </li>
          <li>
            <i className="fa-solid fa-check mr-1"></i> Feature benefit five
          </li>
          <li>
            <i className="fa-solid fa-check mr-1"></i> Priority support
          </li>
        </ul>
        <div className="mt-10 flex justify-center">
          <a
            className="py-4 px-6 rounded-3xl font-medium leading-none text-white dark:text-black bg-black dark:bg-white dark:font-bold dark:hover:opacity-90 hover:bg-gray-700"
            href="#"
          >
            {special && "🔥"} Choose {head}
          </a>
        </div>
      </div>
    </figure>
  );
};

function Pricing() {
  return (
    <section id="pricing" className="mt-20 pb-20">
      <div className="container">
        <h2 className="text-42px md:text-6xl max-w-xl mx-auto text-center font-bold leading-tight md:font-semibold">
          Simple pricing plans for every budget
        </h2>
        <p className="text-xl max-w-2xl mx-auto dark:text-slate-300 dark:font-normal text-center mt-8 font-semibold">
          Straight forward and up front pricing plans designed to suit teams of
          any size.
        </p>
        <div className="flex flex-col md:flex-row gap-8 mt-16">
          <Plan
            head="Personal"
            price="39"
            total="79"
            feature="Single user account"
          />
          <Plan
            head="Team"
            price="149"
            total="299"
            feature="Up to 10 team members"
            special
          />
          <Plan
            head="Business"
            price="299"
            total="599"
            feature="Up to 90 team members"
          />
        </div>
      </div>
    </section>
  );
}

export default Pricing;
