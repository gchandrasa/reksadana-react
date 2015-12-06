import fetch from 'isomorphic-fetch'

export const REQUEST_MUTUALFUND_LIST = 'REQUEST_MUTUALFUND_LIST'
export const RECEIVE_MUTUALFUND_LIST = 'RECEIVE_MUTUALFUND_LIST'


const requestMutualFundList = () => {
  return {
    type: REQUEST_MUTUALFUND_LIST
  }
}

const receiveMutualFundList = (json) => {
  return {
    type: RECEIVE_MUTUALFUND_LIST,
    mutualfunds: json.mutualfunds,
    receivedAt: Date.now()
  }
}

const fetchMutualFundList = () => {
  return dispatch => {
    dispatch(requestMutualFundList())
    return fetch('https://api.myjson.com/bins/27pgf')
      .then(response => response.json())
      .then(json => dispatch(receiveMutualFundList(json)))
  }
}

export { fetchMutualFundList }
