import { motion } from "framer-motion";

import ProfileHeader from "./ProfileHeader";
import ProfileImageUpload from "./ProfileImageUpload";
import PersonalInfoSection from "./PersonalInfoSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import SocialSection from "./SocialSection";
import AvailabilityCard from "./AvailabilityCard";
import ProfileActions from "./ProfileActions";

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ProfileSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="
        mx-auto
        w-full
        max-w-7xl
        space-y-5
        px-3
        sm:px-5
        lg:px-6
      "
    >
      {/* Header */}

      <ProfileHeader />

      {/* Top Section */}

      <div
        className="
          grid
          grid-cols-1
          gap-5

          lg:grid-cols-3
        "
      >
        {/* Image */}

        <div
          className="
            lg:col-span-1
          "
        >
          <ProfileImageUpload />
        </div>

        {/* Personal Info */}

        <div
          className="
            lg:col-span-2
          "
        >
          <PersonalInfoSection />
        </div>
      </div>

      {/* About */}

      <AboutSection />

      {/* Contact Social */}

      <div
        className="
          grid
          grid-cols-1
          gap-5

          xl:grid-cols-2
        "
      >
        <ContactSection />

        <SocialSection />
      </div>

      {/* Availability */}

      <AvailabilityCard />

      {/* Actions */}

      <ProfileActions />
    </motion.section>
  );
};

export default ProfileSection;
