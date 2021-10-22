import clientPromise from './_mongoclient';
import { ObjectId } from 'mongodb';

export async function get(request){
	const client = await clientPromise;

    let id = request.query.get('id')

	console.log(id);

	let res = await client.db().collection('user').findOne({ _id: id });
    console.log(res)
	return {
		body: res
	};
}
export async function post(request){
	const client = await clientPromise;

	let res = await client.db().collection('user').insertOne(request.body);
    console.log(res)
	return {
		body: {
			response: res
		}
	};
}

export async function put(request) {
	const client = await clientPromise;

	let id = ObjectId(request.body._id);

	delete request.body._id;

	console.log(request.body);

	let res = await client.db().collection('user').updateOne({ _id: id }, { $set: request.body });

	return {
		body: res
	};
}