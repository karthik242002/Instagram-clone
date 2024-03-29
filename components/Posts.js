import React from 'react'
import Post from './Post'


export default function Posts() {
    const Posts = [
        {
            id: "1",
            username: "barfi_31",
            userImg: "https://media.licdn.com/dms/image/C5603AQGMwj50ypc8mw/profile-displayphoto-shrink_100_100/0/1654420891932?e=1686182400&v=beta&t=jp8ogZwoU9--I61W4m0RxVatC4cM2hBRa0gQg70k8bo",
            img: "https://images.unsplash.com/photo-1675097659737-2575571c507c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            caption: "#Nice picture"
        },
        {
            id: "2",
            username: "keerthi_dog_lover",
            userImg: "https://media.licdn.com/dms/image/D5603AQEQDArN-Dp9Pg/profile-displayphoto-shrink_100_100/0/1669727564247?e=1686182400&v=beta&t=RJNN0TzuKXlKHrTi6-9frrt_9acXqMIq3qaa1eAl28w",
            img: "https://images.unsplash.com/photo-1675281362133-233389584833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
            caption: "#Scenary"
        },
        {
            id: "3",
            username: "furious_hearted_24",
            userImg: "https://media.licdn.com/dms/image/C5603AQGMJtZjoVzOlg/profile-displayphoto-shrink_400_400/0/1663685545626?e=1686182400&v=beta&t=7KrCDCxfCNAwWC_-JyT7w0YtipK7qdCbNu85zByoeFw",
            img: "https://images.unsplash.com/photo-1675060174930-08aa9be74990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            caption: "#New Pic"

        },

    ]
    return <div>
        {Posts.map(post => (
            <Post
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}


    </div>

}
