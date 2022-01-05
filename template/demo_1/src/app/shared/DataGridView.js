import * as React from "react";
import {
  DataGrid,
  GridToolbar,
  GridRowsProp,
  GridColDef,
} from "@mui/x-data-grid";
export default function DataGridView(props) {
  const { columns, rows } = props;

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <DataGrid
        style={{backgroundColor:'#FFF'}}
        rows={rows}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
        density="comfortable"
        disableDensitySelector
        initialState={{
          filter: {
            filterModel: {
              items: [
                {
                  columnField: "commodity",
                  operatorValue: "contains",
                  value: "rice",
                },
              ],
            },
          },
        }}
      />
    </div>
  );
}
