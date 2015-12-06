import React from 'react'
import { connect } from 'react-redux'
import { fetchMutualFundList } from '../actions/index'
import MutualFundList from '../components/MutualFundList'


export default class App extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchMutualFundList())
  }

  render() {
    console.log(this.props)
    const {
      items, isFetching
    } = this.props

    return (
      <div>
        <h1>Reksadana</h1>
          <div>
            <MutualFundList mutualfunds={items} />
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { mutualfunds } = state
  const {
    items,
    isFetching
  } = mutualfunds || {
    isFetching,
    items: []
  }
  return {
    items,
    isFetching
  }
}

export default connect(mapStateToProps)(App)
