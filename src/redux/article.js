import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = '16d22dc850msh4b7e2b844903a2fp156533jsn84f05e4db3bc'
//const rapidApiKey = import.meta.env.VITE_API_KEY

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
              query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=${params.length}`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi