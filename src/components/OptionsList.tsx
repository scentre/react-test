import { Flex, Icon, Text } from "@chakra-ui/react";

import { FaNairaSign } from "react-icons/fa6";

const OptionsList = ({ text }: { text: string }) => {
  return (
    <Flex alignItems={"center"} gap={"1"}>
      <Icon
        as={FaNairaSign}
        backgroundColor="#0466C833"
        w={5}
        h={5}
        color="#0466C8"
        borderRadius={"50%"}
        padding={"1"}
        display={"block"}
      />
      <Text
        fontSize={"14"}
        fontFamily={"circular-std"}
        fontStyle={"normal"}
        color={"#707480"}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default OptionsList;
