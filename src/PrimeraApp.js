import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ 
  saludo, 
  subtitulo 
}) =>{

  return (
    <>
      <h1>{ saludo }</h1>
      <p>{ subtitulo }</p>
    </>
    
  );

}

// Defino las propiedades del componente
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired ,
  number: PropTypes.number
}

// Valores por defecto, sí aaparecen en la cpmnsola
PrimeraApp.defaultProps ={
  subtitulo: 'Soy un subtitulo'
}
export default PrimeraApp;