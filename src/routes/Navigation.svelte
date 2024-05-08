<nav>
  <div class="container">
    <a href="/" class="home-link"><span><string class="home-link_firstname">celine</string>.ung</span></a>
  </div>
</nav>

<style lang="scss">
  nav {
    height: 50px;
    background-color: #383838;
    display: flex;
  }

  .container {
    padding-left: var(--container-padding);
    padding-right: var(--container-padding);
    max-width: var(--container-max-width);
    align-content: center;
  }

  .home-link {
    text-transform: uppercase;
    color: #737373;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    font-weight: 600;
    text-decoration: none;

    .home-link_firstname {
      color: #fff;
    }
  }
</style>