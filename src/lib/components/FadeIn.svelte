<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		delay = 0,
		direction = 'up',
		distance = 52,
		duration = 900,
		blur = true,
		scale = false,
		once = false,
		threshold = 0.08,
		children,
	}: {
		delay?: number;
		direction?: 'up' | 'down' | 'left' | 'right' | 'none';
		distance?: number;
		duration?: number;
		blur?: boolean;
		scale?: boolean;
		once?: boolean;
		threshold?: number;
		children: Snippet;
	} = $props();

	let visible = $state(false);
	let element: HTMLDivElement | undefined = $state();

	const getTranslate = (dir: string, dist: number) => {
		if (dir === 'up')    return `translateY(${dist}px)`;
		if (dir === 'down')  return `translateY(-${dist}px)`;
		if (dir === 'left')  return `translateX(${dist}px)`;
		if (dir === 'right') return `translateX(-${dist}px)`;
		return 'translate(0)';
	};

	const hiddenStyle = () => {
		const parts: string[] = [];
		parts.push(`opacity:0`);
		parts.push(`transform:${getTranslate(direction, distance)}${scale ? ' scale(0.94)' : ''}`);
		if (blur) parts.push(`filter:blur(6px)`);
		return parts.join(';');
	};

	const visibleStyle = () => {
		const parts: string[] = [];
		parts.push(`opacity:1`);
		parts.push(`transform:translate(0)${scale ? ' scale(1)' : ''}`);
		if (blur) parts.push(`filter:blur(0px)`);
		return parts.join(';');
	};

	$effect(() => {
		if (!element) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => (visible = true), delay);
					if (once) observer.unobserve(entry.target);
				} else if (!once) {
					visible = false;
				}
			},
			{ threshold, rootMargin: '0px 0px -60px 0px' }
		);
		observer.observe(element);
		return () => observer.disconnect();
	});
</script>

<div
	bind:this={element}
	class="will-change-transform"
	style="transition:opacity {duration}ms cubic-bezier(.16,1,.3,1) {delay}ms,
	       transform {duration}ms cubic-bezier(.16,1,.3,1) {delay}ms,
	       filter {duration}ms cubic-bezier(.16,1,.3,1) {delay}ms;
	       {visible ? visibleStyle() : hiddenStyle()}"
>
	{@render children()}
</div>
