import React, {useEffect, useState} from 'react';
import { Button,StyleSheet, Text, View, TextInput, Pressable, } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Post(){
    
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [id, setId] = useState(-1)


    const addPost = async () => {
        const res = await fetch('http://192.168.100.9:4000/posts', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({ title, desc })
        })
        const data = await res.json()
        setPosts([...posts, data])
        setTitle('')
        setDesc('')

    }

    const deletePost = async (id) => {
        await fetch(`http://192.168.100.9:4000/posts/${id}`, {
            method: 'DELETE',
        })
        const data = posts.filter((post) => post.id !== id).map(({id, title, desc}) => ({id, title}))
        setPosts(data)
    }

    const editPost = async (id) => {
        const res = await fetch(`http://192.168.100.9:4000/posts/${id}`, {
            method: 'GET',
        })
        const data = await res.json()
        setId(id)
        setTitle(data.title)
        setDesc(data.desc)      
    }

    const updatePost = async () => {
        const temp = posts
        const res = await fetch(`http://192.168.100.9:4000/posts/${id}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({ title, desc })
        })
        const data = await res.json()
        const newData = temp.map(item => item.id === data.id ? data : item)
        setPosts(newData)
        setTitle('')
        setDesc('')
        setId(-1)
    }

    const savePost = () => {
        if(id !== -1){
            updatePost()
        }else{
            addPost()
        }        
    }

    const getData = async () => {
        const res= await fetch('http://192.168.100.9:4000/posts')
        const data = await res.json()
        setPosts(data)
    }

    useEffect(() => {
        getData()
    }, [])

    
    return(
        <>
        <TextInput 
            style={styles.input}
            placeholder="Title"
            placeholderTextColor='#ffffff'
            onChangeText={input=> setTitle(input)}
            defaultValue={title}
        />
        <TextInput 
            style={styles.input}
            placeholder="Deskripsi"
            placeholderTextColor='#ffffff'
            onChangeText={input => setDesc(input)}
            defaultValue={desc}
        />
        <Button color="blue" title='Save' onPress={savePost}></Button>
        {
            posts.map((post, idx) => (
                <View style={styles.list} key={idx}>
                    <View style={styles.listchild}>
                        <View style={styles.box}>
                            <Text style={styles.title}>
                                {post.title}
                            </Text>
                            <Text style={styles.desc}>
                                {post.desc}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.action}>
                        <View style={{flex:1, flexDirection:'row', marginLeft: -15}}>
                            <Pressable onPress={() => editPost(post.id)} >
                                <MaterialCommunityIcons name="circle-edit-outline" size={30}/>
                            </Pressable>
                            <Pressable onPress={() => deletePost(posts[idx].id)} >
                                <MaterialCommunityIcons name="delete" size={30} color={'red'}/>
                            </Pressable>
                        </View>
                    </View>
                </View>
            ))
        }
        </>
    )
}

const styles = StyleSheet.create({
    list: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 10,
      borderRadius:10,
      backgroundColor: '#eee',
    },
    listchild: {
      flex: 4,
    },
    action: {
      flex: 1,
      marginTop: 15,
    },
    box: {
      padding: 10,
      borderRadius: 5
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "black"
    },
    desc: {
      fontSize: 15,
      fontWeight: 'normal',
      color: "black"
    },
    input: {
      opacity:0.4,
      backgroundColor: '#000',
      color: '#fff',
      padding: 5,
      borderRadius: 6, 
      borderColor: '#fff',
      marginBottom: 5
    }
});