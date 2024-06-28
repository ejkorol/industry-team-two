import Home from "@/components/Home/Home";
import NavBar from "@/components/NavBar/NavBar";
import ImageGen from "@/components/ImageGen/ImageGen";
import Footer from "../../components/Footer/Footer";
import Post from "../../components/Post/Post";
import PostFooter from "../../components/PostFooter/PostFooter";
import PostHeader from "../../components/PostHeader/PostHeader";
import Success from "../../components/Success/Success";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <section className="HomePage">
      <div className="HomePage__top">
        <PostHeader />
        <ImageGen />
      </div>
      <PostFooter />
    </section>
  );
};
