
import { Container, H1, Image, User } from './styles'

import People from "../../assets/peopletop.svg"

import Setar from "../../assets/setar.png"
import Lixoic from "../../assets/lixoic.png"

import { useState, useEffect } from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { ContainerItens } from '../../components/ContainerItens/styles'






const Users = () => {

  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  function goBack() {
    navigate("/")
  }


  async function GetUsers() {

    const { data: loadUser } = await axios.get("http://localhost:3002/users")


    setUsers(loadUser)

  }

  useEffect(() => {
    GetUsers()
  }, [])






  async function DeleteUser(userId) {
    await axios.delete(`http://localhost:3002/users/${userId}`)

    const filteredUser = users.filter(user => user.id !== userId)
    setUsers(filteredUser)

  }




  return <Container>


    <Image alt="logo-image" src={People} />

    <ContainerItens ofuscarM={true}>

      <H1>Users</H1>



      <ul>

        {users.map((user) => (

          <User key={user.id} >

            <p>{user.name}</p>  <p>{user.age}</p>

            <button onClick={() => DeleteUser(user.id)} ><img id='Lixo' alt='icone-deletar-usuario' src={Lixoic} /></button>

          </User>

        ))}
      </ul>


      <Button buttonBack={true} onClick={goBack}>< img id='imgseta' alt="seta-Voltar" src={Setar} /> Voltar   </Button>


    </ContainerItens>

  </Container>

}


export default Users