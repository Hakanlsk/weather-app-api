const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'f0b128feadd3aa33dc458b1bcda14ab1';

const setQuery = (e) => {
    if(e.keyCode == '13'){                                                      //enter'a basıldıysa çalışacak
        getResult(searchBar.value)
    } 
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric`;    //apiden şehir ismine göre veri çekme kısmı
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`;               //apiden şehir ismini getirme

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C`;                   //apiden sıcaklık değeri alama

    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description;                         //apiden "parçalı bulutlu" vs alma

    let minMax = document.querySelector('.minmax');
    minMax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C ` //max min alma
}



const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery);



























