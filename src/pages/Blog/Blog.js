import React from 'react';
import "./Blog.css";

const Blog = () => {
    return (
        <div className="Blog">
            <div className="inner__blog container">
                <div className="blog__title">
                    <h2>Blogs</h2>
                </div>
                <div className="blog__content">
                    <div className="blog__box">
                        <div className="blog__box__title">
                            <h3>Difference between javascript and nodejs.</h3>
                        </div>
                        <div className="blog__description">
                            <p>Javascript is a programming language that runs on browser engine. Every browser has engine that can run javascript. It is used to make web pages interact and usefull. On the other hand, node.js is a run time environment for javascript to run outside of the browser. It help javascript to run on server. With the help of it we can run javascript code on server side and run backend operation withi it. Node.js is not a programming language itself.</p>
                        </div>
                    </div>
                    <div className="blog__box">
                        <div className="blog__box__title">
                            <h3>When should you use nodejs and when should you use mongodb?</h3>
                        </div>
                        <div className="blog__description">
                            <p>Node.js is a javascript run time based on chrome's v8 engine. Its not a programming language. But it is used to make backend of a website using javascript language by makeing it run on server side. Mongo Db is a database. It's actually a no-sql database. It is very flaxible on storing data than any other aql database. We store data in mongodb in bson. which is binary json. Its very flexible to use and better to be used when the backend is made of node.js</p>
                        </div>
                    </div>
                    <div className="blog__box">
                        <div className="blog__box__title">
                            <h3>Differences between sql and nosql databases.</h3>
                        </div>
                        <div className="blog__description">
                            <p>Sql or sequal database are those database which save data in table formate. They store data in in table on row column basis. No sql data base is different. It store data in bson format. Which is accutally binary json. More specifically in json format that we use in javascript. No-sql database are better and more flexible than sql one. There are may sql database. My-sql, postgrade, mariadb is popular one. MongoDb is a no-sql database.</p>
                        </div>
                    </div>
                    <div className="blog__box">
                        <div className="blog__box__title">
                            <h3>What is the purpose of jwt and how does it work?</h3>
                        </div>
                        <div className="blog__description">
                            <p>Jwt stard for json web token. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. It means, jwt incrypt our secret information and generate token for us. The token is validate when loggin in site. If the token doesn't match we can not enter into the site. Thats how jwt make a website more sucure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;