import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'
import { wrapper } from '../redux/store'
import { Provider } from 'react-redux';

import Layout from '../components/Layout/Layout'

function App({ Component, pageProps, ...rest }) {
  const {store, props} = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App;
