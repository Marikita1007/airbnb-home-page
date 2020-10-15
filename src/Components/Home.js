import React from 'react'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div>
            <Banner />

            <div className="card__info">
                <Card 
                    src="https://a0.muscache.com/im/pictures/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg?im_w=720"
                    alt="Paris"
                    title="Paris"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/3d3a87bc-9a2c-47b7-8a36-22969be34e5d.jpg?im_w=720"
                    alt="New York"
                    title="New York"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/ef2b9de4-3b78-4c26-9d90-fa1789762ebc.jpg?im_w=720"
                    alt="Sydney"
                    title="Sydney"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/5cf02a45-25d8-47c6-8c8b-c61949238dc0.jpg?im_w=720"
                    alt="le Cap"
                    title="Le Cap"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/52dd73d3-3803-4930-b291-2a4e736fd59e.jpg?im_w=720"
                    alt="Buenos Aires"
                    title="Buenos Aires"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/10230648-fd83-4063-9efe-caf257609d4d.jpg?im_w=720"
                    alt="Barcelone"
                    title="Barcelone"
                />
            </div>
            
        </div>
    )
}

export default Home
