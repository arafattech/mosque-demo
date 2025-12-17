"use client";

import { mosquesData } from "@/data/mosques";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function MosqueSearch() {
  const [search, setSearch] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedThana, setSelectedThana] = useState("");
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

  const handleDivisionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDivision(e.target.value);
    setSelectedDistrict("");
    setSelectedThana("");
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrict(e.target.value);
    setSelectedThana("");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (selectedDivision) params.set("division", selectedDivision);
    if (selectedDistrict) params.set("district", selectedDistrict);
    if (selectedThana) params.set("thana", selectedThana);
    
    router.push(`/mosques?${params.toString()}`);
  };

  return (
    <div className="container-fluid booking mt-5 pb-5">
      <div className="container pb-5">
        <div className="bg-white shadow-lg rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="row g-3 align-items-center justify-content-center">
            <div className="col-12 text-center mb-4">
                <h2 className="text-primary">Find a Mosque Near You</h2>
                <p className="mb-0">Search by name, location, or area to find prayer times and facilities.</p>
            </div>
            <div className="col-md-12">
                <form onSubmit={handleSearch} className="row g-3">
                    <div className="col-md-3">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control border-0 bg-light"
                                id="mosqueSearch"
                                placeholder="Search Mosque..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <label htmlFor="mosqueSearch">Mosque Name</label>
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
