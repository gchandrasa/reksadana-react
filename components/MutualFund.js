import React from 'react'

const MutualFund = ({
  mutualfund
}) => (
  <li>
    {mutualfund.name}
    {mutualfund.nav}
    {mutualfund.return}
  </li>
)

export default MutualFund
