type Props = {
    params: {
        reviewId: string
    }
  }
  
  export default function ProductReview({ params }: Props) {
    return (
          <h1>Review product {params.reviewId}</h1>
    )
  }