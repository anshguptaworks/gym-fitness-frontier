import { footerConfig } from "./footer.config";

const Footer = () => {
  return (
    <footer className="bg-primary100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt={footerConfig.logo.alt} src={footerConfig.logo.src} />
          <p className="my-5">{footerConfig.description}</p>
          <p>{footerConfig.copyright}</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <ul>
            {footerConfig.links.map((link, index) => (
              <li key={index} className="my-5 cursor-pointer">
                {link.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <div className="my-5">
            <a href="mailto:">{footerConfig.contact.email}</a>
          </div>
          <a href="tel:9999900000">{footerConfig.contact.phone}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
