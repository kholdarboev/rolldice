import React from 'react';
import { Container,Dies,Wobble } from './style';

const Die = (props) => {
    let random =  `fas fa-dice-${props.face}` 
  return ( 
      <Container>
        {props.rolling 
        ?<Wobble><Dies> <i className={random}></i></Dies></Wobble> 
        :<Dies> <i className={random}></i></Dies>
        } 
      </Container>
  )
}
export default Die