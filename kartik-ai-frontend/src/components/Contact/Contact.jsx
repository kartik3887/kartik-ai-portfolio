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
        py-20
        sm:py-24
        lg:py-32
      "
    >

      {/* Background */}
      <div
        className="
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:35px_35px]
          "
        />


        {/* Cyan Glow */}
        <div
          className="
            absolute
            left-1/2
            top-10
            h-[280px]
            w-[280px]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/10
            blur-[100px]

            sm:h-[400px]
            sm:w-[400px]
          "
        />


        {/* Violet Glow */}
        <div
          className="
            absolute
            bottom-0
            right-[-80px]
            h-[250px]
            w-[250px]
            rounded-full
            bg-violet-500/10
            blur-[120px]

            sm:h-[400px]
            sm:w-[400px]
          "
        />

      </div>



      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >


        {/* Header */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.7
          }}

          className="
            mx-auto
            max-w-3xl
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
              py-2
              text-xs
              font-medium
              text-cyan-300

              sm:text-sm
            "
          >
            Get In Touch
          </span>



          <h2
            className="
              mt-5
              text-3xl
              font-black
              tracking-tight
              text-white

              sm:text-5xl
              lg:text-6xl
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
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-slate-400

              sm:text-base
              md:text-lg
            "
          >
            Have a project idea, collaboration opportunity, or just want to
            discuss technology? Feel free to connect with me.
          </p>


        </motion.div>





        {/* Content */}

        <div
          className="
            mt-12

            grid
            grid-cols-1

            gap-6

            sm:mt-16

            lg:grid-cols-2
            lg:gap-12
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