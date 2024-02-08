import { useState, useEffect } from "react";
import { Heading, Box, Flex, Text, Spacer, Tag, Button, Icon } from "@chakra-ui/react";
import { HiCalendar } from "react-icons/hi2";
import * as API from "./services/launches";

import dayjs from "dayjs";
import "dayjs/locale/es";

function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Heading as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      <section>
        {launches.map((launch) => (
          <Box
            key={launch.flight_number}
            bg={"gray.100"}
            p={4}
            m={4}
            borderRadius="lg"
          >
            <Flex>
              <Text fontSize="2xl">
                Mission <strong>{launch.mission_name}</strong> (
                {launch.launch_year})
              </Text>
            </Flex>
            <Spacer />
            <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
              {launch.launch_success ? "Success" : "Failure"}
            </Tag>
            ({launch.launch_year})
            
            <Flex>
              <HiCalendar />
              <Text fontSize={"small"} ml={1} >
              {dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")}
              </Text>
            </Flex>
          </Box>
        ))}
      </section>
    </>
  );
}

export default App;
