import clientPromise from './_mongoclient';
import qs from 'qs';
import { ObjectId } from 'mongodb';

export async function get(request) {
	const client = await clientPromise;

	let product = {};
	let query = qs.parse(request.query.toString());

	if (Object.keys(query).length) {
		if (query.id) {
			console.log('id', query.id);
			product = await client
				.db()
				.collection('product')
				.findOne({ _id: ObjectId(query.id) });
		} else {
			console.log('query', query);
			product = await client.db().collection('product').find(query).toArray();
		}
	} else {
		console.log('get all');
		product = await client.db().collection('product').find({}).toArray();
	}

	console.log('product', product);

	return {
		body: product
	};
}