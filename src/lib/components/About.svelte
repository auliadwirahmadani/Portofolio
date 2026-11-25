<script lang="ts">
	import { personalInfo, skills } from '#lib/data/portfolio';
	import FadeIn from './FadeIn.svelte';
	import SkillIcon from './SkillIcon.svelte';

	const categories = [
		{ key: 'frontend' as const, label: 'Web & Frontend' },
		{ key: 'backend' as const, label: 'Backend & Database' },
		{ key: 'tools' as const, label: 'Tools' },
		{ key: 'other' as const, label: 'Other' },
	];
</script>

<section id="about" class="relative py-28 lg:py-36 bg-[#08090D] overflow-hidden">
	<!-- Subtle separator -->
	<div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[.06] to-transparent"></div>

	<!-- Background glow that parallaxes subtly -->
	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-indigo-900/[.07] blur-[120px]"></div>
	</div>

	<div class="max-w-[1100px] mx-auto px-6 sm:px-10 relative">
		<FadeIn direction="left" distance={40} blur={true}>
			<p class="text-[11px] font-semibold tracking-[.22em] uppercase text-white/30 mb-3">About</p>
		</FadeIn>

		<div class="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
			<div>
				<FadeIn delay={100} direction="up" distance={60} scale={true} blur={true}>
					<h2 class="font-['Playfair_Display'] text-[2rem] sm:text-[2.4rem] font-medium text-white leading-[1.15] tracking-[-0.01em] mb-7">
						Membangun solusi web<br class="hidden sm:block"/>
						<span class="text-white/50">yang berdampak nyata</span>
					</h2>
				</FadeIn>

				<FadeIn delay={200} direction="up" distance={40} blur={true}>
					<p class="text-[14px] leading-[1.75] text-white/40 mb-6">
						Mahasiswa Informatika Universitas Bengkulu yang berfokus pada
						pengembangan web full-stack dan WebGIS. Bersertifikat
						Full-Stack Web Developer dari Dicoding (Coding Camp 2026 powered by DBS Foundation).
					</p>
				</FadeIn>

				<FadeIn delay={300} direction="up" distance={40} blur={true}>
					<p class="text-[14px] leading-[1.75] text-white/40">
						Berpengalaman membangun geoportal tingkat provinsi saat magang di
						Diskominfotik Bengkulu, aktif sebagai asisten laboratorium, dan
						terbiasa bekerja dalam tim untuk menghadirkan produk digital
						yang efisien dan berkelanjutan.
					</p>
				</FadeIn>
			</div>

			<!-- Skills -->
			<div>
				{#each categories as cat, ci}
					{@const catSkills = skills.filter((s) => s.category === cat.key)}
					{#if catSkills.length > 0}
						<FadeIn delay={150 + ci * 120} direction="right" distance={50} blur={true}>
							<div class="mb-8">
								<h3 class="text-[10px] font-semibold tracking-[.2em] uppercase text-white/20 mb-3">{cat.label}</h3>
								<div class="flex flex-wrap gap-2">
									{#each catSkills as skill, si}
										<FadeIn delay={200 + ci * 120 + si * 40} direction="up" distance={20} blur={false} duration={600}>
											<span class="group inline-flex items-center gap-2 px-3 py-1.5
												text-[12px] font-medium text-white/55
												bg-white/[.03] border border-white/[.06] rounded-lg
												hover:border-white/[.18] hover:text-white/90 hover:bg-white/[.06]
												hover:-translate-y-0.5
												transition-all duration-300 cursor-default">
												<span class="text-white/45 group-hover:text-white/80">
													<SkillIcon name={skill.icon} />
												</span>
												{skill.name}
											</span>
										</FadeIn>
									{/each}
								</div>
							</div>
						</FadeIn>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>
