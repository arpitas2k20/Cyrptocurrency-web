import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoExchangesHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-key": "960b487d39msh3c50552057689f9p1b45dejsn1fd21a94371b",
  "x-rapidapi-host": "crypto-exchanges1.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: cryptoExchangesHeaders });

export const cryptoExchangesApi = createApi({
  reducerPath: "cryptoExchangesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://crypto-exchanges1.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getCryptoExchanges: builder.query({
      query: ({ exchangesCategory, count }) =>
        createRequest(
          `/news/search?q=${exchangesCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoExchangesQuery } = cryptoExchangesApi;
