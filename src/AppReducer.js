export default (state, action) => {
    switch(action.type) {
      case 'INITIALIZE_USER':
        return {
          ...state,
          user: action.payload
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