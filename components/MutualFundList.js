import React from 'react'
import MutualFund from './MutualFund'


class MutualFundList extends React.Component {
  render() {
    const {
      mutualfunds
    } = this.props
    return (
        <ul>
        {mutualfunds.map((mf, i) =>
          <MutualFund
            key={i}
            mutualfund={mf}
           />
        )}
        </ul>
    )
  }
}


export default MutualFundList
