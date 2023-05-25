import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  casilla: number;
  styless: object;
  jugador: number;
  limpiar: number;
  accion: ( numeroCasilla: number ) => void;
}

function Tob({ accion, casilla, styless, jugador, limpiar }: Props) {
  var [ text, setText ] = useState('');

  const marcarCasilla = (player: number) => {
    if ( player === 1 ){
      setText('x');
    } else if ( player === 2 ) {
      setText('o');
    }
  };

  useEffect(()=>{
    if ( limpiar === 1 ) { setText(''); }
  },[limpiar]);

  return (
    <TouchableOpacity onPress={()=>{
      accion(casilla);
      marcarCasilla(jugador);
    }}>
      <View style={styless}>
        {/* <Text style={styles.casillaIndex}>{casilla}</Text> */}
        <Text style={[styles.markCharacter, styles.showCharacter]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Tob;
