import { useCallback, useEffect, useState } from "react";

import toast from "react-hot-toast";

import {
  getAdminExperiences,
  createExperience as createApi,
  updateExperience as updateApi,
  deleteExperience as deleteApi,
  togglePublishExperience as toggleApi,
} from "@/api/experience.api";

const useExperiences = () => {
  const [experiences, setExperiences] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchExperiences = useCallback(async () => {
    try {
      setLoading(true);

      const res = await getAdminExperiences();

      setExperiences(res.data || []);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to load experiences",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExperiences();
  }, [fetchExperiences]);

  const createExperience = async (data) => {
    try {
      await createApi(data);

      toast.success("Experience created");

      await fetchExperiences();

      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Create failed");

      return false;
    }
  };

  const updateExperience = async (id, data) => {
    try {
      await updateApi(id, data);

      toast.success("Experience updated");

      await fetchExperiences();

      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");

      return false;
    }
  };

  const deleteExperience = async (id) => {
    try {
      await deleteApi(id);

      toast.success("Experience deleted");

      await fetchExperiences();

      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed");

      return false;
    }
  };

  const togglePublish = async (id) => {
    try {
      await toggleApi(id);

      toast.success("Status updated");

      await fetchExperiences();

      return true;
    } catch (error) {
      toast.error("Status update failed");

      return false;
    }
  };

  return {
    experiences,
    loading,
    fetchExperiences,
    createExperience,
    updateExperience,
    deleteExperience,
    togglePublish,
  };
};

export default useExperiences;
