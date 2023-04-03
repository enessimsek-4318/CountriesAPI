//-----------------------------------------------------------------
//--------------------------------------------------------------
//-----------------------------------------------------------
//--------------------------------------------------------
//----------------------------------------------------



const getCountries=async function(searchCountry){

 //const selectedCountry=document.querySelector();

 //const url=`https://restcountries.com/v3.1/name/${selectedCountry}`

 const url=`https://restcountries.com/v3.1/name/${searchCountry}`
 
 const res=await fetch(url);

 const data=await res.json();
 
 try {
    
 } catch (error) {
    
 }



};

const searchBtn=document.querySelector(".btn-country");

searchBtn.addEventListener("click",()=>{
    const searchCountry=document.getElementById("search-country").value.trim();
    getCountries(searchCountry)
})
