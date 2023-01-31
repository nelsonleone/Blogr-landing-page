import Layout from "@/components/Layout"
import { GlobalStyles } from "@/components/styled/GlobalStyles"

export default function App({ Component, pageProps }) {
  return(
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
