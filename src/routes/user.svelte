<script>
import Auth from "$lib/component/Auth.svelte";
import User from "$lib/component/User.svelte";
import { auth } from '$lib/utility/auth';

</script>
{#if $auth.user}
	 <!-- content here -->
	 <User/>
	 {:else}
	 <Auth/>
{/if}