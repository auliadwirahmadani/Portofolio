<script lang="ts">
	import { onMount } from 'svelte';
	import awik1 from '#lib/assets/awik.png';
	import awik2 from '#lib/assets/awik-2.png';
	import awik3 from '#lib/assets/awik-3.png';
	import { personalInfo } from '#lib/data/portfolio';

	let { visible = false }: { visible?: boolean } = $props();

	const photos = [
		{ src: awik1, sizeClass: 'h-[78%]' },
		{ src: awik2, sizeClass: 'h-[76%]' },
		{ src: awik3, sizeClass: 'h-[78%]' },
	];

	let activeIndex = $state(0);

	onMount(() => {
		const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (rm) return;

		const interval = setInterval(() => {
			activeIndex = (activeIndex + 1) % photos.length;
		}, 4000);

		return () => clearInterval(interval);
	});
</script>

<div
	class="portrait-wrapper pointer-events-none select-none
		transition-all duration-[1.3s] ease-[cubic-bezier(.16,1,.3,1)]
		{visible
			? 'opacity-100 translate-y-0 scale-100 blur-0'
			: 'opacity-0 translate-y-12 scale-[0.92] blur-[8px]'}"
>
	<!-- Soft ambient backlight behind portrait so subject stands out clearly -->
	<div class="portrait-glow" aria-hidden="true"></div>

	<!-- Floating animation container -->
	<div class="portrait-float relative w-full h-full flex items-end justify-center">
		{#each photos as photo, i}
			<img
				src={photo.src}
				alt={`${personalInfo.name} ${i + 1}`}
				class="portrait-img absolute bottom-0 left-1/2 w-auto max-w-[92vw] object-contain object-bottom {photo.sizeClass}
					{i === activeIndex ? 'is-active' : 'is-inactive'}"
				draggable="false"
			/>
		{/each}
	</div>
</div>

<style>
	.portrait-wrapper {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 20;
		width: 460px;
		height: 68svh;
		min-height: 440px;
		max-height: 820px;
	}

	@media (min-width: 640px) {
		.portrait-wrapper {
			width: 560px;
			height: 76svh;
		}
	}

	@media (min-width: 1024px) {
		.portrait-wrapper {
			left: 54%;
			width: 660px;
			height: 86svh;
		}
	}

	.portrait-glow {
		position: absolute;
		bottom: 8%;
		left: 50%;
		transform: translateX(-50%);
		width: 95%;
		height: 75%;
		border-radius: 9999px;
		background: radial-gradient(
			circle at 50% 42%,
			rgba(148, 163, 224, 0.22) 0%,
			rgba(99, 102, 241, 0.1) 40%,
			rgba(8, 9, 13, 0) 72%
		);
		filter: blur(42px);
		pointer-events: none;
		animation: pulseGlow 6s ease-in-out infinite;
	}

	.portrait-float {
		animation: floatPortrait 5.5s ease-in-out infinite;
		will-change: transform;
	}

	.portrait-img {
		transition:
			opacity 900ms cubic-bezier(0.16, 1, 0.3, 1),
			transform 900ms cubic-bezier(0.16, 1, 0.3, 1),
			filter 900ms cubic-bezier(0.16, 1, 0.3, 1);
		will-change: opacity, transform, filter;
	}

	.portrait-img.is-active {
		opacity: 1;
		transform: translateX(-50%) translateY(0) scale(1);
		filter: brightness(1.06) contrast(1.05) saturate(1.04)
		        drop-shadow(0 16px 48px rgba(0, 0, 0, 0.65));
	}

	.portrait-img.is-inactive {
		opacity: 0;
		transform: translateX(-50%) translateY(18px) scale(0.95);
		filter: blur(6px) brightness(1.06) contrast(1.05) saturate(1.04)
		        drop-shadow(0 16px 48px rgba(0, 0, 0, 0.65));
	}

	@keyframes floatPortrait {
		0%, 100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	@keyframes pulseGlow {
		0%, 100% {
			opacity: 0.75;
			transform: translateX(-50%) scale(1);
		}
		50% {
			opacity: 1;
			transform: translateX(-50%) scale(1.06);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.portrait-float,
		.portrait-glow {
			animation: none;
		}
		.portrait-img {
			transition: none;
		}
	}
</style>
