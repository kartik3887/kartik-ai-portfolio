import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getSkills,
  createSkill as createSkillApi,
  updateSkill as updateSkillApi,
  deleteSkill as deleteSkillApi,
  togglePublishSkill as togglePublishSkillApi,
} from "@/api/skill.api";

const useSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSkills = useCallback(async () => {
    try {
      setLoading(true);

      const response = await getSkills();

      setSkills(response.data || []);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to load skills"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);

  const createSkill = async (formData) => {
    try {
      await createSkillApi(formData);

      toast.success("Skill created successfully");

      await fetchSkills();

      return true;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to create skill"
      );

      return false;
    }
  };

  const updateSkill = async (id, formData) => {
    try {
      await updateSkillApi(id, formData);

      toast.success("Skill updated successfully");

      await fetchSkills();

      return true;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to update skill"
      );

      return false;
    }
  };

  const deleteSkill = async (id) => {
    try {
      await deleteSkillApi(id);

      toast.success("Skill deleted successfully");

      await fetchSkills();

      return true;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to delete skill"
      );

      return false;
    }
  };

  const togglePublish = async (id) => {
    try {
      await togglePublishSkillApi(id);

      toast.success("Skill status updated");

      await fetchSkills();

      return true;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to update publish status"
      );

      return false;
    }
  };

  return {
    skills,
    loading,
    fetchSkills,
    createSkill,
    updateSkill,
    deleteSkill,
    togglePublish,
  };
};

export default useSkills;