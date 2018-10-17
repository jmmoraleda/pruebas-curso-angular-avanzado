import { mensaje } from './string';

// describe('Pruebas de Strings'); //  Sirve para agrupar pruebas
// it('Debe regresar un string'); //  Prueba específica

describe('Pruebas de strings', () => {

  it( 'Debe regresar un string', () => {
    const resp = mensaje('Jose');

    expect( typeof resp ).toBe('string'); // Espero que la respuesta sea un string

  });

  it( 'Debe retornar un saludo con el nombre enviado', () => {

    const nombre = 'Juan';
    const resp = mensaje( nombre );

    expect( resp ).toContain( nombre ); // Espero que la respuesta sea Saludos Jose

  });

});

