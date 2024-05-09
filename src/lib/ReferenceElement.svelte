<script lang="ts">
  import ZenikaImg from "$lib/assets/work-references/zenika.svg";
  import CisionImg from "$lib/assets/work-references/cision.svg";
  import BnpImg from "$lib/assets/work-references/bnpparibas.png";
  import JcdecauxImg from "$lib/assets/work-references/jcdecaux.svg";
  import PixImg from "$lib/assets/work-references/pix.svg";
  import InvivoImg from "$lib/assets/work-references/invivo.png";
  import ImmersionFaciliteeImg from "$lib/assets/work-references/immersion-facilitee.svg";
  import GithubIcon from "$lib/assets/social-media-icons/github.svg";

  type ReferenceName = "zenika" | "cision" | "bnpparibas" | "jcdecaux" | "pix" | "invivo" | "immersion-facilitee";
  export let name: ReferenceName;

  const referenceData: Record<ReferenceName, { img: string, github: string | undefined, website: string | undefined }> = {
    zenika: {
      img: ZenikaImg,
      github: undefined,
      website: undefined,
    },
    cision: {
      img: CisionImg,
      github: undefined,
      website: "https://luqi.fr/",
    },
    bnpparibas: {
      img: BnpImg,
      github: undefined,
      website: undefined,
    },
    jcdecaux: {
      img: JcdecauxImg,
      github: undefined,
      website: undefined,
    },
    pix: {
      img: PixImg,
      github: "https://github.com/1024pix/pix",
      website: "https://pix.fr/",
    },
    invivo: {
      img: InvivoImg,
      website: "https://www.aladin.farm/",
      github: undefined,
    },
    "immersion-facilitee": {
      img: ImmersionFaciliteeImg,
      github: "https://github.com/gip-inclusion/immersion-facile",
      website: "https://immersion-facile.beta.gouv.fr/",
    }
  }
</script>

<div class="work-reference">
  <img class="logo" src={referenceData[name].img} alt="Logo de {name}">
  <div class="links">
    {#if referenceData[name].website}
      <a class="icon" href={referenceData[name].website} target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="1 1 21 21" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" role="img" aria-label="Site auquel Céline a participé">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      </a>
    {/if}
    {#if referenceData[name].github}
      <a class="icon" href={referenceData[name].github} target="_blank" rel="noopener noreferrer"><img src={GithubIcon} alt="Repository Github de {name}"></a>
    {/if}
  </div>
</div>


<style lang="scss">
  .work-reference {
    width: 50%;
    height: 150px;
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 768px) {
      width: 33%;
    }

    .logo {
      height: 2.5rem;
      margin-bottom: 8px;
    }

    .links {
      display: flex;
    }
  }


  .icon {
    margin: 0 4px;
    width: 1.3rem;
    color: var(--secondary-color);

    &:hover {
      text-decoration: underline;
      filter: grayscale(0.7);
    }
  }
</style>
