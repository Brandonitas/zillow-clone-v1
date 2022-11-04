/**
 *
 * Idea: The components don't have to use hooks that query data when state changes.
 * We should use observables.
 *
 * How to do ComponentDidMount???
 */

import { NextPage } from 'next'
// import { NextSeo } from 'next-seo'

import ProductListingPage from 'src/components/templates/ProductListingPage'
import { useHomesDetailed } from 'src/store/home/homeNetwork'

const Homes: NextPage = () => {
  useHomesDetailed()
  return <ProductListingPage />
}

export default Homes
