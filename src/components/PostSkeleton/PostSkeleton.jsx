import Skeleton from '@mui/material/Skeleton';
import "./PostSkeleton.scss";

export default function PostSkeleton() {
  
  const skeletonStyle = {
    marginTop: `24px`,
    borderRadius: `0.25rem`
  }

  return (
    <div className='skeleton'>
      <Skeleton variant="rectangular" height={56} style={skeletonStyle} />
      <Skeleton variant="rectangular" height={62} style={skeletonStyle} />
      <Skeleton variant="rectangular" height={58} style={skeletonStyle} />
      <Skeleton variant="rectangular" height={194} style={skeletonStyle} />
      <Skeleton variant="rectangular" height={255} style={skeletonStyle} />
    </div>
  )
}
