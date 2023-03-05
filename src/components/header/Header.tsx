import React, { useMemo } from "react";
import { Layout, Menu } from 'antd';
import type { MenuProps } from "antd";
import { Link, useLocation } from 'react-router-dom';

import { TMenuItem } from "./types";
import { menuItems } from "@constants/menuItems";

import styles from './styles.module.scss';

const { Header: AntdHeader } = Layout;

type MenuItem = Required<MenuProps>["items"][number] & {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: string;
  link?: string;
  count?: string;
};

function getItem({
  label,
  key,
  link,
  children,
  icon,
  type,
  count,
}: MenuItem): MenuItem {
  const Label = link ? (
    <Link to={link}>{label}</Link>
  ) : (
    label
  );

  return {
    key,
    icon,
    children,
    label: Label,
    type,
    link,
  } as MenuItem;
}

const getItems = (itemsList: TMenuItem[], subLevel = ""): MenuItem[] => {
  return itemsList.map((item, idx) => {
    if (item.children) {
      let newSubLevel = (subLevel ? `${subLevel}-` : "") + `sub${idx}`;

      return getItem({
        label: item.title,
        key: newSubLevel,
        children: getItems(item.children, newSubLevel),
        type: item.type,
      });
    } else {
      return getItem({
        label: item.title,
        key: `${subLevel ? `${subLevel}-` : ""}${idx}`,
        link: item.link,
        type: item.type,
      });
    }
  });
};

const items = getItems(menuItems);

const getDefaultKeys = (items: MenuItem[], path: string) => {
  let defaultOpenKeys: string[] = [];
  const defaultSelectedKeys: string[] = [];

  let selectedKeysAccumulator: string[] = [];

  const findItem = (items: MenuItem[], path: string, isRoot?: boolean) => {
    for (const item of items) {
      if (item.link === path) {
        if (!isRoot) defaultOpenKeys = [...selectedKeysAccumulator];
        defaultSelectedKeys.push(String(item.key));
      } else if (item.link && item.link !== path && isRoot) {
        selectedKeysAccumulator = [];
      } else if (!item.link && item.children) {
        selectedKeysAccumulator.push(String(item.key));
        findItem(item.children, path);
      }
    }
  };

  findItem(items, path, true);

  return { defaultSelectedKeys, defaultOpenKeys };
};

const Header = () => {
  let { pathname } = useLocation();
  const { defaultSelectedKeys, defaultOpenKeys } = useMemo(() => {
    return getDefaultKeys(items, pathname);
  }, []);

  console.log('>items', items);

  return (
      <AntdHeader>
        <div className={styles.logo}>Мин татар телендә сөйләшәм</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={defaultSelectedKeys}
          items={items}
          multiple={false}
        />
      </AntdHeader>
  );
};

export default Header;
