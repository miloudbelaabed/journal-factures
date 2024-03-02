import { Form, Row, Col, Select, Button, Space, Card, message } from "antd"
import { useEffect, useState } from "react"

import { COLOR_PRIMARY2 } from "../../../config/constants"

export interface IStatistiqueFilterFormValues {
  DirectionId?: number
}

interface IFilterForm {
  onSubmit: (values: IStatistiqueFilterFormValues) => void
  onReset: () => void
  loading: boolean
  directionId: number
  setDirectionId: any
  setFirstLoading: any
  firstLoading: boolean
  formInstance: any
}

function FilterForm({
  onSubmit,
  onReset,
  loading,
  directionId,
  setDirectionId,
  setFirstLoading,
  firstLoading,
  formInstance,
}: IFilterForm) {
  // const DirectionList = useGetDirectionsList();

  async function getListWilayas(id: number) {
    setWilayasLoading(true)

      .then((res) => {
        setWilayas(res)
      })
      .finally(() => {
        setWilayasLoading(false)
      })
  }

  const onFinish = (values: IStatistiqueFilterFormValues) => {
    onSubmit(values)
  }

  function handleDirectionChange(id: number) {
    getListWilayas(id)
    formInstance.setFieldValue("WilayaId", undefined)
  }

  return (
    <Card style={{ border: `1px ${COLOR_PRIMARY2} solid` }}>
      <Form form={formInstance} onFinish={onFinish}>
        <Row gutter={[8, 8]}>
          <Col span={6}>
            <Form.Item name="directionId">
              <Select
                onChange={handleDirectionChange}
                placeholder="Direction"
                loading={directionLoading}
              >
                {DirectionList.map((el: IDirection) => {
                  return (
                    <Select.Option value={el.id} key={el.id}>
                      {el.nomDirectionLt}
                    </Select.Option>
                  )
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="WilayaId">
              <Select placeholder="Wilaya" allowClear loading={wilayasLoading}>
                {wilayas.map((el: IWilaya) => {
                  return (
                    <Select.Option value={el.id} key={el.id}>
                      {el.nomWilayaLt}
                    </Select.Option>
                  )
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col>
            <Space>
              <Button type="primary" htmlType="submit" loading={loading}>
                Filtrer
              </Button>
              <Button
                disabled={loading}
                onClick={() => {
                  formInstance.resetFields()
                  setFirstLoading(!firstLoading)
                  onReset()
                }}
              >
                Réinitialiser
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}

export default FilterForm
