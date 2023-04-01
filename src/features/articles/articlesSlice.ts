import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '~/store';
import ArticleDetailType from '~/types/ArticleDetailType';
import ArticleType from '~/types/ArticleType';

// NOTE: articles and currentArticle could be separated
//       into two slices if needed

type ArticlesSliceType = {
  articles: ArticleType[];
  currentArticle: ArticleDetailType;
  // articlesLoading: boolean,
  // currentArticleLoading: boolean,
};

const initialState: ArticlesSliceType = {
  articles: [],
  currentArticle: {
    articleId: '',
    title: '',
    perex: '',
    imageId: '',
    createdAt: '',
    lastUpdatedAt: '',
    content: '',
    comments: [],
  },
};

// THUNKS
export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async () => {
    const response = await axios.get<{ items: ArticleType[] }>('/articles');
    return response.data.items;
  }
);

export const fetchArticleById = createAsyncThunk(
  'articles/fetchArticleById',
  async (articleId: string) => {
    const response = await axios.get<ArticleDetailType>(
      `/articles/${articleId}`
    );
    return response.data;
  }
);

// SLICE
export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
      })
      // NOTE: Pending and rejected should be handled as well
      // .addCase(fetchArticles.pending, (state, action) => {...}
      // .addCase(fetchArticles.rejected, (state, action) => {...}

      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.currentArticle = action.payload;
      });
    // NOTE: Pending and rejected should be handled as well
    // .addCase(fetchArticleById.pending, (state, action) => {...}
    // .addCase(fetchArticleById.rejected, (state, action) => {...}
  },
});

// SELECTORS
export const selectArticles = (state: RootState) => state.articles.articles;
export const selectCurrentArticle = (state: RootState) =>
  state.articles.currentArticle;

export default articlesSlice.reducer;
