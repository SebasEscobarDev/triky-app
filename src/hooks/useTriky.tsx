import { useEffect, useState } from 'react';
import { ActiveStyles, Tablero } from '../models/tablero.model';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useTriky = () => {

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
    box_1: {backgroundColor: '#0c0c0e'},
    box_2: {backgroundColor: '#0c0c0e'},
    box_3: {backgroundColor: '#0c0c0e'},
    box_4: {backgroundColor: '#0c0c0e'},
    box_5: {backgroundColor: '#0c0c0e'},
    box_6: {backgroundColor: '#0c0c0e'},
    box_7: {backgroundColor: '#0c0c0e'},
    box_8: {backgroundColor: '#0c0c0e'},
    box_9: {backgroundColor: '#0c0c0e'},
  };

  const [dynamicStyles, setDynamicStyles] = useState<ActiveStyles>(initialStyle);

	const handleChange = (name:number, value:string) => setTablero({...tablero, [name]: value });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const triky = ( casillas: any[] ) => {
    let arrayBoxes = dynamicStyles;
    casillas.forEach((numero)=>{
      let activeStyle = { backgroundColor: 'lightgreen' };
      arrayBoxes = { ...arrayBoxes, ['box_' + numero]: activeStyle };
    });
    setDynamicStyles({...dynamicStyles, ...arrayBoxes});

    setTimeout(()=>{
      resetear();
    },1000);
  };

  const validarCasillas = () => {
    // POSIBLES TRIKYS
    //=====================================================================
    // ==== HORIZONTALES ====
    // 1, 4, 7
    if ( tablero[1] === 'x' && tablero[4] === 'x' && tablero[7] === 'x' ||
      tablero[1] === 'o' && tablero[4] === 'o' && tablero[7] === 'o' ){ triky([1, 4, 7]); }

    // 2, 5, 8
    if ( tablero[2] === 'x' && tablero[5] === 'x' && tablero[8] === 'x' ||
      tablero[2] === 'o' && tablero[5] === 'o' && tablero[8] === 'o' ){ triky([2, 5, 8]); }

    // 3, 6, 9
    if ( tablero[3] === 'x' && tablero[6] === 'x' && tablero[9] === 'x' ||
      tablero[3] === 'o' && tablero[6] === 'o' && tablero[9] === 'o' ){ triky([3, 6, 9]); }
    //=====================================================================

    //=====================================================================
    // ==== VERTICALES ====
    // 1, 2, 3
    if ( tablero[1] === 'x' && tablero[2] === 'x' && tablero[3] === 'x' ||
      tablero[1] === 'o' && tablero[2] === 'o' && tablero[3] === 'o' ){ triky([1, 2, 3]); }

    // 4, 5, 6
    if ( tablero[4] === 'x' && tablero[5] === 'x' && tablero[6] === 'x' ||
      tablero[4] === 'o' && tablero[5] === 'o' && tablero[6] === 'o' ){ triky([4, 5, 6]); }

    // 7, 8, 9
    if ( tablero[7] === 'x' && tablero[8] === 'x' && tablero[9] === 'x' ||
      tablero[7] === 'o' && tablero[8] === 'o' && tablero[9] === 'o' ){ triky([7, 8, 9]); }
    //=====================================================================

    //=====================================================================
    // ==== DIAGONALES ====
    // 1, 5, 9
    if ( tablero[1] === 'x' && tablero[5] === 'x' && tablero[9] === 'x' ||
      tablero[1] === 'o' && tablero[5] === 'o' && tablero[9] === 'o' ){ triky([1, 5, 9]); }

    // 3, 5, 7
    if ( tablero[3] === 'x' && tablero[5] === 'x' && tablero[7] === 'x' ||
      tablero[3] === 'o' && tablero[5] === 'o' && tablero[7] === 'o' ){ triky([3, 5, 7]); }
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
    (async()=>{
			try {
				const token = await AsyncStorage.getItem('triky_token');
        console.log(token);
			} catch (err) {
				console.log(err);
			}
		})();
    validarCasillas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[tablero]);


  return {
    jugador,
    limpiar,
    historialTriky,
    dynamicStyles,
  };
};
