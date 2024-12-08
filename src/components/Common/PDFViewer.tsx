import React from "react";
import { Box } from "@chakra-ui/react";
import afterCarePDF from "../../assets/care/bb4c60c0-851f-11ef-be0a-1d02e425a915.pdf";

const PDFViewer = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      overflow="hidden"
      bg="gray.50"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <iframe
        src={afterCarePDF}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="Aftercare Instructions"
      />
    </Box>
  );
};

export default PDFViewer;
