import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from "../PrimeraApp";


describe('Pruebas en <PrimeraApp />', () => {
    
    // test('debe mostrar el mensaje "Hola, soy Goku"', () => {
    //     const saludo = 'Hola, soy Goku';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText(saludo) ).toBeInTheDocument();
    // });

    test('debe mostrar <PrimeraApp /> cosrrectamente ', () => {

        const saludo = 'Hola, soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> )

        expect( wrapper ).toMatchSnapshot();

    });
    
    
});
