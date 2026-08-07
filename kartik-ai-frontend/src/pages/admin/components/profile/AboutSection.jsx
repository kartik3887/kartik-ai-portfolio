import { FileText, Sparkles, Type } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = ({ formik }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-xl
        sm:p-6
      "
    >
      {/* Glow */}
      <div className="absolute -left-20 top-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

      {/* Header */}
      <div className="relative mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
          <FileText size={20} />
        </div>

        <div>
          <h2 className="text-base font-semibold text-white sm:text-lg">
            About Information
          </h2>

          <p className="text-xs text-gray-400 sm:text-sm">
            Configure your portfolio story
          </p>
        </div>
      </div>

      <div className="space-y-5">
        <InputField
          icon={<Type size={17} />}
          label="Subtitle"
          placeholder="AI Full Stack Developer"
          name="subtitle"
          value={formik.values.subtitle}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.subtitle}
          touched={formik.touched.subtitle}
        />

        <TextAreaField
          icon={<Sparkles size={17} />}
          label="Hero Description"
          placeholder="Write your hero description..."
          name="heroDescription"
          value={formik.values.heroDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.heroDescription}
          touched={formik.touched.heroDescription}
        />

        <TextAreaField
          icon={<FileText size={17} />}
          label="About Description"
          placeholder="Write about yourself..."
          name="aboutDescription"
          value={formik.values.aboutDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.aboutDescription}
          touched={formik.touched.aboutDescription}
        />
      </div>
    </motion.div>
  );
};

export default AboutSection;

const InputField = ({
  icon,
  label,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <div>
      <label className="mb-2 block text-xs text-gray-400 sm:text-sm">
        {label}
      </label>

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400">
          {icon}
        </div>

        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`
            w-full
            rounded-xl
            border
            bg-slate-900/50
            py-3
            pl-10
            pr-4
            text-sm
            text-white
            outline-none
            transition-all

            ${
              touched && error
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                : "border-white/10 hover:border-white/20 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
            }
          `}
        />

        {touched && error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}
      </div>
    </div>
  );
};

const TextAreaField = ({
  icon,
  label,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <div>
      <label className="mb-2 block text-xs text-gray-400 sm:text-sm">
        {label}
      </label>

      <div className="relative">
        <div className="absolute left-3 top-3 text-cyan-400">{icon}</div>

        <textarea
          rows={4}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`
            w-full
            resize-none
            rounded-xl
            border
            bg-slate-900/50
            py-3
            pl-10
            pr-4
            text-sm
            text-white
            outline-none
            transition-all

            ${
              touched && error
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                : "border-white/10 hover:border-white/20 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
            }
          `}
        />

        {touched && error && (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        )}
      </div>
    </div>
  );
};
