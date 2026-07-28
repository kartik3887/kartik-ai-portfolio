import Contact from "../models/Contact.js";
import Experience from "../models/Experience.js";
import Project from "../models/Project.js";
import Skill from "../models/Skill.js";

export const getDashboardStatsService = async () => {
  const [
    totalProjects,
    totalSkills,
    totalExperience,
    totalMessages,
    publishedProjects,
    featuredProjects,
    publishedSkills,
    publishedExperience,
    unreadMessages,
  ] = await Promise.all([
    Project.countDocuments(),

    Skill.countDocuments(),

    Experience.countDocuments(),

    Contact.countDocuments(),

    Project.countDocuments({
      isPublished: true,
    }),

    Project.countDocuments({
      featured: true,
    }),

    Skill.countDocuments({
      isPublished: true,
    }),

    Experience.countDocuments({
      isPublished: true,
    }),

    Contact.countDocuments({
      isRead: false,
    }),
  ]);

  return {
    totalProjects,
    totalSkills,
    totalExperience,
    totalMessages,
    publishedProjects,
    featuredProjects,
    publishedSkills,
    publishedExperience,
    unreadMessages,
  };
};