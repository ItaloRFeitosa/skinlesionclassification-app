import React, {useState} from 'react';

import { Container , Content, Description, Form, Input} from './styles';

import Uploader from '../../components/Uploader';

import {MdAccountBox, MdEmail} from 'react-icons/md';

export default function Home(){
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');

  return (
  <Container>
    <Content>

      <Description>
        <h1>Faça o Envio da Foto com a Lesão</h1>
        <p>Preencha com nome e email, clique no botão para adicionar a Foto. O resultado poderá levar alguns minutos, aguarde ou se preferir aguarde o envio do email com o resultado</p>
      </Description>

      <Form>
        <Input>

          <input
            placeholder='Nome'
            value={name}
            onChange={e => setName(e.target.value)}

          />
          <MdAccountBox size={32}/>
        </Input>
        <Input>

          <input
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <MdEmail size={32}/>
        </Input>




        <Uploader
          user={{name, email}}
        />
      </Form>
    </Content>
  </Container>
  );
}
