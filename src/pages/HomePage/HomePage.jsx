import ImageGen from "@/components/ImageGen/ImageGen";
import Footer from "../../components/Footer/Footer";
import PostFooter from "../../components/PostFooter/PostFooter";
import PostHeader from "../../components/PostHeader/PostHeader";
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
