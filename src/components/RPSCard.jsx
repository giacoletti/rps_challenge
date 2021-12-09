import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const RPSCard = ({ rpsItem }) => {
  return (
    <Card raised>
      <Image name={rpsItem.name} src={rpsItem.image} ui={false} />
    </Card>
  );
};

export default RPSCard;
