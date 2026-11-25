<script lang="ts">
	let { name }: { name: string } = $props();
</script>

{#if name === 'js'}
	<!-- JavaScript -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
		<path d="M3 3h18v18H3V3zm11.2 13.7c.4.8 1.1 1.4 2.3 1.4 1.3 0 2.1-.7 2.1-1.7 0-1-.7-1.4-1.8-1.9l-.6-.3c-.8-.3-1.1-.6-1.1-1 0-.4.3-.7.8-.7.5 0 .8.2 1 .7l1.2-.8c-.5-.8-1.2-1.2-2.2-1.2-1.3 0-2.1.8-2.1 1.8 0 1 .6 1.5 1.7 1.9l.6.3c.8.3 1.2.6 1.2 1.1 0 .5-.4.8-1 .8-.7 0-1.1-.3-1.4-.9l-1.3.5zm-4.9.1c.4.8 1.1 1.3 2.1 1.3 1.2 0 2-.6 2-2V10h-1.5v6c0 .6-.2.9-.7.9-.4 0-.6-.2-.8-.6l-1.1.5z"/>
	</svg>
{:else if name === 'react'}
	<!-- React -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
		<circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>
		<ellipse cx="12" cy="12" rx="10" ry="4"/>
		<ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
		<ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
	</svg>
{:else if name === 'laravel'}
	<!-- Laravel -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true">
		<path d="M3 6l4-2 4 2v8l4-2 4 2v5l-8 3-8-3V6z"/>
		<path d="M7 4v9l4 2"/>
		<path d="M11 15l8-3"/>
	</svg>
{:else if name === 'leaflet'}
	<!-- WebGIS / Map Pin -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<path d="M12 21s-6-5.3-6-10a6 6 0 1112 0c0 4.7-6 10-6 10z"/>
		<circle cx="12" cy="11" r="2.2"/>
	</svg>
{:else if name === 'api'}
	<!-- REST API -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<path d="M8 7l-5 5 5 5"/>
		<path d="M16 7l5 5-5 5"/>
		<path d="M14 4l-4 16"/>
	</svg>
{:else if name === 'php'}
	<!-- PHP -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<ellipse cx="12" cy="12" rx="10" ry="6"/>
		<path d="M6.5 14v-4h1.8a1.2 1.2 0 010 2.4H6.5"/>
		<path d="M11 10v4m0-2h2.2v2"/>
		<path d="M15.5 14v-4h1.8a1.2 1.2 0 010 2.4h-1.8"/>
	</svg>
{:else if name === 'python'}
	<!-- Python -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<path d="M12 3c-3.3 0-3.5 1.4-3.5 3v2h7v1.2H6.5C4.5 9.2 3 10.7 3 13c0 2.3 1.5 3.8 3.5 3.8H8v-2.2c0-1.6 1.3-2.9 2.9-2.9h4.6c1.4 0 2.5-1.1 2.5-2.5V6c0-1.6-1.2-3-6-3z"/>
		<path d="M12 21c3.3 0 3.5-1.4 3.5-3v-2h-7v-1.2h9c2 0 3.5-1.5 3.5-3.8 0-2.3-1.5-3.8-3.5-3.8H16v2.2c0 1.6-1.3 2.9-2.9 2.9H8.5C7.1 12.3 6 13.4 6 14.8V18c0 1.6 1.2 3 6 3z"/>
		<circle cx="9.8" cy="5.8" r="0.7" fill="currentColor" stroke="none"/>
		<circle cx="14.2" cy="18.2" r="0.7" fill="currentColor" stroke="none"/>
	</svg>
{:else if name === 'nodejs'}
	<!-- Node.js -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true">
		<path d="M12 2.5l8.5 4.9v9.2L12 21.5l-8.5-4.9V7.4L12 2.5z"/>
		<path d="M9.5 14.5v-5l5 5v-5" stroke-linecap="round"/>
	</svg>
{:else if name === 'fastapi'}
	<!-- FastAPI -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<circle cx="12" cy="12" r="9.5"/>
		<path d="M13 6.5l-4.5 6.5h4l-1.5 4.5 4.5-6.5h-4l1.5-4.5z" fill="currentColor" stroke="none"/>
	</svg>
{:else if name === 'postgresql' || name === 'mysql'}
	<!-- Database -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<ellipse cx="12" cy="5.5" rx="7.5" ry="3"/>
		<path d="M4.5 5.5v13c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-13"/>
		<path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3"/>
	</svg>
{:else if name === 'cpp'}
	<!-- C/C++ -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<rect x="3" y="4" width="18" height="16" rx="2.5"/>
		<path d="M7.5 9.5l2.5 2.5-2.5 2.5"/>
		<path d="M12.5 14.5h4"/>
	</svg>
{:else if name === 'java'}
	<!-- Java -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<path d="M6 11h10v4.5a4.5 4.5 0 01-4.5 4.5h-1A4.5 4.5 0 016 15.5V11z"/>
		<path d="M16 12h2a2 2 0 010 4h-2"/>
		<path d="M9 5c0 1.5 1.5 1.5 1.5 3"/>
		<path d="M13 4c0 1.5 1.5 1.5 1.5 3"/>
	</svg>
{:else if name === 'git'}
	<!-- Git & GitHub -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<circle cx="6" cy="6" r="2.2"/>
		<circle cx="18" cy="8" r="2.2"/>
		<circle cx="6" cy="18" r="2.2"/>
		<path d="M6 8.2v7.6"/>
		<path d="M18 10.2c0 3.5-4 4.8-12 4.8"/>
	</svg>
{:else if name === 'figma'}
	<!-- Figma -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<path d="M9 3h3v6H9a3 3 0 010-6z"/>
		<path d="M12 3h3a3 3 0 010 6h-3V3z"/>
		<path d="M9 9h3v6H9a3 3 0 010-6z"/>
		<circle cx="15" cy="12" r="3"/>
		<path d="M9 15h3v3a3 3 0 11-3-3z"/>
	</svg>
{:else if name === 'vscode'}
	<!-- VS Code -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true">
		<path d="M17 3l4 2v14l-4 2-9-8-4 3-2-1.5L6.5 12 2 9.5 4 8l4 3 9-8z"/>
		<path d="M17 3v18"/>
	</svg>
{:else if name === 'postman'}
	<!-- Postman -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<path d="M21 3L10 14"/>
		<path d="M21 3l-6.5 18-3.8-7.2L3.5 10 21 3z"/>
	</svg>
{:else if name === 'laragon'}
	<!-- Laragon / Local Server -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<rect x="3" y="4" width="18" height="6" rx="1.5"/>
		<rect x="3" y="14" width="18" height="6" rx="1.5"/>
		<circle cx="7" cy="7" r="0.8" fill="currentColor" stroke="none"/>
		<circle cx="7" cy="17" r="0.8" fill="currentColor" stroke="none"/>
	</svg>
{:else}
	<!-- Fallback -->
	<svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
		<circle cx="12" cy="12" r="3"/>
	</svg>
{/if}
