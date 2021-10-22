<script context="module">
	export function load({ page }) {
		let slug = page.params.slug;
		let query = page.query;
		console.log(slug);
		console.log(query.get('quantity'));
		return {
			props: {
				slug,
				quantity:query.get('quantity')
			}
		};
	}
</script>

<script>
	import Cart from '$lib/component/Cart.svelte';
	import { createOrder, queryProducts } from '$lib/model/query';
	import { onMount } from 'svelte';
	import {convertCart} from '$lib/model/cart'

	export let slug;
	export let quantity;

	let product;
    let cartProducts;



	onMount(async () => {
		product = await queryProducts({ id: slug });
		let converted=convertCart(product,quantity)
        cartProducts=[converted]
        
	});
</script>

{#if product}
	<Cart products={cartProducts} />
{/if}
{slug}
