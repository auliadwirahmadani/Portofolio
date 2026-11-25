<script lang="ts">
	import { showcasePanels } from '#lib/data/portfolio';
	import type { ShowcasePanel } from '#lib/data/portfolio';

	let { active = false }: { active?: boolean } = $props();

	/* each panel gets a fixed 3D style to create the arc effect */
	const panelStyles = (i: number, total: number) => {
		const center = (total - 1) / 2;
		const dist = (i - center) / center;            // –1 … 1
		const ry = dist * 18;                           // rotateY
		const tz = -Math.abs(dist) * 60;                // depth
		const op = 0.35 + (1 - Math.abs(dist)) * 0.35;  // opacity
		const bl = Math.abs(dist) > 0.6 ? 1 : 0;        // blur
		const mt = Math.sin(i * 1.8) * 30;               // vertical offset
		return `transform:perspective(900px) rotateY(${ry}deg) translateZ(${tz}px) translateY(${mt}px);opacity:${op};filter:blur(${bl}px)`;
	};

	/* duplicate for seamless loop */
	const panels: ShowcasePanel[] = [...showcasePanels, ...showcasePanels];
</script>

<div
	class="absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-[1.8s] ease-out
		{active ? 'opacity-100' : 'opacity-0'}"
	style="perspective:1000px"
>
	<div
		class="marquee-track flex items-center gap-5 absolute top-[18%] h-[48%]"
		style="width:max-content"
	>
		{#each panels as panel, i}
			{@const idx = i % showcasePanels.length}
			<div
				class="flex-shrink-0 rounded-xl overflow-hidden border border-white/[.06] shadow-2xl shadow-black/40"
				style="width:280px;height:{panel.h}px;{panelStyles(idx, showcasePanels.length)}"
			>
				<!-- Browser chrome -->
				<div class="h-7 flex items-center gap-1.5 px-3 border-b border-white/[.04]"
					 style="background:{panel.accent}">
					<span class="w-[7px] h-[7px] rounded-full bg-white/10"></span>
					<span class="w-[7px] h-[7px] rounded-full bg-white/10"></span>
					<span class="w-[7px] h-[7px] rounded-full bg-white/10"></span>
					<span class="ml-3 text-[9px] text-white/20 font-medium tracking-wide">{panel.url}</span>
				</div>
				<!-- Content placeholder -->
				<div class="relative w-full flex-1 overflow-hidden"
					 style="background:linear-gradient(145deg,{panel.accent},{panel.accentAlt})">
					<!-- Fake nav bar -->
					<div class="flex items-center gap-2 px-3 pt-2.5">
						<div class="w-8 h-1.5 rounded bg-white/[.08]"></div>
						<div class="ml-auto flex gap-1.5">
							<div class="w-5 h-1 rounded bg-white/[.06]"></div>
							<div class="w-5 h-1 rounded bg-white/[.06]"></div>
							<div class="w-5 h-1 rounded bg-white/[.06]"></div>
						</div>
					</div>
					<!-- Fake hero block -->
					<div class="px-3 pt-4">
						<div class="w-16 h-1.5 rounded bg-white/[.06] mb-1.5"></div>
						<div class="w-24 h-2 rounded bg-white/[.09] mb-1.5"></div>
						<div class="w-20 h-1 rounded bg-white/[.05]"></div>
					</div>
					<!-- Fake content blocks -->
					<div class="flex gap-2 px-3 pt-4">
						<div class="w-14 h-10 rounded bg-white/[.04]"></div>
						<div class="w-14 h-10 rounded bg-white/[.04]"></div>
						<div class="w-14 h-10 rounded bg-white/[.04]"></div>
					</div>
					<!-- Title overlay -->
					<div class="absolute bottom-2 left-3 right-3">
						<span class="text-[8px] font-bold tracking-[.1em] uppercase text-white/15">{panel.title}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	@keyframes marquee-scroll {
		0%   { transform: translate3d(0, 0, 0); }
		100% { transform: translate3d(-50%, 0, 0); }
	}
	.marquee-track {
		animation: marquee-scroll 50s linear infinite;
	}
	@media (prefers-reduced-motion: reduce) {
		.marquee-track { animation-play-state: paused; }
	}
</style>
