import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import LoginStack from './src/router/LoginStack';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <NavigationContainer>
            <LoginStack />
        </NavigationContainer>
    );
};

export default App;
