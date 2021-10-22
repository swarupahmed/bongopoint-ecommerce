<script>
	import { onMount } from 'svelte';
	import ProductCard from '$lib/component/ProductCard.svelte';
	var products;
	onMount(async () => {
		let res = await fetch('/api/product');
		products = await res.json();
		console.log(products);
	});
</script>

<!-- content here -->
{#if products}
	{#each products as product}
		<ProductCard {product} />
		
	{/each}
{/if}
