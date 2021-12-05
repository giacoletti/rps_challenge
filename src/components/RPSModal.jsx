import React from 'react';
import { Button, Header, Icon, Modal, Card, Image } from 'semantic-ui-react';

const RPSModal = ({ rpsItem }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      data-cy='rps-modal'
      closeIcon
      open={open}
      trigger={<Card>
        <Image src={rpsItem.image} wrapped ui={false} />
      </Card>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='archive' content='Archive Old Messages' />
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default RPSModal;
