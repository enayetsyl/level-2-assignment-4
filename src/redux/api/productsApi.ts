/* eslint-disable @typescript-eslint/no-explicit-any */
// apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../types/type';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/products' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], { search?: string, sort?: string, minPrice?: number, maxPrice?: number }>({
      query: ({ search = '', sort = '', minPrice, maxPrice }) => {
        let url = `/get-all-products?search=${search}&sort=${sort}`;
        if (minPrice !== undefined && maxPrice !== undefined) {
          url += `&minPrice=${minPrice}&maxPrice=${maxPrice}`;
        }
        return url;
      },
      providesTags: (result) => {
        if (Array.isArray(result)) {
          return result.map(({ _id }) => ({ type: 'Product', id: _id }));
        } else {
          return ['Product'];
        }
      },
    }),
    getProduct: builder.query<any, string>({
      query: (id) => `get-single-product/${id}`,
      providesTags: (result, error, _id) => [{ type: 'Product', _id }],
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
      invalidatesTags: ['Product'],
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
      invalidatesTags: (result, error, { _id }) => [{ type: 'Product', _id }],
    }),
    deleteProduct: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url:`/delete/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: (result, error, _id) => [{ type: 'Product', _id }],
    }),
    createOrder: builder.mutation({
      query: (order) => {
        console.log('ordre', order)
        return{

          url:'/order',
          method:'POST',
          body: order,
        }
      },
      invalidatesTags:['Product']
    })



  }),
});

export const { useGetProductsQuery, useGetProductQuery,useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation, useCreateOrderMutation  } = productsApi;
