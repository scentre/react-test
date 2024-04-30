import { Flex, Text } from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { VscRepoPush } from "react-icons/vsc";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BsBarChart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink, useLocation } from "react-router-dom";

const navigation = [
  {
    icon: AiOutlineHome,
    name: "Home",
    link: "/",
  },
  {
    icon: VscRepoPush,
    name: "Report",
    link: "/report",
  },
  {
    icon: IoChatbubbleOutline,
    name: "Chat",
    link: "/chat",
  },
  {
    icon: BsBarChart,
    name: "Budget",
    link: "/budget",
  },
  {
    icon: CgProfile,
    name: "Profile",
    link: "/profile",
  },
];

const Navigation = () => {
  const location = useLocation();
  return (
    <Flex
      justifyContent={"space-between"}
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      justify="space-between"
      p="4"
      borderTop="1px solid #ccc"
      bg="white"
      zIndex="999"
    >
      {navigation.map((each) => (
        <NavLink
          to={each.link}
          key={each.name}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <Icon
              as={each.icon}
              boxSize={6}
              color={location.pathname == each.link ? "#0466C8" : "#797B8B"}
            />
            <Text
              fontSize={"xs"}
              fontFamily={"circular-std"}
              fontWeight={"normal"}
              color={location.pathname == each.link ? "#001233" : "#797B8B"}
            >
              {each.name}
            </Text>
          </Flex>
        </NavLink>
      ))}
    </Flex>
  );
};

export default Navigation;
