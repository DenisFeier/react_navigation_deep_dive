import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    ViewStyle,
    ImageStyle,
    useWindowDimensions,
} from 'react-native';
import {LOGO} from '../../constants/Images';

interface AppLogoProps {
    style?: ViewStyle;
    innerStyle?: ImageStyle;
}

const AppLogo: React.FC<AppLogoProps> = () => {
    const {width} = useWindowDimensions();
    const logoWidth = width * 0.8;

    return (
        <View style={styles.logoContainer}>
            <Image
                source={LOGO}
                style={[styles.logo, {width: logoWidth, height: logoWidth}]}
            />
        </View>
    );
};

export const styles = StyleSheet.create({
    logoContainer: {
        marginTop: 100,
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'contain',
    },
});

export default AppLogo;
