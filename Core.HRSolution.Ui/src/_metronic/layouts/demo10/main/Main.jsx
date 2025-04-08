import { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router';
import { useMenuCurrentItem } from '@/_metronic/components/menu';
import { Footer, Header, Sidebar, Toolbar, ToolbarActions, ToolbarHeading } from '..';
import { useMenus } from '@/_metronic/providers';
import { useResponsive } from '@/_metronic/hooks';
import { Link } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from '@/_metronic/components/ui/popover';
import { Calendar } from '@/_metronic/components/ui/calendar';
import { addDays, format } from 'date-fns';
import { cn } from '@/_metronic/lib/utils';
import { KeenIcon } from '@/_metronic/components/keenicons';
const Main = () => {
  const mobileMode = useResponsive('down', 'lg');
  const {
    pathname
  } = useLocation();
  const {
    getMenuConfig
  } = useMenus();
  const menuConfig = getMenuConfig('primary');
  const menuItem = useMenuCurrentItem(pathname, menuConfig);
  const [date, setDate] = useState({
    from: new Date(2025, 0, 20),
    to: addDays(new Date(2025, 0, 20), 20)
  });
  return <Fragment>
      <Helmet>
        <title>{menuItem?.title}</title>
      </Helmet>

      <div className="flex grow">
        {mobileMode && <Header />}

        <div className="flex flex-col lg:flex-row grow pt-[--tw-header-height] lg:pt-0">
          <Sidebar />

          <div className="flex flex-col grow lg:rounded-l-xl bg-[--tw-content-bg] dark:bg-[--tw-content-bg-dark] border border-gray-300 dark:border-gray-200 lg:ms-[--tw-sidebar-width]">
            <div className="flex flex-col grow lg:scrollable-y-auto lg:[scrollbar-width:auto] lg:light:[--tw-scrollbar-thumb-color:var(--tw-content-scrollbar-color)] pt-5">
              <main className="grow" role="content">
                <Toolbar>
                  <ToolbarHeading />
                  <ToolbarActions>
                    <Link to={'/account/home/get-started'} className="btn btn-sm btn-light">
                      <KeenIcon icon="exit-down" />
                      Export
                    </Link>
                    <Popover>
                      <PopoverTrigger asChild>
                      <button id="date" className={cn('btn btn-sm btn-light data-[state=open]:bg-light-active', !date && 'text-gray-400')}>
                        <KeenIcon icon="calendar" className="me-0.5" />
                        {date?.from ? date.to ? <>
                              {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                            </> : format(date.from, 'LLL dd, y') : <span>Pick a date range</span>}
                      </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="end">
                        <Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={2} />
                      </PopoverContent>
                    </Popover>
                  </ToolbarActions>
                </Toolbar>

                <Outlet />
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Fragment>;
};
export { Main };