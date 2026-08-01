import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

import useExperiences from "@/hooks/useExperiences";

import ExperienceTable from "./components/experience/ExperienceTable";
import ExperienceModal from "./components/experience/ExperienceModal";

const Experience = () => {
  const {
    experiences,
    loading,
    createExperience,
    updateExperience,
    deleteExperience,
    togglePublish,
  } = useExperiences();

  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState(null);

  const handleCreate = () => {
    setSelected(null);

    setOpen(true);
  };

  const handleEdit = (experience) => {
    setSelected(experience);

    setOpen(true);
  };

  const handleSubmit = async (data) => {
    let success;

    if (selected) {
      success = await updateExperience(selected._id, data);
    } else {
      success = await createExperience(data);
    }

    if (success) {
      setOpen(false);

      setSelected(null);
    }
  };

  return (
    <div
      className="
      space-y-5
      px-2
      sm:px-4
      "
    >
      {/* HEADER */}

      <div
        className="
        flex
        flex-col
        sm:flex-row
        sm:items-center
        sm:justify-between
        gap-4
        "
      >
        <div>
          <h1
            className="
            text-xl
            sm:text-2xl
            font-bold
            text-white
            "
          >
            Experience
          </h1>

          <p
            className="
            text-xs
            sm:text-sm
            text-gray-400
            mt-1
            "
          >
            Manage your professional journey
          </p>
        </div>

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={handleCreate}
          className="
          flex
          items-center
          justify-center
          gap-2
          w-full
          sm:w-auto
          px-4
          h-10
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
          Add Experience
        </motion.button>
      </div>

      {/* TABLE */}

      <div
        className="
        w-full
        overflow-x-auto
        "
      >
        <ExperienceTable
          experiences={experiences}
          loading={loading}
          onEdit={handleEdit}
          onDelete={deleteExperience}
          onPublish={togglePublish}
        />
      </div>

      {/* MODAL */}

      {open && (
        <ExperienceModal
          open={open}
          setOpen={setOpen}
          experience={selected}
          onSubmit={handleSubmit}
          loading={loading}
        />
      )}
    </div>
  );
};

export default Experience;
