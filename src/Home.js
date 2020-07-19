import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Rakhi/GW/Hero/New/Pc_1x._CB409171045_.jpg"
        alt="Banner Image"
        className="home__image"
      />

      {/* products */}
      <div className="home__row">
        <Product
          id="1"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={110}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />

        <Product
          id="2"
          title="Hurom Slow Juicer HN NBC20 (Noble Silver) - 43 RPM, 150 Watts"
          price={5500}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/513LbMXPh3L._SL1003_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
          price={23900}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71EoGntO5bL._SL1500_.jpg"
        />
        <Product
          id="4"
          title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Grey)"
          price={3499}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61RyEv5mnNL._SL1100_.jpg"
        />
        <Product
          id="5"
          title="Apple iPhone 11 (64GB) - Black"
          price={63900}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="Samsung 163 cm (65 Inches) 4K Ultra HD Smart QLED TV QA65Q90RAKXXL (Black) (2019 model)"
          price={30501}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81i3H27E7sL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
