import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Divider
} from "@chakra-ui/react";
import { ChevronRightIcon, 
  CheckIcon,
  InfoOutlineIcon,
  PhoneIcon
} from "@chakra-ui/icons";
import {
  primary,
  secondary,
  nYellow,
  nGreen,
  nSecondary,
} from "@afnexus/hummingbird-ui-assets";
import { useEffect, useState } from "react";

type LandingBodyProps = {};

export default function InnoFest(props: LandingBodyProps) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("2/3/2023 11:59:59");

    const Interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);
    return () => clearInterval(Interval);
  }, []);

  return (
    <>

      <Stack overflowX="hidden">
        <Box
          w="100vw"
          h="100%"
          color="white"
          display="flex"
          justifyContent="center"
          mt="6em"
        >
          <Container
            maxW={"container.lg"}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Image
              width="125px"
              src="https://i.imgur.com/uViUK5S.png"
              alt="SWiFT"
            />

            <Link href="#courses" fontSize={{ lg: "xl" }}color={nYellow[400]}>
              <Text as="span" textShadow="0 0 10px #ffcd7e"><b>Check out our Courses here!</b></Text>
            </Link>


            <Box
              marginTop={"10"}
              textAlign="justify"
              py={{ base: 10, md: 20 }}
              px={{ base: 5, md: 20 }}
              boxShadow={"base"}
              rounded={"3xl"}
              backgroundColor={primary[800]}
              w="100%"
              maxW="90vw"
              id="innofest"
            >
              <Heading size={"3xl"} mb={10} textAlign="center" color={nYellow[400]} textShadow="0 0 20px #ffcd7e">
                InnoFest 22/23
                <br />
              </Heading>

              <Text fontSize={{ base: "md", lg: "2xl" }} mb={5}>
                <Text as="span" color={nYellow[400]}>
                  SW<i>i</i>FT
                </Text>{" "}
                and{" "}
                <Text as="span" color={nYellow[400]}>
                  ACC
                </Text>{" "}
                are proud to bring you <b>InnoFest 22/23</b> - a two day event
                that showcases our innovator&apos;s efforts, energises our
                innovation movement and charts the way ahead for our Innovation
                journey!
              </Text>
              <Text fontSize={{ base: "md", lg: "2xl" }} mb={5}>
                The events for this InnoFest have been specially curated for us
                to discover together how we can <b>“Make Innovation Joyful”</b>.
                Here is a glimpse of what you can look forward to!
              </Text>
              <br />
              <TableContainer backgroundColor={primary[1000]}>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>
                        <Text fontSize="lg" color={nYellow[400]}>
                          Date / Month
                        </Text>
                      </Th>
                      <Th>
                        <Text fontSize="lg" color={nYellow[400]}>
                          Event
                        </Text>
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Jan 2023 to Feb 2023</Td>
                      <Td>
                        <Link href="#solvathon" color={nYellow[400]} textShadow="0 0 10px #ffcd7e">
                          <b>The Solvathon</b>
                        </Link>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>23 Feb 2023</Td>
                      <Td>
                        <b>Live Event</b>
                        <br />
                        <br />
                        <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                          <GridItem w="100%">
                            <List spacing={1}>
                              {[
                                "Keynote Address by DS(A)",
                                "Awards to recognise our innovator's efforts over the year",
                                "Sharing by innovators from within the SAF and outside",
                                "A carnival style lunch with live food stations like Burgers, Satays, Prata and much more...",
                              ].map((listText, i) => (
                                <ListItem key={i}>
                                  <ListIcon
                                    as={ChevronRightIcon}
                                    color={nGreen[400]}
                                  />
                                  {listText}
                                </ListItem>
                              ))}
                            </List>
                          </GridItem>
                        </Grid>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>24 Feb 2023</Td>
                      <Td>
                        <b>Upskill through workshops!</b>
                        <br />
                        <br />
                        <List spacing={1}>
                          {[
                            "Hands-on 3D Printing",
                            "What is Extended Reality?",
                            "Chatbot 101",
                            "Design Thinking",
                          ].map((listText, i) => (
                            <ListItem key={i}>
                              <ListIcon
                                as={ChevronRightIcon}
                                color={nGreen[400]}
                              />
                              {listText}
                            </ListItem>
                          ))}
                        </List>
                        <br />
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
              <br />
              <Image
                src="https://imgur.com/XL3ZnkE.png"
                alt=""
                w="100%"
              />
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr) ",
                  xl: "repeat(4, 1fr)",
                }}
                gap={3}
                backgroundColor={primary[800]}
              >
              {[
                  "https://i.gyazo.com/f5b4f1f049be02d298f3b59afe6e5829.jpg",
                  "https://i.gyazo.com/7c0b55c95205c859b3e500bb7a8c2b12.jpg",
                  "https://i.gyazo.com/5275b01ae90f5a7ed6d11c36e1226e6b.jpg",
                  "https://www.mindef.gov.sg/web/wcm/connect/rsaf/0999fab4-9037-4ba7-81ff-73a1fbfca76e/3.JPG?MOD=AJPERES",
                ].map((imageURL, i) => (
                  <GridItem w="100%" key={i}>
                    <Image align="center" src={imageURL} width="100%" alt="" />
                  </GridItem>
                ))}
              </Grid>
            </Box>

            
            <Box
              marginTop={"24"}
              textAlign="justify"
              py={{ base: 10, md: 20 }}
              px={{ base: 5, md: 20 }}
              boxShadow={"base"}
              rounded={"3xl"}
              backgroundColor={primary[800]}
              w="100%"
              id="courses"
            >
              <Heading size={"3xl"} mb={10} textAlign="center" color={nYellow[400]} textShadow="0 0 20px #ffcd7e">
                Upskill Yourself!
                <br />
              </Heading>
              <Text fontSize={{ base: "md", lg: "3xl" }} mb={5} textShadow="0 0 20px #ffffff" textAlign="center"><b>FRIDAY, 24 FEB 2023</b></Text>
              <Text fontSize={{ base: "md", lg: "2xl" }} mb={5}>
                Join these specially curated courses to <b>upgrade your <i>&#34;inno-stack&#34;</i></b>!
              </Text>
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr) ",
                  xl: "repeat(2, 1fr)",
                }}
                gap={2}
                backgroundColor={primary[800]}
                mb={18}
                position="relative"
              >
                <GridItem w="85%" key={0} margin="0 auto">
                  <Heading size={"lg"} mb={3} textAlign="center" color={nYellow[400]} backgroundColor={primary[700]} textShadow="0 0 20px #ffcd7e" py={{ md: 2 }} px={{ md: 2 }}>
                    3D Printing
                  </Heading>
                  <Text fontSize={{ lg: "md" }} >Heard about 3D Printing but not sure what the fuss is all about? Join our 3-D printing 101 course conducted <b>on-premises by NYP</b>!</Text>
                  <Image align="center" src={"https://revo-foods.com/wp-content/uploads/2022/07/Blog-3.jpg"} width="100%" alt="" />
                    
                </GridItem>
                <GridItem w="85%" key={1} margin="0 auto">
                  <Heading size={"lg"} mb={3} textAlign="center" color={nYellow[400]} backgroundColor={primary[700]} textShadow="0 0 20px #ffcd7e" py={{ md: 2 }} px={{ md: 2 }}>
                    Extended Reality
                  </Heading>
                  <Text fontSize={{ lg: "md" }}>Virtual, Mixed, Augmented Reality - which is the most suitable and when? Attend the &#34;Introduction to XR&#34; by HelloHolo and learn about XR tech including a hands-on <b>experience using VR</b>.</Text>
                  <Image align="center" src={"https://i.imgur.com/fITy7wJ.png"} width="100%" alt="" />
                </GridItem>
              </Grid>
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr) ",
                  xl: "repeat(2, 1fr)",
                }}
                gap={2}
                backgroundColor={primary[800]}
                mb={18}
                position="relative"
              >
                <GridItem w="85%" key={0} margin="0 auto">
                  <Heading size={"lg"} mb={3} textAlign="center" color={nYellow[400]} backgroundColor={primary[700]} textShadow="0 0 20px #ffcd7e" py={{ md: 2 }} px={{ md: 2 }}>
                    Chatbot by DialogFlow
                  </Heading>
                  <Text fontSize={{ lg: "md" }} >Learn the basics of how to code your own chatbot and <b>innovate repetitive work processes away</b>! Join the Chatbot course to learn more.</Text>
                  <Image align="center" src={"https://www.commbox.io/wp-content/uploads/2019/10/31-1.jpg"} width="100%" alt="" />
                </GridItem>
                <GridItem w="85%" key={1} margin="0 auto">
                  <Heading size={"lg"} mb={3} textAlign="center" color={nYellow[400]} backgroundColor={primary[700]} textShadow="0 0 20px #ffcd7e" py={{ md: 2 }} px={{ md: 2 }}>
                    Design Thinking
                  </Heading>
                  <Text fontSize={{ lg: "md" }}>Conducted by DCTD, get an in depth introduction to what Design Thinking is, along with an opportunity to <b>exercise the DT process</b> on an idea or project of your choice!</Text>
                  <Image align="center" src={"https://lsb.edu.in/wp-content/uploads/2020/11/1_4THiK_g7e8NrzfOks6fYsQ-2.jpg"} width="100%" alt="" />
                </GridItem>
              </Grid>
              <Heading size={"lg"} mb={5} textAlign="center" color={nYellow[400]} backgroundColor={primary[700]} textShadow="0 0 20px #ffcd7e" width="100%" py={{ md: 2 }} px={{ md: 2 }}>
                Microsoft Stack 1.0
              </Heading>
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr) ",
                  xl: "repeat(2, 1fr)",
                }}
                gap={2}
                backgroundColor={primary[800]}
                mb={18}
                position="relative"
                margin="0 auto"
              >
                <GridItem w="95%" key={0} margin="auto"><Text fontSize={{ lg: "md" }}>MS Stack 1.0 by our very own RSAF Data Office, RAiD is back! Learn how to <b>use the tech stack on OSN</b> to improve your daily work.</Text></GridItem>
                <GridItem w="95%" key={1} margin="auto"><Image align="center" src={"https://i.imgur.com/AHF2a0s.png"} alt="" /></GridItem>
              </Grid>

              <br/>
              <Text fontSize={{ base: "md", lg: "2xl" }} textAlign="center" mb={9}>
                Slots for all the courses are limited! Sign up immediately at <Text as="span" textShadow="0 0 10px #ffffff"><b><Link href="https://go.gov.sg/upskill-innofest2223">go.gov.sg/upskill-innofest2223</Link></b></Text> or contact <Text as="span" textShadow="0 0 10px #ffffff"><b>zz All in SWiFT Office</b></Text> on OSN for more details.
              </Text>
              <Text fontSize={{ base: "md", lg: "2xl" }} textAlign="center" color={nYellow[400]} textShadow="0 0 20px #ffcd7e" mb={5}>
                <b>Registrations close 10 Feb 2023!</b>
              </Text>
            </Box>

            
            
            <Box
              marginTop={24}
              mb={48}
              textAlign="left"
              py={{ base: 20, md: 20 }}
              px={{ base: 8, md: 20 }}
              boxShadow={"base"}
              rounded={"3xl"}
              backgroundColor={primary[800]}
              w="fit-content"
            >
              <Heading
                size={"2xl"}
                bgGradient={`linear(to-r, ${primary[300]}, ${primary[100]} , ${secondary[500]})`}
                bgClip="text"
                mb={5}
                textAlign="center"
              >
                Time before next Information Drop
              </Heading>
              <Text fontSize="3xl" align="center">
                {days} Days : {hours} Hours : {minutes} Minutes : {seconds}{" "}
                Seconds
              </Text>
            </Box>
          </Container>
        </Box>
      </Stack>
    </>
  );
}
