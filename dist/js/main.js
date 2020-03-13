const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value ==""){
        parent.classList.remove('focus');
    }
}

inputs.forEach(input =>{
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});

/**CONCEPT SUBMIT PAGE*/
//Global Variables
var product, overview, objective, duration, target, insight, usp, mood,category
style, requirement, other;

//Super Function
function _(x){
    return document.getElementById(x);
}

function processFirstQuestion(){
    var product = _('product').value;

    //Validate Product
    if((product == "") || (!isNaN(product))){
        _('productError').innerHTML = "Please enter the product name";
        return false;
    }

    //Hide Current Question and Show Next
    _('first-question').style.display = 'none';
    _('product-category').style.display = 'block';
}

function processCategory(){
    var category = _('category').value;

    //Validate Product
    if((category == "") || (!isNaN(category))){
        _('categoryError').innerHTML = "Please enter the category";
        return false;
    }

    //Hide Current Question and Show Next
    _('product-category').style.display = 'none';
    _('second-question').style.display = 'block';
}
function processSecondQuestion(){
    var overview = _('overview').value;

    //Validate Overviewt
    if((overview == "") || (!isNaN(overview))){
        _('overviewError').innerHTML = "Please enter the overview and make sure that it is a number";
        return false;
    }

    //Hide Current Question and Show Next
    _('second-question').style.display = 'none';
    _('target-customers').style.display = 'block';
}

function processCustomers(){
    // var overview = _('overview').value;

    // //Validate Overviewt
    // if((overview == "") || (!isNaN(overview))){
    //     _('overviewError').innerHTML = "Please enter the overview and make sure that it is a number";
    //     return false;
    // }

    //Hide Current Question and Show Next
    _('target-customers').style.display = 'none';
    _('third-question').style.display = 'block';
}

function processThirdQuestion(){
    var objective = _('objective').value;

    //Validate Objective
    if((objective == "") || (!isNaN(objective))){
        _('objectiveError').innerHTML = "Please enter the objective and make sure that it is a number";
        return false;
    }

    //Hide Current Question and Show Next
    _('third-question').style.display = 'none';
    _('fifth-question').style.display = 'block';
}

function processFourthQuestion(){
    var duration = _('duration').value;

    //Validate Duration
    if((duration == "") || (!isNaN(duration))){
        _('durationError').innerHTML = "Please enter the objective and make sure that it is a number";
        return false;
    }

    //Hide Current Question and Show Next
    _('fourth-question').style.display = 'none';
    _('eleventh-question').style.display = 'block';
}

function processFifthQuestion(){
    // var target = _('target').value;

    // //Validate Target
    // if((target == "") || (!isNaN(target))){
    //     _('targetError').innerHTML = "Please enter the target and make sure that it is a number";
    //     return false;
    // }

    //Hide Current Question and Show Next
    _('fifth-question').style.display = 'none';
    _('sixth-question').style.display = 'block';
}

function processSixthQuestion(){
    // var insight = _('insight').value;

    // //Validate Insight
    // if((insight == "") || (!isNaN(insight))){
    //     _('insightError').innerHTML = "Please enter the insight and make sure that it is a number";
    //     return false;
    // }

    //Hide Current Question and Show Next
    _('sixth-question').style.display = 'none';
    _('seventh-question').style.display = 'block';
}

function processSeventhQuestion(){
    // var usp = _('usp').value;

    // //Validate USP
    // if((usp == "") || (!isNaN(usp))){
    //     _('uspError').innerHTML = "Please enter the usp and make sure that it is a number";
    //     return false;
    // }

    //Hide Current Question and Show Next
    _('seventh-question').style.display = 'none';
    _('eigth-question').style.display = 'block';
}

function processEighthQuestion(){
    // var mood = _('mood').value;

    // //Validate USP
    // if((usp == "") || (!isNaN(usp))){
    //     _('uspError').innerHTML = "Please enter the usp and make sure that it is a number";
    //     return false;
    // }

    //Hide Current Question and Show Next
    _('eighth-question').style.display = 'none';
    _('fourth-question').style.display = 'block';
}



function processEleventhQuestion(){
    var other = _('other').value;

    //Validate USP
    if((other == "") || (!isNaN(other))){
        _('otherError').innerHTML = "Please enter the usp and make sure that it is a number";
        return false;
    }
}

//IDEATION PAGE
//ADDING TAGLINES
var form = document.getElementById('addForm');
var card = document.getElementById('card');
var newTagline = document.getElementById('InputTagline').value;
var newRationale = document.getElementById('InputRationale').value;

form.addEventListener('submit', addTagline);


//Function to add item to the list
function addTagline(){
    var newTagline = document.getElementById('InputTagline').value;
    var newRationale = document.getElementById('InputRationale').value;

    document.getElementById('added').innerHTML += '<div class="card" id="card">'+
                        '<h4 class="card-header">' +newTagline+ '</h4>'+
                        '<div class="card-body">'+
                        '<label for="rationale">Rationale:</label>'+
                        '<p class="card-text"'+
                        'style="font-family: "Source Sans Pro", sans-serif;'+
                        'font-size: 1rem;">'+newRationale+'</p>'+
                        '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">'+
                        'Write a Concept'+
                        '</button>'+
                        '</div>'+
                        '</div>'
}

//Get Modal Element
var modal = document.getElementById('simpleModal');
//Get open Modal Button
var modalBtn = document.getElementById('modalBtn');
//Get Close Button
var closeBtn = document.getElementById('closeBtn');

//Listen for Open Click
modalBtn.addEventListener('click',openModal);

//Listen for Close Click
closeBtn.addEventListener('click',closeModal);

//Function to open Modal
function openModal(){
    modal.style.display = 'block';
}

//Function to Close Modal
function closeModal(){
    modal.style.display = 'none';
}

//TO DISPLAY THE CONCEPTS


//Get Concept Element
var concept = document.getElementById('concept');
//Get open Concept Button
var conceptBtn = document.getElementById('conceptBtn');

//Listen for Open Click
conceptBtn.addEventListener('click',openConcept);

//Function to open Concept
function openConcept(){
    concept.style.display = 'block';
}

//TO COLLECT THE DATA ADDED TO THE FORM
var ideaForm = document.getElementById('create');

ideaForm.addEventListener('submit', addConcept);

function addConcept(e){
    e.preventDefault();

    //Get Input Values
    var newPlatform = document.getElementById('platform-name').value;
    var newIdea = document.getElementById('idea');
    var newImage = document.getElementById('file').value;

    alert('newPlatform');

    // var image = document.createElement('img');
    // var source = document.createAttribute('src');

    // source.value = newImage;
    // image.setAttribute(source);


    // //Get Concept List
    // document.getElementById('display-concepts').innerHTML += '<div style="display: flex;'+
    //                             'flex-direction: row;">'+
    //                             '<img src="img/bottle.jpg" alt="bottle" width="200px" height="250px"'+
    //                             'style="margin-right: 2rem;">'+
    //                             '<div class="product"'+
    //                             'style="padding: 2rem 1rem;">'+
    //                             '<h5 class="card-title"'+
    //                             'style="font-weight: bolder;'+
    //                             'font-family: "Roboto Slab, serif;"'+
                                'font-size: 1rem;">Platform:</h5>'+
                                '<p class="card-text" id="product"'+
                                'style="font-family: "Source Sans Pro, sans-serif;"'+
                                'font-size: 1rem;">' +newPlatform+ '</p>'+
                                '<h5 class="card-title"'+
                                'style="font-weight: bolder;'+
                                'font-family: "Roboto Slab, serif;"'+
                                'font-size: 1rem;">Idea:</h5>'+
                                '<p class="card-text" id="overview"'+
                                'style="font-family: "Source Sans Pro, sans-serif;"'+
                                'font-size: 1rem;">' +newIdea+ '</p>'+
                                '</div>'+
                                '</div>'

    // document.getElementById('concepts').innerHTML += '<li class="new-concept">'+
                           '<div class="new-image" style="margin-right: 10px;">'+
                           '<img class="image" src="images/burrito.jpg"  width="400px" height="300px">'+
                           '</div>'+
                           '<div class="concept-content">'+
                           '<h6 class="title" style="border-bottom: 2px solid #111111;">'+newFood+'</h6>'+
                           '<p class="ingredients" style="font-style: italic; font-weight: bold;">'+newIngredients+'</p>'+
                           '<p class="method">'+newMethod+'</p>'+
                           ' </div>'+
                           '</li>'
}