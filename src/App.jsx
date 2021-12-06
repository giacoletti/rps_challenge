import React, { useEffect, useState } from 'react';
import RPS from './modules/RPS';
import RPSModal from './components/RPSModal';
import { Container, Header, Grid, Label, Icon } from "semantic-ui-react";

const App = () => {

  const [rpsArray, setRpsArray] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);

  const updateScore = (result) => {
    if (result.result === 'CPU wins!') {
      setCpuScore(cpuScore + 1);
    } else if (result.result === 'You win!') {
      setUserScore(userScore + 1);
    };
  };

  const rpsCardsList = rpsArray.map((rpsItem) => {
    return (
      <div data-cy={`rps-card-${rpsItem.id}`} key={rpsItem.id}>
        <RPSModal updateScore={updateScore} rpsItem={rpsItem}></RPSModal>
      </div>
    )
  });

  const fetchRpsData = () => {
    setRpsArray(RPS.index());
  };

  useEffect(() => {
    fetchRpsData();
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
            <Label size="big" color="orange"><Icon name='computer' />{cpuScore}</Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>{rpsCardsList}</Grid>
    </Container>
  );
};

export default App;
