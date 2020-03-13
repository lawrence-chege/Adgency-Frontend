// Concepts

const concept_name = document.getElementById('concept_name')
const concept_image = document.getElementById('concept_image')
const concept_category = document.getElementById('concept_category')
const concept_overview = document.getElementById('concept_overview')
const concept_tone = document.getElementById('concept_tone')
const concept_style = document.getElementById('concept_style')
const concept_duration = document.getElementById('concept_duration')


const concept_usp = document.getElementById('concept_usp')
const concept_objective = document.getElementById('concept_objective')
const concept_insight = document.getElementById('concept_insight')
const concept_info = document.getElementById('concept_info')

const audience_description = document.getElementById('audince_description')
const audience_age_group = document.getElementById('audience_age_group')
const audience_gender = document.getElementById('audience_gender')
const audience_location = document.getElementById('audience_location')

const platform_name = document.getElementById('platform_name')
const platform_requirement = document.getElementById('platform_requirement')

//create project
// mutation{
//     insert_projects(objects:[{
//       name:"monami"
//       company_id: 3
//       client_id: 4
//       created_by: 3
//       updated_by: 3
//     }]){
//       affected_rows
//     }
//   }
// monami_id : 42cd9d24-3cc6-4af2-8c7f-cb1257c9be94

// mutation{
//     insert_concepts(objects:[{
//       name:"crees juice"
//       image:"linktoimage"
//       category: "food"
//       overview: "we want to sell more"
//       tone: "sweet"
//       style: "friendly"
//       duration: "1 year"
//       project: "42cd9d24-3cc6-4af2-8c7f-cb1257c9be94"


//     }]){
//       affected_rows
//     }
//   }
// mutation{
//     insert_insights(objects:[{
//       insight: " People love free stuff"
//       concept: 9
//       created_by: 3
//       updated_by: 3
//     }]){
//       affected_rows
//     }
//   }

// mutation{
//     insert_info(objects:[{
//       info: "We dont use iorganic substances"
//       concept: 9
//       created_by: 3
//       updated_by: 3
//     }]){
//       affected_rows
//     }
//   }

// mutation{
//     insert_objectives(objects:[{
//       objective: "To get people to try our free products"
//       concept: 9
//       created_by: 3
//       updated_by: 3
//     }]){
//       affected_rows
//     }
//   }

// mutation{
//     insert_unique_selling_points(objects:[{
//       usp: "We deliver sell fresh produce"
//       concept: 9
//       created_by: 3
//       updated_by: 3
//     }]){
//       affected_rows
//     }
//   }

// mutation{
//     insert_platforms(objects:[{
//       name:"Social media"
//       requirement: " engament hash tags"
//       concept: 9
//       created_by: 3
//       updated_by: 3
//     }]){
//       affected_rows
//     }
//   }

// mutation{
//     insert_target_audience(objects:[{
//       name:"gen z"
//       age_group:"12 - 18 years old"
//       gender: "both male and female"
//       location: "Kasoa and Achimota"
//       concept: 9
//       created_by: 3
//       updated_by: 3
//     }]){
//       affected_rows
//     }
//   }

// query{
//     companies{
//       company_name
//       projects{
//         name
//         concepts{
//           name
//           image
//           category
//           overview
//           tone
//           style
//           duration
//           objectives{
//             objective
//           }
//           unique_selling_points{
//             usp
//           }
//           target_audiences{
//             name
//             age_group
//             gender
//             location
//           }
//           platforms{
//             name
//             requirement
//           }
//           insights{
//             insight
//           }
//           infos{
//             info
//           }
//         }
//       }
//     }
//   }
// query {
//     search_users(
//       args: {search: "lawrence"}
//     ){
//       id
//       email
//       user_name
//       projects{
//         id
//         name
//       }
//     }
//   }