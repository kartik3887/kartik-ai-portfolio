import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import toast from "react-hot-toast";

import { getSkills, deleteSkill, togglePublishSkill } from "@/api/skill.api";

import SkillCard from "./SkillCard";

const SkillList = ({ onEdit }) => {
  const [skills, setSkills] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        console.log("SKILL API CALL");

        setLoading(true);

        const response = await getSkills();

        setSkills(response.data || response || []);
      } catch (error) {
        toast.error("Failed to load skills");
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteSkill(id);

      setSkills((prev) => prev.filter((item) => item._id !== id));

      toast.success("Skill deleted");
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  const handlePublish = async (id) => {
    try {
      await togglePublishSkill(id);

      setSkills((prev) =>
        prev.map((item) =>
          item._id === id
            ? {
                ...item,
                isPublished: !item.isPublished,
              }
            : item,
        ),
      );
    } catch (error) {
      toast.error("Publish failed");
    }
  };

  if (loading) {
    return (
      <div
        className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-3
gap-5
"
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="
h-60
rounded-3xl
bg-white/5
animate-pulse
"
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-3
gap-5
"
    >
      {skills.map((skill) => (
        <SkillCard
          key={skill._id}
          skill={skill}
          onEdit={onEdit}
          onDelete={handleDelete}
          onPublish={handlePublish}
        />
      ))}
    </motion.div>
  );
};

export default SkillList;
