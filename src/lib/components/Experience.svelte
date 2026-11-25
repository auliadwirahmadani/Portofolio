<script lang="ts">
	import { experiences } from '#lib/data/portfolio';
	import FadeIn from './FadeIn.svelte';
</script>

<section id="experience" class="relative py-28 lg:py-36 bg-[#08090D] overflow-hidden">
	<div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[.06] to-transparent"></div>

	<!-- Ambient glow -->
	<div class="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-blue-900/[.05] blur-[140px] pointer-events-none"></div>

	<div class="max-w-[1100px] mx-auto px-6 sm:px-10 relative">
		<FadeIn direction="left" distance={40} blur={true}>
			<p class="text-[11px] font-semibold tracking-[.22em] uppercase text-white/30 mb-3">Experience</p>
		</FadeIn>

		<FadeIn delay={100} direction="up" distance={60} scale={true} blur={true}>
			<h2 class="font-['Playfair_Display'] text-[2rem] sm:text-[2.4rem] font-medium text-white leading-[1.15] tracking-[-0.01em] mb-14">
				Career <span class="text-white/50">journey</span>
			</h2>
		</FadeIn>

		<div class="relative">
			<!-- Timeline line fades in -->
			<FadeIn direction="none" delay={200} duration={1200}>
				<div class="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-white/[.1] via-white/[.06] to-transparent hidden md:block"></div>
			</FadeIn>

			<div class="space-y-10">
				{#each experiences as exp, i}
					<FadeIn
						delay={200 + i * 150}
						direction="up"
						distance={55}
						scale={true}
						blur={true}
						duration={900}
					>
						<div class="relative md:pl-14 group">
							<!-- Animated dot -->
							<div class="absolute left-[11px] top-2 w-[9px] h-[9px] rounded-full bg-white/10 ring-2 ring-[#08090D]
								hidden md:block transition-all duration-500
								group-hover:bg-white/40 group-hover:scale-125 group-hover:ring-white/10"></div>

							<FadeIn delay={250 + i * 150} direction="left" distance={25} blur={false} duration={700}>
								<span class="inline-block text-[10px] font-semibold tracking-[.15em] uppercase text-white/25
									bg-white/[.03] border border-white/[.05] px-3 py-1 rounded-full mb-3
									group-hover:border-white/[.1] group-hover:text-white/40 transition-all duration-300">
									{exp.period}
								</span>
							</FadeIn>

							<h3 class="text-[17px] font-semibold text-white/90 mb-0.5
								group-hover:text-white transition-colors duration-300">{exp.role}</h3>
							<p class="text-[13px] text-white/35 font-medium mb-3
								group-hover:text-white/50 transition-colors duration-300">{exp.company}</p>
							<p class="text-[13px] text-white/30 leading-relaxed mb-3">{exp.description}</p>

							<div class="flex flex-wrap gap-1.5">
								{#each exp.tags as tag, ti}
									<FadeIn delay={300 + i * 150 + ti * 40} direction="up" distance={12} blur={false} duration={500}>
										<span class="px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase
											text-white/25 bg-white/[.02] border border-white/[.04] rounded
											group-hover:border-white/[.08] group-hover:text-white/35
											transition-all duration-300">
											{tag}
										</span>
									</FadeIn>
								{/each}
							</div>
						</div>
					</FadeIn>
				{/each}
			</div>
		</div>
	</div>
</section>
