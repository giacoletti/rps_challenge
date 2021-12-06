import React, { useState } from 'react';
import RPSCard from './RPSCard';
import RPS from '../modules/RPS';
import { Header, Modal, Card, Image, Grid } from 'semantic-ui-react';

const RPSModal = ({ rpsItem, updateScore }) => {
  const [open, setOpen] = useState(false);
  const [matchResult, setMatchResult] = useState({});

  const onOpenHandler = (event) => {
    const result = RPS.playMatch(event.target.name);
    setMatchResult(result);
    updateScore(result);
    setOpen(true);
  };

  return (
    <Modal
      data-cy='rps-modal'
      closeIcon
      open={open}
      trigger={<Card>
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
            <Grid.Column>
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
