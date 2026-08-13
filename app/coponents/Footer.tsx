const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Aditya Ramariya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
