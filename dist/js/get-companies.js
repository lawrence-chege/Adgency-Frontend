const getCompanies = () => {
    let companies, company_name, company_id;
    let projects, project_company, project_name, project_id;
    let concepts, concept_id, concept_project;
    let name, image, category, overview, tone, style, duration;
    let audience_concept, platform_concept, insight_concept, info_concept, usp_concept;
    let objectives, objective_concept, unique_selling_points, target_audiences, objective_point, infos, info_point;
    const _ = (x) =>{
        return document.getElementById(x);
    }
    

    fetch('https://adgency-app.herokuapp.com/v1/graphql', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;'
            },
            body: JSON.stringify({
                query: `
                query{
                    companies{
                        id
                        company_name
                        projects{
                            id
                            name
                            company_id
                            concepts{
                                project
                                id
                                name
                                image
                                category
                                overview
                                tone
                                style
                                duration
                                objectives{
                                concept
                                id
                                    objective
                                }
                                unique_selling_points{
                                    concept
                                    id
                                    usp
                                }
                                target_audiences{
                                    concept
                                    id
                                    name
                                    age_group
                                    gender
                                    location
                                }
                                platforms{
                                    concept
                                    id
                                    name
                                    requirement
                                }
                                insights{
                                    concept
                                    id
                                    insight
                                }
                                infos{
                                    concept
                                    id
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
                let comp = _('play'); //ul
                let li = document.createElement('li');
                li.classList.add("nav-item");
                li.classList.add("has-treeview")
                li.classList.add("menu-open")
                comp.appendChild(li);
                let a = document.createElement('a');
                a.classList.add("nav-link");
                a.classList.add("active");
                let att = document.createAttribute("href");
                att.value = "#concept";
                a.setAttributeNode(att);
                comp.appendChild(a);
                let i1 = document.createElement('i')
                i1.classList.add("nav-icon")
                i1.classList.add("fas")
                i1.classList.add("fa-tachometer-alt")
                a.appendChild(i1)
                let p = document.createElement('p')
                a.appendChild(p)
                p.innerHTML +="&nbsp;&nbsp;"
                p.innerHTML += company_name
                comp.appendChild(li)
                let i2 = document.createElement('i')
                i2.classList.add("right")
                i2.classList.add("fas")
                i2.classList.add("fa-angle-left")
                p.appendChild(i2)
                company_id = company["id"]
                projects = company["projects"]
                if (projects.length > 0) {
                    projects.forEach(project => {
                        project_company = project["company_id"]
                        project_id = project["id"]
                        project_name = project["name"]
                        if (project_company=company_id){
                            concepts = project["concepts"]
                            concepts.forEach(concept => {
                                concept_project = concept["project"]
                                if(concept_project == project_id){
                                    concept_id = concept["id"]
                                    name = concept["name"]
                                    image = concept["image"]
                                    category = concept["category"]
                                    overview = concept["overview"]
                                    tone = concept["tone"]
                                    style = concept["style"]
                                    duration = concept["duration"]
                                    objectives = concept["objectives"]
                                    objectives.forEach(objective => {
                                        objective_concept = objective["concept"]
                                        if(objective_concept == concept_id){
                                            objective_point = objective["objective"]
                                        }
                                        
                                    });
                                    target_audiences = concept["target_audiences"]
                                    target_audiences.forEach(audience => {
                                        audience_concept = audience["concept"]
                                        if (audience_concept == concept_id){
                                            audience_name = audience["name"]
                                            audience_age = audience["age-group"]
                                            audience_gender = audience["gender"]
                                            audience_location = audience["location"]
                                        }
                                        
                                    });
                                    platforms = concept["platforms"]
                                    platforms.forEach(platform => {
                                        platform_concept = platform["concept"]
                                        if(platform_concept == concept_id){
                                            platform_name = platform["name"]
                                            platform_req = platform["requirement"]

                                        }
                                        
                                    });
                                    unique_selling_points = concept["unique_selling_points"]
                                    unique_selling_points.forEach(usps => {
                                        usp_concept = usps["concept"]
                                        if(usp_concept==concept_id){
                                            usp = usps["usp"]
                                        }
                                        
                                    });
                                    insights = concept["insights"]
                                    insights.forEach(insight => {
                                        insight_concept = insight["concept"]
                                        if(insight_concept == concept_id){
                                            insight_point = insight["insight"]
                                        }
                                        
                                    });
                                    infos = concept["infos"]
                                    infos.forEach(info => {
                                        info_concept = info["concept"]

                                        info_point = info["info"]
                                    })
                                    
                                }
                            }) 

                        }

                    })
                }
                

            })     
           

        })
}

