<script lang="ts">
	import { enhance } from '$app/forms';
	const { form } = $props();

	$effect(() => {
		form?.text && console.log(form?.text);
	});
</script>

<form method="POST" action="?/hm" class="absolute bottom-20 right-20" use:enhance></form>
