import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axiosEventInstance } from "../apis/axios";
import { CONSTANTS } from "../Constants";

const initialState = {
  status: "",
  eventData: "",
  allEventData: [],
};

export const getNameEvents = createAsyncThunk(
  "event/getNameEvents",
  async (payload, { rejectWithValue }) => {
    console.log(
      "getNameEvents thunk called with payload :" + JSON.stringify(payload)
    );
    const { params } = payload;

    // call getNameEvents API here..
    try {
      const response = await axiosEventInstance.get(
        CONSTANTS.GET_EVENT_BY_NAME_ENDPOINT + "/" + params //need to add

        // {
        //   params: params,
        // }
      );
      console.log(response);
      if (response?.data?.error) {
        return rejectWithValue(response?.data);
      }
      return response.data;
    } catch (error) {
      console.log("Axios api call errored out...");
      console.log(error);
      const data = error.response.data;
      const status = error.response.status;
      return rejectWithValue({ status, data });
    }
  }
);

export const getAllEvents = createAsyncThunk(
  "event/getAllEvents",
  async (payload, { rejectWithValue }) => {
    console.log(
      "getAllEvents thunk called with payload :" + JSON.stringify(payload)
    );
    //   const { params } = payload;

    // call getNameEvents API here..
    try {
      const response = await axiosEventInstance.get(
        CONSTANTS.GET_ALL_EVENT_ENDPOINT //need to add

        // {
        //   params: params,
        // }
      );
      console.log(response);
      if (response?.data?.error) {
        return rejectWithValue(response?.data);
      }
      return response.data;
    } catch (error) {
      console.log("Axios api call errored out...");
      console.log(error);
      const data = error.response.data;
      const status = error.response.status;
      return rejectWithValue({ status, data });
    }
  }
);

export const createEvent = createAsyncThunk(
  "event/createEvent",
  async (payload, { rejectWithValue }) => {
    console.log(
      "createEvent thunk called with payload :" + JSON.stringify(payload)
    );
    const { eventName, eventDate, eventAddress, eventDesc } = payload;

    // call createEvent API here..
    try {
      const response = await axiosEventInstance.post(
        CONSTANTS.CREATE_EVENT_ENDPOINT,
        {
          eventName,
          eventDate,
          eventAddress,
          eventDesc,
        }

        // JSON.stringify({ eventName, eventDate, eventAddress, eventDesc }) //need to add

        // {
        //   params: params,
        // }
      );
      console.log(response);
      if (response?.data?.error) {
        return rejectWithValue(response?.data);
      }
      return response.data;
    } catch (error) {
      console.log("Axios api call errored out...");
      console.log(error);
      const data = error.response.data;
      const status = error.response.status;
      return rejectWithValue({ status, data });
    }
  }
);
export const deleteEvent = createAsyncThunk(
  "event/deleteEvent",
  async (payload, { rejectWithValue }) => {
    console.log(
      "deleteEvent thunk called with payload :" + JSON.stringify(payload)
    );
    const { param } = payload;

    // call deleteEvent API here..
    try {
      const response = await axiosEventInstance.delete(
        CONSTANTS.DELETE_EVENT_ENDPOINT + "/" + param

        // JSON.stringify({ eventName, eventDate, eventAddress, eventDesc }) //need to add

        // {
        //   params: params,
        // }
      );
      console.log(response);
      if (response?.data?.error) {
        return rejectWithValue(response?.data);
      }
      return response.data;
    } catch (error) {
      console.log("Axios api call errored out...");
      console.log(error);
      const data = error.response.data;
      const status = error.response.status;
      return rejectWithValue({ status, data });
    }
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getNameEvents.pending, (state, action) => {
        console.log("getNameEvents thunk promise pending..");
        console.log(action);
        state.status = "submitting";
      })
      .addCase(getNameEvents.fulfilled, (state, action) => {
        console.log("getNameEvents thunk promise fullfilled..");
        console.log(action);
        state.status = "success";
      })
      .addCase(getNameEvents.rejected, (state, action) => {
        console.log("getNameEvents thunk promise rejected..");
        console.log(action);
        state.status = "failed";
      })
      .addCase(createEvent.pending, (state, action) => {
        console.log("createEvent thunk promise pending..");
        console.log(action);
        state.status = "submitting";
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        console.log("createEvent thunk promise fullfilled..");
        console.log(action);
        state.status = "success";
        state.eventData = action.payload.data;
      })
      .addCase(createEvent.rejected, (state, action) => {
        console.log("createEvent thunk promise rejected..");
        console.log(action);
        state.status = "failed";
      })
      .addCase(getAllEvents.pending, (state, action) => {
        console.log("getAllEvents thunk promise pending..");
        console.log(action);
        state.status = "submitting";
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        console.log("getAllEvents thunk promise fullfilled..");
        console.log(action);
        state.status = "success";
        state.allEventData = action.payload;
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        console.log("getAllEvents thunk promise rejected..");
        console.log(action);
        state.status = "failed";
      })
      .addCase(deleteEvent.pending, (state, action) => {
        console.log("getAllEvents thunk promise pending..");
        console.log(action);
        state.status = "submitting";
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        console.log("deleteEvent thunk promise fullfilled..");
        console.log(action);
        state.status = "success";
        //state.allEventData = action.payload;
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        console.log("deleteEvent thunk promise rejected..");
        console.log(action);
        state.status = "failed";
      }),
});

export default eventSlice.reducer;
