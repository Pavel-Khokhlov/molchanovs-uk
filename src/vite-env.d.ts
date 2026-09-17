// src/vite-env.d.ts
/// <reference types="vite/client" />

declare module '*.scss';
declare module '*.sass';
declare module '*.css';

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
