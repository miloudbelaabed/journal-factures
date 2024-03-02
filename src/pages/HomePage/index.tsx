import { useEffect, useState } from "react"

import {
  Table,
  TableColumnType,
  Divider,
  Modal,
  Typography,
  Button,
} from "antd"

import axios from "axios"
import useSearch from "../../hooks/useSearch"

import {
  updateHeaderContentActionCreator,
  useHeader,
} from "../../contexts/AppContext"
import { CalculeMontantTTC } from "../../helpers/CalculeTTC"
import FactureTable from "./Components"

function UsersPage() {
  const { dispatch } = useHeader()
  useEffect(() => {
    dispatch(updateHeaderContentActionCreator("Journales des factures"))
  })
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [selectedRow, setSelectedRow] = useState([])
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const { getColumnSearchProps } = useSearch()

  const columns: TableColumnType<any>[] = [
    {
      title: "Facture ID",
      dataIndex: "InvoiceID",
      ...getColumnSearchProps("InvoiceID"),
    },
    {
      title: "Facture Date",
      dataIndex: "InvoiceDate",
      ...getColumnSearchProps("InvoiceDate"),
    },
    {
      title: "Client Nom",
      dataIndex: "ClientName",
      ...getColumnSearchProps("ClientName"),
    },
    {
      title: "Fournisseur Nom",
      dataIndex: "SupplierName",
      ...getColumnSearchProps("SupplierName"),
    },
    {
      title: "Montant TTC",
      render(value, record, index) {
        return <p>{CalculeMontantTTC(value.InvoiceItems)}</p>
      },
    },
  ]

  useEffect(() => {
    setLoading(true)
    axios
      .get("data.json")
      .then((res) => {
        setData(res.data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }
  return (
    <div>
      <Divider />
      <Table
        rowKey="InvoiceID"
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
        columns={columns}
        loading={loading}
        bordered
        size="small"
        dataSource={data}
        onRow={(record, _) => {
          return {
            onDoubleClick: (ev) => {
              setIsVisible(true)
              setSelectedRow(record)
            },
          }
        }}
      />
      <Modal
        style={{ top: 20 }}
        width={900}
        title={
          <>
            <Typography.Title style={{ margin: 0 }} level={4}>
              Detail du facture
            </Typography.Title>
            <Divider />
          </>
        }
        closable={false}
        open={isVisible}
        footer={[
          <Button
            key={1}
            onClick={() => {
              setIsVisible(false)
              setSelectedRow([])
            }}
          >
            Fermer
          </Button>,
          // <Button key={2}>Enregister</Button>,
        ]}
      >
        <FactureTable data={selectedRow} />
      </Modal>
    </div>
  )
}
export default UsersPage
