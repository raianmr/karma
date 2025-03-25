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
</script>

<Card.Root
	class="flex max-h-[95rem] w-[350px] max-w-full flex-shrink-0 snap-center flex-col bg-primary-foreground"
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
</Card.Root>

<style>
</style>
