<script context="module">
	export function load({ page }) {
		let slug = page.params.slug;
		console.log(slug);
		return {
			props: {
				slug
			}
		};
	}
</script>

<script>
import { goto } from '$app/navigation';

	import { queryProducts } from '$lib/model/query';
	import { onMount } from 'svelte';
	import {localCart} from '$lib/stores/cartStore'
import { convertCart } from '$lib/model/cart';

	export let slug;

	let product;
	let orderQuantity=1;

	onMount(async () => {
		product = await queryProducts({ id: slug });
		console.log($localCart.length)
	});

	function buyNow() {
        goto(`/product/${slug}/buynow?quantity=${orderQuantity}`)
    }

	function addTocart(){
		console.log('local',$localCart)

		let cartProduct=convertCart(product,orderQuantity)

		$localCart=[...$localCart,cartProduct]
	}
</script>

{#if product}
	<div>
		<div>{product.title}</div>
		<div>Tk. {product.price}</div>
	</div>

	<div>
		<button on:click={buyNow}>Buy now</button>
		<button on:click={addTocart}>add to cart</button>
	</div>
{/if}
