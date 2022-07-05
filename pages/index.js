import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Weather from '../components/Weather';
import Spinner from '../components/Spinner';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + process.env.API_KEY;
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.get(url).then((res) => {
      setWeather(res.data);
    });

    setCity('');
    setLoading(false);
  }

  if(loading) {
    return <Spinner />
  } else {
    return (
      <>
        <Head>
          <title>Next Weather</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>
            <form onSubmit={fetchWeather} className='flex justify-between items-center w-full m-auto p-3 bg-transparent border text-white rounded-2xl'>
              <input onChange={e => setCity(e.target.value)} type='text' placeholder='search' className='bg-transparent border-none text-white focus:outline-none text-xl placeholder:text-white w-full placeholder:font-mono' />
              <button onClick={fetchWeather}>
                <BsSearch size={20} />
              </button>
            </form>
          </div>

          {weather.main && <Weather data={weather} />}
        </main>
      </>
    );
  }
};
