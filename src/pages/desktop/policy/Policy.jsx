import { Box, Container } from '@mui/material';
import React from 'react';

const Policy = () => {
  return (
    <Container sx={{ marginTop: '40px', marginBottom: '40px', padding: '0 10px 56px 10px' }}>
      <Box>
        <p> 2. THÔNG TIN THANH TOÁN VÀ GIAO HÀNG * </p>
        <p>Khách hàng từ Đà Nẵng ra phía Bắc áp dụng giá bán của CellphoneS Miền Bắc. </p>
        <p>* Khách hàng từ Quảng Nam vào phía Nam áp dụng giá bán của CellphoneS Miền Nam. </p>
        <p>
          * Mua hàng online bằng cách đặt hàng trên website hoặc các hình thức khác:gọi tổng đài miễn phí 18002097; chat
          trên Website; Facebook; Email,...
        </p>
        <p>* Các cách thanh toán mua hàng: </p>
        <p>a. Giao hàng và thanh toán tại nhà: </p>
        <p>
          b. Chuyển khoản hoặc Thanh toán online trên website miễn phí với các loại thẻ tín dụng, ATM, Internet Banking,
          ZaloPay, Moca, VNPay,... - Khách hàng có thể thực hiện thanh toán chuyển khoản qua VietQR cực kỳ đơn giản, chỉ
          bằng một thao tác quét mã, tất cả mọi thứ sẽ được thực hiện tự động, không cần nhập thông tin số tài khoản,
          không cần nhập số tiền và nội dung chuyển khoản. (Xem hướng dẫn thanh toán qua Viet-QR tại đây){' '}
        </p>
        <p>
          c. Mua hàng trả góp: - Trả góp online hơn 20 loại thẻ tín dụng với lựa chọn mua trả góp thẻ tín dụng (xem thêm
          thanh toán trả góp trực tuyến Alepay) - Trả góp qua công ty tài chính: xét duyệt hồ sơ online - nhận sản phẩm
          tại cửa hàng.{' '}
        </p>
        <p>
          {' '}
          d. Mua hàng xuất hóa đơn VAT cho công ty: - Để đảm bảo hoá đơn VAT cho tổ chức - công ty hợp lệ, khi mua hàng
          có hoá đơn trên 20 triệu đồng, quý khách vui lòng thực hiện việc thanh toán bằng hình thức CHUYỂN KHOẢN vào
          tài khoản công ty của CellphoneS theo thông tin dưới đây theo cú pháp: Mã đơn hàng - SĐT người mua - Tên khách
          hàng
        </p>
      </Box>
    </Container>
  );
};

export default Policy;
