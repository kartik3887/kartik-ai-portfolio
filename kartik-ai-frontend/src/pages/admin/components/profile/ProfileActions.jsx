import { Save, RotateCcw, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ProfileActions = ({ formik }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-4
        backdrop-blur-xl
        sm:p-5
      "
    >
      {/* Glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative flex flex-col gap-3 sm:flex-row sm:justify-end">
        {/* Reset */}
        <motion.button
          type="button"
          onClick={formik.handleReset}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={formik.isSubmitting}
          className="
            flex
            h-11
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-5
            text-sm
            text-gray-300
            transition-all
            hover:bg-white/10
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <RotateCcw size={16} />
          Reset Changes
        </motion.button>

        {/* Save */}
        <motion.button
          type="button"
          onClick={formik.handleSubmit}
          disabled={formik.isSubmitting}
          whileHover={!formik.isSubmitting ? { scale: 1.05 } : {}}
          whileTap={!formik.isSubmitting ? { scale: 0.97 } : {}}
          className="
            group
            relative
            flex
            h-11
            items-center
            justify-center
            gap-2
            overflow-hidden
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-500
            px-7
            text-sm
            font-semibold
            text-white
            shadow-lg
            shadow-cyan-500/30
            transition-all
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {/* Shine Effect */}
          {!formik.isSubmitting && (
            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
                transition
                duration-700
                group-hover:translate-x-full
              "
            />
          )}

          <Save size={17} className="relative z-10" />

          <span className="relative z-10">
            {formik.isSubmitting ? "Saving..." : "Save Profile"}
          </span>

          <Sparkles size={15} className="relative z-10" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProfileActions;
