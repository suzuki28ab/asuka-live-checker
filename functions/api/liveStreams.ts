interface Env {
  asuka: KVNamespace
}

export const onRequest: PagesFunction<Env> = async context => {
  const cache = await context.env.asuka.get("live-streams");
    if (cache) {
      return new Response(cache, {
        headers: {
          "content-type": "application/json",
        },
      });
    }
    return new Response("No cache", {
      headers: {
        "content-type": "application/json",
      },
    });
}
