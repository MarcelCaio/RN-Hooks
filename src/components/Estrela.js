import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import estrela from '../assets/estrela.png'
import estrelacinza from '../assets/estrelaCinza.png'

export default function Estrela({
    onPress,
    desabilitada = true,
    preenchida,
    grande = false,
}) {

    const estilos = styles(grande);
    const getImage = () => {
        if (preenchida) {
            return estrela;
        }
        return estrelacinza;
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={!desabilitada}
        >
            <Image source={getImage(getImage)} style={estilos.estrela} />
        </TouchableOpacity>
    );
}

const styles = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2
    },
})