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
                att.value = "#"+company_name;
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
                //create company ul
                let company_items = document.createElement('ul')
                company_items.classList.add("nav")
                company_items.classList.add("nav-treeview")
                comp.appendChild(company_items)
                // create concept link
                //@TODO add href
                let concept_nav = document.createElement('li')
                concept_nav.classList.add("nav-item")
                company_items.appendChild(concept_nav)
                let concept_nav_link = document.createElement('a')
                concept_nav_link.classList.add("nav-link")
                concept_nav_link.classList.add("active")
                concept_nav.appendChild(concept_nav_link)
                let i3 = document.createElement('i')
                i3.classList.add("fa")
                i3.classList.add("fa-info-circle")
                i3.classList.add("nav-icon")
                concept_nav_link.appendChild(i3)
                let p_concept = document.createElement("p")
                p_concept.innerHTML += "Concept"
                concept_nav_link.appendChild(p_concept)

                // create Budget link
                let budget_nav = document.createElement('li')
                budget_nav.classList.add("nav-item")
                company_items.appendChild(budget_nav)
                let budget_nav_link = document.createElement('a')
                budget_nav_link.classList.add("nav-link")
                budget_nav.appendChild(budget_nav_link)
                let i4 = document.createElement('i')
                i4.classList.add("fa")
                i4.classList.add("fa-money")
                i4.classList.add("nav-icon")
                budget_nav_link.appendChild(i4)
                let p_budget = document.createElement("p")
                p_budget.innerHTML += "Budget"
                budget_nav_link.appendChild(p_budget)

                // create Contract link
                let contract_nav = document.createElement('li')
                contract_nav.classList.add("nav-item")
                company_items.appendChild(contract_nav)
                let contract_nav_link = document.createElement('a')
                contract_nav_link.classList.add("nav-link")
                contract_nav.appendChild(contract_nav_link)
                let i5 = document.createElement('i')
                i5.classList.add("fa")
                i5.classList.add("fa-thumbs-up")
                i5.classList.add("nav-icon")
                contract_nav_link.appendChild(i5)
                let p_contract = document.createElement("p")
                p_contract.innerHTML += "Contract"
                contract_nav_link.appendChild(p_contract)

                // create Ideation link
                let ideation_nav = document.createElement('li')
                ideation_nav.classList.add("nav-item")
                company_items.appendChild(ideation_nav)
                let ideation_nav_link = document.createElement('a')
                ideation_nav_link.classList.add("nav-link")
                ideation_nav.appendChild(ideation_nav_link)
                let i6 = document.createElement('i')
                i6.classList.add("fa")
                i6.classList.add("fa-lightbulb-o")
                i6.classList.add("nav-icon")
                ideation_nav_link.appendChild(i6)
                let p_ideation = document.createElement("p")
                p_ideation.innerHTML += "Ideation"
                ideation_nav_link.appendChild(p_ideation)

                 // create Design link
                 let design_nav = document.createElement('li')
                 design_nav.classList.add("nav-item")
                 company_items.appendChild(design_nav)
                 let design_nav_link = document.createElement('a')
                 design_nav_link.classList.add("nav-link")
                 design_nav.appendChild(design_nav_link)
                 let i7 = document.createElement('i')
                 i7.classList.add("fa")
                 i7.classList.add("fa-circle")
                 i7.classList.add("nav-icon")
                 design_nav_link.appendChild(i7)
                 let p_design = document.createElement("p")
                 p_design.innerHTML += "Design"
                 design_nav_link.appendChild(p_design)


                 // create Personell link
                 let personel_nav = document.createElement('li')
                 personel_nav.classList.add("nav-item")
                 company_items.appendChild(personel_nav)
                 let personel_nav_link = document.createElement('a')
                 personel_nav_link.classList.add("nav-link")
                 personel_nav.appendChild(personel_nav_link)
                 let i8 = document.createElement('i')
                 i8.classList.add("fa")
                 i8.classList.add("fa-users")
                 i8.classList.add("nav-icon")
                 personel_nav_link.appendChild(i8)
                 let p_personel = document.createElement("p")
                 p_personel.innerHTML += "Personel"
                 personel_nav_link.appendChild(p_personel)

                 // create Personell link
                 let final_nav = document.createElement('li')
                 final_nav.classList.add("nav-item")
                 company_items.appendChild(final_nav)
                 let final_nav_link = document.createElement('a')
                 final_nav_link.classList.add("nav-link")
                 final_nav.appendChild(final_nav_link)
                 let i9 = document.createElement('i')
                 i9.classList.add("fa")
                 i9.classList.add("fa-users")
                 i9.classList.add("nav-icon")
                 final_nav_link.appendChild(i9)
                 let p_final = document.createElement("p")
                 p_final.innerHTML += "Final Output"
                 final_nav_link.appendChild(p_final)


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

