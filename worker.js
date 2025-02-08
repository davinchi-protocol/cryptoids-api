export default {
  async fetch(request) {
    const cacheUrl = new URL(request.url);
    const queries = cacheUrl.searchParams;
    const q = queries.get("q"); //'totalcoins' or 'circulating'
    const STATIC_SUPPLY = "100000000";

    switch (q) {
      case "maxcoins": {
        return new Response(STATIC_SUPPLY, {
          status: 200,
        });
      }
      case "totalcoins": {
        return new Response(STATIC_SUPPLY, {
          status: 200,
        });
      }
      case "circulating": {
        return new Response(STATIC_SUPPLY, {
          status: 200,
        });
      }
      default: {
        return new Response(
          JSON.stringify({
            contract: null,
            symbol: "DCoin",
            supply: STATIC_SUPPLY,
          })
        );
      }
    }
  },
};
