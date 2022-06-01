import { Navbar } from '@mantine/core';
import { User } from './_user';
import { Brand } from './_brand';
import { MainLinks } from './_mainLinks';

export default function AppNavBar({opened}: {opened: boolean}) {
  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      <Navbar.Section mt="xs">
        <Brand />
      </Navbar.Section>
      <Navbar.Section grow mt="md">
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
}

