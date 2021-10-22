<script>
	export let label;
	export let val;
	export let rows = '6';
	export let cols = '50';
	export let onInput;
	export let onChange;
</script>

<div>
	<label for={label}>{label}</label>

	<textarea name={label} {rows} {cols} bind:value={val} on:input={onInput} on:change={onChange} />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}

	label {
		padding: 6px 0;
	}
	textarea {
		font-size: 16px;
		resize: none;
	}
</style>
