import './mensageInput.css'
import telephoneImg from '../../assets/Vector.png'
import shieldImg from '../../assets/Vector(1).png'

export function MensageInput() {
   return(
    <div>
    <div className="inputMensage">
        <p className='mensage'>Enviar mensagem para Boris...</p>
    </div>
    <div className='buttonPublish'>
        <p className='publishMensage'>Publicar</p>
        <img src={telephoneImg} className='mensageCellphone'></img>
    <img src={shieldImg} className='mensageShield'></img>
    </div>
    </div>
   )
}