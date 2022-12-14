import Feed from './Feed';

const Home = ({ posts, fetchError, isLoading }) => {
    return (
        <main className="Home">
             {isLoading && <p>Loading posts...</p>}
             {!isLoading && fetchError && <p style={{color: 'red'}}>{fetchError}</p>}
            {!isLoading && !fetchError&& (posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display.
                </p>
            ))}
        </main>
    )
}

export default Home
