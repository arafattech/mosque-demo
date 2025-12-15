export default function Booking() {
  return (
    <div className="container-fluid booking mt-5 pb-5">
      <div className="container pb-5">
        <div className="bg-white shadow-lg rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="row g-3 align-items-center">
            <div className="col-md-10">
              <div className="row g-3">
                <div className="col-md-3">
                  <div className="form-floating">
                    <select className="form-select border-0 bg-light" id="destinationSelect" defaultValue="Destination">
                      <option disabled>Destination</option>
                      <option value="1">Destination 1</option>
                      <option value="2">Destination 2</option>
                      <option value="3">Destination 3</option>
                    </select>
                    <label htmlFor="destinationSelect">Destination</label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-floating date" id="date1">
                    <input
                      type="date"
                      className="form-control border-0 bg-light"
                      id="departDate"
                      placeholder="Depart Date"
                    />
                    <label htmlFor="departDate">Depart Date</label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-floating date" id="date2">
                    <input
                      type="date"
                      className="form-control border-0 bg-light"
                      id="returnDate"
                      placeholder="Return Date"
                    />
                    <label htmlFor="returnDate">Return Date</label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-floating">
                    <select className="form-select border-0 bg-light" id="durationSelect" defaultValue="Duration">
                      <option disabled>Duration</option>
                      <option value="1">Duration 1</option>
                      <option value="2">Duration 2</option>
                      <option value="3">Duration 3</option>
                    </select>
                    <label htmlFor="durationSelect">Duration</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary w-100 py-3" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
