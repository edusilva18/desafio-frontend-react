import ProductCard from '../components/ProductCard'
import '../css/Home.css'
import produtos from './db.json';

export function Home() {
  const categorias = produtos.reduce((acc, produto) => {
    const categoriaTitulo = produto.categoria;

    if (!acc[categoriaTitulo]) {
      acc[categoriaTitulo] = [];
    }

    acc[categoriaTitulo].push(produto);
    return acc;
  }, {});

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
        <section key={categoryTitle} className="products">
          <div className="container">
            <h2 className="products__title">{capitalize(categoryTitle)}</h2>

            <div className="products__list">
              {productsList.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>


      </main>
    </>
  )
}
