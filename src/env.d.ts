/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CDN_URL: string;
  readonly VITE_GET_TOKEN_URL: string;
  readonly VITE_RETURN_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
