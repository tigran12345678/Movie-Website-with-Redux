import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "3e2bc978b19b61c296bbfd833ff9ecd5";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
    }),
    endpoints: (builder) => {
        return {
            drawPopularMovies: builder.query<{results: any[]; page: number; totalPages: number}, number> ({
                query: (page = 1) => `movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
            }),
           lookForMovie: builder.query<{results: any[]; page: number; total_pages: number}, {query: string, page?: number}>({
  query: ({query, page = 1}) => `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
}),
        }
    }
})


export const {useDrawPopularMoviesQuery, useLookForMovieQuery,} = apiSlice;