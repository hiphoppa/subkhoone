import React, { useState } from 'react';
import { Tab, Tabs, Row } from 'react-bootstrap'
import AllPosts from './AllPosts';
import Post from './Post';
const Posts = ({ posts }) => {
    const [key, setKey] = useState('آخرین ملک ها');
    const [getposts, setposts] = useState([])
    const [getSecondposts, setSecondposts] = useState([])
    const { data } = posts.stars;
    const first = () => {
        const allposts = [...data]
        const filtered = allposts.filter(t => t.present_secondary_market_id == 1)
        setposts(filtered);
    }
    const second = () => {
        const allposts = [...data];
        const secFiltered = allposts.filter(t => t.present_secondary_market_id !== 1);
        setSecondposts(secFiltered)
    }
    return (
        <Row>
            <div className='mt-5 w-100'>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey="بازار ثانویه" title="بازار ثانویه" onEnter={second}>
                        <div className="my-5">
                            <div className="mt-5 custom-rtl">
                                {getSecondposts.map(post => (
                                    <Post
                                        key={post.id}
                                        name={post.name}
                                        market={post.present_secondary_market_id}
                                        model={post.income_model_id}
                                    />
                                ))}
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="بازار اولیه" title="بازار اولیه" onEnter={first}>
                        <div className="my-5">
                            <div className="mt-5 custom-rtl">
                                {getposts.map(post => (
                                    <div>
                                        <Post
                                            key={post.id}
                                            name={post.name}
                                            market={post.present_secondary_market_id}
                                            model={post.income_model_id}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="آخرین ملک ها" title="آخرین ملک ها">
                        <div className="container my-5">
                            <div className="row mt-5 custom-rtl">
                                {data.map(post => (
                                    <AllPosts
                                        key={post.id}
                                        name={post.name}
                                        market={post.present_secondary_market_id}
                                        model={post.income_model_id}
                                    />
                                ))}
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </Row>
    );
}

export default Posts;