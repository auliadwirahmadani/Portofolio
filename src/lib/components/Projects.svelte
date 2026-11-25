<script lang="ts">
	import { projects } from '#lib/data/portfolio';
	import FadeIn from './FadeIn.svelte';
</script>

<section id="projects" class="relative py-28 lg:py-36 bg-[#08090D] overflow-hidden">
	<div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[.06] to-transparent"></div>

	<!-- Ambient glow -->
	<div class="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-violet-900/[.06] blur-[140px] pointer-events-none"></div>

	<div class="max-w-[1100px] mx-auto px-6 sm:px-10 relative">
		<FadeIn direction="left" distance={40} blur={true}>
			<p class="text-[11px] font-semibold tracking-[.22em] uppercase text-white/30 mb-3">Selected Works</p>
		</FadeIn>

		<FadeIn delay={100} direction="up" distance={60} scale={true} blur={true}>
			<h2 class="font-['Playfair_Display'] text-[2rem] sm:text-[2.4rem] font-medium text-white leading-[1.15] tracking-[-0.01em] mb-14">
				Projects yang<br/><span class="text-white/50">saya kerjakan</span>
			</h2>
		</FadeIn>

		<div class="grid md:grid-cols-2 gap-5">
			{#each projects as project, i}
				<FadeIn
					delay={i * 130}
					direction={i % 2 === 0 ? 'left' : 'right'}
					distance={60}
					scale={true}
					blur={true}
					duration={950}
				>
					<article class="group relative bg-[#0e0f13] rounded-2xl border border-white/[.04] p-6 sm:p-7
						hover:border-white/[.1] hover:bg-[#111218] hover:-translate-y-1 hover:shadow-2xl
						transition-all duration-500 cursor-default h-full">

						<!-- Number -->
						<span class="absolute top-5 right-6 text-[4rem] font-serif font-bold leading-none text-white/[.02]
							group-hover:text-white/[.07] transition-colors duration-500">
							{String(i + 1).padStart(2, '0')}
						</span>

						<!-- Shimmer line on hover -->
						<div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[.12] to-transparent
							opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"></div>

						<div class="relative">
							<h3 class="text-lg font-semibold text-white/90 mb-2
								group-hover:text-white transition-colors duration-300">
								{project.title}
							</h3>
							<p class="text-[13px] leading-relaxed text-white/35 mb-5">
								{project.description}
							</p>
							<div class="flex flex-wrap gap-1.5 mb-5">
								{#each project.tags as tag}
									<span class="px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase
										text-white/30 bg-white/[.03] border border-white/[.04] rounded
										group-hover:border-white/[.08] transition-colors duration-300">
										{tag}
									</span>
								{/each}
							</div>
							<div class="flex items-center gap-4 text-[12px] font-medium">
								{#if project.liveUrl}
									<a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
										class="text-white/35 hover:text-white/80 transition-colors flex items-center gap-1.5">
										<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
											<path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
										</svg>
										Live
									</a>
								{/if}
								{#if project.githubUrl}
									<a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
										class="text-white/35 hover:text-white/80 transition-colors flex items-center gap-1.5">
										<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
										</svg>
										Source
									</a>
								{/if}
							</div>
						</div>
					</article>
				</FadeIn>
			{/each}
		</div>
	</div>
</section>
