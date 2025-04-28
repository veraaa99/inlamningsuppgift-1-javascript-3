import { defineField, defineType } from "sanity";
import { ConfettiIcon } from '@sanity/icons'

export const eventType = defineType({
    name: "event",
    title: "event",
    type: "document",
    icon: ConfettiIcon,
    fields: [
        defineField({
            name: "title",
            type: "string"
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
            }
        }),
        defineField({
            name: "description",
            type: "blockContent"
        }),
        defineField({
            name: "date",
            type: "datetime",
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                calendarTodayLabel: 'Today'
            }
        }),
        defineField({
            name: "image",
            type: "image",
            options: {
                headspot: true
            },
            fields: [
                defineField({
                    name: "alt",
                    title: "Enter alt text",
                    type: "string"
                })
            ]
        }),
        defineField({
            name: "location",
            type: "string"
        }),
    ]
})