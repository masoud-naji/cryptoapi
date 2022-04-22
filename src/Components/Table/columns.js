import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "image",
    Footer: "image",
    accessor: "image",
    Filter: ColumnFilter,
    disableFilters:true,

    Cell: (props) => <img src={props.value} height="50rem" alt={props.value} />,
  },
  {
    Header: "rank",
    Footer: "rank",
    accessor: "market_cap_rank",
    Filter: ColumnFilter,
    disableFilters:true,
  },
  // { Header: "ID", Footer: "ID", accessor: "id" },
  { Header: "Name", Footer: "Name", accessor: "name",  Filter: ColumnFilter,
  disableFilters:true, },
  { Header: "symbol", Footer: "symbol", accessor: "symbol",  Filter: ColumnFilter,
  disableFilters:true, },
  {
    Header: "current price",
    Footer: "current price",
    accessor: "current_price",
    Filter: ColumnFilter,
    disableFilters:true,
  },
  { Header: "total volume", Footer: "total volume", accessor: "total_volume",  Filter: ColumnFilter,
  disableFilters:true, },
  { Header: "low 24h", Footer: "low 24h", accessor: "low_24h" ,  Filter: ColumnFilter,
  disableFilters:true,},
  { Header: "high 24h", Footer: "high 24h", accessor: "high_24h",  Filter: ColumnFilter,
  disableFilters:true, },
  {
    Header: "price change24h",
    Footer: "price change24h",
    accessor: "price_change_percentage_24h",
    Filter: ColumnFilter,
    disableFilters:true,
  },
];
