import '@testing-library/jest-dom';

const { getSaludo } = require("../../base/02-template-string");

describe('Pruebas en 02-template-string', () => {
  
  test('prueba en método getSaludo() ', () => {
    const nombre = 'Sofia';

    const saludo = getSaludo(nombre);

    expect( saludo ).toBe( `Hola ${nombre}`)
  })
  
})
