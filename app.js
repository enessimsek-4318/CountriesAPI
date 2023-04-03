//-----------------------------------------------------------------
//--------------------------------------------------------------
//-----------------------------------------------------------
//--------------------------------------------------------
//----------------------------------------------------

let isError=false;

const getCountries = async function (searchCountry) {

    //const selectedCountry=document.querySelector();

    //const url=`https://restcountries.com/v3.1/name/${selectedCountry}`

    const url = `https://restcountries.com/v3.1/name/${searchCountry}`


    try {
        const res = await fetch(url);

        if (!res.ok) {
            isError=true;
        }

        const data = await res.json();
        renderCountries(data);



    } catch (error) {
        isError=true;
        console.log(error);
    }



};

const searchBtn = document.querySelector(".btn-country");

searchBtn.addEventListener("click", () => {
    const searchCountry = document.getElementById("search-country").value.trim();
    getCountries(searchCountry.toLowerCase());
})

const renderCountries = (data) => {
    const {
        capital,
        currencies,
        flags:{svg},
        languages,
        name:{common},
        region

    } = data[0];

    const cardDiv=document.querySelector(".card")

    
    if (!isError) {
    cardDiv.innerHTML =`
    <img src="${svg}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${common}</h5>
        <p class="card-text"><i class="fa-sharp fa-solid fa-map"></i> ${region}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><i class="fa-solid fa-house-flag"></i> ${capital}</li>
        <li class="list-group-item"><i class="fa-solid fa-money-bill-wave"></i> ${Object.values(currencies)[0].name} ${Object.values(currencies)[0].symbol}</li>
        <li class="list-group-item"><i class="fa-solid fa-language"></i> ${Object.values(languages)}</li>
    </ul>
    <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>     
    
    `
    }else{
        cardDiv.innerHTML =`
        
        <h2> Country can not be found</h2>
        <img src="./404.jpg" alt="">
        
        `
    }
    
    
}







