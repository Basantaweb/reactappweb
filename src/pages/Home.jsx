import React from 'react'
import Store from "./Store";


function Home() {
  return (
    <>
      <div className="main">
        <div className="row">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://picsum.photos/800/400?random=1"
                  className="d-block w-100 img-fluid"
                  alt="Nature"
                  style={{ height: "300px", objectFit: "cover" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://picsum.photos/800/400?random=2"
                  className="d-block w-100 img-fluid"
                  alt="City"
                  style={{ height: "300px", objectFit: "cover" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://picsum.photos/800/400?random=3"
                  className="d-block w-100 img-fluid"
                  alt="Mountains"
                  style={{ height: "300px", objectFit: "cover" }}
                />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
        <Store />
      </div>
    </>
  );
}

export default Home