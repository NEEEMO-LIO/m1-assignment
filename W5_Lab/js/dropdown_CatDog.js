/*------Dropdown Cat/Dog------*/
var petTyp = document.getElementById('petTyp');
var catDiv = document.getElementById('cat');
var dogDiv = document.getElementById('dog');



function petType(){
    var selectedValue = petTyp.value;
    if (selectedValue === '1') {
        catDiv.style.display = 'block';  
        dogDiv.style.display = 'none';   
    } else if (selectedValue === '2') {
        dogDiv.style.display = 'block';  
        catDiv.style.display = 'none';   
    } else {
        catDiv.style.display = 'none';   
        dogDiv.style.display = 'none';   
    }
};
petTyp.addEventListener('change',petType);




/*------Dropdown Have/Haven't------*/
var have = document.getElementById('have');
var yes = document.getElementById('yes');

function petHave(){
    var selectedValue = have.value;
    if(selectedValue === '1'){
        yes.style.display = "block";
    } else{
        yes.style.display = "none";
    }
};

have.addEventListener('change',petHave);
