import { Flex } from "@chakra-ui/react";
import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/Landing/Navbar";
import Footer from "./components/Landing/Footer";
import React, { Suspense } from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Flex justify="center" align="center" h="100vh">
          Something went wrong.
        </Flex>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Navbar />
      <Suspense
        fallback={
          <Flex justify="center" align="center" h="100vh">
            Loading...
          </Flex>
        }
      >
        <Outlet />
      </Suspense>

      <Footer />
    </ErrorBoundary>
  );
}

export default App;
