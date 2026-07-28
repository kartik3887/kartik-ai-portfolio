import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Code2, Globe, Activity } from "lucide-react";

import SkillList from "../skills/SkillList";
import SkillModal from "../skills/SkillModal";
import SkillForm from "../skills/SkillForm";

import { createSkill, updateSkill } from "@/api/skill.api";

const Skills = () => {
  const [openModal, setOpenModal] = useState(false);

  const [selectedSkill, setSelectedSkill] = useState(null);

  const [skills, setSkills] = useState([]);

  const publishedSkills = skills.filter((skill) => skill.isPublished).length;

  const averageLevel = skills.length
    ? Math.round(
        skills.reduce((total, skill) => total + Number(skill.level || 0), 0) /
          skills.length,
      )
    : 0;

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
      let success;

      if (selectedSkill) {
        success = await updateSkill(selectedSkill._id, formData);
      } else {
        success = await createSkill(formData);
      }

      if (success) {
        handleClose();
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
        bg-blue-500/20
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
        backdrop-blur-2xl
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
                <Code2 size={24} />
              </div>

              <div>
                <p
                  className="
                  text-xs
                  tracking-[0.3em]
                  uppercase
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

        {/* STATS */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-4
          mt-8
          "
        >
          <SkillStat
            title="Total Skills"
            value={skills.length}
            icon={<Code2 />}
            color="blue"
          />

          <SkillStat
            title="Published"
            value={publishedSkills}
            icon={<Globe />}
            color="green"
          />

          <SkillStat
            title="Average Level"
            value={`${averageLevel}%`}
            icon={<Activity />}
            color="purple"
          />
        </div>
      </motion.div>

      {/* LIST */}

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
        <SkillList onEdit={handleEdit} onSkillsLoaded={setSkills} />
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

const SkillStat = ({ title, value, icon, color }) => {
  const styles = {
    blue: "bg-blue-500/20 text-blue-400 border-blue-400/20",

    green: "bg-green-500/20 text-green-400 border-green-400/20",

    purple: "bg-purple-500/20 text-purple-400 border-purple-400/20",
  };

  return (
    <div
      className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      p-5
      hover:-translate-y-1
      transition-all
      duration-300
      "
    >
      <div
        className="
        flex
        justify-between
        items-center
        "
      >
        <div>
          <p
            className="
            text-xs
            uppercase
            tracking-wider
            text-gray-400
            "
          >
            {title}
          </p>

          <h2
            className="
            mt-2
            text-3xl
            font-bold
            text-white
            "
          >
            {value}
          </h2>
        </div>

        <div
          className={`
          p-3
          rounded-xl
          border
          ${styles[color]}
          `}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Skills;
