import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

const ContactForm = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-gradient-to-br
        from-white/[0.08]
        via-white/[0.05]
        to-transparent
        p-6
        backdrop-blur-2xl
        transition-all
        duration-500

        hover:border-cyan-400/30
        hover:shadow-[0_0_60px_rgba(34,211,238,0.12)]

        sm:p-8
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-20
          -top-20
          h-60
          w-60
          rounded-full
          bg-cyan-400/20
          blur-[100px]
        "
      />

      {/* Shine */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-0
          h-full
          w-32
          rotate-12
          bg-white/10
          blur-xl
          transition-all
          duration-700
          group-hover:left-[120%]
        "
      />

      <div className="relative">
        {/* Header */}

        <div className="mb-8">
          <div
            className="
              mb-4
              flex
              items-center
              gap-2
              text-cyan-300
            "
          >
            <Sparkles size={18} />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-widest
              "
            >
              Contact Me
            </span>
          </div>

          <h3
            className="
              text-3xl
              font-black
              text-white
            "
          >
            Send Me A Message
          </h3>

          <p
            className="
              mt-3
              text-sm
              leading-7
              text-slate-400
            "
          >
            Have an idea or opportunity? Let's create something amazing
            together.
          </p>
        </div>

        <form className="space-y-6">
          {/* Name */}

          <div>
            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-slate-300
              "
            >
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5

                px-5
                py-3.5

                text-white

                placeholder:text-slate-500

                outline-none

                transition-all
                duration-300

                focus:border-cyan-400/50
                focus:bg-cyan-400/5
                focus:ring-4
                focus:ring-cyan-400/10
              "
            />
          </div>

          {/* Email */}

          <div>
            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-slate-300
              "
            >
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5

                px-5
                py-3.5

                text-white

                placeholder:text-slate-500

                outline-none

                transition-all
                duration-300

                focus:border-cyan-400/50
                focus:bg-cyan-400/5
                focus:ring-4
                focus:ring-cyan-400/10
              "
            />
          </div>

          {/* Message */}

          <div>
            <label
              className="
                mb-2
                block
                text-sm
                font-medium
                text-slate-300
              "
            >
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="
                w-full

                resize-none

                rounded-2xl

                border
                border-white/10

                bg-white/5

                px-5
                py-4

                text-white

                placeholder:text-slate-500

                outline-none

                transition-all
                duration-300

                focus:border-cyan-400/50

                focus:bg-cyan-400/5

                focus:ring-4

                focus:ring-cyan-400/10
              "
            />
          </div>

          {/* Button */}

          <button
            type="submit"
            className="
              group/button

              relative

              flex

              w-full

              items-center

              justify-center

              gap-3

              overflow-hidden

              rounded-2xl

              bg-gradient-to-r

              from-cyan-400

              to-blue-400


              px-6

              py-4


              font-bold

              text-slate-900


              transition-all

              duration-300


              hover:-translate-y-1


              hover:shadow-[0_0_40px_rgba(34,211,238,0.45)]


              active:scale-95

            "
          >
            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/40
                to-transparent
                transition-transform
                duration-700
                group-hover/button:translate-x-full
              "
            />

            <span className="relative">Send Message</span>

            <Send
              size={18}
              className="
                relative

                transition-transform

                duration-300

                group-hover/button:translate-x-1

              "
            />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
