import Profile from "../models/Profile.js";
import { uploadFile, replaceFile } from "./cloudinary.service.js";

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
        throw new Error("Required profile fields missing");
    }

    let profileImage = {
        publicId: "",
        fileUrl: ""
    }

    if (file) {

        const result = await uploadFile(file, "kartik-ai/profile");
        console.log(result)

        profileImage = {
            publicId: result.public_id,
            fileUrl: result.url,
        };
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


export const getProfile = async (data, file) => {
    const profile = await Profile.findOne({})

    if (!profile) {
        throw new Error("Profile not found")
    }

    return profile;
}


export const updateProfile = async (data, file) => {
    const profile = await Profile.findOne({})
    if (!profile) {
        throw new Error("Profile not found")
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
    console.log(data)

    try {
        if (file) {
            const result = await replaceFile(profile.profileImage.publicId, file, "kartik-ai/profile");

            profile.profileImage = {
                publicId: result.public_id,
                fileUrl: result.url
            }
        }
    } catch (error) {
        console.error(error)
        throw new Error("Failed to replace profile image")
    }


    profile.fullName = fullName ?? profile.fullName;
    profile.title = title ?? profile.title;
    profile.subtitle = subtitle ?? profile.subtitle;
    profile.heroDescription = heroDescription ?? profile.heroDescription;
    profile.aboutDescription = aboutDescription ?? profile.aboutDescription;
    profile.roles = roles ?? profile.roles;
    profile.location = location ?? profile.location;
    profile.email = email ?? profile.email;
    profile.phone = phone ?? profile.phone;
    profile.availableForWork =
        availableForWork ?? profile.availableForWork;
    profile.socials = socials ?? profile.socials;

    await profile.save();

    return profile;
}