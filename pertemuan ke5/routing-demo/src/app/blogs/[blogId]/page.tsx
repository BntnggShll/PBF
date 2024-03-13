type Props = {
    params: {
        blogId: string
    }
  }
  
  export default function blogsDetails({ params }: Props) {
    return (
          <h1>Blog {params.blogId}</h1>
    )
  }