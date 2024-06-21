"use client";

// Define the props for SortFilter component
type Props = {
  handleSort: (type: string) => void;
  sortType: string;
  handleSearch: (query: string) => void;
};

// SortFilter component to handle sorting and searching of products
const SortFilter = ({ handleSort, sortType, handleSearch }: Props) => (
  <div className="flex flex-col md:flex-row justify-between rounded-md items-center my-4 font-poppins">
    {/* Search input */}
    <input
      type="text"
      placeholder="Search products..."
      className="p-2 border rounded-md mb-4 md:mb-0 md:mr-4"
      onChange={(e) => handleSearch(e.target.value)}
    />
    {/* Sort dropdown */}
    <select
      value={sortType}
      onChange={(e) => handleSort(e.target.value)}
      className="p-2 border rounded-md"
    >
      <option value="default">Sort by</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
    </select>
  </div>
);

export default SortFilter;