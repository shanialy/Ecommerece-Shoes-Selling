import Announcement from "../Components/Announcement/Announcement";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Products from "../Components/Products/Products";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { mobile } from "../Responsive";

import styled from "styled-components";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Img = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  font-size: 15px;
  padding: 15px;
  border: 2px solid teal;
  background-color: blue;
  color: white;
  cursor: pointer;
  font-weight: 600;
`;

const SingleProduct = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Img src="https://styloknot.com/wp-content/uploads/2020/11/fancy.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title> Khussay</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis, minus! Soluta aliquam unde, consectetur neque suscipit
            iusto quas? Aspernatur blanditiis magnam odio illum? Excepturi sunt
            ad cupiditate perferendis consectetur consequatur.
          </Desc>
          <Price>Pkr:1999</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="brown" />
              <FilterColor color="#FFD700" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>6</FilterSizeOption>
                <FilterSizeOption>7</FilterSizeOption>
                <FilterSizeOption>8</FilterSizeOption>
                <FilterSizeOption>9</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
