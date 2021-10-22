<script>
	export let label;
	export let val;
	export let type='text'
	export let required=false

	function handleInput(event){
		val=event.target.value;
	}
</script>

<div>
	<label for={label}>{label}</label>

	<input type={type} name={label} on:input={handleInput} value={val} {required}/>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}

	label{
		padding:6px 0;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input[type='number'] {
		-moz-appearance: textfield;
	}

	input{
		height: 32px;
		font-size: 16px;
	}
</style>
