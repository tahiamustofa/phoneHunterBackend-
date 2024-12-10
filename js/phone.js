const loadPhone = async(searchText,isShowAll)=> {
const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
const data = await res.json();
const phoneData = data.data;
console.log('all data',phoneData);
// console.log(data)
// console.log(data.status);
// console.log(data.data);
displayPhone(phoneData,isShowAll);
}

const displayPhone = (phones,isShowAll) =>{
console.log(phones)
const divCont = document.getElementById('divCont'); //divcont append korar por abr ekhane back kortese 
// clear 
divCont.textContent =''; 

console.log(phones.length);
const showCont= document.getElementById('show-cont');
if (phones.length>12 && !isShowAll) {
  showCont.classList.remove('hidden')
} else {
  showCont.classList.add('hidden')
}
// console.log('is Show All',isShowAll); 
if (!isShowAll) {
  phones = phones.slice(0,12);
} 

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
                  <div class="card-actions justify-center">
                    <button onclick="showDetails('${element.slug}'); my_modal.showModal()" class="btn btn-secondary">Show Details</button>
                  </div>
                </div>
    `;
    divCont.appendChild(divPhone);

});

// hide 
toogleloadingSpinner(false);
} 

const handler =(isShowAll) => {
  toogleloadingSpinner(true);
   const inputField = document.getElementById('inputField');
   const searchText = inputField.value;
    console.log(searchText)
    loadPhone(searchText,isShowAll);
  };
 
  // const handleSearch = () =>{
  //   toogleloadingSpinner(true);
  //   const searchField= document.getElementById('searchField');
  //   const searchText = searchField.value;
  //   loadPhone(searchText);
  // }

  const toogleloadingSpinner = (loadSpinner)=>{
    const loadingSpinner = document.getElementById('loadingSpinner');
    if (loadSpinner) {
      loadingSpinner.classList.remove('hidden'); 
    } else {
      loadingSpinner.classList.add('hidden'); 
    }
    
  }
  
const handleShowAll = () => {
  handler(true);
};


const showDetails=async(id)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json();
console.log('clicked',data)
}
// loadPhone();
