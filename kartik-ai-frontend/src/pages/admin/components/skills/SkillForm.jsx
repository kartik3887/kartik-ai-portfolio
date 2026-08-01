import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Code2, Palette, Rocket, Layers } from "lucide-react";

const validationSchema = Yup.object({
  name: Yup.string().required("Skill name is required"),

  category: Yup.string().required("Category is required"),

  icon: Yup.string().required("Icon is required"),

  level: Yup.number().min(0).max(100).required("Skill level is required"),

  order: Yup.number().required("Display order is required"),
});

const inputClass = `
w-full

h-10

px-3

rounded-xl

bg-white/5

border

border-white/10

text-white

text-sm

outline-none

placeholder:text-gray-500

focus:border-blue-500

transition
`;

const SkillForm = ({ loading, skill, onSubmit }) => {
  const [preview, setPreview] = useState("");

  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      name: skill?.name || "",
      category: skill?.category || "",
      icon: skill?.icon || "",
      level: skill?.level ?? 80,
      color: skill?.color || "#3B82F6",
      order: skill?.order ?? 1,
      isPublished: skill?.isPublished ?? true,
    },

    validationSchema,

    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  useEffect(() => {
    setPreview(skill?.icon?.url || "");
  }, [skill]);

  const imageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    formik.setFieldValue("icon", file);

    setPreview(URL.createObjectURL(file));
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="
  space-y-3
  "
    >
      {/* BASIC INFO */}

      <div
        className="
grid

md:grid-cols-2

gap-3
"
      >
        <div>
          <label
            className="
block

mb-1

text-xs

text-gray-300
"
          >
            Skill Name
          </label>

          <div className="relative">
            <Code2
              size={16}
              className="
absolute

left-3

top-2.5

text-blue-400
"
            />

            <input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="React"
              className={`
pl-9
${inputClass}
`}
            />
          </div>
        </div>

        <div>
          <div className="relative">
            <div>
              <label
                className="
      block
      mb-1
      text-xs
      text-gray-300
    "
              >
                Category
              </label>

              <div className="relative">
                <Layers
                  size={16}
                  className="
        absolute
        left-3
        top-2.5
        text-blue-400
        pointer-events-none
      "
                />

                <select
                  name="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  className={`
        ${inputClass}
        pl-9
        appearance-none
        bg-[#0F172A]
        text-white
      `}
                >
                  <option value="" className="bg-[#0F172A] text-white">
                    Select Category
                  </option>

                  <option value="Frontend" className="bg-[#0F172A] text-white">
                    Frontend
                  </option>

                  <option value="Backend" className="bg-[#0F172A] text-white">
                    Backend
                  </option>

                  <option value="Database" className="bg-[#0F172A] text-white">
                    Database
                  </option>

                  <option
                    value="Programming"
                    className="bg-[#0F172A] text-white"
                  >
                    Programming
                  </option>

                  <option value="DevOps" className="bg-[#0F172A] text-white">
                    DevOps
                  </option>

                  <option value="AI" className="bg-[#0F172A] text-white">
                    AI
                  </option>

                  <option value="Tools" className="bg-[#0F172A] text-white">
                    Tools
                  </option>

                  <option value="Other" className="bg-[#0F172A] text-white">
                    Other
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LEVEL */}

      <div
        className="
rounded-xl

border

border-white/10

bg-white/5

p-3
"
      >
        <div
          className="
flex

items-center

justify-between

mb-2
"
        >
          <label
            className="
text-xs

text-gray-300
"
          >
            Skill Level
          </label>

          <span
            className="
text-sm

font-semibold

text-blue-400
"
          >
            {formik.values.level}%
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          name="level"
          value={formik.values.level}
          onChange={formik.handleChange}
          className="
w-full

accent-blue-500

cursor-pointer
"
        />
      </div>

      {/* COLOR + ORDER */}

      <div
        className="
grid

md:grid-cols-2

gap-3
"
      >
        <div>
          <label
            className="
block

mb-1

text-xs

text-gray-300
"
          >
            Theme Color
          </label>

          <div
            className="
flex

items-center

gap-3
"
          >
            <Palette
              size={16}
              className="
text-purple-400
"
            />

            <input
              type="color"
              name="color"
              value={formik.values.color}
              onChange={formik.handleChange}
              className="
w-10

h-10

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
          <label
            className="
block

mb-1

text-xs

text-gray-300
"
          >
            Display Order
          </label>

          <input
            type="number"
            name="order"
            value={formik.values.order}
            onChange={formik.handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Icons */}

      <div>
        <label
          className="
      block
      mb-1
      text-xs
      text-gray-300
    "
        >
          React Icon
        </label>

        <select
          name="icon"
          value={formik.values.icon}
          onChange={formik.handleChange}
          className={`
        ${inputClass}
        pl-9
        appearance-none
        bg-[#0F172A]
        text-white
      `}
        >
          <option value="" className="bg-[#0F172A] text-white">
            Select Icon
          </option>

          <option value="FaReact" className="bg-[#0F172A] text-white">
            React
          </option>

          <option value="SiJavascript" className="bg-[#0F172A] text-white">
            JavaScript
          </option>

          <option value="FaNodeJs" className="bg-[#0F172A] text-white">
            Node.js
          </option>

          <option value="SiExpress" className="bg-[#0F172A] text-white">
            Express
          </option>

          <option value="SiMongodb" className="bg-[#0F172A] text-white">
            MongoDB
          </option>

          <option value="SiMysql" className="bg-[#0F172A] text-white">
            MySQL
          </option>

          <option value="SiTailwindcss" className="bg-[#0F172A] text-white">
            Tailwind CSS
          </option>

          <option value="FaGitAlt" className="bg-[#0F172A] text-white">
            Git
          </option>

          <option value="FaGithub" className="bg-[#0F172A] text-white">
            GitHub
          </option>

          <option value="FaHtml5" className="bg-[#0F172A] text-white">
            HTML5
          </option>

          <option value="FaCss3Alt" className="bg-[#0F172A] text-white">
            CSS3
          </option>

          <option value="SiPostman" className="bg-[#0F172A] text-white">
            Postman
          </option>

          <option value="SiTypescript" className="bg-[#0F172A] text-white">
            TypeScript
          </option>

          <option value="FaDocker" className="bg-[#0F172A] text-white">
            Docker
          </option>

          <option value="SiRedux" className="bg-[#0F172A] text-white">
            Redux
          </option>

          <option value="SiNextdotjs" className="bg-[#0F172A] text-white">
            Next.js
          </option>

          <option value="SiVite" className="bg-[#0F172A] text-white">
            Vite
          </option>
          <option value="SiLinux" className="bg-[#0F172A] text-white">
            Linux
          </option>

          <option value="FaDocker" className="bg-[#0F172A] text-white">
            Docker
          </option>

          <option value="SiKubernetes" className="bg-[#0F172A] text-white">
            Kubernetes
          </option>

          <option
            value="SiAmazonwebservices"
            className="bg-[#0F172A] text-white"
          >
            AWS
          </option>

          <option value="SiGooglecloud" className="bg-[#0F172A] text-white">
            Cloud
          </option>

          <option value="SiGithubactions" className="bg-[#0F172A] text-white">
            CI/CD
          </option>

          <option value="SiTypescript" className="bg-[#0F172A] text-white">
            TypeScript
          </option>

          <option value="TbTopologyStar3" className="bg-[#0F172A] text-white">
            System Design
          </option>
        </select>

        {formik.errors.icon && formik.touched.icon && (
          <p className="mt-1 text-xs text-red-400">{formik.errors.icon}</p>
        )}
      </div>

      {/* PUBLISH */}

      <label
        className="
flex

items-center

justify-between

p-3

rounded-xl

bg-white/5

border

border-white/10

text-white

text-sm
"
      >
        <div
          className="
flex

items-center

gap-2
"
        >
          <Rocket size={15} className="text-green-400" />
          Publish Skill
        </div>

        <input
          type="checkbox"
          name="isPublished"
          checked={formik.values.isPublished}
          onChange={formik.handleChange}
        />
      </label>

      {/* BUTTON */}

      <button
        disabled={loading}
        type="submit"
        className="
w-full

h-10

mt-2

rounded-xl

bg-gradient-to-r

from-blue-600

via-purple-600

to-cyan-600

text-white

text-sm

font-semibold

transition

hover:scale-[1.02]

disabled:opacity-50
"
      >
        {loading ? "Saving..." : skill ? "Update Skill" : "Create Skill"}
      </button>
    </form>
  );
};

export default SkillForm;
