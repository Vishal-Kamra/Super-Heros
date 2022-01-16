import Layout from "../components/layout";
import "../styles/globals.css";

import "mdb-react-ui-kit/dist/css/mdb.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
