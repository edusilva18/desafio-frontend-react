import React from 'react'
const ProductCard = ({ id, nome, imagem, preco, vegano }) => {
 
  const formatPrice = (priceInCents) => {
    return (priceInCents / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }
}