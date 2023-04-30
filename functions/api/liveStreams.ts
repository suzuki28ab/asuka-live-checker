interface Env {
  asuka: KVNamespace
}

export const onRequest: PagesFunction<Env> = async context => {
  // const cache = await context.env.asuka.get("live-streams");
  //   if (cache) {
  //     return new Response(cache, {
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //     });
  //   }
  //   return new Response("No cache", {
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   });

  return new Response(
    '{"twitch":{"streams":[{"id":"40268066887","user_id":"47906000","user_login":"rocksan3","user_name":"ロック_","game_id":"369625","game_name":"Fushigi no Dungeon: Fuurai no Shiren Gaiden - Onna Kenshi Asuka Kenzan!","type":"live","title":"【焼きなし裏白TA】店主いたわる週間","viewer_count":30,"started_at":"2023-04-29T12:57:57Z","language":"ja","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_rocksan3-{width}x{height}.jpg","tag_ids":[],"tags":["speed","日本語"],"is_mature":false},{"id":"40267324711","user_id":"56223633","user_login":"geche7takechan","user_name":"たけちやん","game_id":"369625","game_name":"Fushigi no Dungeon: Fuurai no Shiren Gaiden - Onna Kenshi Asuka Kenzan!","type":"live","title":"つこうたの偵察 5/3・5/4にあるらしい","viewer_count":17,"started_at":"2023-04-29T08:25:56Z","language":"ja","thumbnail_url":"https://static-cdn.jtvnw.net/previews-ttv/live_user_geche7takechan-{width}x{height}.jpg","tag_ids":[],"tags":["日本語"],"is_mature":false}],"isError":false},"youtube":{"streams":[{"thumbnail":"https://i.ytimg.com/vi/lEmbDHHHIoQ/hqdefault_live.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBVCC5r4eihwE27_4iC7UPXbRZtUg","title":"230429-風来のシレン外伝アスカ見参(ボス討伐後のストーリーから）[ニコ生同時]","channelName":"リアらいず","channelId":"UCnWb_PXpol7ULtyecbylk7Q","viewCount":"0"}],"isError":false}, "updatedAt": "2023年4月30日 17:42:58"}',
  )
}
