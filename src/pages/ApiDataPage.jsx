import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

/**
 * API Data Page component that fetches and displays data from JSONPlaceholder
 */
const ApiDataPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const postsPerPage = 10;

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch posts from JSONPlaceholder API
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=100`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  // Filter posts based on search query
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Reset to page 1 when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading && posts.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading posts...</p>
        </div>
      </div>
    );
  }

  if (error && posts.length === 0) {
    return (
      <Card className="text-center py-12">
        <div className="text-red-600 dark:text-red-400 mb-4">
          <svg
            className="mx-auto h-12 w-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Error Loading Data</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
        <Button onClick={fetchPosts} variant="primary">
          Retry
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-2">API Data</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Fetching posts from JSONPlaceholder API
        </p>
      </div>

      {/* Search Bar */}
      <Card>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex-1 w-full">
            <input
              type="text"
              placeholder="Search posts by title or body..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 transition-all"
            />
          </div>
          {searchQuery && (
            <Button
              variant="secondary"
              onClick={() => setSearchQuery('')}
              className="whitespace-nowrap"
            >
              Clear
            </Button>
          )}
        </div>
        {searchQuery && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Found {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} matching "{searchQuery}"
          </p>
        )}
      </Card>

      {/* Posts Grid */}
      {loading && (
        <div className="text-center py-4">
          <p className="text-gray-600 dark:text-gray-400">Refreshing...</p>
        </div>
      )}

      {currentPosts.length === 0 ? (
        <Card>
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No posts found matching your search.
            </p>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((post) => (
            <Card
              key={post.id}
              className="hover:scale-105 transition-transform duration-300 animate-slide-up"
            >
              <div className="h-full flex flex-col">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                  {post.body}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    Post ID: {post.id}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    User ID: {post.userId}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Card>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredPosts.length)} of{' '}
              {filteredPosts.length} posts
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                size="sm"
              >
                Previous
              </Button>
              <span className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="secondary"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                size="sm"
              >
                Next
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ApiDataPage;

