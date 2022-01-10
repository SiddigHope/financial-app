import * as React from "react";
import { DataGrid, GridToolbar, arSD } from "@mui/x-data-grid";
import './dataGridView.css'
export default function DataGridView(props) {
  const { columns, rows, title, page, button } = props;

  return (
    <div
      className="card shadow"
      style={{ paddingBottom: 20, height: "100vh", width: "100%" }}
    >
      <div className="card-body">
        <div
          className="row mr-0 ml-0"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <h4 className="card-title mb-0">{title}</h4>
          <div
            className="row mr-0 ml-0"
            style={{
              width: page == "banks" ? "10%" : "auto",
              justifyContent: "space-between",
            }}
          >
            {page == "banks" && button}
            <button
              // onClick={() => this.toggleModal(true)}
              className="btn btn-sm btn-gradient-primary text-white m-0"
            >
              <i className="mdi mdi-download"></i>
            </button>
          </div>
        </div>
        <DataGrid
          localeText={arSD.components.MuiDataGrid.defaultProps.localeText}
          style={{ backgroundColor: "#FFF", borderRadius: 4, padding: 10 }}
          rows={rows}
          autoHeight
          disableSelectionOnClick={true}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 15]}
          density="comfortable"
          disableDensitySelector
          // hideFooter
        />
      </div>
    </div>
  );
}
