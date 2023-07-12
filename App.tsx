import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoginStack from './src/router/LoginStack';

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <LoginStack />
        </NavigationContainer>
    );
};

export default App;
