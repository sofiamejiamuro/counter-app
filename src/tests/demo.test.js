// Agrupar 
describe('Pruebas en el archivo demo.test.js', () => {

  test('deben de ser iguales los strings', () => {
    // 1. Inicialización
    const mensaje = 'hola mundo';
  
    // 2. Estimulo
    const mensaje2 = `hola mundo`;
  
    // 3. Observar el comportamiento
    expect( mensaje ).toBe( mensaje2 );
  
  });
  
})

