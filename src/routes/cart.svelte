<script>
	import { goto } from '$app/navigation';
	import { localCart } from '$lib/stores/cartStore';
	import Cart from '$lib/component/Cart.svelte';

	let product;

    console.log($localCart)


</script>
{#if $localCart.length}
	 <Cart products={$localCart}/>
{/if}


iufsad
