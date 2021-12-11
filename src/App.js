// import logo from "./logo.svg";
// import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

// function Header() {
//   return (
//     <div>
//       <h1>Apa kabar</h1>
//     </div>
//   );
// }

// // penulisan react dengan arrow function //
// const Footer = () => {
//   return (
//     <div>
//       <h6>@2021 by subkh4n</h6>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Header />
      <h1>Hello React</h1>
      <p>Lorem Ipsum</p>
      <Footer />
    </div>
  );
}

export default App;
