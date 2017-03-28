//import liraries
import React from 'react';
import { View } from 'react-native';

// create a component
const CradSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

// define your styles
const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        borderColor: '#dddddd',
        padding: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
};

//make this component available to the app
export default CradSection;
