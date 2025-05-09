import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/_metronic/components/container';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/_metronic/partials/toolbar';
import { PageNavbar } from '@/_metronic/pages/account';
import { AccountCurrentSessionsContent } from '.';
import { useLayout } from '@/_metronic/providers';
const AccountCurrentSessionsPage = () => {
  const {
    currentLayout
  } = useLayout();
  return <Fragment>
      <PageNavbar />

      {currentLayout?.name === 'demo1-layout' && <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>Authorized Devices for Report Access</ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <Link to="/account/security/security-log" className="btn btn-sm btn-light">
                Activity Log
              </Link>
            </ToolbarActions>
          </Toolbar>
        </Container>}

      <Container>
        <AccountCurrentSessionsContent />
      </Container>
    </Fragment>;
};
export { AccountCurrentSessionsPage };