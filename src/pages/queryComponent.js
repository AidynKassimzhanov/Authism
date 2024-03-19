import React from 'react'
import { useGetPostsQuery, useCreatePostMutation, useUpdatePostMutation, useDeletePostMutation } from '../store/apiSlice';

export const QueryComponent = () => {
    const { data: posts, error, isLoading } = useGetPostsQuery();
    const [createPost] = useCreatePostMutation();
    const [updatePost] = useUpdatePostMutation();
    const [deletePost] = useDeletePostMutation();

    const handleCreatePost = async (newPostData) => {
        try {
          await createPost(newPostData).unwrap();
        } catch (error) {
          console.error('Ошибка при создании поста:', error);
        }
      };
    
      const handleUpdatePost = async (postId, updatedPostData) => {
        try {
          await updatePost({ id: postId, updatedPost: updatedPostData }).unwrap();
        } catch (error) {
          console.error('Ошибка при обновлении поста:', error);
        }
      };
    
      const handleDeletePost = async (postId) => {
        try {
          await deletePost(postId).unwrap();
        } catch (error) {
          console.error('Ошибка при удалении поста:', error);
        }
      };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
          <h2>Posts</h2>
          {posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button onClick={() => handleUpdatePost(post.id, { title: 'Updated Title', body: 'Updated Body' })}>
                Update
              </button>
              <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            </div>
          ))}
          <button onClick={() => handleCreatePost({ title: 'New Title', body: 'New Body' })}>Create Post</button>
        </div>
      );
}
