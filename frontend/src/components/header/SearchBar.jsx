
export default function SearchBar() {
  return (
    <div className="search-bar">
      <div className="input-search-field">
        <input type="text" placeholder="Search" />
      </div>
      <div className="button-search-field">
        <button>
          <div className="svg-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4rem"
              height="4rem"
              viewBox="0 0 26 26"
            >
              <rect width="26" height="26" fill="#fff" />
              <path
                fill="#a926f0"
                d="M10 .188A9.81 9.81 0 0 0 .187 10A9.81 9.81 0 0 0 10 19.813c2.29 0 4.393-.811 6.063-2.125l.875.875a1.845 1.845 0 0 0 .343 2.156l4.594 4.625c.713.714 1.88.714 2.594 0l.875-.875a1.84 1.84 0 0 0 0-2.594l-4.625-4.594a1.82 1.82 0 0 0-2.157-.312l-.875-.875A9.812 9.812 0 0 0 10 .188M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16M4.937 7.469a5.45 5.45 0 0 0-.812 2.875a5.46 5.46 0 0 0 5.469 5.469a5.5 5.5 0 0 0 3.156-1a7 7 0 0 1-.75.03a7.045 7.045 0 0 1-7.063-7.062c0-.104-.005-.208 0-.312"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
