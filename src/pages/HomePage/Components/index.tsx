import { Button, Space, Table, TableColumnType } from "antd"
import useSearch from "../../../hooks/useSearch"
import { CalculeMontantTTCItem } from "../../../helpers/CalculeTTC"
import FactureTemplate from "../../../helpers/facture"

export default function FactureTable({ data }: any) {
  const { getColumnSearchProps } = useSearch()
  const columns: TableColumnType<any>[] = [
    {
      title: "Item Libelle",
      dataIndex: "ItemLibelle",
      ...getColumnSearchProps("ItemLibelle"),
    },
    {
      title: "Unité d’Item",
      dataIndex: "ItemUnit",
      ...getColumnSearchProps("ItemUnit"),
    },
    {
      title: "Quantité d’item",
      dataIndex: "ItemQuantity",
      ...getColumnSearchProps("ItemQuantity"),
    },
    {
      title: "Prix d’item",
      dataIndex: "ItemPrice",
      ...getColumnSearchProps("ItemPrice"),
    },
    {
      title: "Taxe d’item",
      dataIndex: "ItemTax",
      ...getColumnSearchProps("ItemTax"),
    },

    {
      title: "Montant d’item TTC",
      render(value, record, index) {
        return <p>{CalculeMontantTTCItem(value)}</p>
      },
    },
  ]
  function handleClick() {
    FactureTemplate(data)
  }
  return (
    <Space>
      {JSON.stringify(data)}
      <Button onClick={handleClick}>Imprimer</Button>
      <Table
        // rowKey="InvoiceID"
        columns={columns}
        bordered
        size="small"
        pagination={false}
        dataSource={data.InvoiceItems}
      />
    </Space>
  )
}
