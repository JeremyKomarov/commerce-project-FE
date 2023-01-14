const countTotalPrice = (cartProducts)  => {
    let totalPrice = 0
    cartProducts.forEach(product => {
      totalPrice += product.price;
    })
    return totalPrice
}

export default countTotalPrice