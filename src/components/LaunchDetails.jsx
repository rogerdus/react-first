import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as API from "../services/launches";
import { Flex, Box, Spacer, Tag, Text, Icon,Button } from "@chakra-ui/react";
import { HiCalendar } from "react-icons/hi2";
import dayjs from "dayjs";
import "dayjs/locale/es";

export function LaunchDetails() {
    const [launch, setLaunch] = useState({});
    let { launchId } = useParams();

    useEffect(() => {
        API.getLaunchByFlightNnumber(launchId)
            .then(setLaunch)
            .catch(console.log);
    }, [launchId]);

    return (
        <div>
            <Box
                key={launch.flight_number}
                bg={"gray.100"}
                p={4}
                m={4}
                borderRadius="lg"
            >
                {!launch ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <Flex>
                            <Text fontSize="2xl">
                                Mission <strong>{launch.mission_name}</strong> (
                                {launch.launch_year})
                            </Text>
                        </Flex>

                        <Spacer />
                        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                            {launch.launch_success ? "Success" : "Failure"}
                        </Tag>
                        ({launch.launch_year})

                        <Flex align={"center"} ml={1}>
                            <Icon as={HiCalendar} color="gray.500" />
                            <Text fontSize={"small"} ml={1} color={"gray.500"}>
                                {dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")}
                            </Text>
                        </Flex>
                        <Spacer />
                        <Box>
                            {/* <Button fontSize={"small"} ml={1} color={"gray.500"}>
                                Rocket: <Link to={`/rockets/${launch.rocket?.rocket_id}`}>
                                    {launch.rocket?.rocket_name}
                                    </Link>
                            </Button> */}

                            <Link to={`/rockets/${launch.rocket?.rocket_id}`}>
                                <Button ml={2} colorScheme="blue">{launch.rocket?.rocket_name}</Button>
                            </Link>
                        </Box>
                    </>
                )}
            </Box>
        </div>)
}