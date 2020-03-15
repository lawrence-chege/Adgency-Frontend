
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function validate () {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

const _ = (x)=>{
    return document.querySelector(x);
}

const _v = (x)=>{
    return _(x).value;
}

const validate = () =>{
    window.addEventListener('load', ()=>{
        let forms = _('.needs-validation');
        forms.filter(form =>{
            form.addEventListener('click', (event)=>{
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false)
}


const processFirstQuestion = () =>{
    validate();
    let productName = _v('#productName')
    localStorage.setItem('productName', productName);
    let productCategory = _v('#productCategory')
    localStorage.setItem('productCategory', productCategory);
    
    console.log(productCategory,productName)

    //Hide Current Question and Show Next
    _('#productDetails').style.display = 'none';
    _('#customerDetails').style.display = 'block';

}

const backToProduct = ()=>{
    _('#customerDetails').style.display = 'none';
    _('#productDetails').style.display = 'block';

}
const processCustomerDetails = () =>{
    validate();
    let customerGroup = _v('#customerGroup')
    localStorage.setItem('customerGroup', customerGroup);
    let ageGroup = _v('#ageGroup')
    localStorage.setItem('ageGroup', ageGroup);
    let location = _v('#location')
    localStorage.setItem('location', location);
    let gender = _v('#gender')
    localStorage.setItem('gender', gender);
    let customerOverview = _v('#customerOverview')
    localStorage.setItem('customerOverview', customerOverview);
    

    //Hide Current Question and Show Next
    
    _('#customerDetails').style.display = 'none';
    _('#promoGoals').style.display = 'block';

}

const processPromoGoals = () =>{
    validate();
    let objectives = _v('#objectives')
    localStorage.setItem('objectives', objectives);
    let uniquePoint = _v('#uniquePoint')
    localStorage.setItem('uniquePoint', uniquePoint);
    let insight = _v('#insight')
    localStorage.setItem('insight', insight);

    //Hide Current Question and Show Next
    _('#promoGoals').style.display = 'none';
    _('#toneAndStyle').style.display = 'block';

}

const backToCustomer = ()=>{
    _('#promoGoals').style.display = 'none';
    _('#customerDetails').style.display = 'block';
}

const processTone = () =>{
    validate();
    let tone = _v('#tone')
    localStorage.setItem('tone', tone);
    let style = _v('#style')
    localStorage.setItem('style', style);
    let platform = _v('#platform')
    localStorage.setItem('platform', platform);

    //Hide Current Question and Show Next
    _('#promoGoals').style.display = 'none';
    _('#toneAndStyle').style.display = 'block';

}

const backToPromo = ()=>{
    _('#toneAndStyle').style.display = 'none';
    _('#promoGoals').style.display = 'block';
}