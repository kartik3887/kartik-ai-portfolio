import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = ({ formik }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6"
    >
      {/* Glow */}
      <div className="absolute -right-20 top-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Header */}
      <div className="relative mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
          <Mail size={20} />
        </div>

        <div>
          <h2 className="text-base font-semibold text-white sm:text-lg">
            Contact Information
          </h2>
          <p className="text-xs text-gray-400 sm:text-sm">
            Manage your contact details
          </p>
        </div>
      </div>

      {/* Fields */}
      <div className="relative space-y-4">
        <InputField
          icon={<Mail size={17} />}
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
        />

        <InputField
          icon={<Phone size={17} />}
          label="Phone"
          type="text"
          placeholder="+91 9876543210"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.phone}
          touched={formik.touched.phone}
        />

        <InputField
          icon={<MapPin size={17} />}
          label="Location"
          type="text"
          placeholder="Mumbai, India"
          name="location"
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.location}
          touched={formik.touched.location}
        />
      </div>
    </motion.div>
  );
};

const InputField = ({
  icon,
  label,
  type = "text",
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
        {/* Icon */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400">
          {icon}
        </div>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`h-11 w-full rounded-xl bg-slate-900/50 pl-10 pr-4 text-sm text-white outline-none transition-all duration-300 ${
            touched && error
              ? "border border-red-500 focus:ring-2 focus:ring-red-500/20"
              : "border border-white/10 hover:border-white/20 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
          }`}
        />

        {touched && error && (
          <p className="mt-2 text-xs text-red-400">{error}</p>
        )}
      </div>
    </div>
  );
};

export default ContactSection;
