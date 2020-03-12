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
            concept_data.innerHTML += '<div class="card-header"><h1>Presented Concept</h1></div>'+
                                        '<div class="card-body first">'+
                                           ' <img src="img/bottle.jpg" alt="bottle" width="200px" height="250px">'+
                                            '<div class="product">'+
                                            '<h5 class="card-title">Product</h5>'+
                                            '<p class="card-text" id="product"> ' + name+'</p>'+
                                            '<h5 class="card-title">Category</h5>'+
                                            '<p class="card-text" id="category"> '+ category+ '</p>'+
                                            '<h5 class="card-title">Overview</h5>'+
                                            '<p class="card-text" id="overview">'+overview+'</p>'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="card-body">'+
                                            '<div class="card concept" style="width: 60rem;">'+
                                            '<div class="card-header">'+
                                                '<h5>Objectives</h5>'+
                                            '</div>'+
                                            '<ul class="list-group list-group-flush">'+
                                                '<li class="list-group-item" id="objective-one"><p>'+ objective_point+'</p></li>'+
                                                '<li class="list-group-item" id="objective-two"><p>'+ objective_point+'</p></li>'+
                                                '<li class="list-group-item" id="objective-three"><p>'+ objective_point+'</p></li>'+
                                            '</ul>'+
                                            '</div>'+
                                            '<div class="product">'+
                                            '<h5 class="card-title">Duration</h5>' +
                                            '<p class="card-text" id="duration">'+ duration +'</p>'+
                                            '<h5 class="card-title">Insight</h5>'+
                                            '<p class="card-text" id="insight">'+ insight_point +'.</p>'+
                                            '<h5 class="card-title">Unique Selling Point</h5>'+
                                            '<p class="card-text" id="usp">'+ usp+'</p>'+
                                            '<h5 class="card-title">Tone</h5>'+
                                            '<p class="card-text" id="tone">'+ tone +'</p>'+
                                            '<h5 class="card-title">Style</h5>'+
                                            '<p class="card-text" id="style">'+ objective_point+'</p>'+
                                            '<h5 class="card-title">Platform Requirement</h5>'+
                                            '<p class="card-text" id="requirement">'+ platform_req +'</p>'+
                                            '<h5 class="card-title">Other Information</h5>'+
                                            '<p class="card-text" id="other">'+ info_point+'</p>'+
                                            '</div>'
                                                                            

            

        })
}
