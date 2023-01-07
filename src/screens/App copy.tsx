import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Tob from '../components/Tob';
import { styles } from '../theme/appTheme';

export interface Tablero {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
}

export interface ActiveStyles {
  box_1: object;
  box_2: object;
  box_3: object;
  box_4: object;
  box_5: object;
  box_6: object;
  box_7: object;
  box_8: object;
  box_9: object;
}

function App() {

  const [jugador, setJugador] = useState(1);

  const [limpiar, setLimpiar] = useState(0);

  const initialTablero = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
  };

  const [tablero, setTablero] = useState<Tablero>(initialTablero);

  const initialStyle = {
    box_1: {backgroundColor: 'white'},
    box_2: {backgroundColor: 'white'},
    box_3: {backgroundColor: 'white'},
    box_4: {backgroundColor: 'white'},
    box_5: {backgroundColor: 'white'},
    box_6: {backgroundColor: 'white'},
    box_7: {backgroundColor: 'white'},
    box_8: {backgroundColor: 'white'},
    box_9: {backgroundColor: 'white'},
  };

  const [dynamicStyles, setDynamicStyles] = useState<ActiveStyles>(initialStyle);

	const handleChange = (name:number, value:string) => setTablero({...tablero, [name]: value });

  const triky = ( casillas: any[], orientacion: string ) => {
    //console.log(casillas, orientacion);
    let arrayBoxes = dynamicStyles;
    casillas.forEach((numero)=>{
      console.log(numero, orientacion);
      let activeStyle = { backgroundColor: 'lightgreen' };
      // if( orientacion === 'horizontal' ){}
      // if( orientacion === 'vertical' ){}
      // if( orientacion === 'diagonal1' ){}
      // if( orientacion === 'diagonal2' ){}
      arrayBoxes = { ...arrayBoxes, ['box_' + numero]: activeStyle };
    });

    setDynamicStyles({...dynamicStyles, ...arrayBoxes});

    setTimeout(()=>{
      // resetear();
    },1000);
  };

  const validarCasillas = () => {
    // POSIBLES TRIKYS
    //=====================================================================
    // ==== HORIZONTALES ====
    // 1, 4, 7
    if ( tablero[1] === 'x' && tablero[4] === 'x' && tablero[7] === 'x' ){triky([1, 4, 7], 'horizontal');}
    if ( tablero[1] === 'o' && tablero[4] === 'o' && tablero[7] === 'o' ){triky([1, 4, 7],'horizontal');}

    // 2, 5, 8
    if ( tablero[2] === 'x' && tablero[5] === 'x' && tablero[8] === 'x' ){triky([2, 5, 8], 'horizontal');}
    if ( tablero[2] === 'o' && tablero[5] === 'o' && tablero[8] === 'o' ){triky([2, 5, 8], 'horizontal');}

    // 3, 6, 9
    if ( tablero[3] === 'x' && tablero[6] === 'x' && tablero[9] === 'x' ){triky([3, 6, 9], 'horizontal');}
    if ( tablero[3] === 'o' && tablero[6] === 'o' && tablero[9] === 'o' ){triky([3, 6, 9],'horizontal');}
    //=====================================================================

    //=====================================================================
    // ==== VERTICALES ====
    // 1, 2, 3
    if ( tablero[1] === 'x' && tablero[2] === 'x' && tablero[3] === 'x' ){triky([1, 2, 3], 'vertical');}
    if ( tablero[1] === 'o' && tablero[2] === 'o' && tablero[3] === 'o' ){triky([1, 2, 3], 'vertical');}

    // 4, 5, 6
    if ( tablero[4] === 'x' && tablero[5] === 'x' && tablero[6] === 'x' ){triky([4, 5, 6], 'vertical');}
    if ( tablero[4] === 'o' && tablero[5] === 'o' && tablero[6] === 'o' ){triky([4, 5, 6], 'vertical');}

    // 7, 8, 9
    if ( tablero[7] === 'x' && tablero[8] === 'x' && tablero[9] === 'x' ){triky([7, 8, 9], 'vertical');}
    if ( tablero[7] === 'o' && tablero[8] === 'o' && tablero[9] === 'o' ){triky([7, 8, 9], 'vertical');}
    //=====================================================================

    //=====================================================================
    // ==== DIAGONALES ====
    // 1, 5, 9
    if ( tablero[1] === 'x' && tablero[5] === 'x' && tablero[9] === 'x' ){triky([1, 5, 9], 'diagonal1');}
    if ( tablero[1] === 'o' && tablero[5] === 'o' && tablero[9] === 'o' ){triky([1, 5, 9], 'diagonal1');}

    // 3, 5, 7
    if ( tablero[3] === 'x' && tablero[5] === 'x' && tablero[7] === 'x' ){triky([3, 5, 7], 'diagonal2');}
    if ( tablero[3] === 'o' && tablero[5] === 'o' && tablero[7] === 'o' ){triky([3, 5, 7], 'diagonal2');}
    //=====================================================================
  };

  const historialTriky = async( casilla : number ) => {
    const seleccion = ( ( jugador === 1 ) ? 'x' : 'o' );
    handleChange(casilla, seleccion);
    if ( jugador === 1 ){
      setJugador(2);
    } else {
      setJugador(1);
    }
  };

  const resetear = () => {
    setDynamicStyles(initialStyle);
    setTablero(initialTablero);
    setLimpiar(1);
    setTimeout(()=>{ setLimpiar(0); },300);
  };

  useEffect(()=>{
    validarCasillas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[tablero]);

  return (
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
  );
}

export default App;
