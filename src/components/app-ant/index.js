import { Col, Layout, Row, Slider } from 'antd';
import { AppleOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';

import { Table } from '../table';
import s from './styles.module.css';
import { useState } from 'react';
import Typography from 'antd/es/typography/Typography';
const { Header, Content, Footer } = Layout;

export const AntApp = () => {

    const [rows, setRows] = useState(10);

    return (
        <Layout>
            <Header className={s.header}>
                Header
                <AppleOutlined rotate={45}/>
                <DatePicker autoFocus={true} />
                </Header>
            <Content>
                <Row>
                    <Col xs={24} md={{ span: 16, offset: 4 }}>
                        <Slider min={1} max={100} defaultValue={rows} onChange={setRows} />
                        <Typography.Title level={1}>Количеств строк на странице {rows}</Typography.Title>
                        <Table rows={rows} />
                    </Col>
                </Row>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    )
}