import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div><Navbar /></div> 
      <div className="card" style={{ "width": "18rem" ,"maxHeight":"360px"}}>
        <img src="/logo512.png" className="card-img-top" alt="..."  style={{ "maxHeight":"150px"}}/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
           Its description
          </p>
          <div className="container w-100">
            <select className="m-2 h-100 w-100 bg-secondary" id="">
              {}
            </select>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
