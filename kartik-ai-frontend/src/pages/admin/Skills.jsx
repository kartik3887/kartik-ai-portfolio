import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Code2, Layers, Globe, Sparkles } from "lucide-react";

import SkillList from "./components/skills/SkillList";
import SkillModal from "./components/skills/SkillModal";
import SkillForm from "./components/skills/SkillForm";

import { createSkill, updateSkill } from "@/api/skill.api";

const Skills = () => {
  const [openModal, setOpenModal] = useState(false);

  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleAdd = () => {
    setSelectedSkill(null);

    setOpenModal(true);
  };

  const handleEdit = (skill) => {
    setSelectedSkill(skill);

    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);

    setSelectedSkill(null);
  };

  const handleSubmitSkill = async (formData) => {
    try {
      let response;

      if (selectedSkill) {
        response = await updateSkill(selectedSkill._id, formData);
      } else {
        response = await createSkill(formData);
      }

      if (response) {
        handleClose();

        // page reload nahi
        // SkillList state independent aahe
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="
      relative
      space-y-6
      overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
        absolute
        -top-40
        -right-40
        w-96
        h-96
        rounded-full
        bg-blue-600/20
        blur-[140px]
        pointer-events-none
        "
      />

      <div
        className="
        absolute
        -bottom-40
        -left-40
        w-96
        h-96
        rounded-full
        bg-cyan-500/20
        blur-[140px]
        pointer-events-none
        "
      />

      {/* HEADER */}

      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
        relative
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-5
        md:p-6
        "
      >
        <div
          className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-6
          "
        >
          <div>
            <div
              className="
              flex
              items-center
              gap-3
              "
            >
              <div
                className="
                p-3
                rounded-2xl
                bg-blue-500/20
                border
                border-blue-400/20
                text-blue-400
                "
              >
                <Code2 size={26} />
              </div>

              <div>
                <p
                  className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-blue-400
                  "
                >
                  AI SKILL MANAGEMENT
                </p>

                <h1
                  className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-white
                  "
                >
                  Skills
                </h1>
              </div>
            </div>

            <p
              className="
              mt-4
              text-gray-400
              max-w-xl
              "
            >
              Manage your technical skills, expertise level and portfolio
              capabilities.
            </p>
          </div>

          <button
            onClick={handleAdd}
            className="
            flex
            items-center
            justify-center
            gap-2
            px-6
            py-3
            rounded-2xl

            bg-gradient-to-r
            from-blue-600
            via-purple-600
            to-cyan-600

            text-white
            font-semibold

            shadow-lg

            hover:scale-105
            active:scale-95

            transition
            "
          >
            <Plus size={18} />
            Add Skill
          </button>
        </div>
      </motion.div>

      {/* SKILL LIST */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
        relative
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-4
        md:p-5
        "
      >
        <SkillList onEdit={handleEdit} />
      </motion.div>

      {/* MODAL */}

      <SkillModal
        open={openModal}
        title={selectedSkill ? "Edit Skill" : "Create Skill"}
        onClose={handleClose}
      >
        <SkillForm skill={selectedSkill} onSubmit={handleSubmitSkill} />
      </SkillModal>
    </div>
  );
};

export default Skills;
