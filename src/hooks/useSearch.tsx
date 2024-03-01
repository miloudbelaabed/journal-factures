import { SearchOutlined } from "@ant-design/icons"
import { Button, Input, InputRef, Space } from "antd"
import { FilterConfirmProps } from "antd/es/table/interface"
import { ColumnType } from "antd/lib/table"
import { useRef, useState } from "react"
import Highlighter from "react-highlight-words"
import get from "lodash.get"
import isequal from "lodash.isequal"

const useSearch = () => {
  const [searchText, setSearchText] = useState("")
  const [searchedColumn, setSearchedColumn] = useState("")
  const searchInput = useRef<InputRef>(null)
  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: any
  ) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }

  const handleReset = (clearFilters: () => void) => {
    if (clearFilters) {
      clearFilters()
    }

    setSearchText("")
    setSearchedColumn("")
  }

  const getColumnSearchProps = (dataIndex: any): ColumnType<any> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: "20px 34px" }}>
        <Input
          size="small"
          ref={searchInput}
          placeholder="Trouver..."
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => {
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => {
              return handleSearch(selectedKeys as string[], confirm, dataIndex)
            }}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 120 }}
          >
            Rechercher
          </Button>
          <Button
            onClick={() => {
              if (clearFilters) handleReset(clearFilters)
              handleSearch(selectedKeys as string[], confirm, dataIndex)
              setSearchText("")
            }}
            size="small"
            style={{ width: 90 }}
          >
            Reinitialiser
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      get(record, dataIndex)
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100)
      }
    },
    render: (text) => {
      return isequal(searchedColumn, dataIndex) ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      )
    },
  })
  return { getColumnSearchProps, searchText, searchedColumn }
}

export default useSearch
