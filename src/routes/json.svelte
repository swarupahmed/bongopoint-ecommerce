<script>
	import {onMount} from 'svelte'
	let data;
	let allData;
	onMount(async()=>{
		let divisionsRes = await fetch('https://bdapis.herokuapp.com/api/v1.0/divisions');
	let divisions= await divisionsRes.json();
		data=divisions.data;
		console.log(data)
		for(var i=0;i<divisions.data.length;i++){
			let districtsRes = await fetch('https://bdapis.herokuapp.com/api/v1.0/division/'+data[i]._id);
	let districts= await districtsRes.json();
			data[i].districts=districts.data;
			console.log(data[i].division)
		}
		console.log(data)
		allData=data
	})
	
</script>


{#if allData}
	{JSON.stringify(allData)}
{/if}

