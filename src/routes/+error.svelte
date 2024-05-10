<script lang="ts">
  import { page } from '$app/stores';
</script>

<section>
  {#if $page.status === 404}
    <h1>La page demandée n'existe pas</h1>
    <p>L'url saisie est-elle correcte ?</p>
  {:else if $page.error}
    <p>{$page.status} {$page.error.message}</p>
  {:else}
    <p>{$page.status}</p>
    <p>Une erreur est survenue.</p>
  {/if}
  <a href="/">Retourner sur la page d'accueil</a>
</section>

<style lang="scss">
  section {
    text-align: center;

    a {
      text-decoration: none;
      color: var(--secondary-color);

      &:hover {
        text-decoration: underline;
        filter: grayscale(0.7);
      }
    }
  }
</style>