import { Fragment } from 'react';
import { Container } from '@/_metronic/components/container';
import { toAbsoluteUrl } from '@/_metronic/utils/Assets';
import { KeenIcon } from '@/_metronic/components';
import { UserProfileHero } from '@/_metronic/partials/heros';
import { Navbar, NavbarActions, NavbarDropdown } from '@/_metronic/partials/navbar';
import { PageMenu } from '@/_metronic/pages/public-profile';
import { ProfileModalContent } from '.';
const ProfileModalPage = () => {
  const image = <img src={toAbsoluteUrl('/media/avatars/300-1.png')} className="rounded-full border-3 border-success size-[100px] shrink-0" />;
  return <Fragment>
      <UserProfileHero name="Jenny Klabber" image={image} info={[{
      label: 'KeenThemes',
      icon: 'abstract-41'
    }, {
      label: '',
      icon: ''
    }, {
      email: 'jenny@kteam.com',
      icon: 'sms'
    }]} />

      <Container>
        <Navbar>
          <PageMenu />

          <NavbarActions>
            <button type="button" className="btn btn-sm btn-primary">
              <KeenIcon icon="users" /> Connect
            </button>
            <button className="btn btn-sm btn-icon btn-light">
              <KeenIcon icon="messages" />
            </button>
            <NavbarDropdown />
          </NavbarActions>
        </Navbar>
      </Container>

      <ProfileModalContent />
    </Fragment>;
};
export { ProfileModalPage };