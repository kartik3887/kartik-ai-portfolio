import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Upload,
  Github,
  ExternalLink,
  Code2,
  ImagePlus,
  Sparkles,
  Rocket,
} from "lucide-react";

const validationSchema = Yup.object({
  title: Yup.string().required("Project title is required"),

  description: Yup.string().required("Description is required"),

  techStack: Yup.string().required("Tech Stack is required"),

  github: Yup.string()
    .transform((v) => (v === "" ? undefined : v))
    .url("Invalid Github URL"),

  liveDemo: Yup.string()
    .transform((v) => (v === "" ? undefined : v))
    .url("Invalid Live URL"),

  order: Yup.number().required("Order required"),
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

focus:border-blue-500

transition
`;

const ProjectForm = ({ loading, project, onSubmit }) => {
  const [preview, setPreview] = useState("");

  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      title: project?.title || "",

      description: project?.description || "",

      techStack: Array.isArray(project?.techStack)
        ? project.techStack.join(", ")
        : "",

      github: project?.github || "",

      liveDemo: project?.liveDemo || "",

      order: project?.order ?? 1,

      featured: project?.featured ?? false,

      isPublished: project?.isPublished ?? false,

      image: null,
    },

    validationSchema,

    onSubmit: (values) => {
      const data = new FormData();

      Object.entries({
        title: values.title,

        description: values.description,

        github: values.github,

        liveDemo: values.liveDemo,

        order: values.order,

        featured: values.featured,

        isPublished: values.isPublished,
      }).forEach(([k, v]) => data.append(k, v));

      data.append(
        "techStack",

        JSON.stringify(
          values.techStack
            .split(",")
            .map((i) => i.trim())
            .filter(Boolean),
        ),
      );

      if (values.image) {
        data.append("image", values.image);
      }

      onSubmit(data);
    },
  });

  useEffect(() => {
    setPreview(project?.image?.url || "");
  }, [project]);

  const imageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    formik.setFieldValue("image", file);

    setPreview(URL.createObjectURL(file));
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="
space-y-3
"
    >
      <div>
        <label
          className="
text-xs
text-gray-300
block
mb-1
"
        >
          Project Title
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
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            placeholder="AI Portfolio"
            className={`
pl-9
${inputClass}
`}
          />
        </div>
      </div>

      <div>
        <label
          className="
text-xs
text-gray-300
block
mb-1
"
        >
          Description
        </label>

        <textarea
          rows="3"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          className="
w-full
rounded-xl
bg-white/5
border
border-white/10
px-3
py-2
text-sm
text-white
outline-none
focus:border-blue-500
"
        />
      </div>

      <div
        className="
grid
md:grid-cols-2
gap-3
"
      >
        {[
          ["github", "Github", Github],
          ["liveDemo", "Live Demo", ExternalLink],
        ].map(([name, label, Icon]) => (
          <div key={name}>
            <label
              className="
text-xs
text-gray-300
block
mb-1
"
            >
              {label}
            </label>

            <div className="relative">
              <Icon
                size={15}
                className="
absolute
left-3
top-2.5
text-gray-400
"
              />

              <input
                name={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                className={`
pl-9
${inputClass}
`}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className="
grid
md:grid-cols-3
gap-3
"
      >
        <div className="md:col-span-2">
          <label
            className="
text-xs
text-gray-300
block
mb-1
"
          >
            Tech Stack
          </label>

          <input
            name="techStack"
            value={formik.values.techStack}
            onChange={formik.handleChange}
            placeholder="React, Node, MongoDB"
            className={inputClass}
          />
        </div>

        <div>
          <label
            className="
text-xs
text-gray-300
block
mb-1
"
          >
            Order
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

      <div
        className="
grid
md:grid-cols-2
gap-3
"
      >
        <div
          className="
p-3
rounded-xl
bg-white/5
border
border-white/10
"
        >
          <div
            className="
flex
items-center
gap-2
text-sm
text-white
mb-2
"
          >
            <ImagePlus size={16} />
            Image
          </div>

          <label
            className="
h-24
flex
flex-col
items-center
justify-center
border
border-dashed
border-white/20
rounded-xl
cursor-pointer
"
          >
            <Upload size={18} className="text-blue-400" />

            <span
              className="
text-xs
text-gray-400
"
            >
              Upload
            </span>

            <input type="file" hidden accept="image/*" onChange={imageChange} />
          </label>

          {preview && (
            <img
              src={preview}
              className="
mt-2
h-20
w-full
object-cover
rounded-xl
"
            />
          )}
        </div>

        <div className="space-y-3">
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
            <div className="flex gap-2 items-center">
              <Sparkles size={15} className="text-yellow-400" />
              Featured
            </div>

            <input
              type="checkbox"
              name="featured"
              checked={formik.values.featured}
              onChange={formik.handleChange}
            />
          </label>

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
            <div className="flex gap-2 items-center">
              <Rocket size={15} className="text-green-400" />
              Publish
            </div>

            <input
              type="checkbox"
              name="isPublished"
              checked={formik.values.isPublished}
              onChange={formik.handleChange}
            />
          </label>

          <button
            disabled={loading}
            type="submit"
            className="
w-full
h-10
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
            {loading
              ? "Saving..."
              : project
                ? "Update Project"
                : "Create Project"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProjectForm;
