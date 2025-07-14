
import React, { Suspense, lazy } from 'react';
import LoadingSpinner from './LoadingSpinner';

// Lazy load heavy components
export const LazyPortfolio = lazy(() => import('@/components/home/Portfolio'));
export const LazyTestimonials = lazy(() => import('@/components/home/Testimonials'));
export const LazyIndustries = lazy(() => import('@/components/home/Industries'));

interface LazyComponentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const LazyWrapper = ({ children, fallback }: LazyComponentProps) => (
  <Suspense fallback={fallback || <LoadingSpinner />}>
    {children}
  </Suspense>
);

// Image optimization component
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  loading = 'lazy' 
}: OptimizedImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      style={{ 
        aspectRatio: width && height ? `${width}/${height}` : undefined 
      }}
    />
  );
};

export default LazyWrapper;
