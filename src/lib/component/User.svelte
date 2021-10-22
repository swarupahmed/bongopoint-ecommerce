<script>
	import { createUserData, getUserData } from '$lib/model/user';

	import { auth } from '$lib/utility/auth';
	import { onMount } from 'svelte';
	import AddressForm from './AddressForm.svelte';

	let userData;

	console.log($auth.user);

	onMount(async () => {
		userData = await getUserData($auth.user.uid);
		console.log(userData);
		if (userData === null) {
			setTimeout(async () => {
				userData = await getUserData($auth.user.uid);
				if (userData === null && $auth.user.displayName) {

					let reCreate = await createUserData($auth.user);

					if (reCreate.result.acknowledged === true) {
						userData = reCreate.userData;
					}
				}
			}, 2000);
		}
	});
</script>

<div>{$auth.user.email}</div>

{#if userData}
	 <!-- content here -->
	 <AddressForm address={userData.deliveryAddress}/>
{/if}

<div style="padding-top: 40px;">

	<button on:click={() => auth.logOut()}>logOut</button>
</div>
