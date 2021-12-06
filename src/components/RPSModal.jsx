import React from 'react';
import RPSCard from './RPSCard';
import { Header, Modal, Card, Image, Grid } from 'semantic-ui-react';

const RPSModal = ({ rpsItem }) => {
  const [open, setOpen] = React.useState(false);

  const onOpenHandler = (event) => {
    // event.target.name
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
        <Header data-cy='rps-match-result' as='h1' textAlign='center'>Test result</Header>
        <Grid columns='three'>
          <Grid.Row>
            <Grid.Column data-cy='rps-user-choice'>
              <RPSCard rpsItem={rpsItem} />
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column data-cy='rps-cpu-choice'>
              <RPSCard rpsItem={rpsItem} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  );
};

export default RPSModal;
