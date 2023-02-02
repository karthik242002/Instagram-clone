import React from 'react'
import Post from './post'

export default function Posts() {
    const Posts = [
        {
            id: "1",
            username: "barfi_31",
            userImg: "https://media.licdn.com/dms/image/C5603AQGMJtZjoVzOlg/profile-displayphoto-shrink_400_400/0/1663685545626?e=1680739200&v=beta&t=L9oFBbnKYkniIXyu2TSi7sLOSjVv8kHsMb_wUQ_bR3E",
            img: "https://images.unsplash.com/photo-1675097659737-2575571c507c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            caption: "Nice picture"
        },
        {
            id: "2",
            username: "keerthi_dog_lover",
            userImg: "https://plus.unsplash.com/premium_photo-1661902604046-63b7a66981fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
            img: "https://images.unsplash.com/photo-1675097659737-2575571c507c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            caption: "New picture"
        },
        {
            id: "3",
            username: "furious_hearted_24",
            userImg: "https://media.licdn.com/dms/image/C5603AQGMJtZjoVzOlg/profile-displayphoto-shrink_400_400/0/1663685545626?e=1680739200&v=beta&t=L9oFBbnKYkniIXyu2TSi7sLOSjVv8kHsMb_wUQ_bR3E",
            img: "https://images.unsplash.com/photo-1675060174930-08aa9be74990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            caption: "New picture from the city"
        }
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
