const registerUser = () => {
    fetch('https://adgency-app.herokuapp.com/v1/graphql', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;'
            },
            body: JSON.stringify({
                query: `query{
            companies{
              id
              company_name
              users {
                id
              user_name
            }
            }
          }`
            })
        })
        .then(response => response.json())
        .then(registerData => {
            companies = registerData["data"]["companies"]
            console.log(companies)
            companies.array.forEach(company => console.log);
        })
}


// fetchData = () => {
//     this.setState({
//         loading: true
//     }, () => {
//         fetch('http://localhost:4466/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     query: `query { todoItems { id text completed } }`,
//                 }),
//             })
//             .then(response => {
//                 return response.json()
//             })
//             .then(responseAsJson => {
//                 this.setState({
//                     loading: false,
//                     data: responseAsJson.data
//                 })
//             })
//     })
// // }
// function userSyncRule(user, context, callback) {
//     const userId = user.user_id;
//     const nickname = user.user_name;
//     const email = user.email;
//     const password = user.password;
  
    // const mutation = `mutation($userId: String!, $nickname: String!, $email: String!, $password: String!) {
    //   insert_users(objects: [{
    //       auth0_id: $userId,
    //       user_name: $nickname
    //               email: email
    //               password: password
    //     }],
    //     on_conflict: {
    //       constraint: users_pkey,
    //       update_columns: [last_seen, name]
    //     }) {
    //       affected_rows
    //     }
    //   }`;
  
//     request.post(
//       {
//         headers: {
//           "content-type": "application/json",
//           "x-hasura-admin-secret": configuration.ACCESS_KEY
//         },
//         url: "https://adgency-app.herokuapp.com/v1/graphql",
//         body: JSON.stringify({ query: mutation, variables: { userId, nickname } })
//       },
//       function(error, response, body) {
//         console.log(body);
//         callback(error, user, context);
//       }
//     );
//   }


// HASURA_GRAPHQL_ADMIN_SECRET : sdfghASDFG2345##$%fdgserdtfrygbhnkjmretyu@#Z24xcrvt

// HASURA_GRAPHQL_JWT_SECRET : 

// dev-adgency.auth0.com
// 25VePqlfJDd5m0uru0KwZZb3o9nff84k
// http://localhost:3000/callback

// https://dev-adgency.auth0.com/login?client=25VePqlfJDd5m0uru0KwZZb3o9nff84k&protocol=oauth2&response_type=token%20id_token&redirect_uri=http://localhost:3000/callback&scope=openid%20profile

// https://dev-adgency.auth0.com/login?client=Jbd1QS2Cm1cx0x0UCygBhnFipQhuxoUx&protocol=oauth2&response_type=token%20id_token&redirect_uri=http://localhost:3000&scope=openid%20profile

// const getHeaders = () => {
//     const headers = {};
//     const token = auth.getIdToken();
  
//     if (token) {
//       headers.authorization = `Bearer ${token}`;
//     }
//     return headers;
//   };