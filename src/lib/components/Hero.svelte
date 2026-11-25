<script lang="ts">
	import { onMount } from 'svelte';
	import { personalInfo } from '#lib/data/portfolio';
	import PortfolioMarquee from './PortfolioMarquee.svelte';
	import Portrait from './Portrait.svelte';

	let show = $state({
		bg: false,
		marquee: false,
		photo: false,
		eyebrow: false,
		headline: false,
		cta: false,
		quote: false,
	});

	const headlineLines = personalInfo.title.split('\n');

	onMount(() => {
		const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (rm) {
			Object.keys(show).forEach((k) => ((show as any)[k] = true));
			return;
		}
		requestAnimationFrame(() => {
			show.bg = true;
			setTimeout(() => (show.marquee = true), 400);
			setTimeout(() => (show.photo = true), 700);
			setTimeout(() => (show.eyebrow = true), 1100);
			setTimeout(() => (show.headline = true), 1200);
			setTimeout(() => (show.cta = true), 1600);
			setTimeout(() => (show.quote = true), 1800);
		});
	});
</script>

<section id="hero" class="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-[#08090D]">
	<!-- Subtle background glow -->
	<div class="absolute inset-0 pointer-events-none transition-opacity duration-[2s]
		{show.bg ? 'opacity-100' : 'opacity-0'}">
		<div class="absolute top-[30%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#131620] blur-[100px]"></div>
		<div class="absolute bottom-[10%] left-[55%] -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#15131e] blur-[80px]"></div>
	</div>

	<!-- Marquee (behind portrait) -->
	<PortfolioMarquee active={show.marquee} />

	<!-- Portrait (foreground) -->
	<Portrait visible={show.photo} />

	<!-- Gradient bottom fade for readability (subtle so portrait stays clear) -->
	<div class="absolute bottom-0 inset-x-0 h-[22%] bg-gradient-to-t from-[#08090D] via-[#08090D]/55 to-transparent z-25 pointer-events-none"></div>

	<!-- Content overlay — posisi strategis atas, sejajar dengan portrait -->
	<div class="absolute inset-0 z-30 flex flex-col justify-start pointer-events-none">
		<div class="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pt-24 sm:pt-28 lg:pt-32 h-full flex flex-col justify-between pb-10 lg:pb-14">
			<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-20">

				<!-- Left – headline & CTA -->
				<div class="max-w-lg pointer-events-auto">
					<!-- Eyebrow -->
					<p class="text-[11px] sm:text-[12px] font-semibold tracking-[.22em] uppercase mb-4
						transition-all duration-700 ease-out
						{show.eyebrow ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-3'}"
						style="color:var(--text-muted)"
					>
						{personalInfo.eyebrow}
					</p>

					<!-- Headline (staggered) -->
					<h1 class="font-serif leading-[1.05] tracking-[-0.015em] mb-7">
						{#each headlineLines as line, i}
							<span class="block text-[2.6rem] sm:text-[3.2rem] lg:text-[3.8rem] font-medium text-white
								transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
								style="transition-delay:{show.headline ? 120 * i : 0}ms;
									   opacity:{show.headline ? 1 : 0};
									   transform:translateY({show.headline ? 0 : 20}px)">
								{line}
							</span>
						{/each}
					</h1>

					<!-- CTA -->
					<div class="transition-all duration-700 ease-out
						{show.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
						<a href="#contact"
							class="inline-flex items-center gap-3 pl-4 pr-5 py-2.5 rounded-full
								bg-white text-[#08090D] text-[13px] font-semibold tracking-[.01em]
								hover:bg-white/90 hover:scale-[1.03] active:scale-[0.98]
								transition-all duration-300 group">
							<span class="w-6 h-6 rounded-full bg-[#08090D]/10 flex items-center justify-center
								group-hover:bg-[#08090D]/15 transition-colors">
								<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
									<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
								</svg>
							</span>
							Hubungi Saya
						</a>
					</div>
				</div>

				<!-- Right – quote & signature -->
				<div class="max-w-xs lg:max-w-[300px] lg:text-right
					transition-all duration-700 ease-out delay-100
					{show.quote ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}">
					<p class="text-[12.5px] sm:text-[13.5px] leading-[1.6] text-white/40 mb-4">
						{@html personalInfo.quote.replace(
							/web full-stack dan WebGIS/,
							'<span class="text-white/75 font-medium">web full-stack dan WebGIS</span>'
						)}
					</p>
					<p class="font-hand text-[1.6rem] text-white/50 tracking-wide">{personalInfo.name}</p>
				</div>

			</div>
		</div>
	</div>
</section>

<style>
	.font-serif { font-family: 'Playfair Display', Georgia, serif; }
	.font-hand  { font-family: 'Caveat', cursive; }
	.z-25 { z-index: 25; }
</style>
