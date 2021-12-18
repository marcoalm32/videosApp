  /* eslint-disable @typescript-eslint/naming-convention */
export interface ImovieApi {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  origina_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  voteCount?: number;
  video?: boolean;
  vote_average?: number;
}

export interface IlistMovies {
  page: number;
  results: ImovieApi[];
  totalPages: number;
  totalResults: number;
}


