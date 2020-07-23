import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de Héroes", () => {
  test("debe de retornar un héroe por id ", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("debe de retornar un undefined si Héroe no existe ", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined); // Usamos .toBe porque undefined es un primitivo de JS
  });

  // debe retornar un arreglo con los héroes de DC
  // owner
  // toEqual al arreglo filtrado

  // debe de retornar un arreglo con los héroes de Marvel
  // length = 2 // toBe

  test("debe retornar un arreglo con los héroes de DC ", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter((h) => h.owner === owner);

    expect(heroes).toEqual(heroesData);
  });

  test("debe de retornar un arreglo con los héroes de Marvel ", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  });
});
