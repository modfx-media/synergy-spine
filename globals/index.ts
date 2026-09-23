import type { GlobalConfig } from "payload"

const globalVersions = {
  drafts: {
    schedulePublish: true,
  },
  max: 50,
} as const

const linkFields = [
  { name: "label", type: "text" as const },
  { name: "href", type: "text" as const },
]

export const Header: GlobalConfig = {
  slug: "header",
  label: "Header",
  access: { read: () => true },
  versions: globalVersions,
  fields: [
    { name: "announcement", type: "text" },
    { name: "phoneDisplay", type: "text" },
    { name: "phoneTel", type: "text" },
    { name: "address", type: "text" },
    { name: "logo", type: "upload", relationTo: "media" },
    {
      name: "navItems",
      type: "array",
      fields: [
        ...linkFields,
        { name: "external", type: "checkbox" },
        {
          name: "children",
          type: "array",
          fields: [
            ...linkFields,
            {
              name: "children",
              type: "array",
              fields: linkFields,
            },
          ],
        },
      ],
    },
  ],
}

export const Footer: GlobalConfig = {
  slug: "footer",
  label: "Footer",
  access: { read: () => true },
  versions: globalVersions,
  fields: [
    { name: "blurb", type: "textarea" },
    { name: "phoneDisplay", type: "text" },
    { name: "address", type: "textarea" },
    { name: "logo", type: "upload", relationTo: "media" },
    {
      name: "links",
      type: "array",
      fields: linkFields,
    },
  ],
}

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  access: { read: () => true },
  versions: globalVersions,
  fields: [
    { name: "practiceName", type: "text" },
    { name: "phoneDisplay", type: "text" },
    { name: "phoneTel", type: "text" },
    { name: "email", type: "email" },
    { name: "streetAddress", type: "text" },
    { name: "city", type: "text" },
    { name: "region", type: "text" },
    { name: "postalCode", type: "text" },
    { name: "siteUrl", type: "text" },
  ],
}
