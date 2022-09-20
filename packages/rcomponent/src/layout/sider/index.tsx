import { useMenu } from '@garron/hooks';
import React from 'react';
import { Link } from 'react-router-dom';
import { leftMenuIcon } from '../../config';
import './style.less';

export const SiderPage = ({ menuData }: any) => {
  const [menuList, hoverName]: any = useMenu({ menuData: menuData });
  return (
    <>
      {menuList.map((k: any, i: number) => {
        if (k.menuName === hoverName) {
          return (
            <div key={i} className="leftMenu">
              {k.children.map((k1: any, i1: number) => {
                return (
                  <div key={i1}>
                    {k1.url === '' ? (
                      <h3 className="h3">
                        <i className={`leftMenu_icon ${leftMenuIcon[k1.menuName]}`} />
                        <span className="leftMenu_one">{k1.menuName}</span>
                      </h3>
                    ) : k1.url.indexOf('/shopver/') > -1 ? (
                      <p className="dd_two">
                        <Link to={k1.url} className={hoverName.indexOf(k1.url) === -1 ? '' : 'on'}>
                          {k1.menuName}
                        </Link>
                      </p>
                    ) : (
                      <p className="dd_two">
                        <a href={k1.url} target="_blank" rel="noreferrer">
                          {k1.menuName}
                        </a>
                      </p>
                    )}
                    {k1.children.map((k2: any, i2: number) => {
                      if (k2.children.length > 0) {
                        return (
                          <div key={i2}>
                            <p className="dd_two">
                              <span>{k2.menuName}</span>
                            </p>
                            {k2.children.map((k3: any) => {
                              return k3.url.indexOf('/shopver/') > -1 ? (
                                <p className="dd_thress">
                                  <Link
                                    to={k3.url}
                                    className={hoverName.indexOf(k3.url) === -1 ? '' : 'on'}
                                  >
                                    {k3.menuName}
                                  </Link>
                                </p>
                              ) : (
                                <p className="dd_thress">
                                  <a href={k3.url} target="_blank" rel="noreferrer">
                                    {k3.menuName}
                                  </a>
                                </p>
                              );
                            })}
                          </div>
                        );
                      } else {
                        if (k2.url.indexOf('/yunxin-admin-web/security') > -1) {
                          return (
                            <p className="dd_two" key={i2}>
                              <span>{k2.menuName}</span>
                            </p>
                          );
                        } else if (k2.url.indexOf('/shopver/') > -1) {
                          return (
                            <p className="dd_two" key={i2}>
                              <Link
                                to={k2.url}
                                className={hoverName.indexOf(k2.url) === -1 ? '' : 'on'}
                              >
                                {k2.menuName}
                              </Link>
                            </p>
                          );
                        } else {
                          return (
                            <p className="dd_two" key={i2}>
                              <a href={k2.url} target="_blank" rel="noreferrer">
                                {k2.menuName}
                              </a>
                            </p>
                          );
                        }
                      }
                    })}
                  </div>
                );
              })}
            </div>
          );
        }
      })}
    </>
  );
};
