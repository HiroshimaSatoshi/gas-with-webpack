/// <reference types="node" />
declare namespace NodeJS {
  interface ProcessEnv {
    CLIENT_EMAIL: string;
    PRIVATE_KEY: string;
  }
}
