/* eslint-disable @typescript-eslint/no-explicit-any */
// apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../types/type';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/products' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/get-all-products',
      providesTags: (result) => result ? [...result.data.map(({id}) => ({type: 'Product', id})), 'Product'] : ['Product'],
    }),
    getProduct: builder.query<any, string>({
      query: (id) => `get-single-product/${id}`,
      providesTags: (result, error, id) => [{ type: 'Product', id }],
    }),
    addProduct: builder.mutation({
      query: (newProduct) => {
        console.log('new product', newProduct); // Log the new product data
        return {
          url: '/create-product',
          method: 'POST',
          body: newProduct,
        };
      },
      // invalidatesTags: ['Product'],
    }),
    
    updateProduct: builder.mutation<Product, Partial<Product>>({
      query: ({_id, ...rest}) => {
        console.log('id', _id)
        console.log('rest', rest)
        return{
          url: `/update-product/${_id}`,
        method: 'PUT',
        body: rest,
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'Product', id }],
    }),
    deleteProduct: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url:`/delete/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Product', id }],
    })




  }),
});

export const { useGetProductsQuery, useGetProductQuery,useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation  } = productsApi;
