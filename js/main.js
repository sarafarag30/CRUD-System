var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');
var subButtonInput = document.getElementById('subButton');
var alerts = document.querySelectorAll('div.alert');
var formInputs = document.getElementsByClassName("form-control");

var productsContainer = [] ;
var currentIndex = 0 ;

if(localStorage.getItem('ourProducts') != null){
    productsContainer = JSON.parse(localStorage.getItem('ourProducts'));
    displayProducts();
};

function addProduct() {
    var product = {
        name : productNameInput.value , 
        price : productPriceInput.value ,
        category : productCategoryInput.value ,
        desc : productDescInput.value
    }
    productsContainer.push(product);
    localStorage.setItem('ourProducts' , JSON.stringify(productsContainer));
    console.log(productsContainer);
};

function clearForm(){
    for(var i=0; i< formInputs.length ;i++){
        formInputs[i].value = "";
        formInputs[i].classList.remove("is-valid");
    };
};

function displayProducts(){
    var cartoona = ``;
    for ( i = 0 ; i < productsContainer.length ; i++ ){
        cartoona += `<tr>
        <td>${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td><button onclick="getProductInfo(${i})" class="btn btn-outline-info">Update</button></td>
        <td><button onclick="deleteProduct(${i})"class="btn btn-outline-danger">Delete</button></td>
        </tr>`;
    };
    document.getElementById('tableBody').innerHTML = cartoona;
};

function deleteProduct(index){
    productsContainer.splice(index,1);
    localStorage.setItem('ourProducts' , JSON.stringify(productsContainer));
    displayProducts();
};

function searchProduct(term){
    var cartoona = ``;
    for( i = 0 ; i < productsContainer.length ; i++ ){
        if(productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true){
         cartoona += `<tr>
            <td>${i}</td>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].desc}</td>
            <td><button onclick="getProductInfo(${i})" class="btn btn-outline-info">Update</button></td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
            </tr>`;
        };
    };
    document.getElementById('tableBody').innerHTML = cartoona;
};


function getProductInfo(index){
    productNameInput.value = productsContainer[index].name ;
    productPriceInput.value = productsContainer[index].price ;
    productCategoryInput.value = productsContainer[index].category ;
    productDescInput.value = productsContainer[index].desc ; 
    subButtonInput.innerHTML = "update product" ;
    currentIndex = index ;
};

function updateProduct(){
    var product = {
        name : productNameInput.value , 
        price : productPriceInput.value ,
        category : productCategoryInput.value ,
        desc : productDescInput.value
    };
    productsContainer[currentIndex] = product ;
    localStorage.setItem('ourProducts' , JSON.stringify(productsContainer));
    subButtonInput.innerHTML = "add product";
};


subButtonInput.onclick=function(){

    if(subButtonInput.innerHTML == "add product"){
        addProduct();
    }else{
        updateProduct();
    };
    displayProducts();
    clearForm();
};



productNameInput.onkeyup = function(){

    var nameRejex = /^[A-Z][a-z]{2,8}$/;

    if(!nameRejex.test(productNameInput.value) || productNameInput.value == null)
    {
        subButtonInput.disabled="true";
        productNameInput.classList.add("is-invalid");
        productNameInput.classList.remove("is-valid");
        nameAlert.classList.remove("d-none");
        return false;

    }
    else{
        subButtonInput.removeAttribute("disabled");
        productNameInput.classList.add("is-valid");
        productNameInput.classList.remove("is-invalid");
        nameAlert.classList.add("d-none");
        return true;

    };
   
};


productPriceInput.onkeyup = function(){
    
    var categoryRejex = /^[1-7][0-9][0-9][0-9]$|8000$/;

    if(!categoryRejex.test(productPriceInput.value) || productPriceInput.value == null)
    {
        subButtonInput.disabled="true";
        productPriceInput.classList.add("is-invalid");
        productPriceInput.classList.remove("is-valid");
        priceAlert.classList.remove("d-none");
        return false;

    }
    else{
        subButtonInput.removeAttribute("disabled");
        productPriceInput.classList.add("is-valid");
        productPriceInput.classList.remove("is-invalid");
        priceAlert.classList.add("d-none");
        return true;

    };
   
};


productCategoryInput.onkeyup = function(){
    
    var categoryRejex = /^[a-z]{1,8}$/;

    if(!categoryRejex.test(productCategoryInput.value) || productCategoryInput.value == null)
    {
        subButtonInput.disabled="true";
        productCategoryInput.classList.add("is-invalid");
        productCategoryInput.classList.remove("is-valid");
        categoryAlert.classList.remove("d-none");
        return false;

    }
    else{
        subButtonInput.removeAttribute("disabled");
        productCategoryInput.classList.add("is-valid");
        productCategoryInput.classList.remove("is-invalid");
        categoryAlert.classList.add("d-none");
        return true

    };
   
};


productDescInput.onkeyup = function(){
    
    var categoryRejex = /^[a-z]{2,100}$/;

    if(!categoryRejex.test(productDescInput.value) || productDescInput.value == null)
    {
        subButtonInput.disabled="true";
        productDescInput.classList.add("is-invalid");
        productDescInput.classList.remove("is-valid");
        descAlert.classList.remove("d-none");
        return false;

    }
    else{
        subButtonInput.removeAttribute("disabled");
        productDescInput.classList.add("is-valid");
        productDescInput.classList.remove("is-invalid");
        descAlert.classList.add("d-none");
        return true;

    };
   
};

