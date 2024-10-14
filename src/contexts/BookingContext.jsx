import { createContext, useContext, useReducer } from "react";

const BookingContext = createContext();
const initialState = {
  bookingDate: new Date(),
  dayOfWeek: null,
  startTime: null,
  endTime: null,
  courtName: null,
  timeslotId: null,
  price: null,
  userId: null,
  status: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "booking/getState":
      return { state };
    case "booking/date":
      return { ...state, bookingDate: action.payload };
    case "booking/timeslot":
      /* return {
        ...state,
        dayOfWeek: action.payload.dayOfWeek,
        startTime: action.payload.startTime,
        courtId: action.payload.courtId,
      }; */
      return {
        ...state,
        timeslotId: action.payload.timeslotId,
        dayOfWeek: action.payload.dayOfWeek,
        startTime: action.payload.startTime,
        courtName: action.payload.courtName,
        endTime: action.payload.endTime,
        //courtId: action.payload.courtId,
      };
    case "booking/resetTimeslot":
      /* return {
        ...state,
        dayOfWeek: null,
        startTime: null,
        courtId: null,
      }; */
      return {
        ...state,
        timeslotId: null,
        dayOfWeek: null,
        startTime: null,
        courtName: null,
      };
    case "booking/price":
      return { ...state, price: action.payload };
    case "booking/user":
      return { ...state, userId: action.payload };
    case "booking/status":
      return { ...state, status: action.payload };
    case "booking/create":
      return { ...state, status: "pending", userId: action.payload.userId };
    default:
      throw new Error("Action unknown");
  }
}

function BookingProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BookingContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

function useBooking() {
  const context = useContext(BookingContext);
  return context;
}

export { BookingProvider, useBooking };
