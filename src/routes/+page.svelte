<script lang="ts">
	import { enhance } from '$app/forms';
	const { data, form } = $props();

	$effect(() => {
		form?.text && console.log(form?.text);
	});
</script>

{#if form?.isOpen}
	<div>CTG challenge started my friend</div>
{/if}
<form method="POST" action="?/hm" class="absolute bottom-20 right-20" use:enhance>
	<button>
		<span class="sr-">Hello</span>
	</button>
</form>
