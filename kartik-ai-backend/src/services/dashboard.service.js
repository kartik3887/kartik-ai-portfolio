import Contact from "../models/Contact.js";
import Experience from "../models/Experience.js";
import Project from "../models/Project.js";
import Skill from "../models/Skill.js";

/*
=========================================
Get Dashboard Data
=========================================
*/
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

    recentMessages,
    recentProjects,

    recentProjectsActivity,
    recentSkillsActivity,
    recentMessagesActivity,
  ] = await Promise.all([
    /*
    ================================
    Stats
    ================================
    */

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
      status: "unread",
    }),

    /*
    ================================
    Recent Messages
    ================================
    */

    Contact.find()
      .sort({
        createdAt: -1,
      })
      .limit(3)
      .select(
        "name email subject message status createdAt"
      )
      .lean(),

    /*
    ================================
    Recent Projects
    ================================
    */

    Project.find()
      .sort({
        createdAt: -1,
      })
      .limit(3)
      .select(
        "title description image techStack isPublished featured github liveDemo createdAt"
      )
      .lean(),

    /*
    ================================
    Activity Sources
    ================================
    */

    Project.find()
      .sort({
        createdAt: -1,
      })
      .limit(3)
      .select(
        "title createdAt isPublished"
      )
      .lean(),

    Skill.find()
      .sort({
        updatedAt: -1,
      })
      .limit(3)
      .select(
        "name updatedAt createdAt"
      )
      .lean(),

    Contact.find()
      .sort({
        createdAt: -1,
      })
      .limit(3)
      .select(
        "name createdAt"
      )
      .lean(),
  ]);

  /*
  ================================
  Activity Timeline
  ================================
  */

  const activities = [
    ...recentProjectsActivity.map((project) => ({
      id: `project-${project._id}`,
      type: "project",
      title: "New Project Added",
      description: `${project.title} was added to your portfolio`,
      time: project.createdAt,
      icon: "Plus",
    })),

    ...recentSkillsActivity.map((skill) => ({
      id: `skill-${skill._id}`,
      type: "skill",
      title: "Skill Updated",
      description: `${skill.name} skill information updated`,
      time: skill.updatedAt || skill.createdAt,
      icon: "Code2",
    })),

    ...recentMessagesActivity.map((message) => ({
      id: `message-${message._id}`,
      type: "message",
      title: "New Message Received",
      description: `New message from ${message.name}`,
      time: message.createdAt,
      icon: "MessageSquare",
    })),
  ]
    .sort(
      (a, b) =>
        new Date(b.time) - new Date(a.time)
    )
    .slice(0, 6);

  /*
  ================================
  Final Dashboard Response
  ================================
  */

  return {
    stats: {
      totalProjects,
      totalSkills,
      totalExperience,
      totalMessages,
      publishedProjects,
      featuredProjects,
      publishedSkills,
      publishedExperience,
      unreadMessages,
    },

    recentMessages,

    recentProjects,

    activities,
  };
};