
const getConcept = () => {

    fetch('https://adgency-app.herokuapp.com/v1/graphql', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;'
        },
        body: JSON.stringify({ 
            query:
                `query{
                    companies{
                    company_name
                    projects{
                        name
                        concepts{
                        name
                        image
                        category
                        overview
                        tone
                        style
                        duration
                        objectives{
                            objective
                        }
                        unique_selling_points{
                            usp
                        }
                        target_audiences{
                            name
                            age_group
                            gender
                            location
                        }
                        platforms{
                            name
                            requirement
                        }
                        insights{
                            insight
                        }
                        infos{
                            info
                        }
                        }
                    }
                    }
                }`
            })

        })
        .then(response => response.json())
        .then(registerData => {
            companies = registerData
            console.log(companies)
        })
}
