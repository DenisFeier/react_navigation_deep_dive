import React from 'react';
import {
    Image,
    ImageProps,
    StyleProp,
    StyleSheet,
    View,
    ViewProps,
    useWindowDimensions,
} from 'react-native';
import {LOGO} from '../../constants/Images';

interface AppLogoProps {
    style?: StyleProp<ViewProps>;
    innerStyle?: StyleProp<ImageProps>;
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
