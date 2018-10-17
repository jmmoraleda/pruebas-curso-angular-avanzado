import { obtenerRobots } from './arreglos';


// xdescribe('Pruebas de arreglos', () => { // Con la x le decimos que se salte una prueba
describe('Pruebas de arreglos', () => {
  it('Debe retornar al menos 3 robots', () => {
    const res = obtenerRobots();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });

  // xit('Deben existir MegaMan y Ultron', () => { // Con la x le decimos que se salte una prueba
  it('Deben existir MegaMan y Ultron', () => {
    const res = obtenerRobots();
    expect(res).toContain('MegaMan');
    expect(res).toContain('Ultron');
  });

});
