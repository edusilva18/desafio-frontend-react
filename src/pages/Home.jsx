import { use, useState } from 'react'
import { produtos } from '../../data'
import '../css/Home.css'
import ProductCard from '../components/productCard';

export function Home() {

  const [produtosExibidos,setProdutosExibidos] = useState(produtos)


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
