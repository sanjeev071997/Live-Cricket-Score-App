import React, { useEffect, useState } from "react";
import circle from "./circle.png";
import spinner from "./spinner.gif";

const CricketScore = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 12;

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        // "https://api.cricapi.com/v1/cricScore?apikey=0328c2e4-976d-4f98-a46c-16b370991bbc" 
        "https://api.cricapi.com/v1/cricScore?apikey=9b1921c5-88c2-426c-a812-cc491f063b05" // my api 
      );
      const result = await response.json();
      setData(result.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  const handleBtn = () => {
    setSearch(inputData);
    setCurrentPage(1);
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredData = data.filter(
    (curVal) =>
      curVal.status !== "Match not started" &&
      (curVal.series.toLowerCase().includes(search.toLowerCase()) ||
        curVal.t1.toLowerCase().includes(search.toLowerCase()) ||
        curVal.t2.toLowerCase().includes(search.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="main-container">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search Match, Series"
          onChange={handleInput}
          value={inputData}
        />
        <button onClick={handleBtn}>Search</button>
      </div>
      <div className="heading">
        <img src={circle} alt="Logo" />
        <p>Live Cricket Score App</p>
      </div>

      {loading ? (
        <div className="loading">
          <img src={spinner} alt="Loading..." />
          <p>Fetching live data...</p>
        </div>
      ) : (
        <div className="container">
          {paginatedData.length > 0 ? (
            paginatedData.map((curVal, index) => (
              <div className="card" key={index}>
                <h3>{curVal.series}</h3>
                <h3>{curVal.matchType}</h3>
                <div className="img">
                  <div>
                    <img src={curVal.t1img} alt="Team 1" />
                    <p>{curVal.t1}</p>
                    <p>{curVal.t1s}</p>
                  </div>
                  <div>
                    <img src={curVal.t2img} alt="Team 2" />
                    <p>{curVal.t2}</p>
                    <p>{curVal.t2s}</p>
                  </div>
                </div>
                <p className="status">Status: {curVal.status}</p>
              </div>
            ))
          ) : (
            <p>Data Not Found!</p>
          )}
        </div>
      )}

      {filteredData.length > 0 && !loading && (
        <div className="pagination">
          <button
            onClick={() => handlePagination(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePagination(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePagination(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CricketScore;
