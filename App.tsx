import React, {useContext, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import SessionProvider from './src/context/SessionProvider';

import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './src/router/LoginStack';
import TabBar from './src/router/TabBar';
import {SessionContext} from './src/context/SessionContext';

const Container = () => {
    const {idle, session} = useContext(SessionContext);

    useEffect(() => {
        if (!idle) {
            SplashScreen.hide();
        }
    }, [idle]);

    return (
        <NavigationContainer>
            {session ? <TabBar /> : <LoginStack />}
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
