import React from 'react';
import { Text, Card, Button } from 'react-native-elements';

const CardMain = ({ url, text }) => {
  return (
    <Card>
      <Card.Image
        source={{ uri: url }}
        style={{
          height: 150,
          width: 150,
          borderRadius: 75,
          marginHorizontal: 65
          ,
        }}
      ></Card.Image>
      <Card.Title>{text}</Card.Title>
      <Text style={{ marginBottom: 10, textAlign: 'center' }}>
        This is customizable
      </Text>
      <Button icon={{ name: 'code' }} title="View Now" />
    </Card>
  );
};

export default CardMain;
