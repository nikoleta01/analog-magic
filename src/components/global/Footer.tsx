import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Anchor,
  Container,
  Group,
  Image,
  useMantineTheme,
} from "@mantine/core";
import classes from "./Footer.module.css";
import { linksFooter } from "../../constants/LinksFooter";

const Footer = () => {
  const theme = useMantineTheme();

  const items = linksFooter.map((link) => (
    <Anchor
      c="black"
      key={link.title}
      href={link.href}
      lh={6}
      onClick={(event) => event.preventDefault()}
      size="l"
      h={100}
    >
      {link.title}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container>
        <div className={classes.inner}>
          <Image src="/images/logo/logo2.png" h={100} w={200} mb={10} />

          <Group className={classes.links}>{items}</Group>

          <Group gap="l" align="center">
            <ActionIcon size="lg" color={theme.colors.blue[6]} radius="xl">
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color={theme.colors.red[8]} radius="xl">
              <IconBrandYoutube size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color={theme.colors.pink[7]} radius="xl">
              <IconBrandInstagram size={18} stroke={1.5} />
            </ActionIcon>
          </Group>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
