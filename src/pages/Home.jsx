import { use, useState } from 'react'
import { produtos } from '../../data'
import '../css/Home.css'
import ProductCard from '../components/productCard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
 
  const [produtosExibidos,setProdutosExibidos] = useState(produtos)

  function filtrarCategoria(categoria) {
    const produtosFiltrados = produtos.filter(produto => produto.categoria === categoria);
    setProdutosExibidos(produtosFiltrados);
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
export function Home() {
 function Home() {
  return <h1>Bem-vindo ao CoffeeEspresso!</h1>;
}

 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

 

  return (
    <>    
      <main>
        <section className="slogan">
          <div className="container">
            <h1 className="slogan__title">Fragrância e sabor elevado ao cubo</h1>
            <p className="slogan__text">
              Explore nossa variedade de blends exclusivos e saboreie a perfeição em cada gole.
            </p>
          </div>
        </section>
        <section className="products">
          <div className="container">
            <h2 className="products__title">Clássicos</h2>
            <div className="products__list">
              {produtosExibidos.filter(produto => produto.categoria ==="classicos").map((produto) => (

                <ProductCard
                  key={produto.id}
                  {...produto}
                />  
              )
            )}
            </div>
          </div>
        </section>
        <section className="products">
          <div className="container">
            <h2 className="products__title">Gelados</h2>
            <div className="products__list">
              {produtosExibidos.filter(produto => produto.categoria ==="gelados").map((produto) => (
                
                <ProductCard
                  key={produto.id}
                  {...produto}
                />  
                )
              )}
            </div>
          </div>
        </section>
      </main>      
    </>
  )
}
