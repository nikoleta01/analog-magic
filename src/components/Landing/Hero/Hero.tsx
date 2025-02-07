import { useState, useEffect } from "react";
import {
  Container,
  Title,
  useMantineTheme,
  BackgroundImage,
  Image,
} from "@mantine/core";

import styles from "./Hero.module.css";

import { images } from "../../../data/heroImages";

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
    <div className={styles.hero}>
      <div className={styles.controls}>
        <button className={styles.controlButton} onClick={handlePrev}>
          ◀
        </button>
        <button className={styles.controlButton} onClick={handleNext}>
          ▶
        </button>
      </div>

      <div className={styles.imageWrapper}>
        {images.map((image, index) => (
          <BackgroundImage
            key={index}
            src={image.src}
            className={styles.image}
            style={{ opacity: index === currentIndex ? 1 : 0 }}
            radius={theme.radius.lg}
          />
        ))}
      </div>

      <Container>
        <div
          className={styles.content}
          style={{
            opacity: fade ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <div>
            <Title size={200} className={styles.outlinedText}>
              ANAL
            </Title>
          </div>
          <Title size={80} order={1}>
            {images[currentIndex].title}
          </Title>
          {/* <Text size="xl" fw={500} mt="md">
            {images[currentIndex].text}
          </Text> */}
        </div>
      </Container>

      <Image
        src="https://demo.bravisthemes.com/kimono/wp-content/themes/kimono/assets/img/layer-2.png"
        style={{ bottom: 0, right: 0, position: "absolute" }}
        className={styles.floatingImage}
        w={900}
      />
    </div>
  );
}
