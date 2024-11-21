/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly VITE_EXPRESS_SERVER: string;
  readonly VITE_FASTAPI_SERVER: string;
}
