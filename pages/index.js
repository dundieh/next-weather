import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Search from '../components/Search';
import Weather from '../components/Weather';
import Spinner from '../components/Spinner';
import background from '../public/background.jpg';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=62c8b31c643e920b75e6f8c35f44d47d';
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.get(url).then((res) => {
      setWeather(res.data);
      console.log(res.data);
    });

    setCity('');
    setLoading(false);
  }

  if(loading) {
    return <Spinner />
  } else {
    return (
      <div>
        <Head>
          <title>Weather - Next</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className='absolute top-0 bottom-0 right-0 left-0 bg-black/40 z-[1]'>
          <Image src={background} alt='background' layout='fill' className='object-cover' />
        </div>
  
        <Search fetchWeather={fetchWeather} setCity={setCity} />
  
        {weather.main && <Weather data={weather} />}
      </div>
    );
  }
};