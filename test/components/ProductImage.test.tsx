import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components/';
import { product2 } from '../data/products'


describe('ProductTitle', () => {
    test('Debe mostrar el componente correctamente con el titulo personalizado', () => {

        const wrapper = renderer.create(<ProductImage img='https://hola.png' />)

        expect(wrapper.toJSON()).toMatchSnapshot();


    })

    test('Debe de mostrar el componente con el nombre del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={product2} >
                {
                    () => <ProductImage img='https://hola.png' />
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })
})

