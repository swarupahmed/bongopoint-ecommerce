import clientPromise from './_mongoclient';
import { ObjectId } from 'mongodb';

export async function post(request){
	const client = await clientPromise;

	console.log(request.body);

	let res = await client.db().collection('order').insertOne(request.body);

	return {
		body: res
	};
}