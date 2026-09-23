const Title = ({ title }: any) => (
  <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900 pb-3 border-b border-gray-200 ">
    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
      {title}
    </span>{" "}
  </h4>
);

export default Title;
