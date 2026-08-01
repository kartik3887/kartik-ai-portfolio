import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        subtitle: {
            type: String,
            required: true,
            trim: true,
        },

        heroDescription: {
            type: String,
            required: true,
            trim: true,
        },

        aboutDescription: {
            type: String,
            required: true,
            trim: true,
        },

        profileImage: {
            publicId: {
                type: String,
                default: "",
            },

            fileUrl: {
                type: String,
                default: "",
            },
        },


        roles: [
            {
                type: String,
                trim: true,
            },
        ],

        location: {
            type: String,
            trim: true,
        },

        email: {
            type: String,
            trim: true,
            lowercase: true,
        },

        phone: {
            type: String,
            trim: true,
        },

        availableForWork: {
            type: Boolean,
            default: true,
        },

        socials: {
            github: {
                type: String,
                default: "",
            },

            linkedin: {
                type: String,
                default: "",
            },

            twitter: {
                type: String,
                default: "",
            },

            instagram: {
                type: String,
                default: "",
            },

            facebook: {
                type: String,
                default: ""
            }
        },
    },
    {
        timestamps: true,
    }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;