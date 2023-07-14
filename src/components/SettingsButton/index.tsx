import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

type SettingsButtonProps = {
    text: string;
    onTap: () => void;
    iconName: string;
    isSignOut?: boolean;
};

const SettingsButton: React.FC<SettingsButtonProps> = ({
    iconName,
    onTap,
    text,
    isSignOut,
}) => {
    const additionalContainerStyles = isSignOut ? styles.logoutButton : {};
    const additionalButtonStyles = isSignOut ? styles.logoutButtonText : {};

    return (
        <TouchableOpacity
            style={[styles.button, additionalContainerStyles]}
            onPress={onTap}>
            <FontAwesome
                name={iconName}
                size={24}
                style={[styles.buttonIcon, additionalButtonStyles]}
            />
            <Text style={[styles.buttonText, additionalButtonStyles]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default SettingsButton;
