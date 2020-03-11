const getConcept = () => {

    fetch('https://adgency-app.herokuapp.com/v1/graphql', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;'
            },
            body: JSON.stringify({
                query: `query{
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
            data = registerData["data"]
            companies = data["companies"]
            companies.forEach(company => {
                let company_name = company["company_name"]
                let projects = company["projects"]
                if (projects.length > 0) {
                    projects.forEach(project => {
                        let project_name = project["name"]
                        let concepts = project["concepts"]
                        concepts.forEach(concept => {
                            let name = concept["name"]
                            let image = concept["image"]
                            let category = concept["category"]
                            let overview = concept["overview"]
                            let tone = concept["tone"]
                            let style = concept["style"]
                            let duration = concept["duration"]
                            let objectives = concept["objectives"]
                            console.log(name, image, category, overview, tone, style, duration)
                            objectives.forEach(objective => {
                                console.log(objective)
                            });
                            let unique_selling_points = concept["unique_selling_points"]
                            unique_selling_points.forEach(usp => {
                                console.log(usp)
                            });
                            let target_audiences = concept["target_audiences"]
                            target_audiences.forEach(audience => {
                                console.log(audience)
                            });
                            let platforms = concept["platforms"]
                            platforms.forEach(platform => {
                                console.log(platform)
                            });
                            let insights = concept["insights"]
                            insights.forEach(insight => {
                                console.log(insight)
                            });
                            let infos = concept["infos"]
                            infos.forEach(info => {
                                console.log(info)
                            })
                           
                        })
                        console.log(project_name)
                    })
                    // console.log(projects)
                }

                console.log(company_name)
            });

        })
}
