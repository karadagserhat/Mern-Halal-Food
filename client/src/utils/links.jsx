import React from 'react';

import {
  HiOutlineIdentification,
  HiOutlineChartBar,
  HiOutlineCalendarDays,
  HiOutlineDocumentPlus,
  HiOutlineLockOpen,
} from 'react-icons/hi2';

const links = [
  { text: 'add brand', path: '.', icon: <HiOutlineDocumentPlus /> },
  { text: 'all brands', path: 'all-brands', icon: <HiOutlineCalendarDays /> },
  { text: 'stats', path: 'stats', icon: <HiOutlineChartBar /> },
  { text: 'profile', path: 'profile', icon: <HiOutlineIdentification /> },
  { text: 'admin', path: 'admin', icon: <HiOutlineLockOpen /> },
];

export default links;
