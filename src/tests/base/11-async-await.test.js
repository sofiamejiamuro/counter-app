import { getImagen } from "../../base/11-async-await";

describe('Puebas con async-await y Fetch', () => {
  
  test('debe de retornar el url de la imagen ', async () => {
    // getImage es una promesa y se debe resolver, por eso ponemos async al test
    const url = await getImagen();

    expect( typeof url ).toBe( 'string')

  })
  
})
