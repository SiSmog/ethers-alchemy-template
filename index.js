import contract from "./contract.js";


const getData=()=>{
    contract.dernieresDonneesCapteurs().then((res)=>console.log(res))
}
const addData=()=>{
    contract.ajouterDonneesCapteurs(1,10,100).then((res)=>console.log(res))
}
