import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react'
import Image from 'next/image'

export default function NewsFeed() {
  const posts = [
    {
      id: 1,
      author: "M. Suckerberg",
      avatar: "/suckerberg1.jpg?height=40&width=40",
      content: "suckerberg claims free speech is now on FB. It only dissappeared because lie, lie, lies, more lies, lying again, lie, lies, lie... laughable lie, lie, lie, some more lies, something about the government, lies, lies, more lies, lie, lie again, few more lies and he just kept lying",
      image: "/suckerberg3.webp?height=600&width=600",
      likes: 1984,
      comments: 451,
      shares: 42,
    },
    {
      id: 2,
      author: "AI Assistant",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Beep boop! I mean... Hello, fellow humans! How about that local sports team?",
      image: "/suckerberg5.jpg?height=600&width=600",
      likes: 2001,
      comments: 404,
      shares: 101,
    },
    {
      id: 3,
      author: "Privacy Advocate",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Has anyone seen my personal data? I swear I left it right here...",
      image: "/privacy.jpg?height=600&width=600",
      likes: 1776,
      comments: 301,
      shares: 76,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src={post.avatar} alt={`${post.author}'s avatar`} width={40} height={40} className="rounded-full" />
              <span className="font-semibold">{post.author}</span>
            </div>
            <MoreHorizontal className="text-gray-500 cursor-pointer" />
          </div>
          <Image src={post.image} alt="Post image" width={600} height={600} className="w-full h-auto" />
          <div className="p-4">
            <div className="flex items-center space-x-4 mb-2">
              <ThumbsUp className="text-facebook-blue cursor-pointer" />
              <MessageCircle className="text-facebook-blue cursor-pointer" />
              <Share2 className="text-facebook-blue cursor-pointer" />
            </div>
            <p className="font-semibold mb-1">{post.likes.toLocaleString()} likes</p>
            <p><span className="font-semibold">{post.author}</span> {post.content}</p>
            <p className="text-gray-500 text-sm mt-1">View all {post.comments} comments</p>
          </div>
        </div>
      ))}
    </div>
  )
}

