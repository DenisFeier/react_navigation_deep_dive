import React, {useContext} from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import {PROFILE_PICTURE} from '../../constants/Images';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SettingsButton from '../../components/SettingsButton';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SettingsStackParams} from '../../router/SettingsStack/params';
import {DUMMY_TEXT} from '../../data/dummyText';
import {SessionContext} from '../../context/SessionContext';

const SettingsScreen: React.FC = () => {
    const {width} = useWindowDimensions();
    const imageWidth = width / 2;
    const {top} = useSafeAreaInsets();
    const {setSession} = useContext(SessionContext);

    const navigation =
        useNavigation<StackNavigationProp<SettingsStackParams, 'Settings'>>();

    const onTermsTapped = () => {
        navigation.navigate('Terms', {
            text: DUMMY_TEXT,
        });
    };

    const onPrivacyTapped = () => {
        navigation.navigate('Policy', {
            text: DUMMY_TEXT,
        });
    };

    const onLogoutTapped = () => {
        setSession(false);
    };

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
