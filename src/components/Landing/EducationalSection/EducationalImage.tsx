import { Box, Image } from "@mantine/core";
import classes from "./EducationalSection.module.css";

export function EducationImage({
  imageSrc,
  hoverImageSrc,
}: {
  imageSrc: string;
  hoverImageSrc: string;
}) {
  return (
    <Box w={{ base: "100%", md: "45%" }} p="md" pos={"relative"}>
      <Box className={classes.blurBackground} />
      <Box className={classes.imageWrapper}>
        <Image src={imageSrc} height={400} className={classes.image} />
        <Image
          src={hoverImageSrc}
          height={400}
          className={classes.imageHover}
        />
      </Box>
    </Box>
  );
}
