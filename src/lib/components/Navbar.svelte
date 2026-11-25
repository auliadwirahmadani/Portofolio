<script lang="ts">
	import { personalInfo } from '#lib/data/portfolio';

	let { visible = false }: { visible?: boolean } = $props();

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	const navLinks = [
		{ label: 'About', href: '#about' },
		{ label: 'Works', href: '#projects' },
		{ label: 'Contact', href: '#contact' },
	];

	function handleScroll() {
		scrolled = window.scrollY > 50;
	}
</script>

<svelte:window onscroll={handleScroll} />

<nav
	class="fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-out
		{visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
		{scrolled ? 'bg-[#08090D]/80 backdrop-blur-xl border-b border-white/[.04]' : ''}"
>
	<div class="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 h-16 flex items-center justify-between">
		<!-- Logo -->
		<a href="#hero" class="text-[15px] font-semibold tracking-[.01em] text-white/90 hover:text-white transition-colors">
			{personalInfo.name}<span class="text-white/30">.</span>
		</a>

		<!-- Status centre (desktop) -->
		<div class="hidden lg:flex items-center gap-6 text-[12px] tracking-[.03em] text-white/35">
			<div class="flex items-center gap-2">
				<span class="relative flex h-2 w-2">
					<span class="animate-ping absolute inset-0 rounded-full bg-emerald-400/60"></span>
					<span class="relative rounded-full h-2 w-2 bg-emerald-400"></span>
				</span>
				<span>{personalInfo.status} / <span class="text-white/55">{personalInfo.spots}</span></span>
			</div>
			<div class="w-px h-3 bg-white/10"></div>
			<div class="flex items-center gap-1.5">
				<svg class="w-3 h-3 text-white/30" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
				<span>Lives in / <span class="text-white/55">{personalInfo.location}</span></span>
			</div>
		</div>

		<!-- Desktop Nav -->
		<div class="hidden md:flex items-center gap-6">
			{#each navLinks as link}
				<a href={link.href}
					class="text-[13px] font-medium text-white/40 hover:text-white/90 transition-colors duration-300">
					{link.label}
				</a>
			{/each}
		</div>

		<!-- Mobile Toggle -->
		<button
			class="md:hidden p-2 text-white/50 hover:text-white transition-colors"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Menu"
		>
			<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
				{#if mobileOpen}
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
				{/if}
			</svg>
		</button>
	</div>

	{#if mobileOpen}
		<div class="md:hidden bg-[#08090D]/95 backdrop-blur-2xl border-t border-white/[.04]">
			<div class="px-6 py-5 flex flex-col gap-4">
				{#each navLinks as link}
					<a href={link.href}
						class="text-sm text-white/50 hover:text-white transition-colors py-1"
						onclick={() => (mobileOpen = false)}>
						{link.label}
					</a>
				{/each}
				<div class="flex items-center gap-2 text-[11px] text-white/25 pt-3 mt-1 border-t border-white/[.04]">
					<span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
					{personalInfo.status}
				</div>
			</div>
		</div>
	{/if}
</nav>
