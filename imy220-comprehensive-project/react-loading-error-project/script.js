// React Component with Loading and Error States

const { useState, useEffect } = React;

function PostsDisplay() {
    // State variables
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect to fetch data when component mounts
    useEffect(() => {
        // Async function to fetch posts
        async function fetchPosts() {
            try {
                // Fetch data from posts.json
                // To test error state, change to 'nonexistent.json'
                const response = await fetch('posts.json');
                
                // Check if response is ok
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Update posts state with fetched data
                setPosts(data);
                
            } catch (err) {
                // Set error state with error message
                setError(err.message);
                console.error('Error fetching posts:', err);
                
            } finally {
                // Always set loading to false
                setIsLoading(false);
            }
        }

        fetchPosts();
    }, []); // Empty dependency array means this runs only once on mount

    // Conditional rendering based on state
    
    // Loading state
    if (isLoading) {
        return (
            <div className="container">
                <div className="loading">
                    <div className="spinner"></div>
                    <p>Loading posts...</p>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="container">
                <div className="error">
                    <h2>⚠️ Error</h2>
                    <p>{error}</p>
                    <button onClick={() => window.location.reload()}>
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    // Success state - display posts
    return (
        <div className="container">
            <h1>Posts Display</h1>
            <p className="subtitle">With Loading and Error States</p>
            
            {posts.length === 0 ? (
                <p className="no-posts">No posts available</p>
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
