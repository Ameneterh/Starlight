import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import AuthorBio from "./pages/AuthorBio";
import SearchArticles from "./pages/SearchArticles";
import Articles from "./pages/Articles";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<SignIn />} />
        <Route path="/author-bio" element={<AuthorBio />} />
        <Route path="/search" element={<SearchArticles />} />
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route path="/update-listing/" element={<UpdateListing />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
