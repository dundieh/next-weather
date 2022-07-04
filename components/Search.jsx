import { BsSearch } from 'react-icons/bs';

export default function Search({ fetchWeather, setCity }) {
    return (
      <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>
        <form onSubmit={fetchWeather} className='flex justify-between items-center w-full m-auto p-3 bg-transparent border text-white rounded-2xl'>
          <input onChange={(e) => setCity(e.target.value)} type='text' placeholder='search' className='bg-transparent border-none text-white focus:outline-none text-xl placeholder:text-white w-full placeholder:font-mono' />
          <button type='submit' onClick={fetchWeather}>
            <BsSearch size={20} />
          </button>
        </form>
      </div>
    );
}