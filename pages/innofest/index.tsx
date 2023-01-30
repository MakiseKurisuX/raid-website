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

            
            <Image
              marginTop={"10"}
              src="https://i.imgur.com/mrb1jOY.jpg"
              alt="SWiFT"
            />

            
            <Image
              marginTop={"24"}
              mb={"48"}
              src="https://i.imgur.com/odtGWSD.jpg"
              alt="SWiFT"
            />


          </Container>
        </Box>
      </Stack>
    </>
  );
}
