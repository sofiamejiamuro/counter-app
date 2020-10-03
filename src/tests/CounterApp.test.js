import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas para componente <CounterApp />', () => {
  // Definirlo aqui para que lo puedan alcanzar dntro de cada test
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  })

  test('Debe mostrar <CounterApp /> correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('debe mostrar el valor por defecto de 100', () => {
    const wrapper = shallow(<CounterApp value={ 100 }/>);
    const counterValue = wrapper.find('h2').text();
    expect( counterValue ).toBe('10');
  }) 

  // Simular el evento click
  test('Debe de incrementar contador +1', () => {
    // const btn1 = wrapper.find('button').at(0);
    // console.log(btn1.html());
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text();
    expect( counterText ).toBe('10')
  })
  
  
});
