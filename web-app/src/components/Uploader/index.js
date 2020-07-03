import React, { useRef, useState} from 'react';
import {Container, Button} from './styles';

import {v4 as uuidV4} from 'uuid';

import {useHistory} from 'react-router-dom'

import storage from '../../services/storage';

import {predictLesion} from '../../services/predict.api';

import { MdCameraAlt, MdDone, MdCloudUpload, MdFormatLineSpacing} from 'react-icons/md';

export default function Uploader({user}){
  const fileUploader = useRef(null)
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  function handleUpload(e){
    setDone(false);
    fileUploader.current.click();
    setLoading(true)
  }

  function sendImage(e){
      setDone(false);

      const file = fileUploader.current.files[0];
      const fileExtension = file.name.split('.').pop();
      const imgId = uuidV4();
      const imgFilename = imgId.concat(`.${fileExtension}`);

      const imageRef = storage.ref().child(imgFilename);

      imageRef.put(file).then(async snapshot => {
        console.log('enviado para o firebase');
        setDone(true);
        setLoading(false);

        const imageData = {
          id: imgId,
          img_name: imgFilename,
          img_url: await imageRef.getDownloadURL(),
          ...user
        };

        predictLesion(imageData).then(response => {
          //console.log(response.data);
          history.push(`/results/${imageData.id}`)
        });
      })
      .catch(error => console.log(error));

  }

  return(
  <Container>
    <Button onClick={handleUpload} done={done} loading={loading}>
      {!loading && !done && <MdCameraAlt size={32} color='#ECF1F8'/>}
      {loading && !done && <MdCloudUpload size={32} color='#ECF1F8'/>}
      {!loading && done && <MdDone size={32} color='#ECF1F8'/>}
    </Button>
    <input type="file" id="file" style={{display: "none"}} accept="image/*"
      ref={fileUploader}
      onChange={sendImage}/>
  </Container>
  );
}
