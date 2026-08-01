import { motion } from "framer-motion";

import ResumeSection from "./components/resume/ResumeSection";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      <ResumeSection />
    </motion.div>
  );
};

export default Resume;