import Html5Icon from '$lib/assets/tech-stack/html5-color.svg';
import Css3Icon from '$lib/assets/tech-stack/css3-color.svg';
import JavaScriptIcon from '$lib/assets/tech-stack/javascript-color.svg';
import TypeScriptIcon from '$lib/assets/tech-stack/typescript-color.svg';
import AngularIcon from '$lib/assets/tech-stack/angular-color.svg';
import SvelteIcon from '$lib/assets/tech-stack/svelte-color.svg';
import GatsbyIcon from '$lib/assets/tech-stack/gatsby-color.svg';
import NodeJsIcon from '$lib/assets/tech-stack/nodedotjs-color.svg';
import PostgreSQLIcon from '$lib/assets/tech-stack/postgresql-color.svg';
import SassIcon from '$lib/assets/tech-stack/sass-color.svg';
import TailwindIcon from '$lib/assets/tech-stack/tailwindcss-color.svg';
import WebComponentsIcon from '$lib/assets/tech-stack/webcomponentsdotorg-color.svg';
import BunIcon from '$lib/assets/tech-stack/bun-color.svg';
import WebpackIcon from '$lib/assets/tech-stack/webpack-color.svg';
import ESBuildIcon from '$lib/assets/tech-stack/esbuild-color.svg';
import ViteIcon from '$lib/assets/tech-stack/vite-color.svg';
import BiomeIcon from '$lib/assets/tech-stack/biome-color.svg';
import ESLintIcon from '$lib/assets/tech-stack/eslint-color.svg';
import PrettierIcon from '$lib/assets/tech-stack/prettier-color.svg';
import VSCodeIcon from '$lib/assets/tech-stack/visualstudiocode-color.svg';
import GitIcon from '$lib/assets/tech-stack/git-color.svg';
import GitHubIcon from '$lib/assets/tech-stack/github-color.svg';
import BitBucketIcon from '$lib/assets/tech-stack/bitbucket-color.svg';
import DockerIcon from '$lib/assets/tech-stack/docker-color.svg';
import AWSIcon from '$lib/assets/tech-stack/amazonwebservices-color.svg';
import RenderIcon from '$lib/assets/tech-stack/render-color.svg';
import GoogleCloudIcon from '$lib/assets/tech-stack/googlecloud-color.svg';
import FirebaseIcon from '$lib/assets/tech-stack/firebase-color.svg';
import BrevoIcon from '$lib/assets/tech-stack/brevo-color.svg';

import type { TechStackItem } from '$lib/models/tech-stack-item';

export const techStackList = [
  {
    name: 'HTML 5',
    image: Html5Icon
  },
  {
    name: 'CSS 3',
    image: Css3Icon
  },
  {
    name: 'JavaScript',
    image: JavaScriptIcon
  },
  {
    name: 'TypeScript',
    image: TypeScriptIcon
  },
  {
    name: 'Angular',
    image: AngularIcon
  },
  {
    name: 'Svelte',
    image: SvelteIcon
  },
  {
    name: 'Gatsby',
    image: GatsbyIcon
  },
  {
    name: 'NodeJS',
    image: NodeJsIcon
  },
  {
    name: 'PostgreSQL',
    image: PostgreSQLIcon
  },
  {
    name: 'Sass',
    image: SassIcon
  },
  {
    name: 'Tailwind CSS',
    image: TailwindIcon
  },
  {
    name: 'Web Components',
    image: WebComponentsIcon
  },
  {
    name: 'Bun',
    image: BunIcon
  },
  {
    name: 'Webpack',
    image: WebpackIcon
  },
  {
    name: 'ESBuild',
    image: ESBuildIcon
  },
  {
    name: 'Vite',
    image: ViteIcon
  },
  {
    name: 'Biome',
    image: BiomeIcon
  },
  {
    name: 'ESLint',
    image: ESLintIcon
  },
  {
    name: 'Prettier',
    image: PrettierIcon
  },
  {
    name: 'VSCode',
    image: VSCodeIcon
  },
  {
    name: 'Git',
    image: GitIcon
  },
  {
    name: 'GitHub',
    image: GitHubIcon
  },
  {
    name: 'BitBucket',
    image: BitBucketIcon
  },
  {
    name: 'Docker',
    image: DockerIcon
  },
  {
    name: 'AWS',
    image: AWSIcon
  },
  {
    name: 'Google Cloud',
    image: GoogleCloudIcon
  },
  {
    name: 'Firebase',
    image: FirebaseIcon
  },
  {
    name: 'Render',
    image: RenderIcon
  },
  {
    name: 'Brevo',
    image: BrevoIcon
  },
] as const;

export type TechName = (typeof techStackList)[number]['name'];

export const getTechStackItems = (nameList: TechName[]): TechStackItem[] => {
  return techStackList.filter(i => nameList.includes(i.name));
}
