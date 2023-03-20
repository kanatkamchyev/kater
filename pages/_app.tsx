import Head from 'next/head'
import '../styles/global.scss'
import { AppProps } from 'next/app'
import Layout from '../Components/Layout'
import { wrapper } from '../redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>kater</title>


      </Head>
      <div className="App">
        <div className="container">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </div>
    </>
  )
}

export default wrapper.withRedux(MyApp)
