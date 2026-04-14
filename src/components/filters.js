import { MONTHS, YEARS } from "../constants";

function Filters({ month, year, setMonth, setYear }) {
  return (
    <div>
      <select value={month} onChange={e => setMonth(e.target.value)}>
        <option value="">All Months</option>
        {MONTHS.map((m, i) => (
          <option key={i} value={i + 1}>{m}</option>
        ))}
      </select>

      <select value={year} onChange={e => setYear(e.target.value)}>
        {YEARS.map(y => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
    </div>
  );
}

export default Filters;