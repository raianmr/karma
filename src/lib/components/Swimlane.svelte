<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { ScrollArea } from '$lib/components/ui/scroll-area';

	import Task from '$lib/components/Task.svelte';

	type Props = {
		title: string;
		items: string[];
	};

	let props: Props = $props();

	let new_item = $state('');

	function create() {
		props.items.push(new_item);
	}
	// bg-primary-foreground flex h-[500px] max-h-[500px] w-[350px] max-w-full flex-shrink-0 snap-center flex-col
</script>

<Card.Root
	class="bg-primary-foreground flex max-h-[95rem] w-[350px] max-w-full flex-shrink-0 snap-center flex-col"
>
	<Card.Header
		class="space-between flex flex-row items-center border-b-2 p-4 text-left font-semibold"
	>
		{props.title}
	</Card.Header>
	<ScrollArea>
		<Card.Content class="items">
			{#each props.items as item}
				<Task content={item} />
			{/each}
		</Card.Content>
	</ScrollArea>

	<!-- <h2>{props.title}</h2>
	<div class="items">
		{#each props.items as item}
			<p class="item">{item}</p>
		{/each}
	</div>
	<input type="text" bind:value={new_item} placeholder="create new" />
	<button onclick={create}>create new item</button> -->
</Card.Root>

<style>
</style>
