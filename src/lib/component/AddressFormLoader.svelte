<script>
	import { createUserData, getUserData } from '$lib/model/user';

	import { auth } from '$lib/utility/auth';
	import { onMount } from 'svelte';
	import AddressForm from './AddressForm.svelte';

    export let user;
    export let propagateAddress;

	let userData;

	console.log($auth.user);

	onMount(async () => {
		userData = await getUserData(user.uid);
		console.log(userData);
	});
</script>

{#if userData}
	 <AddressForm address={userData.deliveryAddress} {propagateAddress}/>
{/if}

