import Profile from "../models/Profile.js";
import { uploadFile, replaceFile } from "./cloudinary.service.js";

// ================= CREATE PROFILE =================

export const createProfile = async (data, file) => {
    const existingProfile = await Profile.findOne();

    if (existingProfile) {
        throw new Error("Profile already exists");
    }

    const {
        fullName,
        title,
        subtitle,
        heroDescription,
        aboutDescription,
        roles,
        location,
        email,
        phone,
        availableForWork,
        socials,
    } = data;

    if (!fullName || !title || !email) {
        throw new Error("Required profile fields are missing");
    }

    let profileImage = {
        publicId: "",
        fileUrl: "",
    };

    if (file) {
        try {
            const result = await uploadFile(file, "kartik-ai/profile");

            profileImage = {
                publicId: result.public_id,
                fileUrl: result.url,
            };
        } catch (error) {
            console.error(error);
            throw new Error("Failed to upload profile image");
        }
    }

    const profile = await Profile.create({
        fullName,
        title,
        subtitle,
        heroDescription,
        aboutDescription,
        profileImage,
        roles,
        location,
        email,
        phone,
        availableForWork,
        socials,
    });

    return profile;
};

// ================= GET PROFILE =================

export const getProfile = async () => {
    const profile = await Profile.findOne({});

    if (!profile) {
        throw new Error("Profile not found");
    }

    return profile;
};

// ================= UPDATE PROFILE =================

export const updateProfile = async (data, file) => {
    const profile = await Profile.findOne({});

    if (!profile) {
        throw new Error("Profile not found");
    }

    const {
        fullName,
        title,
        subtitle,
        heroDescription,
        aboutDescription,
        roles,
        location,
        email,
        phone,
        availableForWork,
        socials,
    } = data;

    // Replace profile image if new file uploaded
    if (file) {
        try {
            const result = await replaceFile(
                profile.profileImage?.publicId,
                file,
                "kartik-ai/profile"
            );

            profile.profileImage = {
                publicId: result.public_id,
                fileUrl: result.url,
            };
        } catch (error) {
            console.error(error);
            throw new Error("Failed to replace profile image");
        }
    }

    Object.assign(profile, {
        fullName: fullName ?? profile.fullName,
        title: title ?? profile.title,
        subtitle: subtitle ?? profile.subtitle,
        heroDescription: heroDescription ?? profile.heroDescription,
        aboutDescription: aboutDescription ?? profile.aboutDescription,
        roles: roles ?? profile.roles,
        location: location ?? profile.location,
        email: email ?? profile.email,
        phone: phone ?? profile.phone,
        availableForWork:
            availableForWork ?? profile.availableForWork,
        socials: socials ?? profile.socials,
    });

    await profile.save();

    return profile;
};