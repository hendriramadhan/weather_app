import '../assets/css/cuaca.css';
import Cloud from '../assets/img/awan.png'
import Cerah from '../assets/img/awanMatahari.png'
import Hujan from '../assets/img/hujan.png'


export default function Cuaca() {
    return(
        <div className="container">
            <div className='left'>
                <h2>
                    Jakarta
                </h2>
                <div className='status'>
                    <img className='cloud'   src={Cloud} alt="fireSpot"/>
                    <p className='keterangan'>Berawan, 31° C</p>
                </div>
                {/* <hr className="white-line" /> */}
                <hr className="white-line" />  
                <p className='save'>Keep Save</p>
            </div>
            <div className='right'>
                <p className='date'>Kamis, 8 November 2023</p>
                <hr className="white-lines" />
                <div className='card-container'>
                    <div className='card'>
                        <p className='city'>Yogyakarta</p>
                        <img className='cerah' src={Cerah}/>
                        <p className='suhu'>32° C</p>
                    </div>
                    <div className='card'>
                        <p className='city'>Bekasi</p>
                        <img className='cerah' src={Hujan}/>
                        <p className='suhu'>28° C</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}