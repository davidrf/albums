import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ title, artist, url, image }) => {
  return (
    <View>
      <Card>
        <CardSection>
          <Text>{title}</Text>
        </CardSection>
      </Card>
    </View>
  );
};

export default AlbumDetail;
