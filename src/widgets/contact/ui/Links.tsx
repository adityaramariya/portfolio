import ContactLinkCard from "./LinkCard";
import contactLinks from "../model/contact-data";

const Links = () => (
  <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-4">
    {contactLinks.map((link) => {
      return <ContactLinkCard key={link.label} {...link} />;
    })}
  </div>
);

export default Links;
