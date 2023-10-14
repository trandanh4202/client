import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import CountUp from 'react-countup';
import FlexBetween from '~/components/flexbetween/FlexBetween';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
const CountUpHome = () => {
  const listItem = [
    {
      icon: <AccountCircleIcon fontSize="large" />,
      title: 'Khách hàng',
      start: 0,
      end: 2500,
    },
    {
      icon: <CalendarMonthIcon fontSize="large" />,
      title: 'Kinh nghiệm',
      start: 0,
      end: 10,
    },
    {
      icon: <VisibilityIcon fontSize="large" />,
      title: 'Lựot xem mõi ngày',
      start: 0,
      end: 150,
    },
    {
      icon: <AddLocationAltIcon fontSize="large" />,
      title: 'Chi nhánh',
      start: 0,
      end: 2,
    },
  ];
  return (
    <Container
      sx={{
        backgroundColor: 'white',
        padding: '20px 10px',
        marginTop: '40px',
      }}
    >
      <Grid container spacing={2}>
        {listItem.map((item) => {
          return (
            <Grid item xs={6} md={2} lg={3}>
              <CountUp start={item.start} end={item.end} delay={0} duration={10}>
                {({ countUpRef }) => (
                  <FlexBetween
                    sx={{
                      flexDirection: 'column',
                    }}
                  >
                    {item.icon}

                    <Typography
                      ref={countUpRef}
                      variant="h5"
                      sx={{
                        fontWeight: 'bold',
                      }}
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}
                    >
                      {item.title}
                    </Typography>
                  </FlexBetween>
                )}
              </CountUp>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CountUpHome;
