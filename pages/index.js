import Link from 'next/link'
import Head from '../components/head'
import Axios from '../node_modules/axios';
import ApiKeys from '../constants/api'
import WooCommerceAPI from 'woocommerce-api'
import { resolve } from 'path';

const Index = (props) => {
  console.log(props)
  return (
    <div>
      <Head title="Home" />
      <h1>{props.res[0].title}</h1>
      <style jsx>{`
      
    `}</style>
    </div>
  )
}


Index.getInitialProps = () => new Promise((resolve, reject) => {
  const WooCommerce = new WooCommerceAPI({
    url: `${ApiKeys.url}`,
    consumerKey: `${ApiKeys.key}`,
    consumerSecret: `${ApiKeys.key_private}`
  })
  let posts

  WooCommerce.get('products', (err, data, res) => {
    res = JSON.parse(res)
    posts = res.products
    resolve(posts)
  })
}).then((res) => {
  console.log(res)
  return {
    res
  }
}).catch(() => {
  console.log('Nie udało się')
})

export default Index;
