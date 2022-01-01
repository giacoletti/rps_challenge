import React, { useState } from 'react';
import RPSCard from './RPSCard';
import RPS from '../modules/RPS';
import { Header, Modal, Card, Image, Grid, Label } from 'semantic-ui-react';

const RPSModal = ({ rpsItem, updateScore, updateChoicesHistory, userChoicesHistory }) => {
  const [open, setOpen] = useState(false);
  const [matchResult, setMatchResult] = useState({});

  const onOpenHandler = (event) => {
    const result = RPS.playMatch(event.target.name, userChoicesHistory);
    updateChoicesHistory(event.target.name)
    setMatchResult(result);
    updateScore(result);
    setOpen(true);
  };

  return (
    <Modal
      data-cy='rps-modal'
      open={open}
      trigger={<Card raised style={{ marginBottom: '20px' }}>
        <Image name={rpsItem.name} src={rpsItem.image} ui={false} />
      </Card>}
      onClose={() => setOpen(false)}
      onOpen={onOpenHandler}
    >
      <Modal.Content>
        <Header data-cy='rps-match-result' as='h1' textAlign='center'>{matchResult.result}</Header>
        <Grid columns='three'>
          <Grid.Row>
            <Grid.Column data-cy='rps-user-choice'>
              <RPSCard rpsItem={rpsItem} />
            </Grid.Column>
            <Grid.Column verticalAlign="middle" textAlign="center">
              <Label size="big" color="teal" pointing="left">User</Label>
              <Label size="big">VS</Label>
              <Label size="big" color="orange" pointing="right">CPU</Label>
            </Grid.Column>
            <Grid.Column data-cy='rps-cpu-choice'>
              <RPSCard rpsItem={matchResult.cpuChoice} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  );
};

export default RPSModal;
