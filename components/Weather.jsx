import Image from 'next/image';
export default function Weather({ data }) {
    return (
        <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-aut0 p-4 text-gray-300 z-10'>
            <div className='relative flex justify-between pt-12'>
                <div className='flex flex-col items-center'>
                    <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} width={100} height={100} alt='' />
                    <p className='text-2xl'>{data.weather[0].main}</p>
                </div>
                <p className='text-9xl'>{data.main.temp.toFixed(0)}&#176;</p>
            </div>
            <div></div>
        </div>
    );
}