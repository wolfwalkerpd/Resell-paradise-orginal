import { useState,useEffect } from 'react'
import React from 'react'
import Head from '../head'
import Cardshop from '../card-shop'
import Footer from '../footer'
import Product from './product-view'
import Similar from './similar'


function ProductPage(props) {

  const {selecteditem} = props

  return (
    <>
      <Product/>
      <Similar />
      <Footer />
    </>
  )
}

export default ProductPage
