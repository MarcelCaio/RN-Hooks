import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { carregaTopo } from '../../../services/dataLoad';
import logo from '../../../assets/logo.png'

export default function Header() {
    const [welcome, setWelcome] = useState("");
    const [descricao, setdescricao] = useState("");


    useEffect(() => {
        const retorno = carregaTopo();
        setWelcome(retorno.welcome);
        setdescricao(retorno.description);
    }, []);

    return (
        <View style={styles.head}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.welcome}>{welcome}</Text>
            <Text style={styles.description}>{descricao}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    head: {
        backgroundColor: "#f6f6f6",
        padding: 16
    },
    image: {
        width: 70,
        height: 28
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color: "#464646"
    },
    description: {
        fontSize: 16,
        lineHeight: 26,
        color: "#a3a3a3"
    }

});
