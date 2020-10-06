import React from 'react';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en componente <PrimeraApp />', () => {
  test('debe mostar <PrimeraApp/> correctamente', () => {
    
    const saludo = 'Hola soy Sofia';
    const wrapper = shallow(<PrimeraApp saludo={ saludo }/>);

    // asegurarnos de que se renderice
    expect( wrapper ).toMatchSnapshot();

  })
  test('debe de mostrar el subtitulo enviado por props ', () => {

    const saludo = 'Hola soy Sofia'
    const subt = 'Soy un subtitulo'

    const wrapper = shallow(
      <PrimeraApp 
        saludo={ saludo }
        subtitulo={ subt }
      />);

    // find is similar to queySelector
    const textoParrafo = wrapper.find('p').text();
    expect( textoParrafo ).toBe( subt );

  })
  
  
})
