/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import SectionTable from './base/SectionTable'
import HeaderTable from './base/HeaderTable'
import HeadlineTable from './base/HeadlineTable'
import FooterTable from './base/FooterTable'

// TODO: each of these sections needs to be a table

const Newspaper = () => {
  return (
      <React.Fragment>
        <HeaderTable />
        <HeadlineTable />
        <SectionTable />
        <SectionTable />
        <SectionTable />
        <FooterTable />
      </React.Fragment>
  )
}

export default Newspaper