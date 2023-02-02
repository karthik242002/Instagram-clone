import React from 'react'
import Post from './Posts'
import Stories from './Stories'

export default function Feed() {
    return (
        <main>
            <section>
                { /* Stories */}
                <Stories />

                { /* Posts */}
                <Post />

            </section>
            <section>
                { /* Mini Profile */}

                { /* Suggestions */}
            </section>

        </main>
    )
}
