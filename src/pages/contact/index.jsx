import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/marcos-vinicius-648844200" 
        />
        <ItemContact 
          IconFa={FaGithub} 
          LinkContact="https://github.com/mvinicius-lp" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/mvinicius.lp87" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="mviniciuslp87@alu.ufc.br" 
        />
      </Content>
    </Container>
  )
}
