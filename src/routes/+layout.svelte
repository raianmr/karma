<!-- <script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

{@render children()} -->

<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="app">
	<main>
		{@render children()}
	</main>
</div>

<style>
</style>
