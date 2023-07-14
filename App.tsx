import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import LoginStack from './src/router/LoginStack';
import SplashScreen from 'react-native-splash-screen';
import TabBar from './src/router/TabBar';
import SessionProvider from './src/context/SessionProvider';
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
