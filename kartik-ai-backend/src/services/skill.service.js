import Skill from "../models/Skill.js";
import ApiError from "../utils/ApiError.js";


export const createSkillService = async (req) => {
  const {
    name,
    category,
    icon,
    level,
    color,
    order,
    isPublished,
  } = req.body;

  if (!name || !category || !icon || level === undefined) {
    throw new ApiError(
      400,
      "Name, Category, Icon and Level are required"
    );
  }

  const existingSkill = await Skill.findOne({
    name: name.trim(),
  });

  if (existingSkill) {
    throw new ApiError(409, "Skill already exists");
  }

  const skill = await Skill.create({
    name: name.trim(),
    category,
    icon: icon.trim(),
    level: Number(level),
    color,
    order: Number(order) || 0,
    isPublished: isPublished === "true" || isPublished === true,
  });

  return skill;
};

export const getAllSkillsService = async () => {
  return await Skill.find({
    isPublished: true,
  }).sort({
    category: 1,

    order: 1,

    createdAt: -1,
  });
};

export const getAdminSkillsService = async () => {
  return await Skill.find()

    .sort({
      category: 1,

      order: 1,

      createdAt: -1,
    });
};

export const getSkillByIdService = async (id) => {
  const skill = await Skill.findById(id);

  if (!skill) {
    throw new ApiError(404, "Skill not found");
  }

  return skill;
};

export const updateSkillService = async (req) => {
  const { id } = req.params;

  const skill = await Skill.findById(id);

  if (!skill) {
    throw new ApiError(404, "Skill not found");
  }

  const data = {
    ...req.body,
    level: Number(req.body.level),
    order: Number(req.body.order) || 0,
    isPublished:
      req.body.isPublished === "true" ||
      req.body.isPublished === true,
  };

  if (data.name) {
    const exists = await Skill.findOne({
      name: data.name.trim(),
      _id: { $ne: id },
    });

    if (exists) {
      throw new ApiError(409, "Skill already exists");
    }

    data.name = data.name.trim();
  }

  if (data.icon) {
    data.icon = data.icon.trim();
  }

  const updatedSkill = await Skill.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  return updatedSkill;
};

export const deleteSkillService = async (id) => {
  const skill = await Skill.findById(id);

  if (!skill) {
    throw new ApiError(404, "Skill not found");
  }

  await skill.deleteOne();

  return true;
};

export const togglePublishSkillService = async (id) => {
  const skill = await Skill.findById(id);

  if (!skill) {
    throw new ApiError(404, "Skill not found");
  }

  skill.isPublished = !skill.isPublished;

  await skill.save();

  return skill;
};
