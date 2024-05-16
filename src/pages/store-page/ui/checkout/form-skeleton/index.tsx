import { StyledFormSkeletonContainer } from '../../../styled/checkout.styles.ts';

export const FormSkeleton = () => {
  return (
    <StyledFormSkeletonContainer>
      <div className={'skeleton control'}></div>
      <div className={'form-skeleton'}>
        <div className={'skeleton control'}></div>
        <div className={'skeleton control'}></div>
      </div>
      <div className={'skeleton button'}></div>
    </StyledFormSkeletonContainer>
  );
};
