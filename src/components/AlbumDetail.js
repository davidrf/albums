import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

const AlbumDetail = ({ title, artist, url, image, thumbnail_image: uri }) => {
  const { headerContentStyle, thumbnailStyle } = styles;
  const source = { uri };

  return (
    <View>
      <Card>
        <CardSection>
          <View>
            <Image style={thumbnailStyle} source={source} />
          </View>
          <View style={headerContentStyle}>
            <Text>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
      </Card>
    </View>
  );
};

export default AlbumDetail;
