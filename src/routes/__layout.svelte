<script>
	import { goto } from '$app/navigation';
import { localCart } from '$lib/stores/cartStore';
import { auth } from '$lib/utility/auth';

	let sidebaropen = false;

	function toggleSidebar() {
		sidebaropen = !sidebaropen;
	}
	//TODO if($auth)?profile:signIn
</script>

<div class="layout">
	<div>
		<div class='topbar'>
			topbar
			{#if $auth.user}
				 <!-- content here -->
				 <button on:click={() => goto('/user')}>user</button>
				 {:else}
				 <button on:click={() => goto('/user')}>login</button>
			{/if}
			<button on:click={() => goto('/cart')}>cart: {$localCart.length}</button>
		</div>
		<div class="slot">
			<div class="page-wrapper">
				<slot />
			</div>
		</div>
	</div>
</div>

<style>
	:global(:root) {
		font-size: 18px;
		background-color: rgb(238, 238, 238);
	}

	:global(button) {
		padding: 4px 12px;
	}

	.layout {
		display: flex;
	}

	.topbar{
		position: fixed;
		background-color: white;
		top: 0;
		left: 0;
		width: 100vw;
		padding:8px 12px ;
	}
	.slot {
		margin-top: 50px;
		padding: 24px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.page-wrapper {
		max-width: 100%;
	}

	@media screen and (min-width: 1020px) {
		.page-wrapper {
			max-width: 95%;
		}
	}
	@media screen and (min-width: 1200px) {
		.page-wrapper {
			max-width: 90%;
		}
	}
</style>
