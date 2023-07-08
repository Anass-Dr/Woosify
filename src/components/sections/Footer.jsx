import logoDark from "/images/logo-dark.png";
import logoLight from "/images/logo-light.png";

function Footer({ darkMode }) {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex flex-col md:flex-row gap-16 py-10">
          <div className="flex-1">
            <div className="w-32 md:w-28">
              <img
                className="max-w-full"
                src={darkMode ? logoLight : logoDark}
                alt="logo"
              />
            </div>
            <p className="font-semibold text-sm dark:text-slate-300 dark:font-normal md:text-base mt-8">
              Streamline your workflow with our leading SaaS platform. Trusted
              by over 10,000 happy customers.
            </p>
            <div className="flex gap-5 mt-4">
              <i className="fa-brands fa-facebook text-xl"></i>
              <i className="fa-brands fa-linkedin text-xl"></i>
              <i className="fa-brands fa-instagram text-xl"></i>
            </div>
          </div>
          <div className="flex-1 flex gap-8">
            <div className="w-full">
              <span>Ressources</span>
              <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQs</li>
                <li>About</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="w-full">
              <span>Store</span>
              <ul>
                <li>Shop</li>
                <li>Product</li>
                <li>Cart</li>
                <li>Checkout</li>
                <li>Acount</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="w-full">
              <span>Store</span>
              <ul>
                <li>Shop</li>
                <li>Product</li>
                <li>Cart</li>
                <li>Checkout</li>
                <li>Acount</li>
              </ul>
            </div>
            <div className="w-full">
              <span>Store</span>
              <ul>
                <li>Shop</li>
                <li>Product</li>
                <li>Cart</li>
                <li>Checkout</li>
                <li>Acount</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-sm md:text-base dark:text-slate-300 dark:font-normal font-semibold mt-8 pt-5 text-center">
          <p>
            © Copyright {new Date().getFullYear()}・ Woosify ・All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
