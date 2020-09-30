import '@testing-library/jest-dom';
const { getSaludo } = require("../../base/02-template-string");

describe('archivo 02', () => {

  test('getSaludo debe de retornar Hola Sofia ', () => {
    // 1. Inicializacion
    const name = 'Sofia';

    // 2. Estimulo
    const saludo = getSaludo( name );

    // 3. Observar el comportamiento
    expect( saludo ).toBe( `Hola ${name}` )

  })

  test('getSaludo debe de retornar el parámetro establecido por default si no le pasamos un argumento', () => {
    // 1. Inicializacion

    // 2. Estimulo
    const saludo = getSaludo();

    // 3. Observar el comportamiento
    expect( saludo ).toBe( `Hola Richi` )

  })
  
})
