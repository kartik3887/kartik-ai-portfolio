import { AnimatePresence, motion } from "framer-motion";
import {
  LoaderCircle,
  Send,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import { createContact } from "@/api/contact.api";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await createContact(formData);

      if (response.success) {
        setSuccess(response.message);

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess("");
        }, 3000);
      }
    } catch (error) {
      if (error.response) {
        setError(
          error.response.data.message ||
            "Something went wrong"
        );
      } else if (error.request) {
        setError(
          "Server is not reachable. Please try again later."
        );
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `
    w-full
    rounded-lg
    border
    border-white/10
    bg-white/[0.04]
    px-4
    py-2.5
    text-sm
    text-white
    placeholder:text-slate-500
    outline-none
    transition-all
    duration-300
    focus:border-cyan-400/40
    focus:ring-2
    focus:ring-cyan-400/10
  `;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        relative
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-white/[0.05]
        p-5
        backdrop-blur-xl
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-cyan-400/10
          blur-[80px]
        "
      />

      <div className="relative">

        {/* Header */}

        <div className="mb-5">

          <div className="mb-2 flex items-center gap-2">

            <Sparkles
              size={16}
              className="text-cyan-300"
            />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-cyan-300
              "
            >
              Contact Me
            </span>

          </div>

          <h3
            className="
              text-xl
              font-bold
              text-white
            "
          >
            Send Me A Message
          </h3>

          <p
            className="
              mt-2
              text-sm
              leading-6
              text-slate-400
            "
          >
            Have an idea or project?
            Let's build something awesome together.
          </p>

        </div>

        {/* Success */}

        <AnimatePresence>
          {success && (
            <motion.div
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              className="
                mb-4
                rounded-lg
                border
                border-emerald-400/20
                bg-emerald-400/10
                p-3
                text-sm
                text-emerald-300
              "
            >
              ✨ {success}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error */}

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              className="
                mb-4
                rounded-lg
                border
                border-red-400/20
                bg-red-400/10
                p-3
                text-sm
                text-red-300
              "
            >
              ⚠️ {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div>

            <label className="mb-1 block text-sm font-medium text-slate-300">
              Name
            </label>

            <input
              type="text"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className={inputClass}
            />

          </div>

          <div>

            <label className="mb-1 block text-sm font-medium text-slate-300">
              Email
            </label>

            <input
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className={inputClass}
            />

          </div>

          <div>

            <label className="mb-1 block text-sm font-medium text-slate-300">
              Message
            </label>

            <textarea
              rows={4}
              required
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              className={`${inputClass} resize-none`}
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-gradient-to-r
              from-cyan-400
              to-blue-400
              py-2.5
              text-sm
              font-semibold
              text-slate-900
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
              disabled:opacity-70
            "
          >
            {loading ? (
              <>
                <LoaderCircle
                  size={16}
                  className="animate-spin"
                />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={16} />
              </>
            )}
          </button>

        </form>

      </div>
    </motion.div>
  );
};

export default ContactForm;