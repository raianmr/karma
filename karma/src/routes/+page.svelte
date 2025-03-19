<script lang="ts">
	import Swimlane from "../lib/components/Swimlane.svelte"

	let inbox_items = $state(["1", "2"])
	let doing_items = $state(["1", "2"])
	let done_items = $state(["1", "2"])
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Swimlane title="Inbox" items={inbox_items} />
	<Swimlane title="Doing" items={doing_items}/>
	<Swimlane title="Done" items={done_items}/>
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
