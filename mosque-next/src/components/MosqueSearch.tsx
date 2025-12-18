"use client";

import { mosquesData } from "@/data/mosques";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function MosqueSearch() {
  const [search, setSearch] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedThana, setSelectedThana] = useState("");
  const [selectedPourashava, setSelectedPourashava] = useState("");
  const router = useRouter();

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (selectedDivision) params.set("division", selectedDivision);
    if (selectedDistrict) params.set("district", selectedDistrict);
    if (selectedThana) params.set("thana", selectedThana);
    if (selectedPourashava) params.set("pourashava", selectedPourashava);
    
    // Push to current page (home) with query params and hash to scroll to results.
    router.push(`/?${params.toString()}#mosque-listing`);
  };

  return (
    <div className="container-fluid booking mt-5 pb-1">
      <div className="container pb-5">
        <div className="bg-white shadow-lg rounded p-4  wow fadeInUp" data-wow-delay="0.1s">
          <div className="row g-3 align-items-center justify-content-center">
            <div className="col-12 text-center mb-4">
                <h2 className="text-primary">Find a Mosque Near You</h2>
                <p className="mb-0">Search by name, location, or area to find prayer times and facilities.</p>
            </div>
            <div className="col-md-12">
                <form onSubmit={handleSearch} className="row g-3">
                    <div className="col-md-12 mb-3">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control border-0 bg-light"
                                id="mosqueSearch"
                                placeholder="Search Mosque..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <label htmlFor="mosqueSearch">Search by Mosque Name</label>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-floating">
                            <select 
                                className="form-select border-0 bg-light" 
                                id="divisionSelect" 
                                value={selectedDivision} 
                                onChange={handleDivisionChange}
                            >
                                <option value="">All Divisions</option>
                                {divisions.map(div => <option key={div} value={div}>{div}</option>)}
                            </select>
                            <label htmlFor="divisionSelect">Division</label>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-floating">
                            <select 
                                className="form-select border-0 bg-light" 
                                id="districtSelect" 
                                value={selectedDistrict} 
                                onChange={handleDistrictChange}
                                disabled={!selectedDivision}
                            >
                                <option value="">All Districts</option>
                                {districts.map(dist => <option key={dist} value={dist}>{dist}</option>)}
                            </select>
                            <label htmlFor="districtSelect">District</label>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-floating">
                            <select 
                                className="form-select border-0 bg-light" 
                                id="thanaSelect" 
                                value={selectedThana} 
                                onChange={handleThanaChange}
                                disabled={!selectedDistrict}
                            >
                                <option value="">All Thanas</option>
                                {thanas.map(thana => <option key={thana} value={thana}>{thana}</option>)}
                            </select>
                            <label htmlFor="thanaSelect">Thana</label>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-floating">
                            <select 
                                className="form-select border-0 bg-light" 
                                id="pourashavaSelect" 
                                value={selectedPourashava} 
                                onChange={(e) => setSelectedPourashava(e.target.value)}
                                disabled={!selectedThana}
                            >
                                <option value="">All Pourashavas</option>
                                {pourashavas.map(pour => <option key={pour} value={pour}>{pour}</option>)}
                            </select>
                            <label htmlFor="pourashavaSelect">Pourashava</label>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <button className="btn btn-primary w-100 py-3" type="submit">
                            Search
                        </button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
