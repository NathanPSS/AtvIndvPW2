import avatarImg from '../../assets/4aeb045e534765147a900b4e99903e46.png'
import startImg from '../../assets/Frame 3.png'
import { Car } from '../Car/Car'
import './avatar.css'


export function Avatar(){
    return(
        <div className='mainContainer'>
            <img className='imgAvatar' src={avatarImg}/>
            <div className='starContainer'>
              <img src={startImg}></img>
            </div>
            <Car />
            <p className='nameAvatar'>Boris C</p>
            <h1 className='carTitle'>BCD0D19</h1>
            <p className='carName'>Honda Civic Roxo</p>
        </div>
    )
}