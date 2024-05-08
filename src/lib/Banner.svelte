<script>
  import LinkedInIcon from "$lib/assets/social-media-icons/linkedin.svg"
  import GithubIcon from "$lib/assets/social-media-icons/github.svg"
</script>

<section>
  <div class="container">
    <div>Hello, je suis</div>
    <h1>Céline Ung</h1>
    <h2>Développeuse web fullstack</h2>
    <p class="description">
      Consultante web fullstack depuis 2015, j’accompagne mes clients dans la réalisation de leurs projets web. J'ai récemment rejoint
      <a href="https://aycandoo.fr/" target="_blank" rel="noopener noreferrer">AYCANDO</a>.
    </p>
    <p class="social-medias">
      <a href="https://www.linkedin.com/in/celine-ung" target="_blank" rel="noopener noreferrer"><img src={LinkedInIcon} alt="Profile LinkedIn de Céline"></a>
      <a href="https://github.com/celineung" target="_blank" rel="noopener noreferrer"><img src={GithubIcon} alt="Profile Github de Céline"></a>
      <a href="mailto:celine.ung.pro@gmail.com?subject=Prise de contact">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 2 21 20" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" role="img" aria-label="Prise de contact par mail">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
      </a>
    </p>
  </div>
</section>

<style lang="scss">
  section {
    background-color: var(--primary-color);
    color: #fff;
    margin: auto;
  }

  .container {
    margin: auto;
    padding: 7rem var(--container-padding);
    max-width: var(--container-max-width);
    display: flex;
    align-items: center;
    flex-direction: column;

    span {
      font-size: 0.9rem;
      font-weight: 300;
      letter-spacing: 0.03rem;
      color: #b9b9b9;
    }

    h1 {
      margin: 3px 0;
      color: var(--secondary-color);
      font-size: 1.3rem;
    }

    h2 {
      margin: 32px 0;
      font-size: 2rem;
      text-align: center;
    }

    .description {
      text-align: center;
      line-height: 1.5rem;
    }

    p.social-medias {
      display: flex;
      padding-top: 16px;

      a {
        margin: 0 4px;
        width: 1.3rem;
      }
    }
  }

  a {
    text-decoration: none;
    color: var(--secondary-color);

    &:hover {
      text-decoration: underline;
      filter: grayscale(0.7);
    }
  }
</style>