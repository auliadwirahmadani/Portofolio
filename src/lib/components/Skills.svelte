<script lang="ts">
	import { skills } from '#lib/data/portfolio';
	import FadeIn from './FadeIn.svelte';

	const categories = [
		{ key: 'frontend' as const, label: 'Frontend' },
		{ key: 'backend' as const, label: 'Backend' },
		{ key: 'tools' as const, label: 'Tools' },
		{ key: 'other' as const, label: 'Lainnya' },
	];
</script>

<section id="skills" class="py-24 lg:py-32 bg-[#0e0e10]">
	<div class="max-w-6xl mx-auto px-6">
		<FadeIn>
			<div class="flex items-center gap-3 mb-4">
				<div class="h-px w-12 bg-indigo-500"></div>
				<span class="text-indigo-400 font-medium text-sm tracking-widest uppercase">Skills</span>
			</div>
		</FadeIn>

		<FadeIn delay={100}>
			<h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
				Tech Stack & Skills
			</h2>
			<p class="text-white/40 max-w-xl mb-14">
				Teknologi dan tools yang saya gunakan untuk membangun aplikasi web modern.
			</p>
		</FadeIn>

		<div class="space-y-12">
			{#each categories as cat, i}
				{@const catSkills = skills.filter((s) => s.category === cat.key)}
				{#if catSkills.length > 0}
					<FadeIn delay={150 + i * 100}>
						<div>
							<h3 class="text-sm font-semibold text-white/30 uppercase tracking-wider mb-5">{cat.label}</h3>
							<div class="flex flex-wrap gap-3">
								{#each catSkills as skill}
									<div
										class="group flex items-center gap-2.5 px-4 py-2.5 bg-[#161618] rounded-xl border border-white/[.06]
											hover:border-indigo-500/30 hover:bg-[#1a1a1e] hover:-translate-y-0.5
											transition-all duration-300 cursor-default"
									>
										<span class="text-lg group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
										<span class="text-sm font-medium text-white/70">{skill.name}</span>
									</div>
								{/each}
							</div>
						</div>
					</FadeIn>
				{/if}
			{/each}
		</div>
	</div>
</section>
