import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [lloading, setLoading] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.get(url).then((res) => {
      setWeather(res.data);
      console.log(res);
    });

    setCity('');
  }

  return (
    <div>
      <Head>
        <title>Weather - Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={fetchWeather}>Search</button>
    </div>
  );
};