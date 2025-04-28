import ContentLoader, {
  Rect,
  IContentLoaderProps,
} from "react-content-loader/native";

export const CategoryCardSkeleton = (props: IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    width="100%"
    height={164}
    backgroundColor="#BEBEBE"
    foregroundColor="#ECEBEB"
    {...props}
  >
    <Rect x="0" y="0" rx="12" ry="12" width="100%" height="152" />
  </ContentLoader>
);
