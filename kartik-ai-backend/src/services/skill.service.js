import Skill from "../models/Skill.js";
import ApiError from "../utils/ApiError.js";

import {
  uploadFile,
  replaceFile,
  deleteFile

} from "./cloudinary.service.js";





export const createSkillService = async (req) => {


  const {
    name,
    category,
    level,
    color,
    order,
    isPublished

  } = req.body;



  if (!name || !category || level === undefined) {

    throw new ApiError(
      400,
      "Name, Category and Level are required"
    );

  }





  const existingSkill =
    await Skill.findOne({
      name: name.trim()
    });



  if (existingSkill) {

    throw new ApiError(
      409,
      "Skill already exists"
    );

  }




  let icon = {

    url: "",
    public_id: ""

  };




  if (req.file) {


    icon = await uploadFile(

      req.file,

      "kartik-ai/skills"

    );


  }




  const skill =
    await Skill.create({

      name: name.trim(),

      category,


      level: Number(level),


      color,


      order: Number(order),


      isPublished:
        isPublished === "true",


      icon


    });



  return skill;


};









export const getAllSkillsService = async () => {


  return await Skill.find({

    isPublished: true

  })
    .sort({

      category: 1,

      order: 1,

      createdAt: -1

    });


};








export const getAdminSkillsService = async () => {


  return await Skill.find()

    .sort({

      category: 1,

      order: 1,

      createdAt: -1

    });


};









export const getSkillByIdService = async (id) => {


  const skill =
    await Skill.findById(id);



  if (!skill) {

    throw new ApiError(
      404,
      "Skill not found"
    );

  }



  return skill;


};









export const updateSkillService = async (req) => {


  const { id } = req.params;



  const skill =
    await Skill.findById(id);



  if (!skill) {

    throw new ApiError(
      404,
      "Skill not found"
    );

  }




  const data = {

    ...req.body,


    level: Number(req.body.level),


    order: Number(req.body.order),


    isPublished:
      req.body.isPublished === "true"


  };






  if (data.name) {


    const exists =
      await Skill.findOne({

        name: data.name.trim(),

        _id: {
          $ne: id
        }

      });



    if (exists) {

      throw new ApiError(
        409,
        "Skill already exists"
      );

    }



    data.name = data.name.trim();


  }







  if (req.file) {


    const icon =
      await replaceFile(

        skill.icon?.public_id,

        req.file,

        "kartik-ai/skills"

      );



    data.icon = icon;


  }






  const updatedSkill =

    await Skill.findByIdAndUpdate(

      id,

      data,

      {

        new: true,

        runValidators: true

      }

    );



  return updatedSkill;


};









export const deleteSkillService = async (id) => {


  const skill =
    await Skill.findById(id);



  if (!skill) {

    throw new ApiError(
      404,
      "Skill not found"
    );

  }



  if (skill.icon?.public_id) {

    await deleteFile(
      skill.icon.public_id
    );

  }



  await skill.deleteOne();



  return true;


};








export const togglePublishSkillService = async (id) => {


  const skill =
    await Skill.findById(id);



  if (!skill) {

    throw new ApiError(
      404,
      "Skill not found"
    );

  }



  skill.isPublished =
    !skill.isPublished;



  await skill.save();



  return skill;


};