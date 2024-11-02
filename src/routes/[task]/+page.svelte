<div class="flex h-[100vh] w-[100vw] items-center justify-center">
	<ul id="task">
		<li>
			{@html 'setTimeout(() => { console.log("Timeout 1"); Promise.resolve().then(() => { console.log("Promise 1 inside Timeout 1"); }); }, 0);'}
		</li>
		<li>
			{@html 'Promise.resolve().then(() => { console.log("Promise 2"); setTimeout(() => { console.log("Timeout 2 inside Promise 2"); }, 0); });'}
		</li>
		<li>console.log("Finish");</li>
	</ul>
	<div>Welcome to great village of konoha</div>
</div>
