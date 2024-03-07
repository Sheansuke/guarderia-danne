import { createClient } from "next-sanity";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION || "2023-05-03";
const sanityToken = process.env.SANITY_AUTH_KEY;

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: sanityToken,
  withCredentials: true,
  perspective: "published"
});
