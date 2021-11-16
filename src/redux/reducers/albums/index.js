const initialState = {
    albums: [
      { id: 0, text: 'Learn React', completed: true },
      { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
      { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ]
  }


  export default function albumsReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return state
    }
  }
  