const initialState = {
  email: "jay@gmail.com",
  password: "jayMarket",
};

const changeEmail = {
  type: "CHANGE_EMAIL",
  data: "boogiecho@gmail.com"
}

// (이전 상태, 액션) => 새로운 상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_EMAIL":
      return {
        ...state,
        email: action.data,
      }
  }

};

export default rootReducer;
