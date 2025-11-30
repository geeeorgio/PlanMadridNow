import React from 'react';
import { View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import MarkerIcon from '../../CustomIcons/MarkerIcon';

import { styles } from './styles';

import darkMapStyle from 'src/constants/darkMapStyle.json';
import { hp, wp } from 'src/utils';

interface MapCardProps {
  title: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

const MapCard = ({ coordinates, title }: MapCardProps) => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={darkMapStyle}
        toolbarEnabled={false}
        initialRegion={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={coordinates} title={title} description={title}>
          <MarkerIcon width={wp(40)} height={hp(60)} />
        </Marker>
      </MapView>
    </View>
  );
};

export default MapCard;
