import { Grid, VStack } from "@chakra-ui/react";
import { ContractInfo } from "./components/ContractInfo";
import { getConfig } from "@repo/config";

export const Home = () => {
  return (
    <VStack align="stretch" gap={4}>
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)"]} gap={6}>
        <ContractInfo
          title="Mainnet"
          address={getConfig("mainnet").simpleAccountFactoryContractAddress}
          env="mainnet"
        />
      </Grid>
    </VStack>
  );
};
