const _q = (x)=>{
    return document.getElementById(x);
}

const _v = (x)=>{
    return _q(x).value;
}

document.getElementById("registerForm").onsubmit = (e) =>{
    e.preventDefault()
    // let email = _v("#email")
    // let password = _v("#passowrd")
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("password").value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        // ...
      });
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(user)
        } else {
          // No user is signed in.
        }
      });

}
companies {
    company_name
    projects{
        name
        company_id
        concepts{
            project
        
            name
            image
            category
            overview
            tone
            style
            duration
            objectives{
            concept
            
                objective
            }
            unique_selling_points{
                concept
                
                usp
            }
            target_audiences{
                concept
                
                name
                age_group
                gender
                location
            }
            platforms{
                concept
                
                name
                requirement
            }
            insights{
                concept
                
                insight
            }
            infos{
                concept
                
                info
            }
        }
    }
}