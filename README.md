# skinlesionclassification-app (Em Desenvolvimento)
APP desenvolvido para Trabalho de Conclusão de Curso
## Finalidade
Classificar Lesões de Pele com base em imagens, utilizando Machine Learning
## Tecnologias
### Front-End
Upload de Imagens e mostrar resultados
ReactJS, Styled-Components, Axios, Firebase

### Back-End
Receber requisições para classificar as imagens, enviar tarefa para workers via RabbitMQ
#### API
Express, Amqplib, Firebase-Admin
#### Worker
Celery, TensorFlow, Scikit-learn, Firebase-Admin


