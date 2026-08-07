import { User, Camera, UploadCloud } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ProfileImageUpload = ({ formik }) => {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    formik.setFieldValue("profileImage", file);

    const imageUrl = URL.createObjectURL(file);

    setPreview((oldPreview) => {
      if (oldPreview?.startsWith("blob:")) {
        URL.revokeObjectURL(oldPreview);
      }

      return imageUrl;
    });
  };

  // Existing image from backend
  useEffect(() => {
    const image = formik.values.profileImage;

    if (
      image &&
      !(image instanceof File) &&
      typeof image === "object" &&
      image.fileUrl
    ) {
      setPreview(image.fileUrl);
    }
  }, [formik.values.profileImage]);

  // Cleanup blob urls
  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all hover:border-cyan-400/30 sm:p-6"
    >
      {/* Glow */}
      <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative flex flex-col items-center">
        {/* Hidden Input */}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />

        {/* Avatar */}
        <motion.div whileHover={{ scale: 1.05 }} className="relative">
          {/* Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[-6px] rounded-full border border-dashed border-cyan-400/40"
          />

          <div className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-2 border-cyan-400/50 bg-slate-900 shadow-lg shadow-cyan-500/20 sm:h-44 sm:w-44">
            {preview ? (
              <img
                src={preview}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            ) : (
              <User size={60} className="text-gray-500" />
            )}
          </div>

          {/* Camera Button */}
          <motion.button
            type="button"
            onClick={handleClick}
            whileHover={{
              scale: 1.15,
              rotate: 10,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="absolute bottom-2 right-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg shadow-cyan-500/40"
          >
            <Camera size={18} />
          </motion.button>
        </motion.div>

        {/* Text */}
        <h3 className="mt-6 text-base font-semibold text-white sm:text-lg">
          Profile Image
        </h3>

        <p className="mt-2 max-w-xs text-center text-xs leading-relaxed text-gray-400 sm:text-sm">
          Upload your professional image for portfolio identity.
        </p>

        {/* Upload Button */}
        <motion.button
          type="button"
          onClick={handleClick}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-5 flex cursor-pointer items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-2.5 text-sm text-cyan-400 transition hover:bg-cyan-500/20"
        >
          <UploadCloud size={17} />
          Change Image
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProfileImageUpload;
