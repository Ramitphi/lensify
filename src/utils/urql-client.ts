import { createClient } from "urql";

const APIURL = "https://api-mumbai.lens.dev/";

export const urqlClient = createClient({
  url: "https://api.lens.dev",
});
