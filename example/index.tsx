import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

const product = {
  id: 1,
  title: "Coffee Mug",
  //img: "./coffee-mug.png",
};

const App = () => {
  return (
    <div>
      <ProductCard
        product={product} className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10
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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
