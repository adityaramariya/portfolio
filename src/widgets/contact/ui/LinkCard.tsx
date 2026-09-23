type ContactLinkCardProps = {
  label: string;
  href: string;
  icon: string;
};

const ContactLinkCard = ({ label, href, icon }: ContactLinkCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="group border border-indigo-600/10 bg-white/[0.03] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.06]"
    >
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
        {icon}
      </div>
      <p className="mt-4 text-xs font-medium uppercase tracking-widest text-gray-500">
        {label}
      </p>
    </a>
  );
};

export default ContactLinkCard;
