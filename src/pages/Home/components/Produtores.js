import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import useProdutores from '../../../Hooks/useProdutores';
import Produtor from './Produtor';

export default function Produtores({ header: Header }) {
    const [titulo, lista] = useProdutores();

    const topoList = () => {
        return <View>
            <Header />
            <Text style={styles.titulo}>{titulo}</Text>
        </View>

    }

    return (
        <FlatList
            data={lista}
            ListHeaderComponent={topoList}
            keyExtractor={({ nome }) => nome}
            renderItem={({ item }) => <Produtor {...item} />}
        />

    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: "bold",
        color: "#464646"
    }
})