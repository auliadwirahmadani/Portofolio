<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '#lib/components/Navbar.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import About from '#lib/components/About.svelte';
	import Projects from '#lib/components/Projects.svelte';
	import Experience from '#lib/components/Experience.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import Footer from '#lib/components/Footer.svelte';

	let navVisible = $state(false);

	onMount(() => {
		const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		setTimeout(() => (navVisible = true), rm ? 0 : 300);
	});
</script>

<Navbar visible={navVisible} />

<main>
	<Hero />
	<About />
	<Projects />
	<Experience />
	<Contact />
</main>

<Footer />
