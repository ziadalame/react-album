//It is a functional component because we do not need access to state nor lifecycle methods
import React from 'react';
import { Text } from 'react-native';

const AlbumDetail = (props) => (
    <Text>{props.album.title}</Text>
);

export default AlbumDetail;
