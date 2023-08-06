let key = "0f63dbfac894f68e12f95d4686afff3b"




function dataOnScreen(data){
    document.querySelector(".city").innerHTML = " Tempo em " +data.name
    document.querySelector(".temp").innerHTML = Math.floor  (data.main.temp ) + "°C" 
    document.querySelector(".text").innerHTML = data.weather[0].description;
    document.querySelector(".humidity").innerHTML =  data.main.humidity + "%";
    document.querySelector(".forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

}

 async function lookForcity(input){

    const data = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());

    dataOnScreen(data);
  
}

function clickButton() {
    const input = document.querySelector(".input-city").value 
    

    lookForcity(input)
}

