import {
  Container,
  Text,
  Title,
  Image,
  Button,
  useMantineTheme,
} from "@mantine/core";
import styles from "./Hero.module.css";

export default function Hero() {
  const theme = useMantineTheme();
  return (
    <div className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/hero/heroCamera.png"
          alt="Animovaný obrázok"
          className={styles.image}
        />
      </div>

      <Container>
        <div className={styles.content}>
          <Title order={1}>Don't be scared to capture ANAL(og) photos</Title>
          <Text size="lg" mt="md">
            We will teach you how to do it
          </Text>
          <Button size="lg" c="white" bg={theme.colors.orange[6]} mt="xl">
            See our courses
          </Button>
        </div>
      </Container>
    </div>
  );
}
