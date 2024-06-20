import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Button } from "@chakra-ui/react";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    imageUrl: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: "$999",
    imageUrl: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stylish smartwatch with health tracking",
    price: "$199",
    imageUrl: "/images/smartwatch.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to Electronics Store</Heading>
        <Text fontSize="lg">Find the best electronics products here</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
              <Image src={product.imageUrl} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
              <VStack spacing={4} mt={4}>
                <Heading as="h3" size="md">{product.name}</Heading>
                <Text>{product.description}</Text>
                <Text fontWeight="bold">{product.price}</Text>
                <Button colorScheme="teal">Add to Cart</Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;