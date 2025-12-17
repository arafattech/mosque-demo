"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { Mosque, mosquesData } from "@/data/mosques";

interface MosqueListingProps {
  enableFilters?: boolean;
  defaultLimit?: number;
}

export default function MosqueListing({ enableFilters = true, defaultLimit }: MosqueListingProps) {
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

    const pourashava = searchParams.get("pourashava");
    if (pourashava) setSelectedPourashava(pourashava);
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

  const displayedMosques = useMemo(() => {
    if (defaultLimit && !searchTerm && !selectedDivision && !selectedDistrict && !selectedThana && !selectedPourashava) {
      return filteredMosques.slice(0, defaultLimit);
    }
    return filteredMosques;
  }, [filteredMosques, defaultLimit, searchTerm, selectedDivision, selectedDistrict, selectedThana, selectedPourashava]);

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
    <div className="container-fluid py-5" id="mosque-listing">
      <div className="container py-5">
        {enableFilters && (
          <>
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
                <select className="form-select p-3" value={selectedPourashava} onChange={(e) => setSelectedPourashava(e.target.value)} disabled={!selectedThana}>
                  <option value="">Select Pourashava</option>
                  {pourashavas.map(pour => <option key={pour} value={pour}>{pour}</option>)}
                </select>
              </div>
            </div>
          </>
        )}

        {/* Mosque Grid */}
        <div className="row g-4">
          {displayedMosques.length > 0 ? (
            displayedMosques.map((mosque) => (
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
          <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }} tabIndex={-1}>
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content border-0 shadow-lg overflow-hidden">
                <div className="modal-header border-0 bg-light">
                  <h5 className="modal-title text-primary fw-bold">{selectedMosque.name}</h5>
                  <button type="button" className="btn-close" onClick={() => setSelectedMosque(null)}></button>
                </div>
                <div className="modal-body p-0">
                    <div className="position-relative">
                        <img src={selectedMosque.image} className="w-100" style={{ height: '300px', objectFit: 'cover' }} alt={selectedMosque.name} />
                        <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                            <p className="text-white mb-0"><i className="fa fa-map-marker-alt text-primary me-2"></i>{selectedMosque.address}</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="bg-light p-4 rounded h-100">
                                    <h6 className="text-primary text-uppercase mb-3 fw-bold border-bottom pb-2">General Info</h6>
                                    <div className="d-flex flex-column gap-3">
                                        <div className="d-flex align-items-start">
                                            <i className="fa fa-map text-primary mt-1 me-3"></i>
                                            <div>
                                                <small className="text-muted d-block">Location</small>
                                                <span className="fw-medium">{selectedMosque.pourashava}, {selectedMosque.thana}, {selectedMosque.district}</span>
                                            </div>
                                        </div>
                                        {selectedMosque.imam && (
                                            <div className="d-flex align-items-start">
                                                <i className="fa fa-user text-primary mt-1 me-3"></i>
                                                <div>
                                                    <small className="text-muted d-block">Imam</small>
                                                    <span className="fw-medium">{selectedMosque.imam}</span>
                                                </div>
                                            </div>
                                        )}
                                        {selectedMosque.contact && (
                                            <div className="d-flex align-items-start">
                                                <i className="fa fa-phone-alt text-primary mt-1 me-3"></i>
                                                <div>
                                                    <small className="text-muted d-block">Contact</small>
                                                    <span className="fw-medium">{selectedMosque.contact}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <a href={selectedMosque.mapLink} target="_blank" rel="noreferrer" className="btn btn-primary w-100 mt-4">
                                        <i className="fa fa-location-arrow me-2"></i>Get Directions
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h6 className="text-primary text-uppercase mb-3 fw-bold border-bottom pb-2">Prayer Times</h6>
                                <div className="row g-2">
                                    {Object.entries(selectedMosque.prayerTimes).map(([name, time]) => (
                                        <div key={name} className="col-6">
                                            <div className={`p-2 rounded border d-flex justify-content-between align-items-center ${name === 'jummah' ? 'bg-primary text-white border-primary' : 'bg-white'}`}>
                                                <span className="text-capitalize small fw-bold">{name}</span>
                                                <span className="small">{time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <h6 className="text-primary text-uppercase mt-4 mb-3 fw-bold border-bottom pb-2">Facilities</h6>
                                <div className="d-flex flex-wrap gap-2">
                                    <span className={`badge ${selectedMosque.facilities.wudu ? 'bg-success' : 'bg-secondary'} p-2`}><i className="fa fa-water me-1"></i> Wudu</span>
                                    <span className={`badge ${selectedMosque.facilities.womenSpace ? 'bg-success' : 'bg-secondary'} p-2`}><i className="fa fa-female me-1"></i> Women Space</span>
                                    <span className={`badge ${selectedMosque.facilities.ac ? 'bg-success' : 'bg-secondary'} p-2`}><i className="fa fa-snowflake me-1"></i> AC</span>
                                    <span className={`badge ${selectedMosque.facilities.parking ? 'bg-success' : 'bg-secondary'} p-2`}><i className="fa fa-parking me-1"></i> Parking</span>
                                    <span className={`badge ${selectedMosque.facilities.wheelchair ? 'bg-success' : 'bg-secondary'} p-2`}><i className="fa fa-wheelchair me-1"></i> Wheelchair</span>
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
