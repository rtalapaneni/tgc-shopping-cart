import { PRODUCT_TABLE_COLUMNS } from "./ProductConstants";

const { Table } = require("antd")

const ProductTable = ({ products }) => {
    return (
        <Table dataSource={products} columns={PRODUCT_TABLE_COLUMNS} rowKey="id" />
    )
}

export default ProductTable;