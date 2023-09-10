import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import styles from "./App.module.scss";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      {" "}
      <ScrollToTop />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
