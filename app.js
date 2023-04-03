//-----------------------------------------------------------------
//--------------------------------------------------------------
//-----------------------------------------------------------
//--------------------------------------------------------
//----------------------------------------------------
//const url=https://restcountries.com/v3.1/name/{name}

const getCountries=async function(){

 //const selectedCountry=document.querySelector();

 //const url=`https://restcountries.com/v3.1/name/${selectedCountry}`
 const url=`https://restcountries.com/v3.1/name/turkey`

 const res=await fetch(url);

 const data=await res.json();

console.log(data);



};

getCountries()