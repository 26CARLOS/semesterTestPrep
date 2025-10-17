// React Component with Data Fetching

const { useState, useEffect } = React;

function PostsDisplay() {
    // Create state variable for posts, initialized to empty array
    const [posts, setPosts] = useState([]);

    // useEffect to fetch data when component mounts
    useEffect(() => {
        // Fetch data from posts.json
        fetch('posts.json')
            .then(response => response.json())
            .then(data => {
                // Update posts state with fetched data
                setPosts(data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []); // Empty dependency array means this runs only once on mount

    return (
        <div className="container">
            <h1>Posts Display</h1>
            <p>Fetching data in a React component</p>
            
            {posts.length === 0 ? (
                <p className="no-posts">No posts yet...</p>
            ) : (
                <ul className="posts-list">
                    {posts.map(post => (
                        <li key={post.id} className="post-item">
                            <span className="post-id">#{post.id}</span>
                            <span className="post-title">{post.title}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

// Render the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PostsDisplay />);
