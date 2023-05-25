import React from 'react';
import { View } from 'react-native';
import Tob from '../components/Tob';
import { styles } from '../theme/appTheme';

import Layout from '../components/layout/Layout';
import { useTriky } from '../hooks/useTriky';


function TrikyScreen() {

  const {
    jugador,
    limpiar,
    historialTriky,
    dynamicStyles,
  } = useTriky();

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.row}>
          <View>
            <Tob casilla={1} styless={[styles.box1, styles.box_1, dynamicStyles.box_1]} accion={historialTriky} jugador={jugador} limpiar={limpiar} />
            <Tob casilla={2} styless={[styles.box2, styles.box_2, dynamicStyles.box_2]} accion={historialTriky} jugador={jugador} limpiar={limpiar} />
            <Tob casilla={3} styless={[styles.box3, styles.box_3, dynamicStyles.box_3]} accion={historialTriky} jugador={jugador} limpiar={limpiar} />
          </View>
          <View>
            <Tob casilla={4} styless={[styles.box1, styles.box_4, dynamicStyles.box_4]} accion={historialTriky} jugador={jugador} limpiar={limpiar} />
            <Tob casilla={5} styless={[styles.box2, styles.box_5, dynamicStyles.box_5]} accion={historialTriky} jugador={jugador} limpiar={limpiar} />
            <Tob casilla={6} styless={[styles.box3, styles.box_6, dynamicStyles.box_6]} accion={historialTriky} jugador={jugador} limpiar={limpiar} />
          </View>
          <View>
            <Tob casilla={7} styless={[styles.box1, styles.box_7, dynamicStyles.box_7]} accion={historialTriky} jugador={jugador} limpiar={limpiar} />
            <Tob casilla={8} styless={[styles.box2, styles.box_8, dynamicStyles.box_8]} accion={historialTriky} jugador={jugador} limpiar={limpiar} />
            <Tob casilla={9} styless={[styles.box3, styles.box_9, dynamicStyles.box_9]} accion={historialTriky} jugador={jugador} limpiar={limpiar} />
          </View>
        </View>
      </View>
    </Layout>
  );
}

export default TrikyScreen;

