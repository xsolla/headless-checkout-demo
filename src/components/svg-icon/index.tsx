import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { SvgIconContainer } from './root.styles.ts';

const iconCache = new Map();

export const SvgIcon: FC<{ url: string }> = ({ url }) => {
  const [svgContent, setSvgContent] = useState(iconCache.get(url));

  useEffect(() => {
    if (!iconCache.has(url)) {
      iconCache.set(
        url,
        axios.get(url).then((res) => res.data),
      );
    }

    iconCache.get(url).then(setSvgContent).catch(console.error);
  }, [url]);

  return svgContent ? <SvgIconContainer dangerouslySetInnerHTML={{ __html: svgContent }} /> : null;
};
