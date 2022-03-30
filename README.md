# mb-product-card

Paquete de prueba de despliegue en npm

### Moises Barillas

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'mb-product-card'

 <ProductCard
    product={product} className="bg-dark text-white"
                initialValues={{
                        count: 4,
                        // maxCount: 10
                    }}>
                    {
                        ({ reset, increaseBy, maxCount, isMaxCountReached, count }) => (
                            <>
                                <ProductImage />
                                <ProductTitle />
                                <ProductButtons />

                            </>
                        )
                    }

</ProductCard>


```
