import qs from 'qs';

export async function queryProducts(queryObj) {
	const query = qs.stringify(queryObj);
	const res = await fetch(`/api/product?${query}`);
	console.log('products for',query)
	return res.json();
}

export async function createOrder(order) {
	order.createdAt=new Date().getTime();
	let res = await fetch('/api/order', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(order)
	});
	let result = await res.json();
	console.log('order created', result);
	return { order, result };
}