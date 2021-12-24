import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Script from 'next/script'
import { useEffect } from 'react'

export default function Layout({ children }) {
  useEffect( () => { document.querySelector("body").classList.add("stretched") } );

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Poppins:300,400,500,600,700|PT+Serif:400,400i&display=swap" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
        <link rel="stylesheet" href="style.css" type="text/css" />
        <link rel="stylesheet" href="css/dark.css" type="text/css" />
        <link rel="stylesheet" href="css/font-icons.css" type="text/css" />
        <link rel="stylesheet" href="css/animate.css" type="text/css" />
        <link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />

        <link rel="stylesheet" href="css/custom.css" type="text/css" />
      </Head>
      <Header />
      <main>
        <div id="wrapper" class="clearfix">
          {children}
        </div>
      </main>

      <div id="gotoTop" class="icon-angle-up"></div>

      <script src="js/jquery.js"></script>
      <script src="js/plugins.min.js"></script> 

      <Script
        src="js/functions.js"
        onLoad={() => {
          $( "#side-navigation" ).tabs({ show: { effect: "fade", duration: 400 } });
        }}
      />
      <Footer />
    </>
  )
}