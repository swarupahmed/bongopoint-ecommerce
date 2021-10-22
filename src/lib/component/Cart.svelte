<script>
	import AddressForm from './AddressForm.svelte';
	import { auth } from '$lib/utility/auth';
	import { goto } from '$app/navigation';
	import AddressFormLoader from './AddressFormLoader.svelte';

	export let products;
	let deliveryAddress;

	function propagateAddress(address) {
		deliveryAddress = address;
	}

	function buyNow() {
		let order = {
			products: products,
			status: 'pending',
			userId: $auth.user.uid,
			address: deliveryAddress
		};
		console.log('order', order);
		createOrder(order);
	}

	function buttonDisabled() {
		if(

			deliveryAddress.phone &&
			deliveryAddress.division &&
			deliveryAddress.district &&
			deliveryAddress.thana &&
			deliveryAddress.address
		){
			return false
		}else{
			return true
		}
		
	}
	let disabledB
	$: if(deliveryAddress){
		disabledB=buttonDisabled()
	}
</script>

{#each products as product}
	<div>
		<div>{product.title}</div>
		<div>Tk. {product.price}</div>
	</div>

	{#if $auth.user}
		<AddressFormLoader user={$auth.user} {propagateAddress} />
	{:else}
		<button on:click={() => goto('/user')}> sign In To Purchase</button>
	{/if}
{/each}
<div>
	{#if $auth.user}
		{#if deliveryAddress}
			<button on:click={buyNow} disabled={disabledB}>Confirm Purchase</button>
		<!-- {:else}
			<button disabled>Confirm Purchase</button> -->
		{/if}
	{/if}
</div>

