<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Pencil from '@lucide/svelte/icons/pencil';
	import Trash from '@lucide/svelte/icons/trash-2';

	import { Button } from '$lib/components/ui/button';

	type Props = {
		content: string;
	};

	let props: Props = $props();
</script>

<Card.Root class="">
	<Card.Header class="space-between relative flex flex-row border-b-2 border-secondary px-3 py-3"
	></Card.Header>
	<Card.Content
		class="space-between relative flex flex-row whitespace-pre-wrap px-3 pb-6 pt-3 text-left"
	>
		<span class="relative -ml-2 h-auto cursor-grab p-1 text-primary/50">
			{props.content}
		</span>
		<span class="ml-auto">
			<Button variant="outline" size="icon"><Pencil /></Button>
			<Button variant="outline" size="icon"><Trash /></Button>
		</span>
	</Card.Content>
	<Card.Footer></Card.Footer>
</Card.Root>
