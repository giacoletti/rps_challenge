import React, { useEffect, useState } from 'react';
import RPS from './modules/RPS';
import RPSModal from './components/RPSModal';
import { Container, Header, Grid } from "semantic-ui-react";

const App = () => {

  const [rpsArray, setRpsArray] = useState([]);

  const rpsCardsList = rpsArray.map((rpsItem) => {
    return (
      <div data-cy={`rps-card-${rpsItem.id}`} key={rpsItem.id}>
        <RPSModal rpsItem={rpsItem}></RPSModal>
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
      <Header data-cy='rps-header'>Let's play Rock Paper Scissor</Header>
      <Header as="h3" data-cy='rps-subheader'>Pick your card!</Header>
      <Grid>{rpsCardsList}</Grid>
    </Container>
  );
};

export default App;
