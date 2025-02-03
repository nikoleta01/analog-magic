import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Navbar.module.css";
import { links } from "../../constants/Links";

const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Box pb={0}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          {/* LOGO SWAP */}
          <MantineLogo size={30} />

          <Group h="100%" gap={15} visibleFrom="sm" align="right">
            {links.map((link) => (
              <a href={link.href} className={classes.link}>
                {link.title}
              </a>
            ))}{" "}
          </Group>

          <Group visibleFrom={"sm"}>
            <Button color={theme.colors.orange[6]}>Log in</Button>
            <Button color="black">Sign up</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="80%"
        padding="md"
        title="--logo-"
        hiddenFrom="sm"
        zIndex={1000000}
        position="right"
        transitionProps={{ transition: "slide-left", duration: 550 }}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />
          {links.map((link) => (
            <a href={link.href} className={classes.link}>
              {link.title}
            </a>
          ))}
          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button color={theme.colors.orange[6]}>Log in</Button>
            <Button color="black">Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Navbar;
