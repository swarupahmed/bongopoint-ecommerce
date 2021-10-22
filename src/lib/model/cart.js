export function convertCart(product,quantity) {
    return { 
        id: product._id, 
        title:product.title,
        price: product.price,
        quantity:quantity,
        thumbnail:product.images[0]
    };
}