<script lang="ts">
	import { _ } from 'svelte-i18n';
	import ProjectElement from './ProjectElement.svelte';
	import AycandooImg from '$lib/assets/projects/aycandoo.png';
	import FindYourPCImg from '$lib/assets/projects/findyourpc.png';
	import { getTechStackItems } from '../tech-stack/tech-stack-list';

	const aycandooTechStack = getTechStackItems([
		'Gatsby',
		'Tailwind CSS',
		'Prettier',
		'ESLint',
    'NodeJS',
		'Render',
		'Brevo'
	]);
	const findYourPCTechStack = getTechStackItems([
		'Angular',
		'Tailwind CSS',
		'Biome',
    'NodeJS',
		'Firebase',
		'Google Cloud',
		'Render'
	]);
</script>

<section id="projects" class="flex flex-col items-center m-auto pb-32 px-12 max-w-7xl">
	<h2 class="mt-1 mb-12 mx-0 text-2xl font-semibold">{$_('projects.title')}</h2>
	<div class="flex flex-col gap-12 lg:flex-row lg:gap-32">
		<ProjectElement
			title={$_('projects.aycandoo.title')}
			image={AycandooImg}
			techStackList={aycandooTechStack}
			url="https://aycandoo.fr"
		>
			{$_('projects.aycandoo.description')}
		</ProjectElement>
		<ProjectElement
			title={$_('projects.findyourpc.title')}
			image={FindYourPCImg}
			techStackList={findYourPCTechStack}
			url="https://beta.findyourpc.fr"
		>
			{$_('projects.findyourpc.description')}
		</ProjectElement>
	</div>
</section>
