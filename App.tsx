import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App: React.FC = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Test</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    text: {
        color: 'red',
        fontWeight: 'bold',
    },
});

export default App;
