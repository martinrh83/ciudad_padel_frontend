import { createContext, useContext, useReducer } from "react";

const BookingContext = createContext();
const initialState = {
  date: new Date(),
  dayOfWeek: null,
  startTime: null,
  price: null,
  user: null,
  courtId: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "booking/date":
      return { ...state, date: action.payload };
    case "booking/timeslot":
      return {
        ...state,
        dayOfWeek: action.payload.dayOfWeek,
        startTime: action.payload.startTime,
        courtId: action.payload.courtId,
      };
    case "booking/resetTimeslot":
      return {
        ...state,
        dayOfWeek: null,
        startTime: null,
        courtId: null,
      };
    case "booking/price":
      return { ...state, price: action.payload };
    case "booking/user":
      return { ...state, user: action.payload };
    default:
      throw new Error("Action unknown");
  }
}

function BookingProvider({ children }) {
  const [{ dayOfWeek, startTime, price, user, date, courtId }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <BookingContext.Provider
      value={{ dayOfWeek, startTime, price, user, date, courtId, dispatch }}
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
