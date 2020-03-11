
console.log(user_name)


const registerUser = () => {
    const user_name = document.getElementById('user_name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')

const mutation = `
mutation($user_name: String!, $email: String!, $phone: String!, $password: String!) {
    insert_users(objects: [{
        auth0_id: $userId,
        user_name: $user_name
        email: $email
        phone: $phone
        password: $password
      }]}) {
        affected_rows
      }
    }`;


    fetch('https://adgency-app.herokuapp.com/v1/graphql', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;'
            },
            body: JSON.stringify({ query: mutation, variables: { user_name, email, phone, password} })

        })
        .then(response => response.json())
        console.log("sent")
        .then(registerData => {
            companies = registerData
            console.log(companies)
        })
}
