import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "add843ff6cmsh55a389ad20b57f7p1f28c4jsnccc32c6e442c",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/";
//const params = {
//  referenceCurrencyUuid: "yhjMzLPhuIDl",
//  timePeriod: "24h",
//  tiers: "1",
//  orderBy: "marketCap",
//  orderDirection: "desc",
//  limit: "50",
//  offset: "0",
//};

//var options = {
//  method: "GET",
//  url: "https://coinranking1.p.rapidapi.com",
//  params: {
//    referenceCurrencyUuid: "yhjMzLPhuIDl",
//    timePeriod: "24h",
//    tiers: "1",
//    orderBy: "marketCap",
//    orderDirection: "desc",
//    limit: "50",
//    offset: "0",
//  },
//  headers: {
//    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
//    "x-rapidapi-key": "ef72cb1fddmsh2af6bb98e2409a9p18bec2jsn0d0023bdb065",
//  },
//};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptopApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
