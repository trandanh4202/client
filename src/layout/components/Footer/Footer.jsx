import { Box, Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    text: 'Mua hàng và thanh toán Online',
    url: 'https://cellphones.com.vn/chinh-sach-giao-hang',
  },
  {
    text: 'Mua hàng trả góp Online',
    url: 'https://cellphones.com.vn/tra-gop-online-the-tin-dung',
  },
  {
    text: 'Chính sách giao hàng',
    url: 'https://cellphones.com.vn/chinh-sach-giao-hang',
  },
];
const hotline = [
  {
    text: 'Gọi mua:',
    number: '0913423421',
  },
  {
    text: 'Gọi khiếu nại:',
    number: '0913423421',
  },
  {
    text: 'Gọi bảo hành:',
    number: '0913423421',
  },
  {
    text: 'Gọi dịch vụ khác:',
    number: '0913423421',
  },
];
const payment = [
  {
    logo: './vnpay.webp',
  },
  {
    logo: './visa.png',
  },
  {
    logo: './paypal.webp',
  },
  {
    logo: './momo.png',
  },
  {
    logo: './bank.png',
  },
];
const socials = [
  {
    logo: './facebook.png',
    url: 'facebook.com',
  },
  {
    logo: './mess.png',
    url: 'facebook.com',
  },
  {
    logo: './zalo.webp',
    url: 'zalo.com',
  },
  {
    logo: './github.png',
    url: 'github.com',
  },
];
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#5f5d5d1a',
        paddingBottom: { xs: '60px' },
        display: { xs: 'none', md: 'block', lg: 'block' },
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={4} lg={3}>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  padding: '24px 20px',
                }}
              >
                Thông tin về LandP
              </Typography>
              <Typography variant="subtitle1" sx={{ textAlign: 'justify', padding: '8px 16px' }}>
                {' '}
                LandP là dự án nhóm được thực hiện bởi Danh và Cường, sản phẩm vẫn còn trong quá trình hoàn thiện về mặt
                UX/UI cũng như các chức năng cần thiết và nâng cao hơn
              </Typography>
              <List
                sx={{
                  display: 'flex',
                }}
              >
                {socials.map((item, index) => (
                  <ListItem key={index}>
                    <Link to={item.url}>
                      <img
                        alt="payment"
                        src={item.logo}
                        style={{
                          width: '40px',
                          height: '40px',
                          objectFit: 'contain',
                        }}
                      />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <List>
              <ListItem>
                <Typography
                  variant="h5"
                  sx={{
                    padding: '8px 16px',
                  }}
                >
                  Chính sách
                </Typography>
              </ListItem>
              {links.map((link, index) => (
                <ListItem
                  key={index}
                  sx={{
                    '&:hover': {
                      color: 'red',
                    },
                  }}
                >
                  <Link to={link.url} className="text-hover">
                    <ListItemText primary={link.text} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Box
              sx={{
                padding: '8px 0',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  padding: '16px 32px',
                  // marginTop: '8px',
                  // lineHeight: '24px',
                }}
              >
                Tổng đài hỗ trợ
              </Typography>
              <List
                sx={{
                  padding: '0px',
                }}
              >
                {hotline.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`${item.text}`} />
                    <a href={`tel:${item.number}`}>
                      <ListItemText primary={` ${item.number}`} />
                    </a>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Typography
              variant="h5"
              sx={{
                padding: '16px 32px',
              }}
            >
              Hình thức thanh toán
            </Typography>

            <List
              sx={{
                display: 'flex',
              }}
            >
              {payment.map((item, index) => (
                <ListItem key={index}>
                  <img
                    alt="payment"
                    src={item.logo}
                    style={{
                      width: '30px',
                      height: '30px',
                      objectFit: 'contain',
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
