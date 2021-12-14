import React, { useEffect, useState } from 'react';
import RPS from './modules/RPS';
import RPSModal from './components/RPSModal';
import { Container, Header, Grid, Label, Icon } from "semantic-ui-react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const App = () => {
  const { userScore, cpuScore } = useSelector(state => state);
  const dispatch = useDispatch();

  const [rpsArray, setRpsArray] = useState([]);
  const [userChoicesHistory, setUserChoicesHistory] = useState([]);

  const updateChoicesHistory = (userChoice) => {
    setUserChoicesHistory(oldArray => [...oldArray, userChoice]);
  }

  const updateScore = (result) => {
    if (result.result === 'CPU wins!') {
      dispatch({ type: 'ADD_CPU_SCORE', payload: cpuScore + 1 })
    } else if (result.result === 'You win!') {
      dispatch({ type: 'ADD_USER_SCORE', payload: userScore + 1 })
    };
  };

  const rpsCardsList = rpsArray.map((rpsItem) => {
    return (
      <div data-cy={`rps-card-${rpsItem.id}`} key={rpsItem.id}>
        <RPSModal updateScore={updateScore}
          updateChoicesHistory={updateChoicesHistory}
          userChoicesHistory={userChoicesHistory}
          rpsItem={rpsItem} />
      </div>
    )
  });

  useEffect(() => {
    setRpsArray(RPS.index());
  }, [])

  return (
    <Container>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2" data-cy='rps-header'>Let's play Rock Paper Scissor</Header>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header as="h3" data-cy='rps-subheader'>Pick your card!</Header>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Label data-cy="rps-user-score" size="big" color="teal"><Icon name='user' />{userScore}</Label>
            <Label data-cy="rps-cpu-score" size="big" color="orange"><Icon name='computer' />{cpuScore}</Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>{rpsCardsList}</Grid>
    </Container>
  );
};

export default App;
