import { Fragment, useState } from 'react';
import { Container } from '@/_metronic/components/container';
import { Toolbar, ToolbarActions, ToolbarHeading } from '@/_metronic/layouts/demo1/toolbar';
import { Demo1LightSidebarContent } from './';
import { Popover, PopoverContent, PopoverTrigger } from '@/_metronic/components/ui/popover';
import { Calendar } from '@/_metronic/components/ui/calendar';
import { addDays, format } from 'date-fns';
import { cn } from '@/_metronic/lib/utils';
import { KeenIcon } from '@/_metronic/components/keenicons';
import { useAuthContext } from '@/app/auth'
const Demo1LightSidebarPage = () => {
  const { currentUser } = useAuthContext()
  const [date, setDate] = useState({
    from: new Date(2025, 0, 20),
    to: addDays(new Date(2025, 0, 20), 20)
  });
  return <Fragment>
      <Container>
        <Toolbar>
          <ToolbarHeading title="Dashboard" description={currentUser.email} />
          <ToolbarActions>
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
      </Container>

      <Container>
        <Demo1LightSidebarContent />
      </Container>
    </Fragment>;
};
export { Demo1LightSidebarPage };