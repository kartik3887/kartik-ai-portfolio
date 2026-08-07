import { BriefcaseBusiness, Check, Zap, X } from "lucide-react";
import { motion } from "framer-motion";

const AvailabilityCard = ({ formik }) => {
  const isAvailable = formik.values.availableForWork;

  const handleToggle = () => {
    formik.setFieldValue("availableForWork", !isAvailable);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6"
    >
      {/* Glow */}
      <div className="absolute -right-20 top-0 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
            <BriefcaseBusiness size={21} />
          </div>

          <div>
            <h3 className="text-base font-semibold text-white">
              Work Availability
            </h3>
            <p className="mt-1 text-xs text-gray-400 sm:text-sm">
              Let recruiters know your current status
            </p>
          </div>
        </div>

        {/* Toggle Button */}
        <motion.button
          type="button"
          onClick={handleToggle}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          aria-pressed={isAvailable}
          aria-label="Toggle work availability"
          className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-colors ${
            isAvailable
              ? "border-green-400/20 bg-green-400/10"
              : "border-red-400/20 bg-red-400/10"
          }`}
        >
          {/* Pinging Dot */}
          <span className="relative flex h-3 w-3">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                isAvailable ? "bg-green-400" : "bg-red-400"
              }`}
            />
            <span
              className={`relative inline-flex h-3 w-3 rounded-full ${
                isAvailable ? "bg-green-400" : "bg-red-400"
              }`}
            />
          </span>

          {/* Text */}
          <div className="text-left">
            <p
              className={`text-sm font-medium ${
                isAvailable ? "text-green-400" : "text-red-400"
              }`}
            >
              {isAvailable ? "Available" : "Not Available"}
            </p>
            <p className="flex items-center gap-1 text-[11px] text-gray-400">
              <Zap size={11} />
              {isAvailable ? "Open for opportunities" : "Currently unavailable"}
            </p>
          </div>

          {/* Status Icon */}
          <div
            className={`ml-2 flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
              isAvailable ? "bg-green-400/20" : "bg-red-400/20"
            }`}
          >
            {isAvailable ? (
              <Check size={14} className="text-green-400" />
            ) : (
              <X size={14} className="text-red-400" />
            )}
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AvailabilityCard;
