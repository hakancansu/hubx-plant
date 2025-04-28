import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Question {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}

interface ProductsState {
  questions: Question[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  questions: [],
  loading: false,
  error: null,
};


export const fetchQuestions = createAsyncThunk<Question[], void>(
  'questions/fetchQuestions',
  async () => {
    const response = await fetch('https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions');
    const data = await response.json();
  
    return data; 
  }
);

const productsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Hata oluştu';
      });
  },
});

export default productsSlice.reducer;
