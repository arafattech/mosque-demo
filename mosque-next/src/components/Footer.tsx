import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid footer pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-lg-7">
              <h1 className="text-light mb-0">Subscribe our newsletter</h1>
              <p className="text-secondary">Get the latest news and other tips</p>
            </div>
            <div className="col-lg-5">
              <div className="position-relative mx-auto">
                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Subcribe</button>
              </div>
            </div>
            <div className="col-12">
              <div className="border-top border-secondary"></div>
            </div>
          </div>
          <div className="row g-4 footer-inner">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item mt-5">
                <h4 className="text-light mb-4">THE<span className="text-primary">Mosque</span></h4>
                <p className="mb-4 text-secondary">Nostrud exertation ullamco labor nisi aliquip ex ea commodo
                  consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                {/* <a href="" className="btn btn-primary py-2 px-4">Donate Now</a> */}
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item mt-5">
                <h4 className="text-light mb-4">Our Mosque</h4>
                <div className="d-flex flex-column">
                  <h6 className="text-secondary mb-0">Our Address</h6>
                  <div className="d-flex align-items-center border-bottom py-4">
                    <span className="flex-shrink-0 btn-square bg-primary me-3 p-4"><i className="fa fa-map-marker-alt text-dark"></i></span>
                    <a href="" className="text-body">123 Street, New York, USA</a>
                  </div>
                  <h6 className="text-secondary mt-4 mb-0">Our Mobile</h6>
                  <div className="d-flex align-items-center py-4">
                    <span className="flex-shrink-0 btn-square bg-primary me-3 p-4"><i className="fa fa-phone-alt text-dark"></i></span>
                    <a href="" className="text-body">+012 345 67890</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item mt-5">
                <h4 className="text-light mb-4">Explore Link</h4>
                <div className="d-flex flex-column align-items-start">
                  <Link className="text-body mb-2" href=""><i className="fa fa-check text-primary me-2"></i>Home</Link>
                  <Link className="text-body mb-2" href=""><i className="fa fa-check text-primary me-2"></i>About Us</Link>
                  <Link className="text-body mb-2" href=""><i className="fa fa-check text-primary me-2"></i>Our Features</Link>
                  <Link className="text-body mb-2" href=""><i className="fa fa-check text-primary me-2"></i>Contact us</Link>
                  <Link className="text-body mb-2" href=""><i className="fa fa-check text-primary me-2"></i>Our Blog</Link>
                  <Link className="text-body mb-2" href=""><i className="fa fa-check text-primary me-2"></i>Our Events</Link>
                  <Link className="text-body mb-2" href=""><i className="fa fa-check text-primary me-2"></i>Donations</Link>
                  <Link className="text-body mb-2" href=""><i className="fa fa-check text-primary me-2"></i>Sermons</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item mt-5">
                <h4 className="text-light mb-4">Latest Post</h4>
                <div className="d-flex border-bottom border-secondary py-4">
                  <img src="/img/blog-mini-1.jpg" className="img-fluid flex-shrink-0" alt="" />
                  <div className="ps-3">
                    <p className="mb-0 text-muted">01 Jan 2045</p>
                    <a href="" className="text-body">Lorem ipsum dolor sit amet elit eros vel</a>
                  </div>
                </div>
                <div className="d-flex py-4">
                  <img src="/img/blog-mini-2.jpg" className="img-fluid flex-shrink-0" alt="" />
                  <div className="ps-3">
                    <p className="mb-0 text-muted">01 Jan 2045</p>
                    <a href="" className="text-body">Lorem ipsum dolor sit amet elit eros vel</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <div className="border-top border-secondary pb-4"></div>
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#"> Mosque Demo</a>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By <a className="border-bottom" href="#">Hybri Tech</a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Back to Top */}
      <a href="#" className="btn btn-primary border-3 border-light back-to-top"><i className="fa fa-arrow-up"></i></a>
    </>
  );
}
