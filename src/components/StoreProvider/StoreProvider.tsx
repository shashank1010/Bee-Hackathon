import React from 'react';
import type { ProviderProps } from 'react-redux';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../../redux/store';

export const StoreProvider: React.FC<Omit<ProviderProps, "store">> = React.memo((props) => {
    return (
        <Provider { ...props} store={store}>
            <PersistGate loading={null} persistor={persistor}>{props.children}</PersistGate>
        </Provider>
    )
})