export type TAnimeCardInList = {
    mal_id: number;
    title: string;
    score: number;
    scored_by: number;
    rating: string;
    images: {
      jpg: {
        large_image_url: string;
      };
    };
    popularity: number;
    favorites: number;
    episodes: number;
    aired: { from: string; to: string };
    type: string;
    status: string;
    genres: {
      some(arg0: (animeGenre: { name: string; }) => boolean): unknown;
      name: string;
    };
    producers: {
      some(arg0: (animeProducer: { name: string; }) => boolean): unknown;
      name: string;
    }
  };