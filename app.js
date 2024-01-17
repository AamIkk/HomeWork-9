// async await
const root=document.querySelector('#root')
const input=document.querySelector('input')
const btn=document.querySelector('button')
const randomBtn=document.getElementById('randomCountryBtn')

const _url='https://restcountries.com/v3.1/name/'
const _urlCountry='https://restcountries.com/v3.1/all'

async function getCountry(name){
    const res=await fetch(_url+name)
    const data=await res.json()
    console.log(data);
    showCountry(data)
}




function showCountry(arr){
    root.innerHTML=''
    for (const obj of arr) {
        root.innerHTML+=`
        <h1>${obj.name.common}</h1>
        <h3>Continents:${obj.continents}</h3>
        <h2>Population:${obj.population}</h2>
        <p>Landlocked:${obj.landlocked}</p>
        <p>Area:${obj.area}</p>
        `
    }
}

async function getAllCountry(){
    const res=await fetch(_urlCountry)
    const data=await res.json()
    console.log(data);
    showAllCountry(data)
}

function showAllCountry(arr){
    root.innerHTML=''
    for (const obj of arr) {
        root.innerHTML+=`
        <h1>${obj.name.common}</h1>
        <img src='${obj.flags.png}'
        <br>
        <h6>${obj.capital}</h6>
        `
    }
}

input.onchange=()=>{
    getCountry(input.value)
}

btn.onclick=()=>{
    getAllCountry()
}

randomBtn.onclick = async () => {
    const res = await fetch(_urlCountry); 
    const data = await res.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomCountry = [data[randomIndex]];
    showAllCountry(randomCountry);
};
