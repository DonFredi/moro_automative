import { clientEnv } from "./env/clientEnv";

export const clientConfig = {
  app: {
    env: clientEnv.NODE_ENV,
    siteUrl: clientEnv.NEXT_PUBLIC_SITE_URL,
  },
};
