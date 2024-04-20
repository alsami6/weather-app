const apiKey = "a80df3130815ee475806a399964116f3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore"


async function checkWeather(){
    const res = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await res.json();

    console.log(data);
}

checkWeather()