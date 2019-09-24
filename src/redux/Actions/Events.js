import {
  EDIT_EVENT,
  ADD_EVENTS,
  EVENTS_FAILED,
  EVENTS_LOADING
} from "../ActionTypes";
import { baseUrl } from "../../baseUrl";

export const getEvent = name => dispatch => {
  const token = localStorage.getItem("token");
  return fetch(baseUrl + "events/" + name, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      access_token: token
    },
    credentials: "same-origin"
  })
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        throw error;
      }
    )
    .then(response => response.json())
    .then(response => {
      if (response.success) {
        return dispatch(editEvent(response.results));
      } else {
        var error = new Error(response.error);
        throw error;
      }
    })
    .catch(error => {
      alert("Your event could not be added\nError: " + error.message);
    });
};

export const fetchEvents = () => dispatch => {
  dispatch(eventsLoading(true));
  return fetch(baseUrl + "events")
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(response => {
      /*  if(response.success)
          {
            return  dispatch(addEvents(response.results));
          }
          else {
            var error = new Error(response.error);
            throw error;
          }*/
      return dispatch(addEvents(response));
    })
    .catch(error => dispatch(eventsFailed(error.message)));
};

export const eventsLoading = () => ({
  type: EVENTS_LOADING
});

export const eventsFailed = errmess => ({
  type: EVENTS_FAILED,
  payload: errmess
});

export const addEvents = events => ({
  type: ADD_EVENTS,
  payload: events
});

export const editEvent = events => ({
  type: EDIT_EVENT,
  payload: events
});
