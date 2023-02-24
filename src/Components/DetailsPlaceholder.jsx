import { Link } from "react-router-dom";

const DetailsPlaceholder = () => {
  return (
    <>
      <section className="text-bg-light ">
        <div className="container card overflow-hidden">
          <div className="d-flex justify-content-between align-items-center">
            <h1>Your Cart</h1>
          </div>
          <ul className="list-group my-3 shadow h-100 ">
            <li className="list-group-item row d-flex align-items-center">
              <div className="col-4 placeholder-card-image h-100 d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              <div className="col-md-6 placeholder-glow ">
                <p aria-hidden="true">
                  <span className="placeholder col-6"></span>
                </p>
                <p aria-hidden="true">
                  <span class="placeholder col-4"></span>
                </p>
                <p aria-hidden="true">
                  <span className="placeholder col-3"></span>
                </p>
                <div className="d-flex justify-content-between">
                  <p aria-hidden="true">
                    <span className="placeholder col-3"></span>
                  </p>
                  <div className="d-flex justify-content-between">
                    <p aria-hidden="true">
                      <span className="placeholder col-3"></span>
                    </p>
                    <p aria-hidden="true">
                      <span className="placeholder col-3"></span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <div className="d-flex justify-content-between">
            <Link to={"/"} className="btn btn-outline-success">
              <i className="fa-solid fa-arrow-left"></i> Back to Shopping
            </Link>
            <button className="btn btn-success">
              Proceed to payment <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsPlaceholder;
