import { createClient } from "@sanity/client";

const sanityClient = createClient({
    projectId: "32x25xff",
    dataset: "production",
    useCdn: false,
});

export default sanityClient;
