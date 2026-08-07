import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";

import {
  createProfile,
  getAdminProfile,
  updateAdminProfile,
} from "@/api/profile.api";
import { toast } from "react-hot-toast";

import ProfileHeader from "./ProfileHeader";
import ProfileImageUpload from "./ProfileImageUpload";
import PersonalInfoSection from "./PersonalInfoSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import SocialSection from "./SocialSection";
import AvailabilityCard from "./AvailabilityCard";
import ProfileActions from "./ProfileActions";

const initialValues = {
  fullName: "",
  title: "",
  subtitle: "",
  heroDescription: "",
  aboutDescription: "",
  email: "",
  phone: "",
  location: "",
  roles: [],
  availableForWork: false,
  socials: {
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "",
  },
  profileImage: null,
};

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
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  const validationSchema = yup.object({
    fullName: yup.string().required("Full name is required"),
    title: yup.string().required("Title is required"),
    email: yup.string().email("Invalid email"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);

        const formData = new FormData();

        formData.append("fullName", values.fullName);
        formData.append("title", values.title);
        formData.append("subtitle", values.subtitle);
        formData.append("heroDescription", values.heroDescription);
        formData.append("aboutDescription", values.aboutDescription);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        formData.append("location", values.location);

        formData.append("availableForWork", values.availableForWork);

        formData.append("roles", JSON.stringify(values.roles));

        formData.append("socials", JSON.stringify(values.socials));

        if (values.profileImage instanceof File) {
          formData.append("profileImage", values.profileImage);
        }

        let response;

        if (profile) {
          response = await updateAdminProfile(formData);
        } else {
          response = await createProfile(formData);
        }

        toast.success(response.message);

        await fetchProfile();
      } catch (error) {
        console.log("ERROR =>", error);
        console.log("RESPONSE =>", error.response);
        console.log("DATA =>", error.response?.data);

        toast.error(error.response?.data?.message || "Failed to save profile");
      } finally {
        setSubmitting(false);
      }
    },
  });

  const fetchProfile = async () => {
    try {
      setLoading(true);

      const response = await getAdminProfile();

      if (!response.success) {
        throw new Error(response.message);
      }

      const profileData = response.data;

      console.log("PROFILE =>", profileData);

      setProfile(profileData);

      formik.setValues({
        fullName: profileData.fullName ?? "",
        title: profileData.title ?? "",
        subtitle: profileData.subtitle ?? "",
        heroDescription: profileData.heroDescription ?? "",
        aboutDescription: profileData.aboutDescription ?? "",
        email: profileData.email ?? "",
        phone: profileData.phone ?? "",
        location: profileData.location ?? "",
        roles: profileData.roles ?? [],
        availableForWork: profileData.availableForWork ?? false,

        socials: {
          github: profileData.socials?.github ?? "",
          linkedin: profileData.socials?.linkedin ?? "",
          twitter: profileData.socials?.twitter ?? "",
          instagram: profileData.socials?.instagram ?? "",
          facebook: profileData.socials?.facebook ?? "",
        },

        profileImage: profileData.profileImage ?? null,
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        Loading...
      </div>
    );
  }

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
          <ProfileImageUpload formik={formik} />
        </div>

        {/* Personal Info */}

        <div
          className="
            lg:col-span-2
          "
        >
          <PersonalInfoSection formik={formik} />
        </div>
      </div>

      {/* About */}

      <AboutSection formik={formik} />

      {/* Contact Social */}

      <div
        className="
          grid
          grid-cols-1
          gap-5

          xl:grid-cols-2
        "
      >
        <ContactSection formik={formik} />

        <SocialSection formik={formik} />
      </div>

      {/* Availability */}

      <AvailabilityCard formik={formik} />

      {/* Actions */}

      <ProfileActions formik={formik} />
    </motion.section>
  );
};

export default ProfileSection;
