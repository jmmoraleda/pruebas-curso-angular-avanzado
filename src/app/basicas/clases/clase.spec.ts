import { Jugador } from './clase';


describe('Pruebas de clase', () => {
  let jugador = new Jugador();

  beforeAll( () => {
    // console.log('beforeAll');
  });

  beforeEach( () => {
    // console.log('beforeEach');
    // jugador.hp = 100;
    jugador = new Jugador(); //  Antes de cada función it reiniciamos todos los valores del jugador
  });

  afterAll( () => {
    // console.log('afterAll');
  });

  afterEach( () => {
    // console.log('afterEach');
    // jugador.hp = 100;
  });

  it('Debe retornar 80 de hp si recibe 20 de daño', () => {
    // const jugador = new Jugador(); No es conveniente crear un nuevo objeto por cada función, repetiriamos mucho código
    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(80);
  });

  it('Debe retornar 50 de hp si recibe 50 de daño', () => {
    // const jugador = new Jugador(); No es conveniente crear un nuevo objeto por cada función, repetiriamos mucho código
    // console.log('Esta prueba va a fallar');

    const resp = jugador.recibeDanio(50);
    expect(resp).toBe(50);
  });

  it('Debe retornar 0 de hp si recibe 100 de daño', () => {
    // const jugador = new Jugador(); No es conveniente crear un nuevo objeto por cada función, repetiriamos mucho código
    const resp = jugador.recibeDanio(100);
    expect(resp).toBe(0);
  });


});
