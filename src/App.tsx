import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ReportContent from "./components/ReportContent";
import ChatContent from "./components/ChatContent";
import BudgetContent from "./components/BudgetContent";
import ProfileContent from "./ProfileContent";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Flex
        direction="column"
        minHeight="100vh"
        padding={"4"}
        position="relative"
      >
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/report" element={<ReportContent />} />
          <Route path="/chat" element={<ChatContent />} />
          <Route path="/budget" element={<BudgetContent />} />
          <Route path="/profile" element={<ProfileContent />} />
        </Routes>

        <Navigation />
      </Flex>
    </BrowserRouter>
  );
}

export default App;
