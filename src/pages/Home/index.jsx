import Header from "../../components/Header"
import Footer from "../../components/Footer";
import HomeContent from "./Content";

function Home(){
  return(
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header/>
      <HomeContent/>
      <Footer/>
    </div>
  )
}

export default Home;