import { Table } from "antd";
import { CUSTOMER_TABLE_COLUMNS } from "../util/constant";

const CustomerTable = ({ customers }) => {
  return (
    <div className="customer-table">
      <Table dataSource={customers} columns={CUSTOMER_TABLE_COLUMNS} rowKey="customer_id" />
    </div>
  );
}

export default CustomerTable;