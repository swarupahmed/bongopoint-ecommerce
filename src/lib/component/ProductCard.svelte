<script>
	import { goto } from '$app/navigation';
	import { localCart } from '$lib/stores/cartStore';
	import { convertCart } from '$lib/model/cart';

	export let product;

	function pushToProduct(id) {
		goto('/product/' + id);
	}
	function addTocart(e) {
		e.stopPropagation();
		console.log('local', $localCart);

		let cartProduct = convertCart(product, 1);

		$localCart = [...$localCart, cartProduct];
	}
</script>

<div class="product" on:click={() => pushToProduct(product._id)}>
	<div>
		<div style="height: 275px;">
			{#if product.images?.length}
				<img src={product.images[0]} alt={product.images[0].split('com/')[1]} />
			{/if}
		</div>
	</div>
	<div class="product-meta">
		<div class="title">{product.title}</div>
		<div style="display: flex;justify-content: space-between; margin:12px">
			<div style="padding: 1px; color:#A80B7C">tk. {product.price}</div>
			<button style="padding: 0 4px;" on:click={addTocart}>cart+</button>
		</div>
	</div>
</div>

<style>
	img {
		width: 292px;
		height: 280px;
		border-radius: 2px 2px 0 0;
	}
	.product {
		margin: 20px;
		width: 292px;
		height: 360px;
		background-color: white;
		border-radius: 2px;
	}

	.title {
		white-space: nowrap;
		justify-content: start;
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 2px;
	}

	.product-meta {
		text-align: center;
		padding: 4px;
	}
</style>
