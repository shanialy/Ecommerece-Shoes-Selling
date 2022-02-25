import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { mobile } from "../../Responsive";

const Container = styled.div`
  display: flex;
  background-color: teal;
  margin-top: 2px;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: black;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 40%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ShoesWaly</Logo>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          autem similique? Illo eos aperiam atque amet, nostrum quo! Ducimus
          accusamus vitae nostrum! Enim porro adipisci odit neque, eum velit
          saepe.
        </Description>
        <SocialContainer>
          <Icon>
            <FacebookIcon />
          </Icon>

          <Icon>
            <InstagramIcon />
          </Icon>
          <Icon>
            <TwitterIcon />
          </Icon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>..Links..</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Shoes</ListItem>
          <ListItem>Women Shoes</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon />
          Kati Pahari , Karachi
        </ContactItem>
        <ContactItem>
          <PhoneIcon />
          +923323786747
        </ContactItem>
        <ContactItem>
          <EmailIcon />
          contact@shoeswaly.com
        </ContactItem>
        <Payment src="https://static.vecteezy.com/system/resources/thumbnails/002/952/794/small/cash-on-delivery-steacker-free-vector.jpg" />
      </Right>
    </Container>
  );
};

export default Footer;
