import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

// App Second root file
import Layout from '../Layout/Layout';


// scss files 
import "../styles/Sass/main.scss";


// pages scss 
import "../styles/Sass/pages/home.scss";
import "../styles/Sass/pages/about.scss";
import "../styles/Sass/pages/services.scss";
import "../styles/Sass/pages/contact.scss";
import "../styles/Sass/pages/blogs.scss";
import "../styles/Sass/pages/users.scss";

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
