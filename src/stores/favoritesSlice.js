import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../apis/axiosInstance";

// 즐겨찾기 전체 데이터 불러오기
export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async () => {
    try {
      const response = await axiosInstance.get("/favorites", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      return response.data.content; // [{ id, name, ... }]
    } catch (error) {
      console.log("즐겨찾기 데이터 불러오기 실패");
    }
  }
);

// 즐겨찾기 post
export const postFavorites = createAsyncThunk(
  "favorites/postFavorites",
  async ({ data, performId }) => {
    const response = await axiosInstance.post(
      `/favorite/${performId}`,
      {
        name: data.prfnm,
        area: data.area,
        genreName: data.genrenm,
        startDate: data.prfpdfrom.replace(/\./g, ""), // → '20250531'
        endDate: data.prfpdto.replace(/\./g, ""), // → '20250614'
        posterUrl: data.poster,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    console.log(response);
  }
);
const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [], // id만 저장 (예: [1, 5, 12])찾기 데이터 저장
    items: [],
    fetchStatus: "idle",
    postStatus: "idle",
  },
  reducers: {
    clearFavorites: (state) => {
      state.ids = [];
      state.items = [];
      state.fetchStatus = "idle";
      state.postStatus = "idle";
    },
  },
  // pending: 요청 시작됨
  // fulfilled: 요청 성공
  // rejected: 요청 실패
  extraReducers: (builder) => {
    // 특정 액션 타입에 대응하는 리듀서를 추가하는 방식(pending/fulfilled/rejected)
    builder
      // 전체 불러오기
      .addCase(fetchFavorites.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.fetchStatus = "succeeded";
        console.log(state.fetchStatus);
        console.log(action.payload);
        state.items = action.payload;
        state.ids = action.payload.map((item) => item.performId);
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.fetchStatus = "failed";
        console.log(state.fetchStatus);
      })

      // 즐겨찾기 추가
      .addCase(postFavorites.pending, (state) => {
        state.postStatus = "loading";
      })
      .addCase(postFavorites.fulfilled, (state, action) => {
        state.postStatus = "succeeded";
        console.log(state.postStatus);
        // 필요한 경우 항목 추가도 가능
      })
      .addCase(postFavorites.rejected, (state) => {
        state.postStatus = "failed";
        console.log(state.postStatus);
      });
  },
});

export const { clearFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
