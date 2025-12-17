export default function About() {
  return (
    <div className="container-fluid about py-5">
      <div className="container py-5">
        <div className="row g-5 mb-5">
          <div className="col-xl-6">
            <div className="row g-4 h-100">
              <div className="col-6">
                <img src="/img/about-1.jpg" className="img-fluid h-100 rounded shadow-sm wow zoomIn" style={{objectFit: 'cover'}} data-wow-delay="0.1s" alt="Mosque Interior" />
              </div>
              <div className="col-6">
                <div className="d-flex flex-column h-100 gap-4">
                    <img src="/img/about-2.jpg" className="img-fluid h-50 rounded shadow-sm wow zoomIn" style={{objectFit: 'cover'}} data-wow-delay="0.3s" alt="Prayer" />
                    <img src="/img/about-3.jpg" className="img-fluid h-50 rounded shadow-sm wow zoomIn" style={{objectFit: 'cover'}} data-wow-delay="0.5s" alt="Quran" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 wow fadeIn" data-wow-delay="0.5s">
            <p className="fs-5 text-uppercase text-primary fw-bold">About Our Mosque</p>
            <h1 className="display-5 pb-4 m-0">A Center for Spirituality & Community Growth</h1>
            <p className="pb-4 text-muted">
              Welcome to our mosque, a sanctuary of peace and a hub for community development. 
              We are dedicated to fostering a welcoming environment where everyone can connect with their faith, 
              learn about Islam, and find support within the community. Our mission is to serve humanity 
              and promote the values of compassion, knowledge, and unity.
            </p>
            
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <div className="flex-shrink-0 bg-light rounded-circle p-3">
                    <i className="fa fa-quran text-primary fa-2x"></i>
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-2">Islamic Education</h5>
                    <p className="mb-0 text-muted small">Providing Quranic classes, Hadith studies, and moral education for all ages.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <div className="flex-shrink-0 bg-light rounded-circle p-3">
                    <i className="fa fa-hands-helping text-primary fa-2x"></i>
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-2">Community Service</h5>
                    <p className="mb-0 text-muted small">Supporting the needy, organizing charity drives, and fostering social welfare.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light rounded p-4 mb-4 border-start border-5 border-primary">
              <div className="d-flex align-items-center">
                <i className="fa fa-quote-left text-primary fa-2x me-3"></i>
                <p className="mb-0 fst-italic text-dark">
                  &quot;The mosques of Allah are only to be maintained by those who believe in Allah and the Last Day and establish prayer and give zakah and do not fear except Allah.&quot;
                  <br />
                  <span className="text-primary fw-bold mt-2 d-block">- Surah At-Tawbah 9:18</span>
                </p>
              </div>
            </div>

            <div className="row g-2">
              <div className="col-sm-6">
                <div className="d-flex align-items-center mb-2">
                    <i className="fa fa-check-circle text-primary me-2"></i>
                    <span>Daily 5 Prayers</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <i className="fa fa-check-circle text-primary me-2"></i>
                    <span>Jummah Khutbah</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center mb-2">
                    <i className="fa fa-check-circle text-primary me-2"></i>
                    <span>Ramadan Activities</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <i className="fa fa-check-circle text-primary me-2"></i>
                    <span>Counseling Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container text-center bg-primary rounded py-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="row g-4 align-items-center justify-content-center">
            <div className="col-lg-2">
              <i className="fa fa-mosque fa-4x text-white"></i>
            </div>
            <div className="col-lg-7 text-center text-lg-start">
              <h2 className="mb-2 text-white">Join Our Community</h2>
              <p className="mb-0 text-white-50">Be a part of our growing family. Participate in our events and prayers.</p>
            </div>
            <div className="col-lg-3">
              <a href="/contact" className="btn btn-light py-2 px-4 fw-bold">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
