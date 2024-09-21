"use client"

import React from "react";
import { useParams } from 'next/navigation'

export default function PostID() {
  const params = useParams()
    return (
      <div>
        {params.postId}
      </div>
    );
  }