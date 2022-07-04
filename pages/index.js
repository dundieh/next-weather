import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
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
      <div className='top-0 bottom-0 right-0 left-0 absolute z-[1] bg-black/40'>
        <Image src={background} alt='background' layout='fill' className='object-cover' />
      </div>
      <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>
        <form className='flex justify-between items-center w-full m-auto p-3 bg-transparent border text-white rounded-2xl'>
          <input type='text' placeholder='search' className='bg-transparent border-none text-white focus:outline-none text-xl placeholder:text-white w-full' />
          <button onClick={fetchWeather}>
            <BsSearch size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};