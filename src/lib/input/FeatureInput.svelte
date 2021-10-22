<script>
import TextArea from "./TextArea.svelte";

	export let label;
	export let val;

	export let onChange;

	let previousLength = 0;

const onInput = (event) => {
  const bullet = "\u2022";
  const newLength = event.target.value.length;
  const characterCode = event.target.value.substr(-1).charCodeAt(0);
  

  if (newLength > previousLength) {
    if (characterCode === 10) {
      event.target.value = `${event.target.value}${bullet} `;
    } else if (newLength === 1) {
      event.target.value = `${bullet} ${event.target.value}`;
    }
  }
  
  previousLength = newLength;
  onChange()
}

</script>


	<TextArea {onChange} {label} {onInput}  rows="6" cols="50" bind:val/>
