import Header from "../../components/Header"
import Footer from "../../components/Footer";
import Content from "./Content";

function Home(){
  return(
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Home;