import React, { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import SearchField from "./SearchField";

function CardContainer() {
  const [searchResult, setSearchResult] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [searchText, setSearchText] = useState("naruto");

  const data = searchResult.map((anime) => (
    <Card key={anime?.mal_id} image={anime?.image_url} title={anime?.title} />
  ));

  const showMore = () => {
    setPageNum(pageNum + 1);
    const query = `q=${searchText}&page=${pageNum}`;
    fetchData(query);
  };

  const search = (text) => {
    setSearchResult([]);
    const query = `q=${text}&page=${pageNum}`;
    fetchData(query);
  };

  async function fetchData(query = "q=naruto&page=1") {
    const response = await fetch(
      `https://api.jikan.moe/v3/search/anime?${query}`
    );
    let results = (await response.json()).results;
    results = [...searchResult, ...results];
    setSearchResult(results);
  }

  useEffect(() => {
    showMore();
  }, []);

  return (
    <>
      <SearchField onSearch={search} />
      <div className="card-container">{data}</div>
      <Button handleClick={showMore} text="Load More" />
    </>
  );
}

export default CardContainer;
