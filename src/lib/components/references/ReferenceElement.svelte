<script lang="ts">
import { _ } from 'svelte-i18n';
import ColonnaFacilityImg from '$lib/assets/work-references/colonna-facility.png';
import EnergyOneImg from '$lib/assets/work-references/energy-one.svg';
import LexisNexisImg from '$lib/assets/work-references/lexisnexis.svg';
import MinistereEducationNationaleImg from '$lib/assets/work-references/ministere-education-nationale-jeunesse.svg';
import ProximyImg from '$lib/assets/work-references/proximy.png';
import SedeVeoliaImg from '$lib/assets/work-references/sede-veolia.png';
import SGImg from '$lib/assets/work-references/sg.svg';
import VoluntisImg from '$lib/assets/work-references/voluntis.svg';
import OutboundLink from '../OutboundLink.svelte';

type ReferenceName =
  | 'energy-one'
  | 'colonna-facility'
  | 'lexisnexis'
  | 'ministere-education-nationale-jeunesse'
  | 'proximy'
  | 'sede-veolia'
  | 'sg'
  | 'voluntis';
export let name: ReferenceName;

const referenceData: Record<ReferenceName, { img: string; website: string | undefined; darkBackground?: boolean }> = {
  'energy-one': {
    img: EnergyOneImg,
    website: 'https://www.energyone.com/',
    darkBackground: true
  },
  'colonna-facility': {
    img: ColonnaFacilityImg,
    website: 'https://play.google.com/store/apps/details?id=fr.cofacility.assure&hl=fr'
  },
  lexisnexis: {
    img: LexisNexisImg,
    website:
      'https://www.lexisnexis.com/fr-fr/produits/solution-recherche-juridique-lexis-360-intelligence'
  },
  'ministere-education-nationale-jeunesse': {
    img: MinistereEducationNationaleImg,
    website: 'https://www.education.gouv.fr/'
  },
  proximy: {
    img: ProximyImg,
    website: 'https://www.proximy.fr'
  },
  'sede-veolia': {
    img: SedeVeoliaImg,
    website: 'https://www.sede.veolia.com/fr'
  },
  sg: {
    img: SGImg,
    website: 'https://info.sgmarkets.com/fr'
  },
  voluntis: {
    img: VoluntisImg,
    website: 'https://www.voluntis.com'
  }
};
</script>

<div
	class="flex flex-col items-center justify-items-center w-full h-28 md:h-36 md:w-1/2 lg:w-1/3 transform duration-300 hover:scale-110"
>
	<OutboundLink
		href={referenceData[name].website!}
		id="{name}-website"
		class="transform duration-300 focus-visible:scale-110"
		label={$_('actions.goTo') + name}
	>
		<img class="h-11 mb-2 {referenceData[name].darkBackground ? 'bg-gray-800 rounded p-2' : ''}" src={referenceData[name].img} alt="" />
	</OutboundLink>
</div>
