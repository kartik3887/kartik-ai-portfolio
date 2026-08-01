import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Frontend",
        "Backend",
        "Database",
        "DevOps",
        "Programming",
        "AI",
        "Tools",
        "Other",
      ],
    },

    // React Icon name
    // Example: FaReact, FaNodeJs, SiJavascript
    icon: {
      type: String,
      required: true,
      trim: true,
    },

    level: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },

    color: {
      type: String,
      default: "#3B82F6",
    },

    order: {
      type: Number,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;