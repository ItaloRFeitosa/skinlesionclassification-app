import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Container, Content, Title, Image, MeanResult, Results} from './styles';

import {MdCloudDownload} from 'react-icons/md';

import {getResult} from '../../services/predict.api';
export default function Result(){
  const { id } = useParams();

  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [results, setResults] = useState('');

  useEffect(()=> {
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
        <Title>Resultado da Predição</Title>
        <MeanResult>
          <Image loading={loading}>
            <img src={imageUrl} alt="" onLoad={()=>setLoading(false)}/>
            <p>Não cancerígino</p>
          </Image>

        </MeanResult>
        <Results>

        </Results>

      </Content>
    </Container>
  );

}
