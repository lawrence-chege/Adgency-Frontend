const HASURA_GRAPHQL_ENGINE_HOSTNAME = "adgency-app.herokuapp.com";

const scheme = proto => {
  return window.location.protocol === "https:" ? `${proto}s` : proto;
};

export const GRAPHQL_URL = `${scheme(
  "http"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;

export const REALTIME_GRAPHQL_URL = `${scheme(
  "ws"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;

export const authClientId = "25VePqlfJDd5m0uru0KwZZb3o9nff84k";
export const authDomain = "dev-adgency.auth0.com";
export const callbackUrl = `http://localhost:3000/callback`; // modify `callbackUrl` to point to your localhost
