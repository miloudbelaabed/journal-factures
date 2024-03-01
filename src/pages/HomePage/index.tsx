import { useEffect, useState } from "react"

import { Table, TableColumnType, Divider } from "antd"


import axios from "axios"
import { IUser } from "../../interfaces/users"
import useSearch from "../../hooks/useSearch"

import {
  updateHeaderContentActionCreator,
  useHeader,
} from "../../contexts/AppContext"

function UsersPage() {
  const { dispatch } = useHeader()
  useEffect(() => {
    dispatch(updateHeaderContentActionCreator("Journales des factures"))
  })
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState([])

  const { getColumnSearchProps } = useSearch()

  const columns: TableColumnType<IUser>[] = [
    {
      title: "Id facture",
      dataIndex: "InvoiceID",
      ...getColumnSearchProps("InvoiceID"),
    },
    {
      title: "Date facture",
      dataIndex: "InvoiceDate",
      ...getColumnSearchProps("InvoiceDate"),
    },
    {
      title: "Nom",
      dataIndex: "ClientName",
      ...getColumnSearchProps("ClientName"),
    },
    {
      title: "Nom du fournisseur",
      dataIndex: "SupplierName",
      ...getColumnSearchProps("SupplierName"),
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
        rowKey="id"
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
            onDoubleClick: (ev) => {},
          }
        }}
      />
    </div>
  )
}
export default UsersPage
