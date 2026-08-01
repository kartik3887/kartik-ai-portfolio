import { motion } from "framer-motion";

import MessageSection from "./components/messages/MessageSection";

const Message = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      <MessageSection />
    </motion.div>
  );
};

export default Message;