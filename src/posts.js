function Post(props) {
    return (<div>
        <h3>{props.id}</h3>
        <p>{props.title}</p>
    </div>);
}
function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map(post => 
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map(post =>
        <Post 
            key={post.id}
            id={post.id}
            title={post.title}
        />
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}
const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('posts')
);