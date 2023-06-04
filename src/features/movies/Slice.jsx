import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Movieapi from "../../common/apis/Movieapi";
import { ApiKey } from "../../common/apis/MovieApikey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await Movieapi.get(
      `?apiKey=${ApiKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);


export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async () => {
      const seriesText = "Friends";
      const response = await Movieapi.get(
        `?apiKey=${ApiKey}&s=${seriesText}&type=series`
      );
      return response.data;
    }
  );



  export const fetchAsyncMovieorShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
      console.log(id,'idddddddddddd')
     
      const response = await Movieapi.get(
        `?apiKey=${ApiKey}&i=${id}&Plot=full`
      );
      return response.data;
    }
  );

const initialState = {
  movies: {},
  shows:{},
  selectedMovieorShow:{},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, () => {
        console.log("pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("fetched successfully");
        state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, () => {
        console.log("rejected");
      }) 
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        console.log("fetched successfully");
        state.shows = payload;
      })
      .addCase(fetchAsyncMovieorShowDetail.fulfilled, (state, { payload }) => {
        console.log("fetched successfully");
        state.selectedMovieorShow = payload;
      });
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedmovieorShow = (state)=>state.movies.selectedMovieorShow
export default movieSlice.reducer;
