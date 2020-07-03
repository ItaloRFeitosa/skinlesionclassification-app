import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Container, Content} from './styles';

import {getResult} from '../../services/predict.api';
export default function Result(){
  const { id } = useParams();

  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [results, setResults] = useState('');

  useEffect(()=>{
    getResult(id).then((res) => {
      const { img_url, name, results } = res.data;
      setImageUrl(img_url);
      setName(name);
      setResults(results);
      console.log(results);

    })
  }, [id]);


  return (
    <Container>
      <Content>
        <h1>Resultado</h1>
        <img src={imageUrl} alt=""/>
      </Content>
    </Container>
  );

}
