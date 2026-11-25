<script lang="ts">
	import { personalInfo } from '#lib/data/portfolio';
</script>

<footer class="py-8 border-t border-white/[.04] bg-[#06070a]">
	<div class="max-w-[1100px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
		<p class="text-[11px] text-white/20 tracking-wide">
			© {new Date().getFullYear()} {personalInfo.name}. Built with SvelteKit.
		</p>
		<a href="#hero"
			class="text-[11px] text-white/20 hover:text-white/50 transition-colors flex items-center gap-1 tracking-wide">
			<svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
			</svg>
			Back to top
		</a>
	</div>
</footer>
