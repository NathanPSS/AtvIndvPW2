import carImg from '../../assets/449faf84c1f575f28dfeb61ec90f5cc8.png'
import './car.css'

export function Car(){
    return (
        <div className='containerCar'>
            <img src={carImg} className='img'/>
        </div>
    )
}