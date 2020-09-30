const { getUser } = require("../../base/05-funciones")
const { getUsuarioActivo } = require("../../base/05-funciones")


describe('05 funciones', () => {
  test('getUser debe retornar un objeto', () => {
    // 1.
    const userTest = {
      uId: 'ABC123',
      username: 'El_Papi1502'
    } 
    // 2.
    const user = getUser();

    // 3.
    // es un error porque no se evaluan los objetos con .toBe()
    // expect( user ).toBe( userTest );
    // Los objetos se evalñuan con toEqual()
    expect( user ).toEqual( userTest );
  })
  test('getUsuario activo debe retornar un objeto', () => {
    // 1.
    const nombre = 'Sofia'
    const userTest = {
      uId: 'ABC567',
      username: 'Sofia',
    } 
    
    // 2.
    const userActive = getUsuarioActivo( nombre );

    //w
    expect( userActive ).toEqual( userTest );
  })
  
  
})
