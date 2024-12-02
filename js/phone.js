const loadPhone = async(searchText)=> {
const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
const data = await res.json();
const phoneData = data.data;
// console.log(data)
// console.log(data.status);
// console.log(data.data);
displayPhone(phoneData);
}

const displayPhone = phones =>{
console.log(phones)
const divCont = document.getElementById('divCont');
// clear 
divCont.textContent ='';

console.log(phones.length);
const showCont= document.getElementById('show-cont');
if (phones.length>12) {
  showCont.classList.remove('hidden')
} else {
  showCont.classList.add('hidden')
}

phones = phones.slice(0,12);


phones.forEach(element => {
    // console.log(element) 
    const divPhone = document.createElement('div');
    divPhone.classList=`card bg-gray-100 shadow-xl p-4`
    divPhone.innerHTML= `<figure>
                  <img
                    src="${element.image}"
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">${element.phone_name}</h2>
                  
                  <p>${element.brand} If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-secondary">Buy Now</button>
                  </div>
                </div>
    `;
    divCont.appendChild(divPhone);

});

// hide 
toogleloadingSpinner(false);
} 

const handler = () => {
  toogleloadingSpinner(true);
   const inputField = document.getElementById('inputField');
   const searchText = inputField.value;
    console.log(searchText)
    loadPhone(searchText);
  };

  
  const handleSearch = () =>{
    toogleloadingSpinner(true);
    const searchField= document.getElementById('searchField');
    const searchText = searchField.value;
    loadPhone(searchText);
  }

  const toogleloadingSpinner = (loadSpinner)=>{
    const loadingSpinner = document.getElementById('loadingSpinner');
    if (loadSpinner) {
      loadingSpinner.classList.remove('hidden'); 
    } else {
      loadingSpinner.classList.add('hidden'); 
    }
    
  }
// loadPhone();

