import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, Product } from '../../types/type';

// Define the API
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://level-2-assignment-4-backend.vercel.app/api/v1/products' }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query<ApiResponse<Product[]>, { search?: string, sort?: string, minPrice?: number, maxPrice?: number  }>({
      query: ({ search = '', sort = '' } = {}) => `/get-all-products?search=${search}&sort=${sort}`,
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ _id }) => ({ type: 'Product' as const, id: _id })),
              { type: 'Product' as const, id: 'LIST' },
            ]
          : [{ type: 'Product' as const, id: 'LIST' }],
    }),

    
    getProduct: builder.query<ApiResponse<Product>, string>({
      query: (id) => `get-single-product/${id}`,
      providesTags: (result, error, id) => {
        return [{ type: 'Product' as const, id, result, error }];
      },
    }),
    

    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: '/create-product',
        method: 'POST',
        body: newProduct,
      }),
      invalidatesTags: [{ type: 'Product' as const, id: 'LIST' }],
    }),
    updateProduct: builder.mutation<Product, Partial<Product>>({
      query: ({ _id, ...rest }) => ({
        url: `/update-product/${_id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: (result, error, { _id }) => [{ type: 'Product' as const, id: _id, result, error }],
    }),
    deleteProduct: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Product' as const, id, result, error }],
    }),
    createOrder: builder.mutation({
      query: (order) => ({
        url: '/order',
        method: 'POST',
        body: order,
      }),
      invalidatesTags: [{ type: 'Product' as const, id: 'LIST' }],
    }),
  }),
});

// Explicitly type the hooks using `ReturnType`
export const useGetProductsQuery: typeof productsApi.endpoints.getProducts.useQuery = productsApi.endpoints.getProducts.useQuery;

export const useGetProductQuery: typeof productsApi.endpoints.getProduct.useQuery = productsApi.endpoints.getProduct.useQuery;

export const useAddProductMutation: typeof productsApi.endpoints.addProduct.useMutation = productsApi.endpoints.addProduct.useMutation;

export const useUpdateProductMutation: typeof productsApi.endpoints.updateProduct.useMutation = productsApi.endpoints.updateProduct.useMutation;

export const useDeleteProductMutation: typeof productsApi.endpoints.deleteProduct.useMutation = productsApi.endpoints.deleteProduct.useMutation;

export const useCreateOrderMutation: typeof productsApi.endpoints.createOrder.useMutation = productsApi.endpoints.createOrder.useMutation;
