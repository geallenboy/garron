import { useLocation } from 'react-router-dom';
/**
 * 用于点击一级菜单的时候找到子菜单的第一个url
 * @param {*} data 菜单数据
 */
const menuUrl: any = (data: { children: string | any[] }) => {
  if (data.children && data.children.length > 0) {
    for (let index = 0; index < data.children.length; index++) {
      const element = data.children[index];
      if (element.url === '') {
        return menuUrl(element);
      } else {
        return element;
      }
    }
  } else {
    return null;
  }
};

/**
 *
 * @param urlName
 * @param menuRole
 * @returns
 */
const dataUrl = (urlName: string | null, menuRole: string) => {
  if (urlName != null && urlName.indexOf('http') != -1) {
    if (urlName.indexOf(`/${menuRole}/`) !== -1) {
      return urlName.substring(urlName.indexOf(`/${menuRole}/`), urlName.length);
    } else {
      return urlName;
    }
  }
  return urlName;
};

/**
 * 递归菜单，拼接菜单结构
 * @param {*} data 返回的菜单数据
 * @param {*} id 菜单ID
 * @param {*} name 菜单名称
 */
const menuItem: any = (data: any[], id: any, name: any, menuRole: string) => {
  const arrs: any[] = [];
  data.map(function (e) {
    if (e.parent === id) {
      arrs.push({
        id: e.id,
        url: dataUrl(e.url, menuRole),
        nw: e.nw,
        parent: e.parent,
        parentName: name,
        menuName: e.menuName,
        children: menuItem(data, e.id, name, menuRole)
      });
    }
  });
  return arrs;
};

/**
 * 处理菜单数据
 * @param {*} data 菜单接口返回数据
 */
const menu: any = (data: any[], menuRole: string) => {
  if (data === null) return null;
  const arrs: any[] = [];

  data.map(function (e: any) {
    if (menuRole === 'shopver') {
      if (e.parent === 'EDAO' && e.id.indexOf('EDAOC') != -1) {
        arrs.push({
          id: e.id,
          url: dataUrl(e.url, menuRole),
          nw: e.nw,
          parentName: e.menuName,
          parent: e.parent,
          menuName: e.menuName,
          children: menuItem(data, e.id, e.menuName, menuRole)
        });
      }
    }
  });

  for (let k1 = 0; k1 < arrs.length; k1++) {
    const ens = arrs[k1];
    if (ens.url === '' && ens.children.length > 0) {
      if (menuUrl(ens) === undefined) {
        ens.newurl = '';
      } else {
        ens.newurl = menuUrl(ens).url;
      }
    } else {
      ens.newurl = ens.url;
    }
  }

  return arrs;
};
let newName = '';
/**
 * 通过url获取菜单名称，用户展示左边菜单
 * @param {*} data 菜单数据
 * @param {*} url 当前用户访问的url
 */
const getHoverName = (data: any, url: string): string => {
  if (data === null) return '';

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element.url === url) {
      newName = element.parentName;
    } else {
      if (element.children.length > 0) {
        getHoverName(element.children, url);
      }
    }
  }
  return newName;
};

export interface useMenuType {
  menuData: any[];
  name?: string;
}

const useMenu = ({ menuData = [], name = 'shopver' }: useMenuType) => {
  const { pathname } = useLocation();
  const menuList = menu(menuData, name);
  const hoverName = getHoverName(menuList, pathname);
  console.log('hoverName:' + hoverName, pathname);
  return [menuList, hoverName];
};

export default useMenu;
