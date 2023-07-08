import Btn from "../global/Btn";

function CallToAction() {
  return (
    <section>
      <div className="container px-8 text-center">
        <div className="py-20 px-7 bg-gray-100 dark:bg-slate-800 rounded-3xl">
          <h2 className="text-42px md:text-6xl font-bold md:font-semibold max-w-2xl mx-auto leading-tight">
            Ready to take your site the next level?
          </h2>
          <p className="text-xl font-semibold dark:text-slate-300 dark:font-normal mt-5">
            There has never been a better time than right now.
          </p>
          <div className="flex justify-center gap-5 mt-8">
            <Btn text="Get Started" />
            <Btn text="Learn More" outline />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
