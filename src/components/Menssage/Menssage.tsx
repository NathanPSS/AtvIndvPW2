import './menssage.css'
import trashIcon from '../../assets/Frame.png'

interface IProps {
    img :string,
    content :string
}

export function Mensage(props :IProps) {
    return(
        <div className='containerMensage'>
            <img src={props.img} className='imageAvatar'></img>
            <p className='contentMensage'>{props.content}</p>
            <img src={trashIcon} className='trashImg'></img>
        </div>
    )
}