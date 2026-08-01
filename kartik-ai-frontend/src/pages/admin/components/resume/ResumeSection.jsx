import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText, Plus } from "lucide-react";
import toast from "react-hot-toast";

import { getResume, uploadResume, deleteResume } from "@/api/resume.api";

import ResumeCard from "./ResumeCard";
import ResumeModal from "./ResumeModal";

const ResumeSection = () => {
  const [resume, setResume] = useState(null);

  const [loading, setLoading] = useState(true);

  const [uploading, setUploading] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadResume();
  }, []);

  const loadResume = async () => {
    try {
      setLoading(true);

      const data = await getResume();

      setResume(data.resume || null);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load resume");
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (formData) => {
    try {
      setUploading(true);

      const data = await uploadResume(formData);

      setResume(data.resume);

      toast.success(data.message);

      setOpen(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async () => {
    if (!resume) return;

    const confirmDelete = window.confirm("Delete current resume?");

    if (!confirmDelete) return;

    try {
      const data = await deleteResume(resume._id);

      toast.success(data.message);

      setResume(null);
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed");
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/10 p-3">
                <FileText className="h-6 w-6 text-cyan-400" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">Resume</h2>

                <p className="text-sm text-zinc-400">
                  Manage your latest resume
                </p>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setOpen(true)}
            className="flex items-center justify-center gap-2 px-5 py-3 font-semibold  rounded-lg

        bg-blue-600/20

        border
        border-blue-500/30

        text-blue-300

        text-sm

        hover:bg-blue-600

        hover:text-white

        transition"
          >
            <Plus size={18} />
            Upload Resume
          </motion.button>
        </div>
      </motion.div>
      <motion.div>
        <ResumeCard resume={resume} loading={loading} onDelete={handleDelete} />

        <ResumeModal
          open={open}
          setOpen={setOpen}
          onSubmit={handleUpload}
          loading={uploading}
        />
      </motion.div>
    </>
  );
};

export default ResumeSection;
