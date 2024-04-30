import { Box, Icon, Text } from "@chakra-ui/react";

import TabsComponent from "./Tabs";
import OptionsList from "./OptionsList";
import { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import Form from "./Form";

const BudgetContent = () => {
  const [tabName, setTabName] = useState("last-month");
  const [formState, setFormState] = useState(false);

  if (formState) {
    return <Form />;
  }
  return (
    <Box fontFamily={"circular-std"}>
      <Text
        fontFamily={"circular-std"}
        fontWeight={"normal"}
        fontSize={28}
        mb={2}
      >
        {" "}
        Budget
      </Text>

      <OptionsList text={"Monthly Budget"} />
      <Box background={"#FFFFFF"} boxShadow={" 0px 5px 10px 2px #00000008"}>
        {tabName == "last-month" ? (
          <Text
            mt={4}
            ml={5}
            fontWeight={"700"}
            fontSize={28}
            color={"#001233"}
            padding={"2"}
          >
            ₦120,000
          </Text>
        ) : (
          <Text
            mt={4}
            ml={5}
            fontWeight={"400"}
            fontSize={18}
            color={"#001233"}
            padding={"2"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={2}
            boxShadow={"0px 5px 10px 2px #00000008"}
            cursor={"pointer"}
            onClick={() => setFormState(true)}
          >
            create a budget{" "}
            <Icon
              as={BiPlusCircle}
              backgroundColor={" #CADDF1"}
              color={"#0466C8"}
            />
          </Text>
        )}
      </Box>

      <Box>
        <TabsComponent tabName={tabName} setTabName={setTabName} />
      </Box>
    </Box>
  );
};

export default BudgetContent;
