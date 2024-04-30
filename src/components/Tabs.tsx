import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  Icon,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

import { BsThreeDots } from "react-icons/bs";
import OptionsList from "./OptionsList";
import Charts from "./Charts";

import food from "../assets/food.svg";
import savings from "../assets/savings.svg";

interface BudgetContent {
  name: string;
  icon: string;
}
const TabsComponent = ({ tabName, setTabName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const budgetContent: BudgetContent[] = [
    { name: "Food and Drink", icon: food },
    { name: "Savings", icon: savings },
  ];

  interface iOverlay {
    isOpen: boolean;
    onClose: () => void;
  }
  const Overlay = ({ isOpen, onClose }: iOverlay) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <MenuList>
            <MenuItem onClick={handleClose}>
              <OptionsList text={"Expenses overview"} />{" "}
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {" "}
              <OptionsList text={"Category Overview"} />{" "}
            </MenuItem>
          </MenuList>
        </ModalContent>
      </Modal>
    );
  };
  return (
    <Box alignItems={"flex-start"} position={"relative"}>
      <Tabs position="relative" variant="unstyled" flex={"1"}>
        <TabList>
          <Tab onClick={() => setTabName("last-month")}>Last Month</Tab>
          <Tab onClick={() => setTabName("this-month")}>This Month</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <Charts />

            <Text my={4} fontSize={21}>
              Category Breakdown
            </Text>
            {budgetContent.map((each) => (
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
                key={each.name}
              >
                <Box display={"flex"} alignItems={"flex-start"} gap={"3"}>
                  <Image src={each.icon} />
                  <Box>
                    <Text fontSize={"12"}>{each.name}</Text>
                    <Text fontSize={"10"} color={"#707480"} display={"inline"}>
                      40%
                    </Text>
                  </Box>
                </Box>

                <Text fontSize={"12"}>
                  ₦20,000/{" "}
                  <Text color={"#707480"} display={"inline"}>
                    {" "}
                    ₦42,000
                  </Text>{" "}
                </Text>
              </Box>
            ))}
            <Box mb={20}></Box>
          </TabPanel>
          <TabPanel>
            {budgetContent.map((each) => (
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
                key={each.name}
              >
                <Box display={"flex"} alignItems={"flex-start"} gap={"3"}>
                  <Image src={each.icon} />
                  <Box>
                    <Text fontSize={"12"}>{each.name}</Text>
                    <Text fontSize={"10"} color={"#707480"} display={"inline"}>
                      40%
                    </Text>
                  </Box>
                </Box>

                <Text fontSize={"12"}>
                  ₦20,000/{" "}
                  <Text color={"#707480"} display={"inline"}>
                    {" "}
                    ₦42,000
                  </Text>{" "}
                </Text>
              </Box>
            ))}
            <Box mb={20}></Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box position={"absolute"} right="0" top="0">
        <Menu>
          <MenuButton as={Button} onClick={handleClick}>
            <Icon as={BsThreeDots} />
          </MenuButton>
          <Overlay isOpen={isOpen} onClose={handleClose} />
        </Menu>
      </Box>
    </Box>
  );
};

export default TabsComponent;
