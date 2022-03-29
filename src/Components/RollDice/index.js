import React,{useState} from 'react'
import Die from '../Die'
import { Button, Container, Dice, H1, Players,P, RollDies, Parag } from './style'

const Rolldice = (props) => {
    const [lists,setLists] = useState(['one','two','three','four','five','six'])
    const [dieOne, setDieOne] = useState({die1:'one', die2:'two', rolling:false})
    const [isRolling, setIsrolling] = useState(false)
    const [playerOne, setPlayerOne] = useState('Player1')
    const [playerTwo, setPlayerTwo] = useState('Player2')
    const Click =() => {
     const newDieOne = lists[Math.floor(Math.random()*lists.length)]
     const newDieTwo = lists[Math.floor(Math.random()*lists.length)]
     setDieOne({die1:newDieOne, die2:newDieTwo})
     let res = newDieOne > newDieTwo ? <P>{playerOne} won!!!</P> : <P> {playerTwo} won!!! </P>
     setIsrolling(true)
     
     
     setTimeout(() => {
       setIsrolling(false)
      }, 1000);
    }
    const editPlayerOneName = ( ) => {
      setPlayerOne((e)=>{
        prompt( e.target.value)
      })
    }
    const editPlayerTwoName =(e) => {
      setPlayerTwo((e)=>{
      })
    }

  return (
      <Container>
        <H1>Let's Play</H1>
        <Dice>
        <Players parag>
          <Parag onClick={editPlayerOneName}>Edit PlayerOne name</Parag> 
          <Parag onChange={editPlayerTwoName}>Edit {playerTwo} name</Parag> 
        </Players>
          <Players>
          <P> {playerOne}</P>
          <P> {playerTwo}</P>
          </Players>
          <RollDies>
        <Die rolling={isRolling} face={dieOne.die1}/>
        <Die rolling={isRolling} face={dieOne.die2}/>
          </RollDies>
        </Dice>
        <Button disabled={isRolling} onClick={Click}>{isRolling ? 'Rolling...' :'Roll Dice!'}</Button>
    </Container>
  )
}
export default Rolldice