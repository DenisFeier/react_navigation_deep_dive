import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import {PROFILE_PICTURE} from '../../constants/Images';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SettingsButton from '../../components/SettingsButton';
import {styles} from './styles';

const SettingsScreen: React.FC = () => {
    const {width} = useWindowDimensions();
    const imageWidth = width / 2;
    const {top} = useSafeAreaInsets();

    const onTermsTapped = () => {};

    const onPrivacyTapped = () => {};

    const onLogoutTapped = () => {};

    return (
        <View style={[styles.container, {marginTop: top}]}>
            <View style={styles.profileContainer}>
                <Image
                    source={PROFILE_PICTURE}
                    style={[
                        styles.profilePicture,
                        {
                            width: imageWidth,
                            height: imageWidth,
                            borderRadius: imageWidth / 2,
                        },
                    ]}
                />
                <Text style={styles.userName}>John Doe</Text>
            </View>
            <View style={styles.buttonContainer}>
                <SettingsButton
                    iconName="file-text-o"
                    text="Terms and Conditions"
                    onTap={onTermsTapped}
                />
                <SettingsButton
                    iconName="shield"
                    text="Privacy"
                    onTap={onPrivacyTapped}
                />
                <SettingsButton
                    iconName="sign-out"
                    text="Logout"
                    isSignOut
                    onTap={onLogoutTapped}
                />
            </View>
        </View>
    );
};

export default SettingsScreen;
