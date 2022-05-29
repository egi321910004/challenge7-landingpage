import Hero from "../Component/Hero/Hero";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import Head from "next/head";

function App() {
  return (
    <div className="App">
      <>
        <Head>
          <title>Home</title>
          <meta name="description" content="Create by Nandang" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Hero />
        <Footer />
      </>
    </div>
  );
}

export default App;
