import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Hiển thị nút scroll khi cuộn xuống một phần của trang
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Thêm sự kiện scroll để kiểm tra vị trí cuộn và hiển thị nút
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Xóa sự kiện khi component bị unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Cuộn đến đầu trang khi nút được click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Cuộn mượt
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          variant="contained"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: '90px',
            right: '30px',
            zIndex: 1000,
            backgroundColor: 'black',
            '&:hover': {
              backgroundColor: 'grey',
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Button>
      )}
    </>
  );
};

export default ScrollToTopButton;
