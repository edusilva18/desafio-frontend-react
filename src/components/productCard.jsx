import PlantImage from '../assets/Plant.png'
import CowImage from '../assets/Cow.png'


const ProductCard = ({
        id,
        imagem,
        nome,
        preco: { por: currentPrice, de: oldPrice },
        vegano
    }) => {


    const formatPrice = (preco) => {
        return `R$ ${preco.toFixed(2).replace('.', ',')}`;
    }

    const tag = vegano ? {image: PlantImage, text: 'Vegano'} : {image: CowImage, text: 'Contém Lactose'}

    return (
        <a href={`/product/${id}`}className="products__list--item">
            <img src={imagem} alt={nome}/>
            <h3 className="product__list--price">
                {formatPrice (currentPrice)} {oldPrice && <span>{formatPrice(oldPrice)}</span>}
            </h3>
            <h4 className="products__list--name">{nome}</h4>
            <div className="product__tag">
                <img src={tag.image}/>
                <span>{tag.text}</span>
            </div>           
        </a>
    )
}     
export default ProductCard