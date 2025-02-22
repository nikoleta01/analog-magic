import { useState, useEffect } from "react";
import {
  Container,
  Title,
  useMantineTheme,
  BackgroundImage,
  Image,
  Box,
} from "@mantine/core";
import styles from "./Hero.module.css";

const images = [
  {
    src: "/images/hero/photo1.jpg",
    title: "The life moments",
    text: "Learn the art of analog photography",
  },
  {
    src: "/images/hero/photo2.jpg",
    title: "Timeless Shots",
    text: "Discover the beauty of film photography",
  },
  {
    src: "/images/hero/photo3.jpg",
    title: "Retro Elegance",
    text: "Master manual settings and composition",
  },
  {
    src: "/images/hero/photo4.jpg",
    title: "Unique Aesthetics",
    text: "Create unique images with real grain",
  },
  {
    src: "/images/hero/photo6.jpg",
    title: "Keep Memories",
    text: "Every photo tells a story",
  },
];

export default function Hero() {
  const theme = useMantineTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length,
      );
      setFade(true);
    }, 300);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, 300);
  };

  return (
    <Box className={styles.hero}>
      <Box className={styles.controls}>
        <button className={styles.controlButton} onClick={handlePrev}>
          ◀
        </button>
        <button className={styles.controlButton} onClick={handleNext}>
          ▶
        </button>
      </Box>

      <Box className={styles.imageWrapper}>
        {images.map((image, index) => (
          <BackgroundImage
            key={index}
            src={image.src}
            className={styles.image}
            style={{ opacity: index === currentIndex ? 1 : 0 }}
            radius={theme.radius.lg}
          />
        ))}
      </Box>

      <Container>
        <Box
          className={styles.content}
          sx={{
            opacity: fade ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <Box>
            <Title size={200} className={styles.outlinedText}>
              ANAL
            </Title>
          </Box>
          <Title size={80} order={1}>
            {images[currentIndex].title}
          </Title>
          {/* <Text size="xl" fw={500} mt="md">
            {images[currentIndex].text}
          </Text> */}
        </Box>
      </Container>

      <Image
        src="https://demo.bravisthemes.com/kimono/wp-content/themes/kimono/assets/img/layer-2.png"
        bottom={0}
        right={0}
        pos="absolute"
        className={styles.floatingImage}
        w={900}
      />
    </Box>
  );
}
