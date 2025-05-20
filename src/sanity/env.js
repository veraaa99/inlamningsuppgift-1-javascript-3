export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-04-25'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;


export const token = process.env.SANITY_API_READ_TOKEN

if(!token) {
  throw new Error("SANITY_API_READ_TOKEN is missing")
}