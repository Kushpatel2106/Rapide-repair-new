import './Location.css';
import LocationImg from './images/L.jpg';

export default function Location(){
    return(
        <div className='service-name'>
            <h1 className='tital-name'>Machanic shop near you</h1>
            <img src={LocationImg} alt='#' height={100} />
        </div>
    )
}