import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const ConsentForm = () => {
  return (
    <Flex direction="column" w="100%" bg="#EA346B" p={12}>
      <iframe
        title="Form Name"
        src="https://form.jotform.com/242855840282057"
        style={{
          width: "100%",
          height: "750px",
        }}
      />
    </Flex>
  );
};

export default ConsentForm;
