import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css';
export default function InfoBox({ info }) {
    const HOT_URL = "https://media.istockphoto.com/id/988274822/photo/young-mother-and-child-with-heatstroke.webp?a=1&b=1&s=612x612&w=0&k=20&c=lV2-InazovodD1cGXyR3grvNPCO0rHm7z1KQvr6rLcc=";
    const COLD_URL = "https://images.unsplash.com/photo-1548320588-3f74b192889a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";
    const RAINY_URL = "https://media.istockphoto.com/id/861872298/photo/female-getting-drenched-by-rain.webp?a=1&b=1&s=612x612&w=0&k=20&c=cPFIDkHnQRxopNkkup1XLy8jOk-dJe9GuD5AmQU38D8=";
    return (
        <div className="info-box">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAINY_URL : info.temp > 273 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {info.city.toUpperCase()}&nbsp;
                        {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 273 ? <WbSunnyIcon /> : <AcUnitIcon />}
                    </Typography>
                    <Typography variant="body2" component="span" color='text.secondary' >
                        <div>Temperature = {info.temp}C</div>
                        <div>Minimum Temperature = {info.tempMin}C</div>
                        <div>Maximum Temperature = {info.tempMax}C</div>
                        <div>Humidity = {info.humidity}</div>
                        <div>The Weather Feels Like = {info.feelslike}C</div>
                        <div>Weather = {info.weather}</div>
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )
}