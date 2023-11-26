import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import SessionProvider from './src/context/SessionProvider';

import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './src/router/LoginStack';
import TabBar from './src/router/TabBar';

const Container = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <NavigationContainer>
            <TabBar />
        </NavigationContainer>
    );
};

const App: React.FC = () => {
    return (
        <SessionProvider>
            <Container />
        </SessionProvider>
    );
};

export default App;
