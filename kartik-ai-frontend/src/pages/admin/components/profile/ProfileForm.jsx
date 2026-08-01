import {
  User,
  BriefcaseBusiness,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Camera,
  Save,
  Sparkles,
  FileText,
  Code2,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

const ProfileForm = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="space-y-8"
    >
      {/* Header */}

      <div
        className="
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
      "
      >
        <div
          className="
          flex
          items-center
          justify-between
        "
        >
          <div>
            <h1
              className="
              text-3xl
              font-bold
              text-white
            "
            >
              Profile Management
            </h1>

            <p
              className="
              mt-2
              text-gray-400
            "
            >
              Manage your AI portfolio identity
            </p>
          </div>

          <div
            className="
            flex
            items-center
            gap-2
            rounded-full
            border border-green-400/20
            bg-green-400/10
            px-4
            py-2
            text-green-400
          "
          >
            <CheckCircle2 size={18} />
            Active
          </div>
        </div>
      </div>

      {/* Profile Card */}

      <div
        className="
        grid
        lg:grid-cols-3
        gap-8
      "
      >
        {/* Image */}

        <div
          className="
          rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
          flex
          flex-col
          items-center
        "
        >
          <div
            className="
            relative
          "
          >
            <div
              className="
              w-56
              h-56
              rounded-full
              border-4
              border-cyan-400
              p-1
              shadow-lg
              shadow-cyan-500/30
            "
            >
              <div
                className="
                w-full
                h-full
                rounded-full
                bg-slate-800
                flex
                items-center
                justify-center
              "
              >
                <User size={80} className="text-gray-500" />
              </div>
            </div>

            <button
              className="
                absolute
                bottom-4
                right-4
                rounded-full
                bg-cyan-500
                p-3
                hover:scale-110
                transition
              "
            >
              <Camera size={20} className="text-white" />
            </button>
          </div>

          <h3
            className="
            mt-6
            text-xl
            font-semibold
            text-white
          "
          >
            Profile Image
          </h3>

          <p
            className="
            mt-2
            text-sm
            text-gray-400
            text-center
          "
          >
            Upload professional profile image
          </p>
        </div>

        {/* Basic Info */}

        <div
          className="
          lg:col-span-2
          rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
        "
        >
          <SectionTitle
            icon={<User size={20} />}
            title="Personal Information"
          />

          <div
            className="
            grid
            md:grid-cols-2
            gap-6
            mt-6
          "
          >
            <InputBox
              icon={<User size={18} />}
              label="Full Name"
              placeholder="Your name"
            />

            <InputBox
              icon={<BriefcaseBusiness size={18} />}
              label="Title"
              placeholder="Full Stack Developer"
            />

            <InputBox
              icon={<Sparkles size={18} />}
              label="Subtitle"
              placeholder="Building futuristic web apps"
              full
            />
          </div>
        </div>
      </div>

      {/* About Section */}

      <SectionCard title="About Information" icon={<FileText size={20} />}>
        <TextAreaBox placeholder="Hero description..." />

        <TextAreaBox placeholder="About description..." />
      </SectionCard>

      {/* Contact */}

      <SectionCard title="Contact Information" icon={<Mail size={20} />}>
        <div
          className="
          grid
          md:grid-cols-2
          gap-6
        "
        >
          <InputBox
            icon={<MapPin size={18} />}
            label="Location"
            placeholder="Mumbai, India"
          />

          <InputBox
            icon={<Mail size={18} />}
            label="Email"
            placeholder="email@example.com"
          />

          <InputBox
            icon={<Phone size={18} />}
            label="Phone"
            placeholder="+91 XXXXX XXXXX"
          />

          <InputBox
            icon={<Code2 size={18} />}
            label="Roles"
            placeholder="React Developer"
          />
        </div>
      </SectionCard>

      {/* Social Links */}

      <SectionCard title="Social Presence" icon={<Github size={20} />}>
        <div
          className="
          grid
          md:grid-cols-2
          gap-6
        "
        >
          <InputBox
            icon={<Github size={18} />}
            label="Github"
            placeholder="github.com"
          />

          <InputBox
            icon={<Linkedin size={18} />}
            label="Linkedin"
            placeholder="linkedin.com"
          />

          <InputBox
            icon={<Twitter size={18} />}
            label="Twitter"
            placeholder="twitter.com"
          />

          <InputBox
            icon={<Instagram size={18} />}
            label="Instagram"
            placeholder="instagram.com"
          />

          <InputBox
            icon={<Facebook size={18} />}
            label="Facebook"
            placeholder="facebook.com"
          />
        </div>
      </SectionCard>

      {/* Save Button */}

      <div
        className="
        flex
        justify-end
      "
      >
        <button
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-500
            px-8
            py-4
            text-white
            font-semibold
            shadow-lg
            shadow-cyan-500/30
            hover:scale-105
            transition
          "
        >
          <Save size={20} />
          Save Profile
        </button>
      </div>
    </motion.div>
  );
};

const SectionCard = ({ title, icon, children }) => (
  <div
    className="
    rounded-3xl
    border border-white/10
    bg-white/5
    backdrop-blur-xl
    p-8
  "
  >
    <SectionTitle icon={icon} title={title} />

    <div className="mt-6 space-y-6">{children}</div>
  </div>
);

const SectionTitle = ({ icon, title }) => (
  <div
    className="
    flex
    items-center
    gap-3
    text-white
  "
  >
    <div
      className="
      rounded-xl
      bg-cyan-500/20
      p-2
      text-cyan-400
    "
    >
      {icon}
    </div>

    <h2
      className="
      text-xl
      font-semibold
    "
    >
      {title}
    </h2>
  </div>
);

const InputBox = ({ icon, label, placeholder, full }) => (
  <div className={full ? "md:col-span-2" : ""}>
    <label
      className="
      mb-2
      block
      text-sm
      text-gray-300
    "
    >
      {label}
    </label>

    <div className="relative">
      <div
        className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-cyan-400
      "
      >
        {icon}
      </div>

      <input
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border border-white/10
          bg-slate-900/60
          px-12
          py-3
          text-white
          outline-none
          focus:border-cyan-400
        "
      />
    </div>
  </div>
);

const TextAreaBox = ({ placeholder }) => (
  <textarea
    rows={5}
    placeholder={placeholder}
    className="
      w-full
      rounded-xl
      border border-white/10
      bg-slate-900/60
      p-4
      text-white
      outline-none
      resize-none
      focus:border-cyan-400
    "
  />
);

export default ProfileForm;
