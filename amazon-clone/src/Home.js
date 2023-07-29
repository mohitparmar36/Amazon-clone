import React from 'react'
import "./Home.css";
import Product from './Product';


function Home() {

  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="123"
          title="iQOO Neo 7 Pro 5G (Dark Storm, 8GB RAM, 128GB Storage) | Snapdragon® 8+ Gen 1 | Independent Gaming Chip | Flagship 50MP OIS Camera | AG Glass Design"
          price={69999}
          rating={4}
          image="https://m.media-amazon.com/images/I/611rQWZa5rL._SX679_.jpg"
        />
        <Product
          id="123"
          title="Echo Dot (3rd Gen), Certified Refurbished, Black – Improved smart speaker with Alexa – Like new, backed with 1-year warranty"
          price={2499}
          rating={4}
          image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SX342_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123"
          title="BE SAVAGE Letterman Varsity Jacket with Faux Leather Sleeves"
          price={899}
          rating={4}
          image="https://m.media-amazon.com/images/I/71VK4FNxP2L._UY741_.jpg"
        />
        <Product
          id="123"
          title="PTron Bassbuds Air in-Ear TWS Earbuds with 13mm Driver for Immersive Sound (Blue)"
          price={699}
          rating={4}
          image="https://m.media-amazon.com/images/I/51kKjq3OVrL._SX679_.jpg"
        />
        <Product
          id="123"
          title="Pigeon by Stovekraft Amaze Plus Electric Kettle (14289)1500 Watt (Silver)"
          price={599}
          rating={3}
          image="https://m.media-amazon.com/images/I/51DGcy8eBCL._SX522_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123"
          title="LG 49 Curved Ultragear Dual QHD (5120 x 1440) @1ms, 240Hz Gaming Monitor with Vesa DisplayHDR 1000, Premium Gaming Display, AMD FreeSync, DCI-P3 95% (Typ.), HDMI, DP, Speakers, 49GR85DC (Black)"
          price={69999}
          rating={4}
          image="https://m.media-amazon.com/images/I/71Rz21zCs6L._AC_UF894,1000_QL80_.jpg"
        />
      </div>
    </div>
  );
}

export default Home
