import { useState } from "react";
import { useForm } from "react-hook-form";
import { Upload, FileText, X } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ResumeForm = ({
  onSubmit,
  loading,
  onClose,
}) => {
  const { handleSubmit } = useForm();

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      toast.error("Only PDF files are allowed.");
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      toast.error("Maximum file size is 5MB.");
      return;
    }

    setFile(selectedFile);
  };

    const submitHandler = async () => {
    if (!file) {
      return toast.error("Please select a resume.");
    }

    const formData = new FormData();

    formData.append("resume", file);

    await onSubmit(formData);

    setFile(null);

    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-6"
    >
              <label
        className="
        flex
        cursor-pointer
        flex-col
        items-center
        justify-center
        rounded-2xl
        border-2
        border-dashed
        border-white/10
        bg-zinc-950
        p-10
        transition
        hover:border-cyan-500
        "
      >
        <Upload
          size={45}
          className="mb-4 text-cyan-400"
        />

        <h3 className="text-lg font-semibold text-white">
          Upload Resume
        </h3>

        <p className="mt-2 text-center text-sm text-zinc-400">
          Drag & Drop or Click to choose a PDF
        </p>

        <input
          type="file"
          hidden
          accept=".pdf"
          onChange={handleFileChange}
        />
      </label>
            {file && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-zinc-900
          p-4
          "
        >
          <div className="flex items-center gap-3">

            <FileText
              className="text-cyan-400"
            />

            <div>

              <p className="font-medium text-white">
                {file.name}
              </p>

              <p className="text-sm text-zinc-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>

            </div>

          </div>

          <button
            type="button"
            onClick={() => setFile(null)}
            className="
            rounded-lg
            p-2
            text-red-400
            transition
            hover:bg-red-500/10
            "
          >
            <X size={18} />
          </button>

        </motion.div>
      )}

            <div className="flex justify-end gap-3">

        <button
          type="button"
          onClick={onClose}
          className="
          rounded-xl
          border
          border-white/10
          px-5
          py-2.5
          text-white
          transition
          hover:bg-white/10
          "
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="
          rounded-xl
          bg-cyan-500
          px-6
          py-2.5
          font-semibold
          text-black
          transition
          hover:bg-cyan-400
          disabled:cursor-not-allowed
          disabled:opacity-50
          "
        >
          {loading ? "Uploading..." : "Upload Resume"}
        </button>

      </div>
    </form>
  );
};

export default ResumeForm;