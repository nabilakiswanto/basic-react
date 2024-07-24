import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

// Create an instance of axios with default settings
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000, // Optional: Set a timeout for requests
  headers: { 'Content-Type': 'application/json' },
});

// Function to fetch all posts
export const fetchPosts = async () => {
  try {
    const response = await apiClient.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

// Function to fetch a specific post by ID
export const fetchPostById = async (id) => {
  try {
    const response = await apiClient.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post with ID ${id}:`, error);
    throw error;
  }
};
