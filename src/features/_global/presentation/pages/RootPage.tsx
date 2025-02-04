import { Outlet, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { appsNavigate, sidebarItemsApp } from '../staticData';
import { Layout } from '../components';

export const RootPage = () => {
  const { pathname = '' } = useLocation();

  const sidebarItems = useMemo(
    () => sidebarItemsApp.map(item => ({ ...item, current: item.href === pathname })),
    [pathname],
  );

  return (
    <Layout sidebarItems={sidebarItems} apps={appsNavigate}>
      <Outlet />
    </Layout>
  );
};
