import { ConfettiIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const eventsSection = defineType({
    name: "eventsSection",
    type: "object",
    icon: ConfettiIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            initialValue: "My event"
        })
    ]
})