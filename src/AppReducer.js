export const AppReducer = (state, action) => {
    switch(action.type) {
      case 'INTIALIZE_USER':
        return {
          ...state,
          user: action.payload,
          loading: false,
          loggedIn: !state.loggedIn
        }

        default:
          return {
            ...state
          }
    //   case 'DELETE_TRANSACTION':
    //     return {
    //       ...state,
    //       transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
    //     }
    //   case 'ADD_TRANSACTION':
    //     return {
    //       ...state,
    //       transactions: [...state.transactions, action.payload]
    //     }
    //   case 'TRANSACTION_ERROR':
    //     return {
    //       ...state,
    //       error: action.payload
    //     }
    //   default:
    //     return state;
    // }
    }
}