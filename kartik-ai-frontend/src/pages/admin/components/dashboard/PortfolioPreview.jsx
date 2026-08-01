import {
  ExternalLink,
  Globe,
  Eye,
} from "lucide-react";

import { motion } from "framer-motion";


const PortfolioPreview = () => {


  const portfolioUrl = "https://your-portfolio-url.com";



  return (

    <motion.div

      initial={{
        opacity:0,
        y:15
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:0.3
      }}

      className="
      space-y-4
      "
    >



      {/* Preview Window */}

      <div
        className="
        overflow-hidden

        rounded-2xl

        border
        border-white/10

        bg-black/20
        "
      >



        {/* Browser Header */}

        <div
          className="
          flex

          items-center

          justify-between

          px-4

          py-3

          bg-white/5

          border-b

          border-white/10
          "
        >


          <div
            className="
            flex

            items-center

            gap-2
            "
          >

            <span
              className="
              w-2.5
              h-2.5

              rounded-full

              bg-red-400
              "
            />


            <span
              className="
              w-2.5
              h-2.5

              rounded-full

              bg-yellow-400
              "
            />


            <span
              className="
              w-2.5
              h-2.5

              rounded-full

              bg-green-400
              "
            />

          </div>



          <div
            className="
            flex

            items-center

            gap-2

            text-xs

            text-gray-400
            "
          >

            <Globe size={13}/>

            Live Portfolio

          </div>


        </div>







        {/* Website Preview */}

        <div
          className="
          h-52

          flex

          items-center

          justify-center

          bg-gradient-to-br

          from-blue-500/10

          via-purple-500/10

          to-transparent
          "
        >


          <div
            className="
            text-center
            "
          >


            <Eye
              size={35}
              className="
              mx-auto

              text-blue-400
              "
            />


            <p
              className="
              mt-3

              text-sm

              text-gray-300
              "
            >

              Portfolio Preview

            </p>


            <p
              className="
              text-xs

              text-gray-500

              mt-1
              "
            >

              Your live website preview will appear here

            </p>


          </div>


        </div>




      </div>








      {/* Footer */}

      <div
        className="
        flex

        flex-col

        sm:flex-row

        sm:items-center

        sm:justify-between

        gap-3
        "
      >


        <div>

          <h3
            className="
            text-sm

            font-semibold

            text-white
            "
          >

            Kartik.AI Portfolio

          </h3>


          <p
            className="
            text-xs

            text-gray-400

            mt-1
            "
          >

            Your professional developer portfolio

          </p>

        </div>






        <a

          href={portfolioUrl}

          target="_blank"

          rel="noreferrer"

          className="
          flex

          items-center

          justify-center

          gap-2

          px-4

          py-2

          rounded-lg

          bg-blue-600/20

          border

          border-blue-500/30

          text-blue-300

          text-sm

          hover:bg-blue-600

          hover:text-white

          transition
          "

        >

          Open Portfolio

          <ExternalLink size={15}/>

        </a>



      </div>




    </motion.div>

  );

};


export default PortfolioPreview;