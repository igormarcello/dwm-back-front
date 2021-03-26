import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PostCard from '../../../components/PostCard';


const useStyles = makeStyles((theme) => ({
  root:{
  }
}));

const posts = [
  {
    id:1,
    author:{id:1, nome: 'Igor Marcelo', username: 'igormarcelo', avatar:'/images/avatars/avatar_1.jpg'},
    title: "Ingles sem sair de casa, aulas de Ingles via EAD",
    date: "Março 25, 2021",
    description:"Oferece aulas de ingles em casa pela internet, so combinar o valor da hora/aula, pelo contato 61 999-9999.", 
    hashtags: "#Aulas, #ingles, #aulas_em_casa, #ead",
    image:"/images/posts/post9.jpg" 
 },
 {
  id:2,
  author:{id:1, nome: 'Igor Marcelo', username: 'igormarcelo', avatar:'/images/avatars/avatar_1.jpg'},
  title: "Aulas de redação via EAD",
  date: "Março 24, 2021",
  description:"Oferece aulas de redação em casa pela internet, so combinar o valor da hora/aula, pelo contato 61 999-9999.", 
  hashtags: "#Aulas, #redacao, #aulas_em_casa, #ead",
  image:"/images/posts/post8.png" 
 } 
];

function Feed(){
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        posts.map(post =>(
          <PostCard Key={post.id} post={post}/>
        ))
      }
    </div>
  )
}

export default Feed;