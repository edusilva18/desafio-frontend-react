import React from "react";
import { PlantImage, CowImage } from '../assets/'


const ProductCard = ({ product }) => {
    const { id, nome, preco, imagem, vegano } = product;

    const tagVegano = vegano ? 
    {Image: PlantImage,text: "Vegano", alt:"Ícone de planta"}
    :{Image: CowImage,text: "Não vegano", alt:"Ícone de vaca"};

    const currentPrice = (preco.por / 100).toFixed(2).replace('.', ',');
    const oldPrice = preco.de ? (preco.de / 100).toFixed(2).replace('.', ',') : null;

    return (

            <a href={`/product/${id}`} className="product__list-item">
            <img src={imagem} alt={nome}/>

            <h3 className="product__list--price">
                {currentPrice} {oldPrice && <span className="product__list--oldprice"> {oldPrice}</span>}
            </h3>

            <div className="product__list--tag">
                <img src={tagVegano.Image} alt={tagVegano.alt}/>
                <span>{tagVegano.text}</span>
            </div>
        </a>
    );
};

export default ProductCard;
const [carrinho, setCarrinho] = useState([]);
 const removerDoCarrinho = (idItem) => {
  setCarrinho(prev => prev.filter(item => item.id !== idItem));
};
const calcularTotal = () => {
  return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
};
function Carrinho({ carrinho, removerDoCarrinho }) {
  return (
    <div className="carrinho">
      <h2>Carrinho</h2>
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {carrinho.map(item => (
            <li key={item.id}>
              <strong>{item.nome}</strong> — {item.quantidade}x R$ {(item.preco / 100).toFixed(2)}
              {item.observacao && <p>Obs: {item.observacao}</p>}
              <button onClick={() => removerDoCarrinho(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: R$ {(calcularTotal() / 100).toFixed(2)}</h3>
    </div>
  );
}
function Carrinho({ carrinho, removerDoCarrinho }) {
  return (
    <div className="carrinho">
      <h2>Carrinho</h2>
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {carrinho.map(item => (
            <li key={item.id}>
              <strong>{item.nome}</strong> — {item.quantidade}x R$ {(item.preco / 100).toFixed(2)}
              {item.observacao && <p>Obs: {item.observacao}</p>}
              <button onClick={() => removerDoCarrinho(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: R$ {(calcularTotal() / 100).toFixed(2)}</h3>
    </div>
  );
}
<Carrinho
  carrinho={carrinho}
  removerDoCarrinho={removerDoCarrinho}
/>
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Produto from '../components/ProductCard';
 const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

 
