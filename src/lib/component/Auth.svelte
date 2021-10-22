<script>
	import TextInput from '$lib/input/TextInput.svelte';
	import { createUserData } from '$lib/model/user';

	import { auth } from '$lib/utility/auth';
import Radio from './Radio.svelte';

	let email = '';
	let password = '';
	let displayName='';

	async function logIn(e) {
		e.preventDefault();
		await auth.logIn(email, password);
		console.log('user-', $auth.user);
	}
	async function signUp(e) {
		if(displayName.length>=3 && password.length>=6){
			e.preventDefault();
			await auth.signUp(email, password);
			console.log('user-', $auth.user);
			await auth.updateUserData({ displayName: displayName });
			console.log('after creating',$auth.user.displayName);
			await createUserData($auth.user);
		}else{
			alert('name should be more than 3 & password 6')
		}
	}

	let radioValue;
	
	const options = [{
		value: 'LogIn',
		label: 'LogIn',
	}, {
		value: 'SignUp',
		label: 'SignUp',
	}]
</script>

<!-- TODO form {signUP} -->


<Radio {options} fontSize={16} legend='Welcome to Bongo point' bind:userSelected={radioValue}/>

{#if radioValue==='LogIn'}
	 <!-- content here -->
	 <form on:submit={logIn} class="login form">
		 <TextInput type="email" bind:val={email} label="Email" />
		 <TextInput type="password" bind:val={password} label="Password" />
		 <button type="submit">Log In</button>
	 </form>
	 {:else}
	 <form on:submit={signUp} class="signup form">
		 <TextInput bind:val={displayName} label="Full Name" />
		 <TextInput type="email" bind:val={email} label="Email" />
		 <TextInput type="password" bind:val={password} label="Password" />
		 <button type="submit">Sign Up</button>
	 </form>
{/if}


<style>
	.form {
		max-width: 401px;
	}
</style>
