import React, {useEffect} from 'react';
import {Keyboard} from 'react-native';

const DismissKeyboardOnMountHOC = <P extends object>(
    WrappedComponent: React.ComponentType<P>,
) => {
    const DismissKeyboardOnMount: React.FC<P> = props => {
        useEffect(() => {
            Keyboard.dismiss();
        }, []);

        return <WrappedComponent {...props} />;
    };

    return DismissKeyboardOnMount;
};

export default DismissKeyboardOnMountHOC;
