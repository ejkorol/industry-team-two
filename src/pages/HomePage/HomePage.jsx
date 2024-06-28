import Home from "@/components/Home/Home";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Post from "../../components/Post/Post";
import PostFooter from "../../components/PostFooter/PostFooter";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
      <Post />
      <PostFooter />
    </>
  );
};
