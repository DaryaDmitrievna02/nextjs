'use client'

import { getPosts } from '@/app/api/getPosts';
import { useQuery } from '@tanstack/react-query';

import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import React from 'react';
import { Box, Button } from '@mui/material';
import Loader from '../loader';
import { useRouter } from 'next/navigation';

const Posts = () => {
  const router = useRouter()
    const { data:posts, isLoading, isSuccess } = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
      });

      if(isLoading) return <Loader text='Loading posts'/>
      if(!isSuccess) return <Box><WarningAmberOutlinedIcon /> Smth went wrong!</Box>
      
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.slice(0, 10).map((post) => ( 
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <Button 
    variant="outlined"
    onClick={() => router.push('dashboard/test')}>
      Dashboard
    </Button>
    </div>
  );
};

export default Posts;