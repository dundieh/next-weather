import Head from 'next/head';

export default function Home() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.NEXT_WEATHER_KEY}`;

  return (
    <div>
      <Head>
        <title>Weather - Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};