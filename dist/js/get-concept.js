const getConcept = () => {
    let company_name, project_name, name, image, category, overview, tone, style, duration;
    let objectives, unique_selling_points, target_audiences, objective_point, infos, info_point;
    let usp, audience_name, audience_age , audience_gender, audience_location ;
    let platforms, platform_name, platform_req, insights, insight_point;
    

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
                company_name = company["company_name"]
                let projects = company["projects"]
                if (projects.length > 0) {
                    projects.forEach(project => {
                        project_name = project["name"]
                        let concepts = project["concepts"]
                        concepts.forEach(concept => {
                            name = concept["name"]
                            image = concept["image"]
                            category = concept["category"]
                            overview = concept["overview"]
                            tone = concept["tone"]
                            style = concept["style"]
                            duration = concept["duration"]
                            objectives = concept["objectives"]
                            objectives.forEach(objective => {
                                objective_point = objective["objective"]
                            });
                            unique_selling_points = concept["unique_selling_points"]
                            unique_selling_points.forEach(usps => {
                                usp = usps["usp"]
                            });
                            target_audiences = concept["target_audiences"]
                            target_audiences.forEach(audience => {
                                audience_name = audience["name"]
                                audience_age = audience["age-group"]
                                audience_gender = audience["gender"]
                                audience_location = audience["location"]
                            });
                            platforms = concept["platforms"]
                            platforms.forEach(platform => {
                                platform_name = platform["name"]
                                platform_req = platform["requirement"]
                            });
                            insights = concept["insights"]
                            insights.forEach(insight => {
                                insight_point = insight["insight"]
                            });
                            infos = concept["infos"]
                            infos.forEach(info => {
                                info_point = info["info"]
                            })
                           
                        })
                    })
                }
            });
            let result = {
                "comapany" : company_name,
                "project" : project_name,
                "concept" : {
                    "name": name,
                    "image": image,
                    "category": category,
                    "overview": overview,
                    "tone": tone,
                    "style": style,
                    "duration": duration,
                    "objectives": {
                        objective_point
                    },
                    "Target audience":{
                        "name": audience_name,
                        "age-group": audience_age,
                        "gender": audience_gender,
                        "location": audience_location
                    },
                    "platform":{
                        "name": platform_name,
                        "requirement": platform_req
                    },
                    "Extra Information":{
                        info_point
                    },
                    "Unique Selling Point":{
                        usp
                    },
                    "insights":{
                        insight_point
                    }
        
                }
            }
            console.log(result);
            let concept_data = document.getElementById('concept');
            concept_data.innerHTML = '';
            concept_data.innerHTML += '<div> <h1> Concept: '+ name + '</h1>'+
                                        '<p> Category: '+ category + '</p>'+
                                        '<p> Overview: '+ overview + '</p>'+
                                        '<p> Tone: '+ tone + '</p>'+
                                        '<p> Style: '+ style + '</p>'+
                                        '<p> Duration: '+ duration + '</p>'+
                                        '<p> Objectives: <ul><li>'+ objective_point+ '</li></ul></p>'+
                                        '<p> Target Audience: <p> Description: '+ audience_name+ '</p>'+
                                        '<p> Age Group: '+ audience_age + '</p>'+
                                        '<p> Gender: '+ audience_gender + '</p>'+
                                        '<p> Location: '+ audience_location + '</p></p>'+
                                        '<p> Platform: <p> Name: '+ platform_name + '</p>'+
                                        '<p> Requirement: '+ platform_req + '</p></p>'+
                                        '<p> Unique Selling Point: <ul><li>'+ usp+ '</li></ul></p>'+
                                        '<p> Insights: <ul><li>'+ insight_point+ '</li></ul></p>'+
                                        '<p> Extra Information: <ul><li>'+ info_point+ '</li></ul></p></div>'
                                        

            

        })
}
