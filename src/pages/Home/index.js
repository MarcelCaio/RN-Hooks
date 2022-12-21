import React from 'react';
import { View } from 'react-native';

import Header from './components/Header';
import Produtores from './components/Produtores';

export default function Home() {
    return (
        <View>
            <Produtores header={Header} />
        </View>
    );
}