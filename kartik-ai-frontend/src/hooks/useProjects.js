import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getAdminProjects,
  createProject as createProjectApi,
  updateProject as updateProjectApi,
  deleteProject as deleteProjectApi,
  togglePublish as togglePublishApi,
  toggleFeatured as toggleFeaturedApi,
} from "@/api/project.api";


const useProjects = () => {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);


  // =========================
  // Fetch Projects
  // =========================

  const fetchProjects = async () => {

    try {

      setLoading(true);

      const response = await getAdminProjects();

      console.log(
        "FETCH PROJECT RESPONSE:",
        response
      );


      setProjects(
        response.data || []
      );


    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to load projects"
      );

    } finally {

      setLoading(false);

    }

  };


  useEffect(() => {

    fetchProjects();

  }, []);



  // =========================
  // Create
  // =========================

  const createProject = async (formData) => {

    try {

      await createProjectApi(formData);

      toast.success(
        "Project created successfully"
      );


      await fetchProjects();


      return true;


    } catch(error){

      toast.error(
        error.response?.data?.message ||
        "Failed to create project"
      );

      return false;

    }

  };



  // =========================
  // Update
  // =========================

  const updateProject = async (
    id,
    formData
  ) => {

    try {

      await updateProjectApi(
        id,
        formData
      );


      toast.success(
        "Project updated successfully"
      );


      await fetchProjects();


      return true;


    } catch(error){

      toast.error(
        error.response?.data?.message ||
        "Failed to update project"
      );


      return false;

    }

  };



  // =========================
  // Delete
  // =========================

  const deleteProject = async (id) => {

    try {

      await deleteProjectApi(id);


      toast.success(
        "Project deleted"
      );


      await fetchProjects();


    } catch(error){

      toast.error(
        error.response?.data?.message ||
        "Delete failed"
      );

    }

  };



  // =========================
  // Publish
  // =========================

  const togglePublish = async(id)=>{

    try{

      await togglePublishApi(id);

      await fetchProjects();


    }catch(error){

      toast.error(
        "Publish update failed"
      );

    }

  };



  // =========================
  // Featured
  // =========================

  const toggleFeatured = async(id)=>{

    try{

      await toggleFeaturedApi(id);

      await fetchProjects();


    }catch(error){

      toast.error(
        "Featured update failed"
      );

    }

  };



  return {

    projects,
    loading,

    fetchProjects,

    createProject,
    updateProject,

    deleteProject,

    togglePublish,
    toggleFeatured,

  };

};


export default useProjects;