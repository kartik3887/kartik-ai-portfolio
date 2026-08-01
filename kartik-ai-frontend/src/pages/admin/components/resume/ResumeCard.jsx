import { motion } from "framer-motion";
import {
  FileText,
  Calendar,
  Download,
  Eye,
  Trash2,
} from "lucide-react";

const ResumeCard = ({ resume, loading, onDelete }) => {
  if (loading) {
    return (
      <div className="animate-pulse rounded-3xl border border-white/10 bg-zinc-900/60 p-6">
        <div className="mb-5 h-8 w-52 rounded-lg bg-zinc-800" />
        <div className="mb-4 h-5 w-full rounded-lg bg-zinc-800" />
        <div className="h-5 w-2/3 rounded-lg bg-zinc-800" />
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="rounded-3xl border border-dashed border-white/10 bg-zinc-900/50 py-20 text-center backdrop-blur-xl">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/10">
          <FileText className="h-12 w-12 text-cyan-400" />
        </div>

        <h2 className="text-2xl font-bold text-white">
          Resume Not Found
        </h2>

        <p className="mt-3 text-zinc-400">
          Upload your latest resume to make it available.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      layout
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-zinc-900/60
        backdrop-blur-xl
        transition-all
        hover:border-cyan-500/40
        hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
      "
    >
      <div className="flex flex-col gap-8 p-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex items-start gap-5">
          <div
            className="
              flex
              h-16
              w-16
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-cyan-500/10
            "
          >
            <FileText className="h-8 w-8 text-cyan-400" />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              {resume.title}
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-5 text-sm text-zinc-400">
              <span className="flex items-center gap-2">
                <Calendar size={16} />

                {new Date(resume.createdAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>

              <span>
                <span className="font-medium text-white">
                  {resume.downloads}
                </span>{" "}
                Downloads
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 lg:w-auto">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={resume.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-11
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-cyan-500
              px-5
              font-medium
              text-black
              transition
              hover:bg-cyan-400
            "
          >
            <Eye size={18} />
            View PDF
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={resume.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-11
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-white/10
              px-5
              font-medium
              text-white
              transition
              hover:border-cyan-500
              hover:bg-white/5
            "
          >
            <Download size={18} />
            Download
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={onDelete}
            className="
              flex
              h-11
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-red-500/10
              px-5
              font-medium
              text-red-400
              transition
              hover:bg-red-500/20
            "
          >
            <Trash2 size={18} />
            Delete
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeCard;