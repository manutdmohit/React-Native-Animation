import React from 'react';
import { Text, Card, Button } from 'react-native-elements';

const CardMain = ({ url, text }) => {
  return (
    <Card>
      <Card.Image source={{ uri: url }}></Card.Image>
      <Card.Title>{text}</Card.Title>
      <Text style={{ marginBottom: 10 }}>This is customizable</Text>
      <Button icon={{ name: 'code' }} title="View Now" />
    </Card>
  );
};

export default CardMain;
