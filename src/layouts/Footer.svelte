<footer>
  <nav>
    <a href="/about">このサイトについて</a>
  </nav>
</footer>

<style lang="scss">
  footer {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    background-color: #176432;

    @media (min-width: 600px) {
      display: none;
    }

    nav a {
      text-decoration: none;
      margin-left: 1rem;
      color: #fff;
    }

    nav a:hover {
      color: #777;
    }
  }
</style>
