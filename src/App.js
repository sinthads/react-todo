import { TodoInput, TodoList } from "./components";
import {
  Container,
  Heading,
  IconButton,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const todoList = JSON.parse(localStorage.getItem("todoList"));
  const [todos, setTodos] = useState(todoList || []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  function addItem(item) {
    setTodos([...todos, item]);
    console.log(todos);
  }

  function deleteItem(id) {
    const newTodos = todos.filter((item) => {
      return id !== item.id;
    });
    console.log(newTodos);
    setTodos(newTodos);
  }

  return (
    <VStack h="100vh">
      <IconButton
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        isRound="true"
        background="none"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        fontWeight="extrabold"
        size="xl"
        bgGradient="linear(to-r, blue.500, teal.500)"
        bgClip="text"
      >
        YOUR TO-DO
      </Heading>
      <Container h="80%" my={4} px={4} centerContent overflow="auto">
        <TodoList todos={todos} deleteItem={deleteItem} colorMode={colorMode} />
      </Container>
      <Container centerContent>
        <TodoInput addItem={addItem} />
      </Container>
    </VStack>
  );
}

export default App;
