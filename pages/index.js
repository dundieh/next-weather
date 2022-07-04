import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import background from '../public/background.jpg';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [lloading, setLoading] = useState(false);
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + 'london' + '&units=metric&appid=62c8b31c643e920b75e6f8c35f44d47d';

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.get(url).then((res) => {
      setWeather(res.data);
    });

    setCity('');
  }

  return (
    <div>
      <Head>
        <title>Weather - Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image src={background} alt='' layout='fill' className='object-cover' />
      </main>
    </div>
  );
};