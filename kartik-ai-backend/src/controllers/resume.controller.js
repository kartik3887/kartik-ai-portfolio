import {
  createResumeService,
  getResumeService,
  deleteResumeService,
} from "../services/resume.service.js";

export const uploadResume = async (req, res) => {
  try {
    const resume = await createResumeService(req.file, req.user.id);

    res.status(201).json({
      success: true,

      message: "Resume uploaded successfully",

      resume,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

export const getResume = async (req, res) => {
  try {
    const resume = await getResumeService();

    res.status(200).json({
      success: true,

      resume,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

export const deleteResume = async (req, res) => {
  try {
    await deleteResumeService(req.params.id);

    res.json({
      success: true,

      message: "Resume deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};
