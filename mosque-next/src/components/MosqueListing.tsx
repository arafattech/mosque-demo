"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { Mosque, mosquesData } from "@/data/mosques";

export default function MosqueListing() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const query = searchParams.get("search");
    if (query) setSearchTerm(query);

    const division = searchParams.get("division");
    if (division) setSelectedDivision(division);

    const district = searchParams.get("district");
    if (district) setSelectedDistrict(district);

    const thana = searchParams.get("thana");
    if (thana) setSelectedThana(thana);
  }, [searchParams]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedThana, setSelectedThana] = useState("");
  const [selectedPourashava, setSelectedPourashava] = useState("");
  const [selectedMosque, setSelectedMosque] = useState<Mosque | null>(null);

  // Extract unique values for dropdowns based on hierarchy
  const divisions = useMemo(() => Array.from(new Set(mosquesData.map(m => m.division))), []);
  
  const districts = useMemo(() => {
    if (!selectedDivision) return [];
    return Array.from(new Set(mosquesData.filter(m => m.division === selectedDivision).map(m => m.district)));
  }, [selectedDivision]);

  const thanas = useMemo(() => {
    if (!selectedDistrict) return [];
    return Array.from(new Set(mosquesData.filter(m => m.district === selectedDistrict).map(m => m.thana)));
  }, [selectedDistrict]);

  const pourashavas = useMemo(() => {
    if (!selectedThana) return [];
    return Array.from(new Set(mosquesData.filter(m => m.thana === selectedThana).map(m => m.pourashava)));
  }, [selectedThana]);

  const filteredMosques = mosquesData.filter((mosque) => {
    const matchesSearch = mosque.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDivision = !selectedDivision || mosque.division === selectedDivision;
    const matchesDistrict = !selectedDistrict || mosque.district === selectedDistrict;
    const matchesThana = !selectedThana || mosque.thana === selectedThana;
    const matchesPourashava = !selectedPourashava || mosque.pourashava === selectedPourashava;

    return matchesSearch && matchesDivision && matchesDistrict && matchesThana && matchesPourashava;
  });

  const handleDivisionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDivision(e.target.value);
    setSelectedDistrict("");
    setSelectedThana("");
    setSelectedPourashava("");
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrict(e.target.value);
    setSelectedThana("");
    setSelectedPourashava("");
  };

  const handleThanaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedThana(e.target.value);
    setSelectedPourashava("");
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "700px" }}>
          <p className="fs-5 text-uppercase text-primary">Find a Mosque</p>
          <h1 className="display-3">Mosques in Bangladesh</h1>
          <p className="mb-0">Find prayer times, locations, and facilities of mosques near you.</p>
        </div>

        {/* Search and Filter */}
        <div className="row g-3 mb-5 wow fadeIn" data-wow-delay="0.3s">
          <div className="col-12">
            <input
              type="text"
              className="form-control p-3"
              placeholder="Search mosque by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Cascading Dropdowns */}
          <div className="col-md-3">
            <select className="form-select p-3" value={selectedDivision} onChange={handleDivisionChange}>
              <option value="">Select Division</option>
              {divisions.map(div => <option key={div} value={div}>{div}</option>)}
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select p-3" value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedDivision}>
              <option value="">Select District</option>
              {districts.map(dist => <option key={dist} value={dist}>{dist}</option>)}
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select p-3" value={selectedThana} onChange={handleThanaChange} disabled={!selectedDistrict}>
              <option value="">Select Thana</option>
              {thanas.map(thana => <option key={thana} value={thana}>{thana}</option>)}
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select p-3" value={selectedPourashava} onChange={(pourashava) => setSelectedPourashava(pourashava.target.value)} disabled={!selectedThana}>
              <option value="">Select Pourashava</option>
              {pourashavas.map(pour => <option key={pour} value={pour}>{pour}</option>)}
            </select>
          </div>
        </div>

        {/* Mosque Grid */}
        <div className="row g-4">
          {filteredMosques.length > 0 ? (
            filteredMosques.map((mosque) => (
              <div key={mosque.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="card h-100 border-0 shadow-sm overflow-hidden" onClick={() => setSelectedMosque(mosque)} style={{ cursor: 'pointer' }}>
                  <div className="position-relative">
                    <img className="img-fluid w-100" src={mosque.image} alt={mosque.name} style={{ height: '250px', objectFit: 'cover' }} />
                    <div className="bg-primary text-white position-absolute top-0 start-0 m-3 py-1 px-3 rounded-pill small">
                      {mosque.thana}, {mosque.district}
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <h4 className="card-title mb-3 text-dark">{mosque.name}</h4>
                    <p className="text-muted mb-3"><i className="fa fa-map-marker-alt text-primary me-2"></i>{mosque.address}</p>
                    
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {mosque.facilities.wudu && <span className="badge bg-light text-dark" title="Wudu Area"><i className="fa fa-water text-primary"></i> Wudu</span>}
                      {mosque.facilities.womenSpace && <span className="badge bg-light text-dark" title="Women Space"><i className="fa fa-female text-primary"></i> Women</span>}
                      {mosque.facilities.ac && <span className="badge bg-light text-dark" title="AC"><i className="fa fa-snowflake text-primary"></i> AC</span>}
                      {mosque.facilities.parking && <span className="badge bg-light text-dark" title="Parking"><i className="fa fa-parking text-primary"></i> Parking</span>}
                    </div>

                    <button className="btn btn-outline-primary w-100 mt-2">View Details</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h4 className="text-muted">No mosques found matching your criteria.</h4>
            </div>
          )}
        </div>

        {/* Modal */}
        {selectedMosque && (
          <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex={-1}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <h5 className="modal-title">{selectedMosque.name}</h5>
                  <button type="button" className="btn-close" onClick={() => setSelectedMosque(null)}></button>
                </div>
                <div className="modal-body p-0">
                    <img src={selectedMosque.image} className="w-100" style={{ height: '300px', objectFit: 'cover' }} alt={selectedMosque.name} />
                    <div className="p-4">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <h6 className="text-primary text-uppercase mb-3">General Info</h6>
                                <p><i className="fa fa-map-marker-alt text-primary me-2"></i>{selectedMosque.address}</p>
                                <p className="text-muted small">
                                    {selectedMosque.pourashava}, {selectedMosque.thana}, {selectedMosque.district}, {selectedMosque.division}
                                </p>
                                {selectedMosque.imam && <p><i className="fa fa-user text-primary me-2"></i>Imam: {selectedMosque.imam}</p>}
                                {selectedMosque.contact && <p><i className="fa fa-phone-alt text-primary me-2"></i>{selectedMosque.contact}</p>}
                                <a href={selectedMosque.mapLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary mt-2">
                                    <i className="fa fa-map me-2"></i>Open in Google Maps
                                </a>
                            </div>
                            <div className="col-md-6">
                                <h6 className="text-primary text-uppercase mb-3">Prayer Times</h6>
                                <ul className="list-unstyled">
                                    <li className="d-flex justify-content-between border-bottom py-2"><span>Fajr:</span> <span className="fw-bold">{selectedMosque.prayerTimes.fajr}</span></li>
                                    <li className="d-flex justify-content-between border-bottom py-2"><span>Dhuhr:</span> <span className="fw-bold">{selectedMosque.prayerTimes.dhuhr}</span></li>
                                    <li className="d-flex justify-content-between border-bottom py-2"><span>Asr:</span> <span className="fw-bold">{selectedMosque.prayerTimes.asr}</span></li>
                                    <li className="d-flex justify-content-between border-bottom py-2"><span>Maghrib:</span> <span className="fw-bold">{selectedMosque.prayerTimes.maghrib}</span></li>
                                    <li className="d-flex justify-content-between border-bottom py-2"><span>Isha:</span> <span className="fw-bold">{selectedMosque.prayerTimes.isha}</span></li>
                                    <li className="d-flex justify-content-between py-2 text-primary"><span>Jummah:</span> <span className="fw-bold">{selectedMosque.prayerTimes.jummah}</span></li>
                                </ul>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <h6 className="text-primary text-uppercase mb-3">Facilities</h6>
                        <div className="row g-3">
                            <div className="col-6 col-md-4">
                                <div className={`d-flex align-items-center ${selectedMosque.facilities.wudu ? 'text-dark' : 'text-muted'}`}>
                                    <i className={`fa fa-water me-2 ${selectedMosque.facilities.wudu ? 'text-primary' : ''}`}></i> Wudu Area
                                </div>
                            </div>
                            <div className="col-6 col-md-4">
                                <div className={`d-flex align-items-center ${selectedMosque.facilities.womenSpace ? 'text-dark' : 'text-muted'}`}>
                                    <i className={`fa fa-female me-2 ${selectedMosque.facilities.womenSpace ? 'text-primary' : ''}`}></i> Women Space
                                </div>
                            </div>
                            <div className="col-6 col-md-4">
                                <div className={`d-flex align-items-center ${selectedMosque.facilities.ac ? 'text-dark' : 'text-muted'}`}>
                                    <i className={`fa fa-snowflake me-2 ${selectedMosque.facilities.ac ? 'text-primary' : ''}`}></i> AC Hall
                                </div>
                            </div>
                            <div className="col-6 col-md-4">
                                <div className={`d-flex align-items-center ${selectedMosque.facilities.parking ? 'text-dark' : 'text-muted'}`}>
                                    <i className={`fa fa-parking me-2 ${selectedMosque.facilities.parking ? 'text-primary' : ''}`}></i> Parking
                                </div>
                            </div>
                            <div className="col-6 col-md-4">
                                <div className={`d-flex align-items-center ${selectedMosque.facilities.wheelchair ? 'text-dark' : 'text-muted'}`}>
                                    <i className={`fa fa-wheelchair me-2 ${selectedMosque.facilities.wheelchair ? 'text-primary' : ''}`}></i> Wheelchair Access
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
