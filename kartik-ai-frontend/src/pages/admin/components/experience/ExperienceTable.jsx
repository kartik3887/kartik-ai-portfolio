import { Pencil, Trash2, Briefcase } from "lucide-react";

import { motion } from "framer-motion";

const ExperienceTable = ({
  experiences,
  loading,
  onEdit,
  onDelete,
  onPublish,
}) => {
  if (loading) {
    return (
      <div
        className="
        h-40
        flex
        items-center
        justify-center
        text-gray-400
        "
      >
        Loading experiences...
      </div>
    );
  }

  if (!experiences.length) {
    return (
      <div
        className="
        h-40
        rounded-xl
        border
        border-white/10
        bg-white/5
        flex
        items-center
        justify-center
        text-gray-400
        "
      >
        No experiences found
      </div>
    );
  }

  return (
    <>
      {/* DESKTOP TABLE */}

      <div
        className="
        hidden
        md:block
        rounded-2xl
        border
        border-white/10
        bg-white/5
        overflow-hidden
        "
      >
        <div className="overflow-x-auto">
          <table
            className="
            w-full
            text-sm
            "
          >
            <thead>
              <tr
                className="
                border-b
                border-white/10
                text-gray-400
                "
              >
                <th className="p-4 text-left">Company</th>

                <th className="p-4 text-left">Role</th>

                <th className="p-4 text-left">Type</th>

                <th className="p-4 text-left">Duration</th>

                <th className="p-4 text-left">Status</th>

                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {experiences.map((item) => (
                <motion.tr
                  key={item._id}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                  border-b
                  border-white/10
                  text-gray-200
                  "
                >
                  <td className="p-4">
                    <Company item={item} />
                  </td>

                  <td className="p-4">
                    <p className="font-medium">{item.role}</p>

                    <p className="text-xs text-gray-400">{item.location}</p>
                  </td>

                  <td className="p-4">
                    <Badge>{item.employmentType}</Badge>
                  </td>

                  <td className="p-4 text-xs">
                    {new Date(item.startDate).toLocaleDateString()}

                    {" - "}

                    {item.currentlyWorking
                      ? "Present"
                      : new Date(item.endDate).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <Status item={item} onPublish={onPublish} />
                  </td>

                  <td className="p-4">
                    <Actions item={item} onEdit={onEdit} onDelete={onDelete} />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MOBILE CARDS */}

      <div
        className="
        md:hidden
        space-y-4
        "
      >
        {experiences.map((item) => (
          <motion.div
            key={item._id}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
            p-4
            rounded-2xl
            bg-white/5
            border
            border-white/10
            "
          >
            <Company item={item} />

            <div className="mt-4 space-y-2">
              <p className="text-white font-medium">{item.role}</p>

              <p className="text-xs text-gray-400">{item.location}</p>

              <Badge>{item.employmentType}</Badge>

              <p className="text-xs text-gray-400">
                {new Date(item.startDate).toLocaleDateString()}

                {" - "}

                {item.currentlyWorking
                  ? "Present"
                  : new Date(item.endDate).toLocaleDateString()}
              </p>

              <Status item={item} onPublish={onPublish} />

              <div className="pt-3">
                <Actions item={item} onEdit={onEdit} onDelete={onDelete} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

const Company = ({ item }) => (
  <div className="flex items-center gap-3">
    {item.companyLogo?.url ? (
      <img
        src={item.companyLogo.url}
        className="
        h-10
        w-10
        rounded-xl
        object-contain
        bg-white/10
        p-1
        "
      />
    ) : (
      <div
        className="
        h-10
        w-10
        rounded-xl
        bg-white/10
        flex
        items-center
        justify-center
        "
      >
        <Briefcase size={18} />
      </div>
    )}

    <span
      className="
      text-white
      font-medium
      "
    >
      {item.company}
    </span>
  </div>
);

const Badge = ({ children }) => (
  <span
    className="
px-3
py-1
rounded-full
text-xs
bg-blue-500/10
text-blue-400
inline-block
"
  >
    {children}
  </span>
);

const Status = ({ item, onPublish }) => (
  <button
    onClick={() => onPublish(item._id)}
    className={`
px-3
py-1
rounded-full
text-xs

${
  item.isPublished
    ? "bg-green-500/10 text-green-400"
    : "bg-gray-500/10 text-gray-400"
}

`}
  >
    {item.isPublished ? "Published" : "Draft"}
  </button>
);

const Actions = ({ item, onEdit, onDelete }) => (
  <div
    className="
flex
gap-2
"
  >
    <button
      onClick={() => onEdit(item)}
      className="
h-8
w-8
rounded-lg
bg-blue-500/10
text-blue-400
flex
items-center
justify-center
"
    >
      <Pencil size={15} />
    </button>

    <button
      onClick={() => onDelete(item._id)}
      className="
h-8
w-8
rounded-lg
bg-red-500/10
text-red-400
flex
items-center
justify-center
"
    >
      <Trash2 size={15} />
    </button>
  </div>
);

export default ExperienceTable;
