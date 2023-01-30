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