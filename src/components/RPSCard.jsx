import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const RPSCard = ({rpsItem}) => {
  return (
    <Card>
      <Image src={rpsItem.image} wrapped ui={false} />
    </Card>
  );
};

export default RPSCard;
