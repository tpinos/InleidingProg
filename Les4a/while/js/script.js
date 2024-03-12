const maxCapaciteit = 5
let litersWater = 0
let waterLevel = document.querySelector("p")
const addWaterBtn =document.querySelector("#add")

function addWater(){
while (litersWater < maxCapaciteit){
	// dompel spons onder	// ren naar de emmer	// knijp de spons uit
	 litersWater = litersWater + Math.random()// ren terug
	 console.log(litersWater)
	 waterLevel.textContent = litersWater
	}
}

addWaterBtn.addEventListener("click",addWater)