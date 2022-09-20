import { useMenu } from '@garron/hooks';
import { Affix, Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.less';

export const HeaderPage = ({ userData, menuData }: any) => {
  const { shopTypeName, exit_url, shopName } = userData;
  const [menuList, hoverName]: any = useMenu({ menuData: menuData });

  return (
    <Affix>
      <div className="app-header">
        <Row align="middle" justify="space-between">
          <Col span={5}>
            <span className="logo">
              <img src={'http://edao.suning.com/webstatic/images/newlogo.png'} />
              <span className="header_line">|</span>
              <span className="edaoVersion">{shopTypeName}</span>
            </span>
          </Col>
          <Col span={8}>
            <div className="merchant-user">
              <span title={shopName}>{shopName}</span>
              <span className="header_line">|</span>
              {menuData.map(function (e: any, i: number) {
                if (e.menuName === '订购') {
                  return (
                    <a key={i} className="dg_mlr" target="_blank" href={e.newurl} rel="noreferrer">
                      <span>{e.menuName}</span>
                    </a>
                  );
                } else if (e.menuName === '个人中心') {
                  return (
                    <span key={i}>
                      <span className="header_line">|</span>
                      {e.menuName}
                    </span>
                  );
                }
              })}

              <span className="header_line">|</span>
              <a style={{ margin: '0 5px' }} href={exit_url}>
                <span>退出</span>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24} className="emenuArea">
            {menuList.map((e: any) => {
              if (e.menuName === '订购' || e.menuName === '个人中心') {
                return false;
              }
              if (e.newurl && e.newurl.indexOf('/shopver/') !== -1) {
                return (
                  <Link
                    key={e.newurl}
                    className={e.menuName === hoverName ? 'on header_a' : 'header_a'}
                    to={e.newurl}
                  >
                    <span className="header_aon">{e.menuName}</span>
                  </Link>
                );
              } else {
                return (
                  <a
                    key={e.newurl}
                    className={e.menuName === hoverName ? 'on header_a' : 'header_a'}
                    href={e.newurl}
                  >
                    <span className="header_aon">{e.menuName}</span>
                  </a>
                );
              }
            })}
          </Col>
        </Row>
      </div>
    </Affix>
  );
};
