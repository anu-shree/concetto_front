import * as ActionTypes from "./ActionTypes";

const Events = (
  state = { isLoading: true, errMess: null, events: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_EVENTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        events: action.payload
      };

    case ActionTypes.EVENTS_LOADING:
      return { ...state, isLoading: true, errMess: null, events: [] };

    case ActionTypes.EVENTS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    case ActionTypes.EDIT_EVENT:
      var newevent = action.payload;
      return {
        ...state,
        events: state.events.map(event => {
          if (event._id === newevent._id) {
            return newevent;
          } else {
            return event;
          }
        })
      };

    default:
      return state;
  }
};
export default Events;
