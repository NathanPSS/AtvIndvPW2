

import './App.css'
import { Content } from './components/Content/Content'
import { MensageInput } from './components/MensageInput/MensageInput'
import { Mensage } from './components/Menssage/Menssage'
import { Title } from './components/Title/Title'
import iconAvatarImg1 from './assets/0b7ca842e82cf6faa6aac8e2c9970d59.png'
import iconAvatarImg2 from './assets/4aeb045e534765147a900b4e99903e46.png'

function App() {

  return (
    <div className='containerApp'>
      <Title />
      <Content />
      <MensageInput />
      <div className='containerMensages'>
      <Mensage img={iconAvatarImg1} content={'Boris estou no local já lhe esperando. estou com camisa azul e calça jeans'} />
      <Mensage img={iconAvatarImg2} content={'Acabei de lhe ver. Vou estacionar o carro próximo.'} />
      </div>
    </div>
  )
}

export default App
