import React from 'react'
import Layout from './shared/layout'

function NotFound() {
    const style = {
        fontWeight:'bold',
        textAlign:'center',
    }
  return (
    <Layout>
        <p style={style}>Unfortunately we can't find that page</p>
    </Layout>
  )
}

export default NotFound