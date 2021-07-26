import {
  Badge,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";

function TodoList({ todos, deleteItem, colorMode }) {
  if (!todos.length) {
    return (
      <Badge backgroundColor={"teal.100"} color="black" m="4" p="4">
        <CheckIcon w={4} h={4} color="teal.400" />
        &nbsp;&nbsp;No Todos
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      p={4}
      borderWidth="1px"
      borderColor="teal.100"
      borderRadius="lg"
      alignItems="stretch"
      marginY={4}
      w="100%"
      maxW={{ base: "90vw", md: "80vw", lg: "60vw", xl: "45vw" }}
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.note}</Text>
          <Spacer />
          <IconButton
            icon={<DeleteIcon />}
            isRound="true"
            background="none"
            color="red.300"
            onClick={() => deleteItem(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
