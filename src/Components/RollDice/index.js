import React,{useState} from 'react'
import Die from '../Die'
import { Button, Container, Dice, H1, Players,P, RollDies, Parag } from './style'
const Rolldice = () => {
    const [lists] = useState(['one','two','three','four','five','six'])
    const [dieOne, setDieOne] = useState({die1:'one', die2:'two', rolling:false})
    const [isRolling, setIsrolling] = useState(false)
    const [playerOne, setPlayerOne] = useState('Player 1')
    const [playerTwo, setPlayerTwo] = useState('Player 2')
    const Click =() => {
      const newDieOne = lists[Math.floor(Math.random()*lists.length)]
      const newDieTwo = lists[Math.floor(Math.random()*lists.length)]
      setDieOne({die1:newDieOne, die2:newDieTwo})
      setIsrolling(true)
     setTimeout(() => {
       setIsrolling(false)
      }, 1000);
    }
    const playerOneNameChange = (e) => {
       setPlayerOne(e.target.value)
    }
    const playerTwoNameChange = (e) => {
       setPlayerTwo(e.target.value)
    }
  return (
      <Container>
        <H1>Let's Play</H1>
        <Dice>
        <Players parag>
          <Parag  onChange={playerOneNameChange} type="text" placeholder='edit name' value={playerOne}></Parag>
          <Parag onChange={playerTwoNameChange} type="text" placeholder='edit name' value={playerTwo}></Parag>
        </Players>
          {dieOne.die1 === dieOne.die2 && <P> Draw!!! </P> }
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