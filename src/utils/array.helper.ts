export const withSkeletonData = <T>(
  data: T[],
  isLoading?: boolean,
  skeletonCount: number = 2
): T[] => {
  if (isLoading) {
    const skeletonData = {} as T;
    return Array.from({ length: skeletonCount }, () => skeletonData);
  }

  return data;
};
