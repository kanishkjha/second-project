import React from "react";
import "../styles/Blog.css";
import blogLogo from "../assets/blog-landscape.avif";
import MySlider from "../components/MySlider";
import img1 from "../assets/blog-grid-1.webp";
import img2 from "../assets/blog-grid-2.jpeg";
import img3 from "../assets/blog-grid-3.jpeg";
import img4 from "../assets/blog-grid-4.jpeg";
import img5 from "../assets/blog-grid-5.jpeg";
import img6 from "../assets/blog-grid-6.webp";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaChevronRight } from "react-icons/fa";

export default function Blog() {
  return (
    <div className="blog">
      <img src={blogLogo} alt="blog-logo" className="blog-logo" />
      <h1>Recent Posts</h1>
      <MySlider />
      <div className="flex-container">
        <div className="flex-child">
          <div className="image-container">
            <img src={img1} alt="" />
          </div>
          <div className="text-container">
            <h3>Benefits of home insurance policy that you know about</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              nulla optio, temporibus tempora ex asperiores et reiciendis neque
              dolorem ullam rerum aliquid nisi reprehenderit vel. Laboriosam,
              veniam molestiae sunt ut inventore deserunt ea exercitationem ipsa
              fugit, eligendi suscipit enim similique unde! Exercitationem vitae
              cupiditate tenetur omnis dignissimos deleniti tempora delectus.
            </p>

            <Link>
              Continue <FaChevronRight />
            </Link>
          </div>
        </div>
        <div className="flex-child">
          <div className="image-container">
            <img src={img2} alt="" />
          </div>
          <div className="text-container">
            <h3>Benefits of home insurance policy that you know about</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              nulla optio, temporibus tempora ex asperiores et reiciendis neque
              dolorem ullam rerum aliquid nisi reprehenderit vel. Laboriosam,
              veniam molestiae sunt ut inventore deserunt ea exercitationem ipsa
              fugit, eligendi suscipit enim similique unde! Exercitationem vitae
              cupiditate tenetur omnis dignissimos deleniti tempora delectus.
            </p>

            <Link>
              Continue <FaChevronRight size={16} />
            </Link>
          </div>
        </div>
        <div className="flex-child">
          <div className="image-container">
            <img src={img3} alt="" />
          </div>
          <div className="text-container">
            <h3>Benefits of home insurance policy that you know about</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              nulla optio, temporibus tempora ex asperiores et reiciendis neque
              dolorem ullam rerum aliquid nisi reprehenderit vel. Laboriosam,
              veniam molestiae sunt ut inventore deserunt ea exercitationem ipsa
              fugit, eligendi suscipit enim similique unde! Exercitationem vitae
              cupiditate tenetur omnis dignissimos deleniti tempora delectus.
            </p>

            <Link to="blog-details">
              Continue <FaChevronRight size={16} />
            </Link>
          </div>
        </div>
        <div className="flex-child">
          <div className="image-container">
            <img src={img4} alt="" />
          </div>
          <div className="text-container">
            <h3>Benefits of home insurance policy that you know about</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              nulla optio, temporibus tempora ex asperiores et reiciendis neque
              dolorem ullam rerum aliquid nisi reprehenderit vel. Laboriosam,
              veniam molestiae sunt ut inventore deserunt ea exercitationem ipsa
              fugit, eligendi suscipit enim similique unde! Exercitationem vitae
              cupiditate tenetur omnis dignissimos deleniti tempora delectus.
            </p>

            <Link>
              Continue <FaChevronRight size={16} />
            </Link>
          </div>
        </div>
        <div className="flex-child">
          <div className="image-container">
            <img src={img5} alt="" />
          </div>
          <div className="text-container">
            <h3>Benefits of home insurance policy that you know about</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              nulla optio, temporibus tempora ex asperiores et reiciendis neque
              dolorem ullam rerum aliquid nisi reprehenderit vel. Laboriosam,
              veniam molestiae sunt ut inventore deserunt ea exercitationem ipsa
              fugit, eligendi suscipit enim similique unde! Exercitationem vitae
              cupiditate tenetur omnis dignissimos deleniti tempora delectus.
            </p>
            <Link>
              Continue <FaChevronRight size={16} />
            </Link>
          </div>
        </div>
        <div className="flex-child">
          <div className="image-container">
            <img src={img6} alt="" />
          </div>
          <div className="text-container">
            <h3>Benefits of home insurance policy that you know about</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              nulla optio, temporibus tempora ex asperiores et reiciendis neque
              dolorem ullam rerum aliquid nisi reprehenderit vel. Laboriosam,
              veniam molestiae sunt ut inventore deserunt ea exercitationem ipsa
              fugit, eligendi suscipit enim similique unde! Exercitationem vitae
              cupiditate tenetur omnis dignissimos deleniti tempora delectus.
            </p>

            <Link>
              Continue <FaChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
