import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

const data = [
  { name: "Group A", value: 400, index: 0 },
  { name: "Group B", value: 300, index: 1 },
  { name: "Group C", value: 300, index: 2 },
  { name: "Group D", value: 200, index: 3 },
  { name: "Group E", value: 800, index: 4 },
];
const COLORS = ["#C89104", "#038A39", "#04A5C8", "#C80462", "#5A04C8"];

const Charts = () => {
  return (
    <Box>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          {/* Outer PieChart */}
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
            {/* {data.map((entry, index) => (
            <Label key={`label-${index}`}>{entry.name}</Label>
          ))} */}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Text>Amount spent so far</Text>
        <Text>₦50,000/₦120,000</Text>
      </Flex>
    </Box>
  );
};

export default Charts;
