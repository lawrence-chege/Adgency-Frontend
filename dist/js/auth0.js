// const HASURA_GRAPHQL_ENGINE_HOSTNAME = "adgency-app.herokuapp.com";

// const scheme = proto => {
//   return window.location.protocol === "https:" ? `${proto}s` : proto;
// };

// export const GRAPHQL_URL = `${scheme(
//   "http"
// )}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;

// export const REALTIME_GRAPHQL_URL = `${scheme(
//   "ws"
// )}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;

// export const authClientId = "25VePqlfJDd5m0uru0KwZZb3o9nff84k";
// export const authDomain = "dev-adgency.auth0.com";
// export const callbackUrl = `http://localhost:3000/callback`; // modify `callbackUrl` to point to your localhost


// <script src="https://cdn.auth0.com/js/auth0/9.11/auth0.min.js"></script>
// <script type="text/javascript">
//   // Initialize app
//   var webAuth = new auth0.WebAuth({
//     domain:       'YOUR_DOMAIN',
//     clientID:     'YOUR_CLIENT_ID'
//   });

//   // Trigger login with google
//   webAuth.authorize({
//     connection: 'google-oauth2'
//   });

//   // Trigger login with github
//   webAuth.authorize({
//     connection: 'github'
//   });

//   // Trigger login popup with twitter
//   webAuth.popup.authorize({
//     connection: 'twitter'
//   });
// </script>
// // Script uses auth0.js. See Remarks for details.
// <script src="https://cdn.auth0.com/js/auth0/9.11/auth0.min.js"></script>
// <script type="text/javascript">
//   // Initialize app
//   var webAuth = new auth0.WebAuth({
//     domain:       'YOUR_DOMAIN',
//     clientID:     'YOUR_CLIENT_ID'
//   });

//   // Calculate URL to redirect to
//   var url = webAuth.client.buildAuthorizeUrl({
//     clientID: 'YOUR_CLIENT_ID', // string
//     responseType: 'token', // code or token
//     redirectUri: 'https://YOUR_APP/callback',
//     state: 'YOUR_STATE'
//   });

//   // Redirect to url
//   // ...
// </script>