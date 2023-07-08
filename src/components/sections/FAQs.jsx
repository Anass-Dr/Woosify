const Qst = ({ qst, children }) => {
  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("h-0");
    e.currentTarget.nextSibling.classList.toggle("p-8");
    e.currentTarget.querySelector("span").classList.toggle("after:opacity-0");
  };

  return (
    <div className="shadow-3xl rounded-xl">
      <div
        onClick={handleClick}
        className="flex justify-between items-center gap-5 dark:text-slate-300 md:text-lg font-bold p-7 md:p-8 cursor-pointer text-left"
      >
        <p>{qst}</p>
        <span className="qst__span relative dark:after:bg-white dark:before:bg-white"></span>
      </div>
      <div className="h-0 text-left font-semibold md:text-lg overflow-hidden transition duration-100 ease-in-out dark:text-slate-300 dark:font-normal">
        {children}
      </div>
    </div>
  );
};

function FAQs() {
  return (
    <section id="FAQs" className="pt-5 pb-10">
      <div className="container text-center">
        <p className="text-sm md:text-base font-bold mb-8">FAQs</p>
        <h3 className="text-4xl md:text-5xl font-semibold">
          Frequently asked questions
        </h3>
        <div className="flex flex-col md:flex-row gap-5 mt-16">
          <div className="flex-1 flex flex-col gap-5">
            <Qst qst="How do I change the site logo?">
              Head to the Site Editor and then navigate to the Header Template
              Part. From there, click on the existing logo and then replace it
              with a block of your choice. You can use an Image block, SVG, Site
              Logo or Site Title block as the site logo, the choice is yours. We
              prefer to use SVGs for logos because they scale perfectly at all
              screen sizes and also support variable colors which makes them
              ideal for use with dark mode and animations.
            </Qst>
            <Qst qst="What version of PHP do I need?">
              PHP 7.4 or higher is required however we recommend PHP 8 or above.
            </Qst>
            <Qst qst="Does this theme require any plugins?">
              No, there are no plugins required by this theme. Everything you
              need to design an amazing website is provided by the framework.
            </Qst>
            <Qst qst="How can I add animations to blocks?">
              Most core blocks have animation supported added. You can add and
              change transition effects without needing any code.
            </Qst>
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <Qst qst="How do I create an FAQ accordion?">
              There are 2 ways to add an accordion to your site with our theme.
              First, you can use an existing accordion from any of the included
              block patters. Secondly you can create your own from scratch using
              the core List block. Since the accordion uses a core block
              variation instead of a custom block, your content will not be lost
              if you ever decide to switch themes.
            </Qst>
            <Qst qst="How can I display blog posts on the home page?">
              This theme comes with multiple blog patterns that can be used to
              display posts on any page. Simply add a blog pattern to your home
              page template, or the page that is set as the Front Page. You can
              customize the Query Loop to suit your needs.
            </Qst>
            <Qst qst="How can I save user dark mode preferences?">
              Cookies can be used to store user dark mode settings when clicking
              the toggle switch
            </Qst>
            <Qst qst="How do I create a child theme?">
              We recommend using the create block theme plugin to create your
              own child themes. With a little know-how, they can be the perfect
              way to build your own website. They inherit all of the parent
              theme’s design which saves you a tonne of work and provides a head
              start for your next project.
            </Qst>
          </div>
        </div>
      </div>
      <p className="text-center text-xl dark:text-slate-300 font-semibold px-6 mt-20 pt-3">
        Question not answered above?{" "}
        <a className="border-b-2 border-black dark:border-slate-300" href="#">
          Contact us
        </a>
      </p>
    </section>
  );
}

export default FAQs;
