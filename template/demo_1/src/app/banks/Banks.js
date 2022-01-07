import React, { Component } from "react";
import DataGridView from "../shared/DataGridView";
import NewBank from "./NewBank";
import { GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { banks } from "../../data";

const columns = [
  {
    headerAlign: "center",
    field: "id",
    headerName: "#",
    width: 150,
    align: "center",
  },
  {
    headerAlign: "center",
    field: "name",
    headerName: "اسم البنك",
    width: 200,
    align: "center",
  },
  {
    headerAlign: "center",
    field: "email",
    headerName: "البريد الخاص",
    width: 200,
    align: "center",
  },
  {
    headerAlign: "center",
    field: "address",
    headerName: "عنوان البنك",
    width: 200,
    align: "center",
  },
  {
    headerAlign: "center",
    field: "icon",
    headerName: "شعار البنك",
    width: 200,
    editable: true,
    align: "center",
    renderCell: (params) => (
      <img
        src={params.value}
        style={{ width: 60, height: 60, borderRadius: 30 }}
      />
    ), // renderCell will render the component
  },
];

export default class Banks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      rows: [],
    };
  }

  componentDidMount() {
    this.setState({
      rows: banks,
    });
  }

  toggleModal = (modalStatus) => {
    this.setState({
      toggleModal: modalStatus,
    });
    // console.log(modalStatus)
  };

  render() {
    return (
      <div>
        <div style={{ marginBottom: 20 }}>
          <button
            onClick={() => this.toggleModal(true)}
            style={{ alignSelf: "flex-end", height: 40, color: "#FFF" }}
            className="btn btn-info btn-fw"
          >
            {"بنك جديد"}
          </button>
        </div>
        <NewBank
          toggleModal={this.toggleModal}
          modalStatus={this.state.toggleModal}
        />
        <DataGridView columns={columns} rows={this.state.rows} />
      </div>
    );
  }
}
