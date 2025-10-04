 import { useState } from 'react';

 import { useState } from 'react';
import dados from '../dados';

 

function Home() {
  const [produtos, setProdutos] = useState([
    {
      id: "1",
      nome: "Café Espresso",
      imagem: "./image/product-01.png",
      descricao: "Café forte e encorpado, ideal para começar o dia.",
      preco: { de: 1200, por: 1000 },
      vegano: true,
      categoria: "clássicos"
    },
    {
      id: "2",
      nome: "Café com Leite",
      imagem: "./image/product-04.png",
      descricao: "Mistura suave de café com leite cremoso.",
      preco: { de: 1500, por: 1300 },
      vegano: false,
      categoria: "especiais"
    },
   
  ]);

 

function Home() {
  const [produtos, setProdutos] = useState(dados.produtos);

  return (
    <div className="products__list">
      {produtos.map((produto) => (
        <a
          key={produto.id}
          href={`/product/${produto.id}`}
          className="products__list--item"
        >
          <img src={produto.imagem} alt={produto.nome} />
          <h3 className="products__list--price">
            R$ {(produto.preco.por / 100).toFixed(2)}
            <span> R$ {(produto.preco.de / 100).toFixed(2)} </span>
          </h3>
          <h4 className="products__list--name">{produto.nome}</h4>
          {produto.vegano && (
            <div className="product__tag">
              <img src="./image/plant.png" alt="planta" />
              <span>Vegano</span>
            </div>
          )}
        </a>
      ))}
    </div>
  );
}

 



  return (
    <div className="products__list">
      {produtos.map((produto) => (
        <a
          key={produto.id}
          href={`/product/${produto.id}`}
          className="products__list--item"
        >
          <img src={produto.imagem} alt={produto.nome} />
          <h3 className="products__list--price">
            R$ {(produto.preco.por / 100).toFixed(2)}
            <span> R$ {(produto.preco.de / 100).toFixed(2)} </span>
          </h3>
          <h4 className="products__list--name">{produto.nome}</h4>
          {produto.vegano && (
            <div className="product__tag">
              <img src="./image/plant.png" alt="planta" />
              <span>Vegano</span>
            </div>
          )}
        </a>
      ))}
    </div>
  );
}

export default Home;


const Home = () => 
 
   [produtos, setProdutos] = useState([ 
    {
    
      id: "7",
      nome: "Mocha",
      imagem: "./image/product-07.png",
      descricao: "Uma descrição completa do produto.",
      preco: {
        de: 1000,
        por: 800,
      },
      vegano: false,
      categoria: "clássicos",
    },
    {
      id: "8",
      nome: "Latte Vegano",
      imagem: "./image/product-08.png",
      descricao: "Feito com leite vegetal.",
      preco: {
        de: 1200,
        por: 1000,
      },
      vegano: true,
      categoria: "especiais",
    },
  ]);
  const categorias = produtos.reduce((acc, produto) => {
    const categoriaTitulo = produto.categoria;
  }, {}); 


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
