import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#050816]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:38px_38px]
          "
        />

        {/* Cyan Glow */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-72
            w-72
            -translate-x-1/2
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />

        {/* Violet Glow */}
        <div
          className="
            absolute
            bottom-0
            right-0
            h-72
            w-72
            rounded-full
            bg-violet-500/10
            blur-[120px]
          "
        />
      </div>

      <div
        className="
          mx-auto
          max-w-6xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mx-auto
            max-w-2xl
            text-center
          "
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-4
              py-1.5
              text-[11px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-cyan-300
            "
          >
            Get In Touch
          </span>

          <h2
            className="
              mt-4
              text-3xl
              font-black
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Let's Build Something{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-blue-400
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              Amazing
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-slate-400
              sm:text-base
            "
          >
            Have a project idea, collaboration opportunity,
            or just want to discuss technology? Feel free to
            connect with me.
          </p>
        </motion.div>

        {/* Content */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5

            lg:grid-cols-2
            lg:gap-8
          "
        >
          <ContactInfo />

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;