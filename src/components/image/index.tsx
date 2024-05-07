import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ImageProps } from './image-props.interface.ts';

export const Image = (props: ImageProps) => (
  <div>
    <LazyLoadImage
      src={props.imgUrl}
      placeholderSrc={props.placeHolderIcon}
      style={{ width: props.placeHolderWidth }}
    />
  </div>
);
