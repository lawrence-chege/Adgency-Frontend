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