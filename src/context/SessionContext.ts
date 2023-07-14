import React from 'react';

type SessionContextValues = {
    session: boolean;
    idle: boolean;
    setSession: (value: boolean) => void;
    error?: Error;
};

export const SessionContext = React.createContext<SessionContextValues>({
    idle: true,
    session: false,
    setSession: () => {},
});
