import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { loginAdmin } from "@/api/auth.api";
import { setToken, setUser } from "@/utils/storage";
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
    debugger;
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await loginAdmin(formData);
      console.log("LOGIN RESPONSE:", response);

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
      min-h-screen
      flex
      items-center
      justify-center
      bg-black
      relative
      overflow-hidden
    "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        w-[500px]
        h-[500px]
        bg-blue-600/20
        blur-[120px]
        rounded-full
      "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          relative
          w-full
          max-w-md
          p-8
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
        "
      >
        <div className="text-center mb-8">
          <h1
            className="
            text-4xl
            font-bold
            text-white
          "
          >
            KARTIK<span className="text-blue-500">.AI</span>
          </h1>

          <p
            className="
            text-gray-400
            mt-2
          "
          >
            Admin Access Portal
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}

          <div className="relative">
            <Mail
              className="
                absolute
                left-4
                top-3.5
                text-gray-400
              "
              size={20}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Admin Email"
              className="
                w-full
                pl-12
                pr-4
                py-3
                rounded-xl
                bg-black/40
                border
                border-white/20
                text-white
                outline-none
                focus:border-blue-500
              "
              required
            />
          </div>

          {/* Password */}

          <div className="relative">
            <Lock
              className="
                absolute
                left-4
                top-3.5
                text-gray-400
              "
              size={20}
            />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="
                w-full
                pl-12
                pr-12
                py-3
                rounded-xl
                bg-black/40
                border
                border-white/20
                text-white
                outline-none
                focus:border-blue-500
              "
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute
                right-4
                top-3
                text-gray-400
              "
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {error && (
            <p
              className="
                text-red-400
                text-sm
                text-center
              "
            >
              {error}
            </p>
          )}

          <button
            disabled={loading}
            className="
              w-full
              py-3
              rounded-xl
              bg-gradient-to-r
              from-blue-500
              to-purple-600
              text-white
              font-semibold
              hover:scale-[1.02]
              transition
            "
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
