'use client';

import React, { FC, useEffect, useState } from 'react';

import '../../app/globals.css';

interface ILoaderProps {
  isLoading?: boolean;
}

const CustomLoader: FC<ILoaderProps> = ({ isLoading }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return loaded && !isLoading && <div className="loader" />;
};

export default CustomLoader;
