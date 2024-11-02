<script lang="ts">
	import { enhance } from '$app/forms';
	const { form } = $props();

	$effect(() => {
		form?.text && console.log(`%c${form?.text}`, 'font: 1rem system-ui;');
	});
</script>

<form method="POST" action="?/hm" class="absolute bottom-20 right-20" use:enhance>
	<span class="sr-only">This might mean something...</span>
</form>
