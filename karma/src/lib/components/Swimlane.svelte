<script lang="ts">
	type Props = {
		title: string
		items: string[]
	}

	let props: Props = $props()

	let new_item = $state("")

	function create() {
		props.items.push(new_item)
	}
</script>

<div class="swimlane">
	<h2>{props.title}</h2>
	<div class="items">
		{#each props.items as item}
			<p class="item">{item}</p>
		{/each}
	</div>
	<input type="text" bind:value={new_item} placeholder="create new" />
	<button onclick={create}>create new item</button>
</div>

<style>
	.swimlane {
		display: flex;
		background-color: azure;
		flex-direction: column;
		justify-content: left;
		align-items: center;
		flex: 0.6;
	}
	/* 
	.item {
		margin: 0.5rem;
	} */
</style>
