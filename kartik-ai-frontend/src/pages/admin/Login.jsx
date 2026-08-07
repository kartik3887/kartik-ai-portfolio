import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, Sparkles, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { loginAdmin } from "@/api/auth.api";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      const response = await loginAdmin(formData);
      login(response.token, response.user);
      navigate("/admin/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        relative
       min-h-screen
       flex
        items-center
        justify-center
        overflow-hidden
        bg-[#020617]
        px-4
      "
    >
      {/* Background Grid */}

      <div
        className="
          absolute
          inset-0

          opacity-20

          bg-[linear-gradient(rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.08)_1px,transparent_1px)]

          bg-[size:45px_45px]
        "
      />

      {/* Cyan Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute

          -top-32
          left-1/2

          -translate-x-1/2

          h-[500px]
          w-[500px]

          rounded-full

          bg-cyan-400/20

          blur-[120px]
        "
      />

      {/* Violet Glow */}

      <div
        className="
          absolute

          bottom-0
          right-0

          h-[400px]
          w-[400px]

          rounded-full

          bg-violet-500/20

          blur-[120px]
        "
      />

      {/* Login Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="
          relative
          z-10

          w-full

          max-w-md

          overflow-hidden

          rounded-[32px]

          border
          border-cyan-400/20

          bg-slate-950/70

          backdrop-blur-3xl

          p-8

          shadow-[0_25px_80px_rgba(0,0,0,0.55)]
        "
      >
        {/* Top Glow Line */}

        <div
          className="
            absolute
            top-0
            left-0

            h-[2px]

            w-full

            bg-gradient-to-r

            from-transparent

            via-cyan-400

            to-transparent
          "
        />

        {/* Header */}

        <div
          className="
            text-center
            mb-8
          "
        >
          <div
            className="
              mx-auto
              mb-4

              flex

              h-14
              w-14

              items-center
              justify-center

              rounded-2xl

              border
              border-cyan-400/20

              bg-cyan-400/10

              text-cyan-400
            "
          >
            <Sparkles size={26} />
          </div>

          <h1
            className="
              text-3xl

              font-black

              tracking-tight

              text-white
            "
          >
            KARTIK
            <span
              className="
                text-cyan-400
              "
            >
              .AI
            </span>
          </h1>

          <p
            className="
              mt-2

              text-sm

              text-slate-400
            "
          >
            Admin Access Portal
          </p>

          <div
            className="
              mt-4

              flex

              items-center
              justify-center

              gap-2

              text-xs

              text-cyan-300/80
            "
          >
            <ShieldCheck size={14} />
            Secure AI System Login
          </div>
        </div>
        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="
            space-y-5
          "
        >
          {/* Email Field */}

          <div
            className="
              group
              relative
            "
          >
            <Mail
              size={18}
              className="
                absolute

                left-4
                top-1/2

                -translate-y-1/2

                text-slate-400

                transition-all

                duration-300

                group-focus-within:text-cyan-400
              "
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Admin Email"
              className="
                w-full

                rounded-xl

                border
                border-white/10

                bg-black/30

                py-3.5

                pl-11
                pr-4

                text-sm

                text-white

                placeholder:text-slate-500

                outline-none

                backdrop-blur-xl

                transition-all

                duration-300

                focus:border-cyan-400/50

                focus:bg-cyan-400/5

                focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]
              "
              required
            />
          </div>

          {/* Password Field */}

          <div
            className="
              group
              relative
            "
          >
            <Lock
              size={18}
              className="
                absolute

                left-4
                top-1/2

                -translate-y-1/2

                text-slate-400

                transition-all

                duration-300

                group-focus-within:text-cyan-400
              "
            />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="
                w-full

                rounded-xl

                border
                border-white/10

                bg-black/30

                py-3.5

                pl-11

                pr-12

                text-sm

                text-white

                placeholder:text-slate-500

                outline-none

                backdrop-blur-xl

                transition-all

                duration-300

                focus:border-cyan-400/50

                focus:bg-cyan-400/5

                focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]
              "
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute

                right-4
                top-1/2

                -translate-y-1/2

                text-slate-400

                transition-all

                hover:text-cyan-300
              "
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Error */}

          {error && (
            <motion.p
              initial={{
                opacity: 0,
                y: -5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                  rounded-lg

                  border
                  border-red-400/20

                  bg-red-400/10

                  px-3
                  py-2

                  text-center

                  text-xs

                  text-red-300
                "
            >
              {error}
            </motion.p>
          )}

          {/* Login Button */}

          <motion.button
            disabled={loading}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              group

              relative

              flex

              w-full

              items-center
              justify-center

              overflow-hidden

              rounded-xl

              bg-gradient-to-r

              from-cyan-400

              via-sky-500

              to-violet-600


              py-3.5


              font-semibold

              text-black


              transition-all

              duration-300


              disabled:cursor-not-allowed

              disabled:opacity-60

              hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
            "
          >
            {/* Shine */}

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


                group-hover:translate-x-full
              "
            />

            <span
              className="
                relative
                z-10
              "
            >
              {loading ? "Authenticating..." : "Login"}
            </span>
          </motion.button>
        </form>

        {/* Footer */}

        <p
          className="
            mt-6

            text-center

            text-[11px]

            uppercase

            tracking-[0.25em]

            text-slate-500
          "
        >
          KARTIK.AI Security Layer
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
