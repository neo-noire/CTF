<script lang="ts">
	import task from '$lib/assets/task.png';

	const { form } = $props();

	$effect(() => {
		typeof form?.solved !== 'undefined' && alert(form.text);
	});
</script>

<section class="flex h-[100vh] w-[100vw] items-center justify-center">
	<div>
		<h1 class=" text-center text-4xl">Welcome to great village of Konoha!</h1>
		<span>Solve this challenge to get your path:</span>
		<form method="POST" action="?/task">
			<div class="overflow-hidden rounded-2xl border">
				<img src={task} class=" object-fit w-[650px]" alt="javascript task" />
			</div>
			<input name="input" autocomplete="off" class="mt-2 rounded-lg border bg-black p-2" />
			<button>Submit Result</button>
		</form>
	</div>
</section>

<style>
</style>
