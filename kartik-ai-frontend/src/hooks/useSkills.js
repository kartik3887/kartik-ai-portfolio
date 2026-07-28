import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
    getAdminSkills,
    createSkill as createSkillApi,
    updateSkill as updateSkillApi,
    deleteSkill as deleteSkillApi,
    togglePublishSkill as togglePublishSkillApi,
} from "@/api/skill.api";



const useSkills = () => {


    const [skills, setSkills] = useState([]);

    const [loading, setLoading] = useState(false);





    const fetchSkills = async () => {

        try {

            setLoading(true);


            const response = await getAdminSkills();


            setSkills(
                response.data || []
            );


        }
        catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to load skills"
            );

        }
        finally {

            setLoading(false);

        }

    };





    useEffect(() => {

        fetchSkills();

    }, []);








    const createSkill = async (formData) => {


        try {


            await createSkillApi(formData);


            toast.success(
                "Skill created successfully"
            );



            await fetchSkills();


            return true;


        }
        catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to create skill"
            );


            return false;

        }


    };








    const updateSkill = async (id, formData) => {


        try {


            await updateSkillApi(
                id,
                formData
            );


            toast.success(
                "Skill updated successfully"
            );


            await fetchSkills();


            return true;



        }
        catch (error) {


            toast.error(
                error.response?.data?.message ||
                "Failed to update skill"
            );


            return false;


        }


    };










    const deleteSkill = async (id) => {


        try {


            await deleteSkillApi(id);


            toast.success(
                "Skill deleted"
            );



            await fetchSkills();



        }
        catch (error) {


            toast.error(
                "Delete failed"
            );


        }


    };










    const togglePublish = async (id) => {


        try {


            await togglePublishSkillApi(id);


            await fetchSkills();


        }
        catch (error) {

            toast.error(
                "Publish update failed"
            );

        }


    };






    return {


        skills,

        loading,

        fetchSkills,

        createSkill,

        updateSkill,

        deleteSkill,

        togglePublish


    };


};



export default useSkills;