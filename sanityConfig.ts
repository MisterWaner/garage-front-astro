import { createClient } from "@sanity/client";

export const sanityClient = createClient({
    projectId: "32x25xff",
    dataset: "production",
    useCdn: false,
    apiVersion: "2025-09-01"
});