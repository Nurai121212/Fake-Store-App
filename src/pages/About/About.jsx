import Header from "../../components/Header";
import Footer from "../../components/Footer";

function About(){
  return(
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header/>
        <h1 style={{textAlign : 'center'}}>About Page</h1>
      <Footer/>
    </div>
  )
}

export default About;