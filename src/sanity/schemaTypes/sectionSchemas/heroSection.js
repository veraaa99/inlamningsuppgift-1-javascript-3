import { BlockElementIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const heroSection = defineType({
    name: "heroSection",
    title: "Hero",
    type: "object",
    icon: BlockElementIcon,
    fields: [
        defineField({
            name: "header",
            type: "string",
            validation: rule => rule.required()
        }),
        defineField({
            name: "subHeader",
            type: "string",
            validation: rule => rule.required()
        }),
        defineField({
            name: "image",
            type: "image",
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alt text",
                    type: "string"
                }),
                defineField({
                    name: "darken",
                    type: "number",
                    description: "Darken your image in percent"
                })
            ]
        })
    ]

})