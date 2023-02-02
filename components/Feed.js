import React from 'react'
import Posts from './Posts'
import Stories from './Stories'

export default function Feed() {
    return (
        <main>
            <section>
                { /* Stories */}
                <Stories />

                { /* Posts */}
                <Posts />



            </section>
            <section>
                { /* Mini Profile */}

                { /* Suggestions */}
            </section>

        </main>
    )
}
