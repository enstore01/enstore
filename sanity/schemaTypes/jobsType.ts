import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const jobType = defineType({
  name: "job",
  title: "Job Openings",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "timePublished",
      title: "Date Published",
      type: "datetime",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Job Location",
      type: "string",
      options: {
        list: [
          { title: "Remote", value: "remote" },
          { title: "On-site", value: "on-site" },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "full-time" },
          { title: "Part-time", value: "part-time" },
          { title: "Contract", value: "contract" },
          { title: "Internship", value: "internship" },
        ],
      },
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      type: "type",
      location: "location",
    },
    prepare(selection) {
      const { title, type, location } = selection;
      return {
        title,
        subtitle: `${type} · ${location}`,
      };
    },
  },
});
