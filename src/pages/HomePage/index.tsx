import { useEffect, useState } from "react"

import {
  Table,
  TableColumnType,
  Divider,
  Modal,
  Typography,
  Button,
  Card,
  Form,
  Input,
  Space,
  Row,
  Col,
} from "antd"

import axios from "axios"
import useSearch from "../../hooks/useSearch"

import {
  updateHeaderContentActionCreator,
  useHeader,
} from "../../contexts/AppContext"
import { CalculeMontantTTC } from "../../helpers/CalculeTTC"
import FactureTable from "./Components"
import { COLOR_PRIMARY2 } from "../../config/constants"

function FacturePage() {
  const { dispatch } = useHeader()
  useEffect(() => {
    dispatch(updateHeaderContentActionCreator("Journales des factures"))
  })
  const [selectedRow, setSelectedRow] = useState(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const [formInstance] = Form.useForm()

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
  const onFinish = ({ libelle }: { libelle: string }) => {
    axios
      .get("data.json")
      .then((res) => {
        const result = res.data.filter((invoice: any) =>
          invoice.InvoiceItems.some((item: any) =>
            item.ItemLibelle.toString()
              .toLowerCase()
              .includes((libelle as string).toLowerCase())
          )
        )

        setData(result)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  function handleClose(ev: any) {
    setSelectedRow(null)
  }
  return (
    <div>
      <Card
        style={{
          border: `1px ${COLOR_PRIMARY2} solid`,
        }}
      >
        <Form form={formInstance} onFinish={onFinish}>
          <Form.Item name="libelle" label="Libelle">
            <Input />
          </Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" loading={loading}>
              Filtrer
            </Button>
            <Button
              disabled={loading}
              onClick={() => {
                formInstance.resetFields()

                axios.get("data.json").then((res) => {
                  setData(res.data)
                })
              }}
            >
              Réinitialiser
            </Button>
          </Space>
        </Form>
      </Card>

      <Divider />
      <Typography.Text style={{ fontWeight: "bold" }}>
        <b style={{ color: "red" }}>Remarque: </b>Double-cliquez sur l'une des
        lignes du tableau pour consulter la facture en détail et ensuite
        l'imprimer.
      </Typography.Text>

      <Row>
        <Col span={12}>
          <Table
            rowKey="InvoiceID"
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
        </Col>
        <Col span={1}>
          <Divider
            style={{
              color: "red",
              backgroundColor: "red",
              height: "100%",
              textAlign: "center",
            }}
            type="vertical"
          />
        </Col>
        <Col span={11}>
          {selectedRow !== null ? (
            <Card>
              <Row style={{ justifyContent: "space-between" }}>
                <Col>
                  <Typography.Title>Detail de facture</Typography.Title>
                </Col>
                <Col>
                  <Button
                    type="primary"
                    style={{ backgroundColor: COLOR_PRIMARY2 }}
                    onClick={handleClose}
                  >
                    X
                  </Button>
                </Col>
              </Row>

              <FactureTable data={selectedRow} />
            </Card>
          ) : null}
        </Col>
      </Row>

      {/* <Modal
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
      </Modal> */}
    </div>
  )
}
export default FacturePage
