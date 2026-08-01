import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Code2,
  Globe,
  Activity,
} from "lucide-react";

import SkillList from "./components/skills/SkillList";
import SkillModal from "./components/skills/SkillModal";
import SkillForm from "./components/skills/SkillForm";
import SkillStat from "./components/skills/SkillStat";

import useSkills from "@/hooks/useSkills";

const Skills = () => {
  const {
    skills,
    loading,
    createSkill,
    updateSkill,
    deleteSkill,
    togglePublish,
  } = useSkills();

  const [openModal, setOpenModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const publishedSkills = skills.filter(
    (skill) => skill.isPublished,
  ).length;

  const averageLevel = skills.length
    ? Math.round(
        skills.reduce(
          (total, skill) => total + Number(skill.level),
          0,
        ) / skills.length,
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

  const handleSubmit = async (formData) => {
    let success = false;

    if (selectedSkill) {
      success = await updateSkill(
        selectedSkill._id,
        formData,
      );
    } else {
      success = await createSkill(formData);
    }

    if (success) {
      handleClose();
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
      {/* Glow */}

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

      {/* Header */}

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
         hover:border-blue-500/40

      hover:shadow-lg

      hover:shadow-blue-500/10

      transition
        "
      >
        <div
          className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-5
          "
        >
          <div>
            <div className="flex items-center gap-3">

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
                <Code2 size={22} />
              </div>

              <div>
                <p
                  className="
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-blue-400
                  "
                >
                  SKILL MANAGEMENT
                </p>

                <h1
                  className="
                  mt-1
                  text-3xl
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
              mt-3
              text-sm
              text-gray-400
              "
            >
              Manage your technical skills,
              expertise levels and portfolio
              showcase.
            </p>
          </div>

          <button
            onClick={handleAdd}
            className="
            flex
            items-center
            gap-2
            px-5
            py-2.5
             rounded-lg

        bg-blue-600/20

        border
        border-blue-500/30

        text-blue-300

        text-sm

        hover:bg-blue-600

        hover:text-white

        transition
            "
          >
            <Plus size={17} />
            Add Skill
          </button>
        </div>

        {/* Stats */}

        <div
          className="
          grid
          md:grid-cols-3
          gap-4
          mt-6
          "
        >
          <SkillStat
            title="Total Skills"
            value={skills.length}
            icon={<Code2 size={20} />}
            color="blue"
          />

          <SkillStat
            title="Published"
            value={publishedSkills}
            icon={<Globe size={20} />}
            color="green"
          />

          <SkillStat
            title="Average Level"
            value={`${averageLevel}%`}
            icon={<Activity size={20} />}
            color="purple"
          />
        </div>
      </motion.div>

      {/* List */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-4
        "
      >
        <SkillList
          skills={skills}
          loading={loading}
          onEdit={handleEdit}
          onDelete={deleteSkill}
          onPublish={togglePublish}
        />
      </motion.div>

      {/* Modal */}

      <SkillModal
        open={openModal}
        title={
          selectedSkill
            ? "Edit Skill"
            : "Create Skill"
        }
        onClose={handleClose}
      >
        <SkillForm
          loading={loading}
          skill={selectedSkill}
          onSubmit={handleSubmit}
        />
      </SkillModal>
    </div>
  );
};

export default Skills;