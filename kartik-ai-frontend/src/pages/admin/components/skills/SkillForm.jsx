import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Upload, Code2, Palette, Sparkles, Rocket } from "lucide-react";

const validationSchema = Yup.object({
  name: Yup.string().required("Skill name is required"),

  category: Yup.string().required("Category is required"),

  level: Yup.number().min(0).max(100).required("Skill level is required"),
});

const inputClass = `
w-full
h-11
px-4

rounded-xl

bg-white/5

border
border-white/10

text-white

outline-none

placeholder:text-gray-500

focus:border-cyan-400

focus:ring-2

focus:ring-cyan-400/20

transition
`;

const SkillForm = ({ skill, onSubmit }) => {
  const [preview, setPreview] = useState("");

  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      name: skill?.name || "",

      category: skill?.category || "",

      level: skill?.level || 0,

      color: skill?.color || "#22d3ee",

      order: skill?.order || 1,

      isPublished: skill?.isPublished || false,

      icon: null,
    },

    validationSchema,

    onSubmit: (values) => {
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (key === "icon") {
          if (value) {
            formData.append("icon", value);
          }
        } else {
          formData.append(key, value);
        }
      });

      onSubmit(formData);
    },
  });

  useEffect(() => {
    setPreview(skill?.icon?.url || "");
  }, [skill]);

  const handleIconChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    formik.setFieldValue("icon", file);

    setPreview(URL.createObjectURL(file));
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="
space-y-5
pb-4
"
    >
      {/* BASIC INFO */}

      <div
        className="
grid
md:grid-cols-2
gap-4
"
      >
        <div>
          <label className="text-sm text-gray-300">Skill Name</label>

          <div className="relative mt-2">
            <Code2
              size={17}
              className="
absolute
left-3
top-3
text-cyan-400
"
            />

            <input
              name="name"
              placeholder="React"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="
pl-10
${inputClass}
"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-300">Category</label>

          <select
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            className={`
${inputClass}
mt-2
bg-[#0b1220]
`}
          >
            <option value="">Select Category</option>

            <option>Frontend</option>

            <option>Backend</option>

            <option>Database</option>

            <option>DevOps</option>

            <option>Tools</option>
          </select>
        </div>
      </div>

      {/* LEVEL */}

      <div
        className="
rounded-2xl
border
border-white/10
bg-white/5
p-4
"
      >
        <div
          className="
flex
justify-between
mb-3
"
        >
          <label className="text-sm text-gray-300">Skill Level</label>

          <span className="text-cyan-400 font-bold">
            {formik.values.level}%
          </span>
        </div>

        <input
          type="range"
          name="level"
          min="0"
          max="100"
          value={formik.values.level}
          onChange={formik.handleChange}
          className="
w-full
accent-cyan-400
"
        />
      </div>

      {/* COLOR + ORDER */}

      <div
        className="
grid
md:grid-cols-2
gap-4
"
      >
        <div>
          <label className="text-sm text-gray-300">Theme Color</label>

          <div
            className="
flex
items-center
gap-3
mt-2
"
          >
            <Palette size={18} className="text-purple-400" />

            <input
              type="color"
              name="color"
              value={formik.values.color}
              onChange={formik.handleChange}
              className="
w-12
h-11
rounded-lg
bg-transparent
cursor-pointer
"
            />

            <input
              name="color"
              value={formik.values.color}
              onChange={formik.handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-300">Display Order</label>

          <input
            type="number"
            name="order"
            value={formik.values.order}
            onChange={formik.handleChange}
            className={`
${inputClass}
mt-2
`}
          />
        </div>
      </div>

      {/* ICON UPLOAD */}

      <div
        className="
rounded-2xl
border
border-white/10
bg-white/5
p-4
"
      >
        <div
          className="
flex
items-center
gap-2
text-white
mb-3
"
        >
          <Sparkles size={18} className="text-yellow-400" />
          Skill Icon
        </div>

        <label
          className="
flex
items-center
justify-center
h-28
rounded-xl
border
border-dashed
border-white/20
cursor-pointer
hover:bg-white/5
transition
"
        >
          <Upload className="text-cyan-400" />

          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleIconChange}
          />
        </label>

        {preview && (
          <img
            src={preview}
            className="
mt-4
w-20
h-20
rounded-xl
object-contain
bg-white/5
p-2
"
          />
        )}
      </div>

      {/* PUBLISH */}

      <label
        className="
flex
items-center
justify-between
p-4
rounded-xl
border
border-white/10
bg-white/5
text-white
"
      >
        <div
          className="
flex
items-center
gap-2
"
        >
          <Rocket size={18} className="text-green-400" />
          Publish Skill
        </div>

        <input
          type="checkbox"
          name="isPublished"
          checked={formik.values.isPublished}
          onChange={formik.handleChange}
        />
      </label>

      <button
        type="submit"
        className="
w-full
h-12
rounded-xl
bg-gradient-to-r
from-blue-600
via-cyan-500
to-purple-600
text-white
font-semibold
hover:scale-[1.02]
active:scale-95
transition
"
      >
        {skill ? "Update Skill" : "Create Skill"}
      </button>
    </form>
  );
};

export default SkillForm;
