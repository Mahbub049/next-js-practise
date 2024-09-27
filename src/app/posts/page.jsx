const getPosts = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = response.json();
    return data;
}
const page = async() => {
    const posts = await getPosts();
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                posts.map(post=><div className="text-sm border-2 p-2" key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>)
            }
        </div>
    );
};

export default page;