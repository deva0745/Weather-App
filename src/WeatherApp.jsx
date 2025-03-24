import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 289.05,
        tempMin: 287.25,
        tempMax: 293.35,
        humidity: 15,
        feelslike: 26.05,
        weather: "clear sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Rajan Kumar</h2>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    );
}