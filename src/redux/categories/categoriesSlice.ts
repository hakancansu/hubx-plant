import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Category {
  id: number;
  name: string;
  title: string;
  rank: number;
  image: {
    url: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk<Category[], void>(
  "categories/fetchCategories",
  async () => {
    const response = await fetch(
      "https://dummy-api-jtg6bessta-ey.a.run.app/getCategories"
    );
    const data = await response.json();

    return data.data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default categoriesSlice.reducer;
