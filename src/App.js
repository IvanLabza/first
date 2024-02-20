import "./index.css";
import Header from "./Parsels/header/Header";
import Footer from "./Parsels/footer/Footer";
import Form from "./Parsels/form/Form";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="wrapper__desc">
          <Header />
          <Form />
          <Footer />
        </div>
        <div className="image-container">
          <img src="./assets/bg.png" alt="" className="wrapper-img" />
        </div>
      </div>
    </div>
  );
}

export default App;
