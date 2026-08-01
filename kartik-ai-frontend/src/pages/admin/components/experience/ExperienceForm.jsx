import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Briefcase,
  ImagePlus,
  Upload,
  Plus,
  X,
  MapPin,
  Calendar,
  Code2,
  Rocket,
} from "lucide-react";

const validationSchema = Yup.object({
  company: Yup.string().required("Company name is required"),

  role: Yup.string().required("Role is required"),

  startDate: Yup.date().required("Start date is required"),
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

const ExperienceForm = ({ experience, loading, onSubmit }) => {
  const [preview, setPreview] = useState("");

  const [techInput, setTechInput] = useState("");

  const [descInput, setDescInput] = useState("");

  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      company: experience?.company || "",

      role: experience?.role || "",

      employmentType: experience?.employmentType || "Full Time",

      location: experience?.location || "",

      startDate: experience?.startDate
        ? experience.startDate.split("T")[0]
        : "",

      endDate: experience?.endDate ? experience.endDate.split("T")[0] : "",

      currentlyWorking: experience?.currentlyWorking || false,

      description: experience?.description || [],

      technologies: experience?.technologies || [],

      order: experience?.order || 0,

      isPublished: experience?.isPublished ?? true,

      companyLogo: null,
    },

    validationSchema,

    onSubmit: (values) => {
      const data = new FormData();

      data.append("company", values.company);

      data.append("role", values.role);

      data.append("employmentType", values.employmentType);

      data.append("location", values.location);

      data.append("startDate", values.startDate);

      data.append("endDate", values.endDate);

      data.append("currentlyWorking", values.currentlyWorking);

      data.append("description", JSON.stringify(values.description));

      data.append("technologies", JSON.stringify(values.technologies));

      data.append("order", values.order);

      data.append("isPublished", values.isPublished);

      if (values.companyLogo) {
        data.append("companyLogo", values.companyLogo);
      }

      onSubmit(data);
    },
  });

  useEffect(() => {
    setPreview(experience?.companyLogo?.url || "");
  }, [experience]);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    formik.setFieldValue("companyLogo", file);

    setPreview(URL.createObjectURL(file));
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="
space-y-4
sm:space-y-5
"
    >
      {/* BASIC INFO */}
      <div
        className="
grid
grid-cols-1
sm:grid-cols-2
gap-4
"
      >
        <div>
          <label
            className="
text-xs
text-gray-300
"
          >
            Company Name
          </label>

          <div
            className="
relative
mt-1
"
          >
            <Briefcase
              size={16}
              className="
absolute
left-3
top-3
text-blue-400
"
            />

            <input
              name="company"
              placeholder="Google"
              value={formik.values.company}
              onChange={formik.handleChange}
              className={`
${inputClass}
pl-9
`}
            />
          </div>
        </div>

        <div>
          <label
            className="
text-xs
text-gray-300
"
          >
            Role
          </label>

          <div
            className="
relative
mt-1
"
          >
            <Code2
              size={16}
              className="
absolute
left-3
top-3
text-blue-400
"
            />

            <input
              name="role"
              placeholder="Frontend Developer"
              value={formik.values.role}
              onChange={formik.handleChange}
              className={`
${inputClass}
pl-9
`}
            />
          </div>
        </div>
      </div>
      {/* EMPLOYMENT + LOCATION */}
      <div
        className="
grid
grid-cols-1
sm:grid-cols-2
gap-4
"
      >
        <div>
          <label
            className="
text-xs
text-gray-300
"
          >
            Employment Type
          </label>

          <select
            name="employmentType"
            value={formik.values.employmentType}
            onChange={formik.handleChange}
            className={`
${inputClass}
mt-1
bg-[#0b1220]
`}
          >
            <option>Full Time</option>

            <option>Part Time</option>

            <option>Internship</option>

            <option>Freelance</option>

            <option>Contract</option>
          </select>
        </div>

        <div>
          <label
            className="
text-xs
text-gray-300
"
          >
            Location
          </label>

          <div
            className="
relative
mt-1
"
          >
            <MapPin
              size={16}
              className="
absolute
left-3
top-3
text-blue-400
"
            />

            <input
              name="location"
              placeholder="Mumbai, India"
              value={formik.values.location}
              onChange={formik.handleChange}
              className={`
${inputClass}
pl-9
`}
            />
          </div>
        </div>
      </div>
      {/* LOGO UPLOAD */}
      <div
        className="
p-4
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
text-white
text-sm
mb-3
"
        >
          <ImagePlus size={16} className="text-cyan-400" />
          Company Logo
        </div>

        <label
          className="
h-28
rounded-xl
border
border-dashed
border-white/20
flex
flex-col
items-center
justify-center
cursor-pointer
hover:bg-white/5
transition
"
        >
          <Upload size={18} className="text-cyan-400" />

          <span
            className="
text-xs
text-gray-400
mt-2
"
          >
            Upload Logo
          </span>

          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleLogoChange}
          />
        </label>

        {preview && (
          <div
            className="
mt-3
flex
justify-center
sm:justify-start
"
          >
            <img
              src={preview}
              alt="Company Logo"
              className="
h-20
w-20
rounded-xl
object-contain
bg-white/10
p-2
"
            />
          </div>
        )}
      </div>
      {/* DATE SECTION */}
      <div
        className="
grid
grid-cols-1
sm:grid-cols-2
gap-4
"
      >
        <div>
          <label
            className="
text-xs
text-gray-300
"
          >
            Start Date
          </label>

          <div
            className="
relative
mt-1
"
          >
            <Calendar
              size={16}
              className="
absolute
left-3
top-3
text-blue-400
"
            />

            <input
              type="date"
              name="startDate"
              value={formik.values.startDate}
              onChange={formik.handleChange}
              className={`
${inputClass}
pl-9
`}
            />
          </div>
        </div>

        <div>
          <label
            className="
text-xs
text-gray-300
"
          >
            End Date
          </label>

          <input
            type="date"
            name="endDate"
            disabled={formik.values.currentlyWorking}
            value={formik.values.endDate}
            onChange={formik.handleChange}
            className={`

${inputClass}

mt-1

disabled:opacity-50

`}
          />
        </div>
      </div>
      {/* CURRENTLY WORKING */}
      <label
        className="
flex
items-center
justify-between
gap-3
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
          Currently Working
        </div>

        <input
          type="checkbox"
          name="currentlyWorking"
          checked={formik.values.currentlyWorking}
          onChange={formik.handleChange}
        />
      </label>
      {/* DESCRIPTION */}
      <div
        className="
p-4
rounded-xl
bg-white/5
border
border-white/10
"
      >
        <label
          className="
text-xs
text-gray-300
"
        >
          Description
        </label>

        <div
          className="
flex
flex-col
sm:flex-row
gap-2
mt-2
"
        >
          <input
            value={descInput}
            onChange={(e) => setDescInput(e.target.value)}
            placeholder="Built React applications"
            className={inputClass}
          />

          <button
            type="button"
            onClick={() => {
              if (!descInput.trim()) return;

              formik.setFieldValue("description", [
                ...formik.values.description,
                descInput.trim(),
              ]);

              setDescInput("");
            }}
            className="
h-10
w-full
sm:w-12
flex
items-center
justify-center
rounded-xl
bg-blue-600
text-white
"
          >
            <Plus size={16} />
          </button>
        </div>

        <div
          className="
mt-3
space-y-2
"
        >
          {formik.values.description.map((item, index) => (
            <div
              key={index}
              className="
flex
items-center
justify-between
gap-3
bg-white/5
rounded-lg
px-3
py-2
text-sm
text-gray-300
"
            >
              <span>• {item}</span>

              <button
                type="button"
                onClick={() => {
                  formik.setFieldValue(
                    "description",

                    formik.values.description.filter((_, i) => i !== index),
                  );
                }}
              >
                <X size={14} className="text-red-400" />
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* TECHNOLOGIES */}
      <div
        className="
p-4
rounded-xl
bg-white/5
border
border-white/10
"
      >
        <label
          className="
text-xs
text-gray-300
"
        >
          Technologies
        </label>

        <div
          className="
flex
flex-col
sm:flex-row
gap-2
mt-2
"
        >
          <input
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            placeholder="React"
            className={inputClass}
          />

          <button
            type="button"
            onClick={() => {
              if (!techInput.trim()) return;

              formik.setFieldValue(
                "technologies",

                [...formik.values.technologies, techInput.trim()],
              );

              setTechInput("");
            }}
            className="
h-10
w-full
sm:w-12
flex
items-center
justify-center
rounded-xl
bg-purple-600
text-white
"
          >
            <Plus size={16} />
          </button>
        </div>

        <div
          className="
flex
flex-wrap
gap-2
mt-3
"
        >
          {formik.values.technologies.map((item, index) => (
            <div
              key={index}
              className="
flex
items-center
gap-2
px-3
py-1
rounded-full
bg-cyan-500/10
text-cyan-400
text-xs
"
            >
              {item}

              <button
                type="button"
                onClick={() => {
                  formik.setFieldValue(
                    "technologies",

                    formik.values.technologies.filter((_, i) => i !== index),
                  );
                }}
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* ORDER + PUBLISH */}
      <div
        className="
grid
grid-cols-1
sm:grid-cols-2
gap-4
"
      >
        <div>
          <label
            className="
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
            className={`

${inputClass}

mt-1

`}
          />
        </div>

        <label
          className="
flex
items-center
justify-between
gap-3
p-3
rounded-xl
bg-white/5
border
border-white/10
text-white
text-sm
"
        >
          <span>Publish Experience</span>

          <input
            type="checkbox"
            name="isPublished"
            checked={formik.values.isPublished}
            onChange={formik.handleChange}
          />
        </label>
      </div>
      {/* SUBMIT BUTTON */}
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
font-semibold
text-sm
disabled:opacity-50
hover:scale-[1.02]
transition
"
      >
        {loading
          ? "Saving..."
          : experience
            ? "Update Experience"
            : "Create Experience"}
      </button>
    </form>
  );
};

export default ExperienceForm;
