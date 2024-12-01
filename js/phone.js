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
// console.log(phones)
const divCont = document.getElementById('divCont');
// clear 
divCont.textContent ='';
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

} 

const handler = () => {
   const inputField = document.getElementById('inputField');
   const searchText = inputField.value;
    console.log(searchText)
    loadPhone(searchText);
  };
// loadPhone();

