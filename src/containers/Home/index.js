
import { Container, Image, InputLabel, Input } from './styles'

import H1 from "../../components/Title"

import Avatarola from "../../assets/avatarola.svg"

import Setar from "../../assets/setar.png"


import { useState, useRef } from 'react'
import axios from 'axios'

// import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import ContainerItens from '../../components/ContainerItens'



const App = () => {

  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  const inputName = useRef()
  const inputAge = useRef()


  async function AddUser() {
    const { data: newUser } = await axios.post("http://localhost:3002/user", {
      name: inputName.current.value, age: inputAge.current.value


    })
    setUsers([...users, newUser])

    
      navigate("/Users")
    
  }





  return <Container>


    <Image alt="logo-image" src={Avatarola} />

    <ContainerItens>

      <H1>Hello!</H1>

      <InputLabel>Nome</InputLabel>
      <Input ref={inputName} placeholder="Nome"  ></Input>

      <InputLabel> Idade</InputLabel>
      <Input ref={inputAge} placeholder="Idade" ></Input>

      <Button onClick={AddUser} to="/Users">Cadastrar <img id='imgseta' alt="seta-cadastrar" src={Setar} />  </Button>
   


    </ContainerItens>

  </Container>

}


export default App