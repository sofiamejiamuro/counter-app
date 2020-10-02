import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

// sólo Aync (sin await)
describe('Pruebas con promesas', () => {
  // done para promesas
  test('debe retornar un heroe async', ( done ) => {
    const id = 1;

    getHeroeByIdAsync(id)
      .then( heroe => {

        expect( heroe ).toBe( heroes[0])
        done();
      })

  });
  test('debe rerornar un error si el heroe po ID no existe', ( done ) => {
    const id = 10;

    getHeroeByIdAsync(id)
      .catch( error => {

        expect( error ).toBe( 'No se pudo encontrar el héroe' )
        done();
        
      });

  });
});
