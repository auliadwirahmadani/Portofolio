<script lang="ts">
	import { personalInfo, socials } from '#lib/data/portfolio';
	import FadeIn from './FadeIn.svelte';

	const iconPaths: Record<string, string> = {
		github: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
		linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
		twitter: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
		email: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
	};
</script>

<section id="contact" class="relative py-28 lg:py-36 bg-[#08090D] overflow-hidden">
	<div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[.06] to-transparent"></div>

	<!-- Strong center glow for drama -->
	<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-indigo-950/[.3] blur-[150px] pointer-events-none"></div>

	<div class="max-w-[800px] mx-auto px-6 sm:px-10 text-center relative">
		<FadeIn direction="up" distance={30} blur={true}>
			<p class="text-[11px] font-semibold tracking-[.22em] uppercase text-white/30 mb-3">Contact</p>
		</FadeIn>

		<FadeIn delay={120} direction="up" distance={70} scale={true} blur={true} duration={1000}>
			<h2 class="font-['Playfair_Display'] text-[2rem] sm:text-[2.6rem] font-medium text-white leading-[1.1] tracking-[-0.01em] mb-5">
				Let's work <span class="text-white/50 italic">together</span>
			</h2>
		</FadeIn>

		<FadeIn delay={240} direction="up" distance={40} blur={true} duration={800}>
			<p class="text-[14px] text-white/35 max-w-md mx-auto mb-10 leading-relaxed">
				Tertarik untuk berkolaborasi? Saya selalu terbuka untuk berdiskusi
				tentang project baru dan ide-ide kreatif.
			</p>
		</FadeIn>

		<FadeIn delay={360} direction="up" distance={40} scale={true} blur={true} duration={800}>
			<a href="mailto:{personalInfo.email}"
				class="inline-flex items-center gap-3 px-7 py-3 rounded-full
					bg-white text-[#08090D] text-[13px] font-semibold
					hover:bg-white/90 hover:scale-[1.05] active:scale-[0.98]
					transition-all duration-300 mb-10 shadow-[0_0_40px_rgba(255,255,255,0.08)]
					hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]">
				<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
				</svg>
				{personalInfo.email}
			</a>
		</FadeIn>

		<div class="flex items-center justify-center gap-4">
			{#each socials as social, si}
				<FadeIn delay={450 + si * 80} direction="up" distance={30} scale={true} blur={true} duration={700}>
					<a href={social.url} target="_blank" rel="noopener noreferrer"
						class="w-11 h-11 rounded-full border border-white/[.06] flex items-center justify-center
							text-white/30 hover:text-white/80 hover:border-white/[.2] hover:-translate-y-1
							hover:shadow-[0_4px_20px_rgba(255,255,255,0.08)]
							transition-all duration-300"
						aria-label={social.name}>
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
							<path d={iconPaths[social.icon] || ''}/>
						</svg>
					</a>
				</FadeIn>
			{/each}
		</div>
	</div>
</section>
