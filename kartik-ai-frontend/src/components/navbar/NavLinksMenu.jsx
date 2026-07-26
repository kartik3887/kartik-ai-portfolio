import { navLinks } from "./navLinks";


const NavLinksMenu = ({
  mobile = false,
  onLinkClick
}) => {


  return (

    <nav
      className={
        mobile
          ?
          `
          flex
          flex-col
          gap-7
          `
          :
          `
          hidden
          items-center
          gap-7
          lg:flex
          `
      }
    >


      {
        navLinks.map((link)=>(

          <a

            key={link.id}

            href={link.href}

            onClick={onLinkClick}

            aria-label={link.label}

            className={`

              group

              relative

              whitespace-nowrap

              font-medium

              transition-all

              duration-300


              ${
                mobile
                ?
                `
                text-lg
                text-slate-300

                hover:translate-x-2

                `
                :
                `
                text-sm
                text-slate-200

                `
              }


              hover:text-cyan-300

            `}

          >


            {link.label}



            {/* Desktop underline */}

            {
              !mobile && (

                <span

                  className="
                    absolute

                    left-0

                    -bottom-2

                    h-[2px]

                    w-0

                    rounded-full

                    bg-gradient-to-r

                    from-cyan-400

                    to-violet-500

                    transition-all

                    duration-300

                    group-hover:w-full
                  "

                />

              )
            }





            {/* Mobile underline */}

            {
              mobile && (

                <span

                  className="
                    absolute

                    left-0

                    -bottom-1

                    h-[2px]

                    w-0

                    rounded-full

                    bg-cyan-400

                    transition-all

                    duration-300

                    group-hover:w-full
                  "

                />

              )
            }


          </a>


        ))
      }


    </nav>

  );
};


export default NavLinksMenu;