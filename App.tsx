import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import SessionProvider from './src/context/SessionProvider';
import WelcomeScreen from './src/screens/WelcomeScreen';

const Container = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return <WelcomeScreen />;
};

const App: React.FC = () => {
    return (
        <SessionProvider>
            <Container />
        </SessionProvider>
    );
};

export default App;
