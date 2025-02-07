import { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

import CourseCard from "./CourseCard";
import { photoCoursesInfo } from "../../../data/photoCoursesInfo";

const CourseCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 1500 }));

  return (
    <Carousel
      height={402}
      type="container"
      slideSize={{ base: "100%", "300px": "50%", "500px": "24%" }}
      slideGap={{ base: 0, "300px": "md", "500px": "lg" }}
      loop
      align="start"
      withControls={false}
      withIndicators={true}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {photoCoursesInfo.map((course) => (
        <Carousel.Slide>
          <CourseCard
            courseName={course.courseName}
            courseNumber={course.courseNumber}
            courseIcon={course.icon}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default CourseCarousel;
