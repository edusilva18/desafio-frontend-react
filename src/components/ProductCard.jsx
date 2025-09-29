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
