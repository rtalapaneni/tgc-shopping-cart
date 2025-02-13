const { Table } = require("antd")
const { PRODUCT_TABLE_COLUMNS } = require("../util/constant")

const ProductTable = ({ products }) => {
    return (
        <Table dataSource={products} columns={PRODUCT_TABLE_COLUMNS} rowKey="product_ID" />
    )
}

export default ProductTable;