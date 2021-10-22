<script>
	import TextInput from '$lib/input/TextInput.svelte';
	import { locations } from '$lib/model/locations';
import { updateUserAddress } from '$lib/model/user';
	import { onMount } from 'svelte';

	export let address;
	export let propagateAddress;

	let editMode = false;

	async function update(){
		if(address.phone && address.division && address.district && address.thana && address.address){

			let res=await updateUserAddress(address);
		}
	}

	onMount(() => {
		let addressComplete =
			address.phone && address.division && address.district && address.thana && address.address;
		editMode = !addressComplete;
	});
	$:editModeTxt=editMode?'cancel':'edit'
	$: selectableDistricts=address.division?locations.find((d)=>d.division===address.division).districts:[]
	$: selectableUpazilla=address.district?locations.find((d)=>d.division===address.division).districts.find((dis)=>dis.district===address.district).upazilla:[]
	$: if(propagateAddress){
		propagateAddress(address)
	}
</script>

<div>
	<span>{address.phone}</span>
	<span>{address.division}</span>
	<span>{address.district}</span>
	<span>{address.thana}</span>
	<span>{address.address}</span>
</div>
<button on:click={()=>editMode=!editMode}>{editModeTxt}</button>

{#if editMode}

<div style="padding: 12px;border:0.5px solid">

	<button on:click={update}> save</button>
	<TextInput type="tel" label="Phone Number" bind:val={address.phone} />

	<div>

		<label for="division">choose division:</label>
	</div>
<div>

	<select name="division" id="division" bind:value={address.division}>
		{#each locations as division}
			<option value={division.division}>{division.division}</option>
		{/each}
	</select>
</div>

<div>

	<label for="discrict">choose district:</label>
</div>
<div>

	<select name="discrict" id="discrict" bind:value={address.district}>
		{#each selectableDistricts as district}
			<option value={district.district}>{district.district}</option>
		{/each}
	</select>
</div>
<div>

	<label for="upazilla">choose thana:</label>
</div>
	<select name="upazilla" id="upazilla" bind:value={address.thana}>
		{#each selectableUpazilla as upazilla}
			<option value={upazilla}>{upazilla}</option>
		{/each}
	</select>

	<TextInput label="address" bind:val={address.address}/>
</div>
{/if}
