import { Grid, Flex, Box, Text, Image, Center, Divider } from "@mantine/core";
import { SectionWrapper } from "../Shared";
import classes from "./EducationalSection.module.css";

export default function EducationSection() {
  return (
    <SectionWrapper
      sectionName="Education"
      sectionNumber="1"
      sectionTitle="Learn the basics"
    >
      <Grid justify="center" c="white" gutter="60px" mx={40}>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Flex direction="column" h="100%">
            <Flex
              justify="space-between"
              wrap="wrap"
              direction={{ base: "column", md: "row" }}
            >
              <Box
                w={{ base: "100%", md: "45%" }}
                p="md"
                style={{ position: "relative" }}
              >
                <div className={classes.blurBackground} />
                <div className={classes.imageWrapper}>
                  <Image
                    src="/images/hero/photo7.jpg"
                    height={400}
                    className={classes.image}
                  />
                  <Image
                    src="/images/hero/photo8.jpg"
                    height={400}
                    className={classes.imageHover}
                  />
                </div>
              </Box>

              <Box
                w={{ base: "100%", md: "45%" }}
                p="md"
                fw={700}
                size="30px"
                mt={20}
                className={classes.largePadding}
              >
                <Text fw={500} size="30px" pt={20}>
                  Lorem ipsum dolor sit amet consectetur adipisicin.
                </Text>
                <Text mt={20}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  sequi laboriosam quisquam corrupti nam distinctio
                  voluptatibus, laborum delectus! Labore corrupti repudiandae
                  quod f voluptatibus, laborum delectus! Labore corrupti
                  repudiandae quod f voluptatibus, laborum delectus! Labore
                  corrupti repudiandae quod f voluptatibus, laborum delectus!
                  Labore corrupti repudiandae quod f voluptatibus, laborum
                  delectus! Labore corrupti repudiandae quod f
                </Text>
              </Box>
            </Flex>

            <Grid.Col span={{ base: 12 }} mah={200} pl={0}>
              <Box>
                <Box
                  style={{
                    color: "white",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "between",
                    alignItems: "center",
                  }}
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    gap={20}
                    style={{ width: "100%" }}
                  >
                    <Flex direction="column" align="center" style={{ flex: 1 }}>
                      <Text style={{ fontSize: "50px", fontWeight: "bold" }}>
                        100%
                      </Text>
                      <Text
                        style={{ fontSize: "14px", textTransform: "uppercase" }}
                      >
                        Customer
                      </Text>
                      <Text
                        style={{ fontSize: "14px", textTransform: "uppercase" }}
                      >
                        Satisfaction
                      </Text>
                      <Divider
                        size="xs"
                        color="red"
                        style={{ width: "50px", marginTop: "10px" }}
                      />
                    </Flex>

                    <Flex direction="column" align="center" style={{ flex: 1 }}>
                      <Text style={{ fontSize: "50px", fontWeight: "bold" }}>
                        350+
                      </Text>
                      <Text
                        style={{ fontSize: "14px", textTransform: "uppercase" }}
                      >
                        Photography
                      </Text>
                      <Text
                        style={{ fontSize: "14px", textTransform: "uppercase" }}
                      >
                        Sessions
                      </Text>
                      <Divider
                        size="xs"
                        color="red"
                        style={{ width: "50px", marginTop: "10px" }}
                      />
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            </Grid.Col>
          </Flex>
        </Grid.Col>

        <Grid.Col
          span={{ base: 12, md: 4 }}
          h="100%"
          className={classes.hideOnMobile}
        >
          <Box p="md" h="100%">
            <Center>
              <Image src="/images/hero/photo9.jpg" h={600} />
            </Center>
          </Box>
        </Grid.Col>
      </Grid>
    </SectionWrapper>
  );
}
