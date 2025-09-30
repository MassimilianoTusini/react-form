import React, { useState } from "react";

/*Creo una variabile contenente un array di Post*/
const originalPosts = [
  { id: 1, 
    title: "Come scaricare Visual Studio Code." 
  },

  { id: 2, 
    title: "Che cosa è la progammazione?" 
  },

  { id: 3, 
    title: "Come funziona Postman, guida."
  },

  {
    id: 4,
    title: "5 domande che potrebbero farti ad un colloquio di lavoro."
  },

  { id: 5, 
    title: "Correggi qua i tuoi codici!" 
  }
];


const MyMain = () => {

    const [posts, setPosts] = useState(originalPosts);
    const [newPost, setNewPost] = useState("");
  

    const postSubmit = (e) => {
        e.preventDefault();

        if (!newPost.trim()) return;

        const post = {
        id: posts.length ? posts[posts.length - 1].id + 1 : 1,
        title: newPost,
        };

        setPosts([...posts, post]);
        setNewPost("");
    };

    const postDelete = (id) => {
        setPosts(posts.filter((post) => post.id !== id));
    };

    return (
        <div className="container">
            <form onSubmit={postSubmit} className="form">

                <input
                    type="text"
                    placeholder="Inserisci quì il tuo post"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                />

                <button type="submit" className="add-btn">Aggiungi Post</button>
            </form>

            {posts.map((post) => (

                <ul key={post.id}>
                    <li key={post.id}>
                        {post.title}
                        <button className="delete-btn" onClick={() => postDelete(post.id)}>Elimina Post</button>
                    </li>
                </ul>

            ))}   

        </div>
    );
};

export default MyMain;