<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<title>Aulia Dwi Rahmadani — Full-Stack Web Developer & WebGIS</title>
</svelte:head>

{@render children()}
