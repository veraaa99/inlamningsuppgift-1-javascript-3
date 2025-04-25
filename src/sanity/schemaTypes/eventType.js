import { defineField, defineType } from "sanity";
import { ConfettiIcon } from '@sanity/icons'

export const eventType = defineType({
    name: "event",
    title: "Event",
    type: "document",
    icon: ConfettiIcon,
    fields: [
        defineField({
            name: "Title",
            type: "string"
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "Title",
            }
        }),
        defineField({
            name: "Description",
            type: "blockContent"
        }),
        defineField({
            name: "Date",
            type: "datetime",
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                calendarTodayLabel: 'Today'
            }
        }),
        defineField({
            name: "Image",
            type: "image",
            options: {
                headspot: true
            },
            fields: [
                defineField({
                    name: "altText",
                    title: "Enter alt text",
                    type: "string"
                })
            ]
        }),
        defineField({
            name: "Location",
            type: "string"
        }),
    ]
})