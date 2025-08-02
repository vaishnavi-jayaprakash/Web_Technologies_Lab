const apiKey = 'f340687f0cbd8e007d7f6533e0c4e445'; 

async function getWeather(){
    const city = document.getElementById('cityInput').value;
    const resultDiv= document.getElementById('weatherResult');

    if(!city)
    {
        alert("Enter a city!!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        const res = await fetch (url);
        if(!res.ok) throw new Error("Enter a valid city!!");

        const data = await res.json();
        console.log(data);

        document.getElementById('cityName').innerText = data.name;
        document.getElementById('temp').innerText = `Temperature : ${data.main.temp} C`;
        document.getElementById('desc').innerText = data.weather[0].description;
        document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        resultDiv.classList.remove('hidden');
        console.log("Icon URL: ", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

    }
    catch(err)
    {
        alert(`Error:${err.message}`);
        resultDiv.classList.add('hidden');
    }

}