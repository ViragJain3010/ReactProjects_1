import React from "react";
import vg from "../Assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechStart</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics " />
        <div>
          <p>
            #Home_2  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quam
            corrupti doloribus quaerat dolor vel vero blanditiis quisquam
            maiores laboriosam. Soluta explicabo quisquam deserunt magni fugiat
            illum suscipit perferendis repudiandae!
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            #Home_3  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rem molestias asperiores dolores enim sequi sunt, nostrum dolor. Dolorem ex suscipit velit eaque laborum excepturi culpa! Culpa, quia. At eum aliquam in iusto facilis, id fuga quasi mollitia, sed vel voluptates quia autem eius. Et pariatur assumenda consectetur aliquid molestias.
          </p>
        </div>
      </div>

      <div className="home4" id="brand">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay: "0.3s"}}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{animationDelay: "0.5s"}}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{animationDelay: "0.7s"}}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{animationDelay: "0.9s"}}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
