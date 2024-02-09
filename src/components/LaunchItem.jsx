
import { HiCalendar } from "react-icons/hi2";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { Box, Flex, Spacer, Tag, Text, Button,Icon } from "@chakra-ui/react";

export function LaunchItem(launch) {
    return (
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
            <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? "Success" : "Failure"}
            </Tag>
            ({launch.launch_year})

            <Flex align={"center"} ml={1}>
                <Icon as={HiCalendar} color="gray.500"/>
                <Text fontSize={"small"} ml={1}  color={"gray.500"}>
                    {dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")}
                </Text>
            </Flex>
            <Button ml={2} colorScheme="blue" onClick={() => navigate(`/launch/${launch.flight_number}`)}>More Details</Button>
        </Box>
    )
}