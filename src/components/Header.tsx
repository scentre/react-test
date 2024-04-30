import { Box, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaBatteryFull } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { FaWifi } from "react-icons/fa6";
const Header = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      py={4}
      fontFamily={"circular-std"}
      fontWeight={"normal"}
    >
      <Text>9:41</Text>
      <Box display={"flex"} gap={3}>
        <Icon as={GiNetworkBars} />
        <Icon as={FaWifi} />
        <Icon as={FaBatteryFull} />
      </Box>
    </Box>
  );
};

export default Header;
