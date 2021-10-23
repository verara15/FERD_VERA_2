import * as React from "react"
import { useState } from "react";
import { NativeBaseProvider, View, Text, Input, AddIcon, Pressable, Checkbox, HStack,  Center, IconButton} from "native-base"
import Icons from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {

  const instState = [];
  const [value, setValue] = useState("");
  const [arr, setArr] = useState(instState);

  const addItem = (title) => {
   if(!value){
      alert('Input tidak boleh kosong')
    }
    else{
      setArr([
        ...arr,
        {
          title: title,
          isCompleted: false,
        },
      ]);
    }
  };

  let handleChange = (e)=> {
    setValue(e.target.value);
  }

  const handleStatusChange = (index) => {
    const temp = arr.map((item, itemI) =>
      itemI !== index
        ? item
        : {
            ...item,
            isCompleted: !item.isCompleted,
          }
    );
    setArr(temp);
  };

  let deleteTask=(item)=>{
    let deleteItem = arr.filter(list=> list !== item)
    setArr(deleteItem)
  }

  let deleteAll=()=>{
    setArr([])
  }
  return (
    <NativeBaseProvider >
      <View mx={5} my={10}>
        <Text fontSize="3xl" color="#1597E5" fontWeight="bold">WishList</Text>
        <HStack >
          <Input
            value={value}
            size="2xl"
            bg = "#eee" my={2}
            onChange={handleChange}
            placeholder="Item Baru"
            w={{
              base: "90%",
              md: "25%",
          }}
          InputRightElement={
            <Pressable
              onPress={() => {
                addItem(value);
                setValue('');
              }}
            >
            <AddIcon size="4" mx={3} />
            </Pressable>
          }
          />
          <Center>
            <IconButton
                size="sm"
                mr={3}
                icon={
                <MaterialCommunityIcons                     
                  name="delete-sweep-outline" 
                  size={35}/>
                  }
                onPress={deleteAll}
              />
          </Center>
        </HStack>
          {
            arr.map((item, itemI) =>(
              <HStack w="100%"  justifyContent="space-between" space={3} alignItems="center" key={item.title + itemI.toString()}>
                <Checkbox 
                  isChecked={item.isCompleted} 
                  onChange={() => handleStatusChange(itemI)} 
                  value={item.title} my={2} size="md"
                >
                  <Text
                      mx="2"
                      strikeThrough={item.isCompleted}
                      _light={{
                        color: item.isCompleted ? 'gray.400' : 'coolGray.800',
                      }}
                      _dark={{
                        color: item.isCompleted ? 'gray.400' : 'coolGray.50',
                      }}>
                      {item.title}
                  </Text>
                </Checkbox>
                <IconButton
                      size="sm"
                      mr={3}
                      icon={
                        <Icons                      
                          name="trash" 
                          size={18}
                          color="grey"/>
                      }
                      onPress={() =>deleteTask(item)}
                    />
              </HStack>
            ))
          }
      </View>
    </NativeBaseProvider>
  )
}



