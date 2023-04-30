<header>
  <h1><a href="/" class="title">アスカライブチェッカー</a></h1>
  <nav class="links">
    <a href="/about">このサイトについて</a>
  </nav>
</header>

<style lang="scss">
  header {
    background-color: #6e9c8b;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h1 {
      font-size: 2rem;
      color: #fff;
      margin: 0;
      @media (max-width: 600) {
        font-size: 1.5rem;
      }
    }

    nav {
      display: flex;
      justify-content: center;
      gap: 2rem;
      @media (max-width: 600px) {
        display: none;
      }
      a {
        color: #fff;
        text-decoration: none;
        padding: 0.5rem 1rem;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 600px) {
    header {
      justify-content: center;
    }
  }
</style>
