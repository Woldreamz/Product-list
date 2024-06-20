"use client";

interface SortFilterProps {
  handleSort: (type: string) => void;
  sortType: string;
  handleSearch: (query: string) => void;
}

const SortFilter: React.FC<SortFilterProps> = ({ handleSort, sortType, handleSearch }) => (
  <div className="flex justify-between items-center my-4">
    <div>
      <label htmlFor="sort" className="mr-2">Sort by:</label>
      <select
        id="sort"
        onChange={(e) => handleSort(e.target.value)}
        value={sortType}
        className="p-2 border rounded"
      >
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => handleSearch(e.target.value)}
      className="p-2 border rounded"
    />
  </div>
);

export default SortFilter;