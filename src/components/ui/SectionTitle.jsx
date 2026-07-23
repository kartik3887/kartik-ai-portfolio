const SectionTitle = ({
  title,
  subtitle,
  align = "center",
}) => {
  return (
    <div className={`mb-12 text-${align}`}>
      <p className="text-blue-600 font-semibold uppercase tracking-widest">
        {subtitle}
      </p>

      <h2 className="mt-2 text-4xl font-bold text-gray-900">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;