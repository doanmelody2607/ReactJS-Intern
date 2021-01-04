import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";
import './Products.scss'

const Products = () => {
  return (
    <div className="container">
      <CardDeck>
        <Card>
          <Card.Img 
            className="product-img"
            variant="top"
            src="https://i.xeoto.com.vn/auto/w250/mercedes/s450/mercedes-s450-2020.png"
          />
          <Card.Body>
            <Card.Title>Mercedes-Benz S450</Card.Title>
            <Card.Text>
              Mercedes S450L là mẫu xe hạng sang, cao cấp mang vẻ đẹp của sự
              sang trọng, quyền lực lấy được sự chú ý của mọi người ngay từ lần
              đầu tiên ra mắt.
            </Card.Text>
            <p>
              <b>Giá tiền: 4.249.000.000 VNĐ</b>
            </p>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-dark">Learn More</Button>
            
            <Button className="ml-2" variant="outline-dark">Add to Cart</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.xeoto.com.vn/auto/w250/mercedes/glb-200/mercedes-glb-200-2021.png"
          />
          <Card.Body>
            <Card.Title>Mercedes-Benz GLB 200</Card.Title>
            <Card.Text>
              Mercedes GLB 200 là một chiếc SUV được thiết kế hoàn toàn mới,
              GLB200 4MATIC là một trong số rất ít những chiếc SUV cỡ nhỏ đi kèm
              tùy chọn bảy chỗ ngồi, nhưng những chiếc ghế sau cùng bị chật chội
              nhất và hầu như không còn chỗ trống trong việc di chuyển.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-dark">Learn More</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.xeoto.com.vn/auto/w250/mercedes/glc-300/mercedes-glc-300-2020-59746.png"
          />
          <Card.Body>
            <Card.Title>Mercedes-Benz GLC 300</Card.Title>
            <Card.Text>
              Mercedes GLC300 chiếc xe cao cấp nhất trong dòng Mercedes-Benz GLC
              đến từ nước Đức. Đây là dòng xe khiến nhiều khách say đắm bởi độ
              sang trọng cũng như tiện nghi hiện đại. Phiên bản GLC 300 2020 vừa
              ra mắt đã tạo nên một cơn sốt trên thị trường ô tô.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-dark">Learn More</Button>
          </Card.Footer>
        </Card>
      </CardDeck>

      <br />

      {/* Row 2 */}
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.xeoto.com.vn/auto/w250/mercedes/e180/mercedes-e180-2021.png"
          />
          <Card.Body>
            <Card.Title>Mercedes-Benz E180</Card.Title>
            <Card.Text>
              Mercedes-Benz E180 là mẫu xe rẻ nhất thuộc dòng E-Class.
              Mercedes-Benz định hướng mẫu xe này dành cho nhóm khách hàng doanh
              nhân trẻ, vì thế nội thất bên trong vẫn giữ được nét sang trọng
              nhờ vật liệu gỗ, da.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-dark">Learn More</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.xeoto.com.vn/auto/w250/mercedes/glb-250/mercedes-glb-250-2021-53259.png"
          />
          <Card.Body>
            <Card.Title>Mercedes-Benz GLB 250</Card.Title>
            <Card.Text>
              Mercedes-Benz GLB 250 thiết kế mới hoàn toàn, hãng xe Đức tiếp tục
              đánh vào phân khúc crossover hạng sang, nhắm vào người dùng “ít
              tiền” nhưng muốn sở hữu xe sang.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-dark">Learn More</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.xeoto.com.vn/auto/w250/mercedes/gls-450/mercedes-gls-450-2021-99828.png"
          />
          <Card.Body>
            <Card.Title>Mercedes-Benz GLS450</Card.Title>
            <Card.Text>
              Mercedes GLS450 4Matic là phiên bản đầu tiên của Mercedes GLS đời
              2021 được phân phối chính hãng tại Việt Nam, GLS 450 4MATIC có giá
              đề xuất chỉ 4,909 tỷ đồng. Mercedes-Benz GLS450 được thiết kế lại
              năm 2021 đứng giữa phân khúc SUV cỡ lớn hạng sang.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-dark">Learn More</Button>
          </Card.Footer>
        </Card>
      </CardDeck>

      <br />

      {/* Row 3 */}
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.xeoto.com.vn/auto/w250/mercedes/e300/mercedes-e300-2020-16317.png"
          />
          <Card.Body>
            <Card.Title>Mercedes-Benz E300</Card.Title>
            <Card.Text>
              Mercedes-Benz E180 là mẫu xe rẻ nhất thuộc dòng E-Class.
              Mercedes-Benz định hướng mẫu xe này dành cho nhóm khách hàng doanh
              nhân trẻ, vì thế nội thất bên trong vẫn giữ được nét sang trọng
              nhờ vật liệu gỗ, da.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-dark">Learn More</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.xeoto.com.vn/auto/w250/mercedes/vito/mercedes-vito-2020-49584.png"
          />
          <Card.Body>
            <Card.Title>Mercedes-Benz Vito</Card.Title>
            <Card.Text>
              Mercedes GLB 200 là một chiếc SUV được thiết kế hoàn toàn mới,
              GLB200 4MATIC là một trong số rất ít những chiếc SUV cỡ nhỏ đi kèm
              tùy chọn bảy chỗ ngồi, nhưng những chiếc ghế sau cùng bị chật chội
              nhất và hầu như không còn chỗ trống trong việc di chuyển.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-dark">Learn More</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.xeoto.com.vn/auto/w250/mercedes/v250/mercedes-v250-2020-17566.png"
          />
          <Card.Body>
            <Card.Title>Mercedes-Benz V250</Card.Title>
            <Card.Text>
              Mercedes GLC300 chiếc xe cao cấp nhất trong dòng Mercedes-Benz GLC
              đến từ nước Đức. Đây là dòng xe khiến nhiều khách say đắm bởi độ
              sang trọng cũng như tiện nghi hiện đại. Phiên bản GLC 300 2020 vừa
              ra mắt đã tạo nên một cơn sốt trên thị trường ô tô.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-dark">Learn More</Button>
          </Card.Footer>
        </Card>
      </CardDeck>

      <br />

      {/* Row 4 */}
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.xeoto.com.vn/auto/w250/mercedes/gls-500/mercedes-gls-500-2020.png"
          />
          <Card.Body>
            <Card.Title>Mercedes-Benz GLS 500</Card.Title>
            <Card.Text>
              Mercedes-Benz E180 là mẫu xe rẻ nhất thuộc dòng E-Class.
              Mercedes-Benz định hướng mẫu xe này dành cho nhóm khách hàng doanh
              nhân trẻ, vì thế nội thất bên trong vẫn giữ được nét sang trọng
              nhờ vật liệu gỗ, da.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-dark">Learn More</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.xeoto.com.vn/auto/w250/mercedes/gls-400/mercedes-gls-400-2020-53392.png"
          />
          <Card.Body>
            <Card.Title>Mercedes-Benz GLS 400</Card.Title>
            <Card.Text>
              Mercedes GLB 200 là một chiếc SUV được thiết kế hoàn toàn mới,
              GLB200 4MATIC là một trong số rất ít những chiếc SUV cỡ nhỏ đi kèm
              tùy chọn bảy chỗ ngồi, nhưng những chiếc ghế sau cùng bị chật chội
              nhất và hầu như không còn chỗ trống trong việc di chuyển.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-dark">Learn More</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://i.xeoto.com.vn/auto/w250/mercedes/gls-350d/mercedes-gls-350d-2020-76167.png"
          />
          <Card.Body>
            <Card.Title>Mercedes-Benz GLS 350d</Card.Title>
            <Card.Text>
              Mercedes GLC300 chiếc xe cao cấp nhất trong dòng Mercedes-Benz GLC
              đến từ nước Đức. Đây là dòng xe khiến nhiều khách say đắm bởi độ
              sang trọng cũng như tiện nghi hiện đại. Phiên bản GLC 300 2020 vừa
              ra mắt đã tạo nên một cơn sốt trên thị trường ô tô.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-dark">Learn More</Button>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Products;
