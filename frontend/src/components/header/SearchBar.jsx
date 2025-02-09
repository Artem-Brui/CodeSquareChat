

export default function SearchBar({ updateSearchData, searchData }) {

  const nandleSearchChange = (e) => updateSearchData(e.target.value);

  return (
    <div className="search-bar">
      <div className="input-search-field">
        <input type="text" placeholder="Search" onChange={nandleSearchChange} value={searchData} />
      </div>
    </div>
  );
}
