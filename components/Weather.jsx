import Image from 'next/image';
export default function Weather({ data }) {
    return (
        <div>
            <div>
                <div>
                    <Image src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} width={100} height={100} alt='case' />
                </div>
            </div>
        </div>
    );
}