import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

function TodoInput({ addItem }) {
  const toast = useToast();
  const [todoInput, setTodoInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!todoInput) {
      toast({
        title: "Fill the input box.",
        status: "warning",
        duration: 2000,
        isClosable: "true",
        position: "top",
      });
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 100000),
      note: todoInput,
      dateAdded: new Date().toLocaleDateString(),
      isDone: false,
      isRemoved: false,
    };
    addItem(newTodo);
    setTodoInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack p={4}>
        <Input
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          variant="outline"
          borderColor="teal.300"
        />
        <Button colorScheme="teal" type="submit" px={6}>
          Add
        </Button>
      </HStack>
    </form>
  );
}

export default TodoInput;
