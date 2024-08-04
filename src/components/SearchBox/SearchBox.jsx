import css from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => (
  <input className={css.search} type="text" value={filter} onChange={onFilterChange} placeholder="Search contacts" />
);

export default SearchBox;

// function SearchBox({ searchTerm, onSearch }) {
//   const handleChange = (event) => {
//     onSearch(event.target.value);
//   };

//   return (
//     <input
//     className="inputGrid"
//       type="text"
//       value={searchTerm}
//       onChange={handleChange}
//       placeholder="Search by name"
//     />
//   );
// }

// export default SearchBox;
