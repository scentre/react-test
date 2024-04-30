import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import { BiPlusCircle } from "react-icons/bi";
const Form = () => {
  const [step, setStep] = useState(1);

  interface ExpenseData {
    amount: string;
    expense: string;
    budget: number;
  }
  const [formData, setFormData] = useState<ExpenseData>({
    amount: "",
    expense: "",
    budget: 20,
  });

  const [expenseArray, setExpenseArray] = useState([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Submit form data
    setExpenseArray((prevArray) => [...prevArray, formData]);
    setFormData({
      amount: "",
      expense: "",
      budget: 20,
    });
  };

  console.log(formData);
  console.log(expenseArray);
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <VStack spacing={4} alignItems="flex-start">
      <Text fontSize={28} fontFamily={"circular-std"} mt={4}>
        Create new budget
      </Text>
      <Text color={"#707480"} fontSize={14}>
        How much would you like to budget for this month?
      </Text>
      <FormControl
        style={{ opacity: step >= 1 ? 1 : 0, transition: "opacity 0.5s" }}
      >
        <Input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount (in ₦)"
        />
      </FormControl>

      <FormControl
        style={{ opacity: step >= 2 ? 1 : 0, transition: "opacity 0.5s" }}
      >
        <FormLabel>Expense</FormLabel>
        <Select name="expense" value={formData.expense} onChange={handleChange}>
          <option value="">--select--</option>
          <option value="savings">Savings</option>
          <option value="food">Food</option>
        </Select>
      </FormControl>

      <FormControl
        style={{ opacity: step >= 3 ? 1 : 0, transition: "opacity 0.5s" }}
      >
        <Box display={"flex"} justifyContent={"space-between"} mt={5}>
          <Box>% of budget: {formData.budget}%</Box>

          <Icon
            size={30}
            as={BiPlusCircle}
            backgroundColor={" #CADDF1"}
            color={"#0466C8"}
            onClick={() =>
              setFormData({ ...formData, budget: formData.budget + 1 })
            }
          />
        </Box>
      </FormControl>

      {step < 3 && (
        <Button onClick={nextStep} marginTop="2">
          Next
        </Button>
      )}
      {step === 3 && (
        <Button onClick={handleSubmit} mx="2" mb="5" pb={3}>
          Submit
        </Button>
      )}

      <VStack alignItems="flex-start" mb={5}>
        <strong>Expense Array:</strong>
        {expenseArray.length > 0 &&
          expenseArray.map((expense, index) => (
            <div key={index}>
              <span>{expense.expense}</span> <span>{expense.amount}</span>{" "}
              <span>{expense.budget}</span>
            </div>
          ))}
      </VStack>
    </VStack>
  );
};

export default Form;
