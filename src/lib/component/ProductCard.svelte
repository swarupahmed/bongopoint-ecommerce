<script>
    import { goto } from '$app/navigation';
	import { localCart } from '$lib/stores/cartStore';
	import {convertCart} from '$lib/model/cart'

    export let product;

    function pushToProduct(id) {
		goto('/product/' + id);
	}
	function addTocart(e){
		e.stopPropagation()
		console.log('local',$localCart)

		let cartProduct=convertCart(product,1)

		$localCart=[...$localCart,cartProduct]
	}
</script>

<div class="product" on:click={() => pushToProduct(product._id)}>
    <div>
		<div style="height: 132px;">
				 {#if product.images?.length}
				 <img src={product.images[0]} alt={product.images[0].split('com/')[1]} />
				 {/if}
			 </div>
    </div>
    <div class="product-meta">
        <div class="title">{product.title}</div>
        <div style="padding: 1px; color:#A80B7C">tk. {product.price}<button on:click={addTocart}>cart+</button></div>
		
	</div>
</div>

<style>
    	img {
		width: 132px;
		height: 132px;
		border-radius: 2px 2px 0 0;
	}
	.product {
		width: 132px;
		height: 184px;
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