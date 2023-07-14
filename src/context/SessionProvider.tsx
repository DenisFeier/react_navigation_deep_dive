import React, {PropsWithChildren, useEffect, useState} from 'react';
import {SessionContext} from './SessionContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SessionProviderProps = PropsWithChildren;

const SESSION_KEY = 'SESSION_KEY';

const SessionProvider: React.FC<SessionProviderProps> = ({children}) => {
    const [session, setSession] = useState(false);
    const [idle, setIdle] = useState(true);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        const getItem = async () => {
            setIdle(true);
            try {
                const storedSession = await AsyncStorage.getItem(SESSION_KEY);
                setSession(storedSession === 'true');
                setIdle(false);
            } catch (e) {
                setSession(false);
                setError(e as Error);
            }
        };
        getItem();
    }, []);

    const updateSession = async (value: boolean) => {
        try {
            await AsyncStorage.setItem(
                SESSION_KEY,
                (value ? 'true' : 'false').toLowerCase(),
            );
            setSession(value);
        } catch (e) {
            setSession(false);
            setError(e as Error);
        }
    };

    return (
        <SessionContext.Provider
            value={{
                idle,
                error,
                session,
                setSession: value => {
                    updateSession(value);
                },
            }}>
            {children}
        </SessionContext.Provider>
    );
};

export default SessionProvider;
