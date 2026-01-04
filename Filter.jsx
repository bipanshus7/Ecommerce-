export default function Filters({ products, setSearch, setCategory, setSort }) {
  const categories = ["all", ...new Set(products.map(p => p.category))];

  return (
    <>
      <input placeholder="Search" onChange={e => setSearch(e.target.value)} />

      <select onChange={e => setCategory(e.target.value)}>
        {categories.map(c => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select onChange={e => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="low-high">Low → High</option>
        <option value="high-low">High → Low</option>
      </select>
    </>
  );
}
