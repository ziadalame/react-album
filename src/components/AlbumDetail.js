//It is a functional component because we do not need access to state nor lifecycle methods
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// instead of passing props, you pass the object node you want in { }
const AlbumDetail = ({ album }) => {
    // this is how you deconstruct an object to use later on
    const { title, artist, thumbnail_image, image, url } = album;
    const { 
        thumbnailContainerStyle, 
        thumbnailStyle, 
        headerContentStyles,
        headerTextStyle,
        imageStyle
     } = styles;
    
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle} 
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerContentStyles}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>
            
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    <Text>Buy Now</Text>
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    imageStyle: {
        flex: 1,
        width: null,
        height: 300
    }
};

export default AlbumDetail;
