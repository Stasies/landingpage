import React, { useState } from "react";
import {
  Container,
  Wrapper,
  Left,
  Heading,
  ImgContainer,
  Img,
  Right,
  ServicesTabs,
  TabsCategory,
  Category,
  TabsItems,
  Item,
  ItemButton,
  More,
  Content,
  Link,
} from "./ServicesElements";
import Button from "../shared/Button";
import RoundedButton from "../shared/RoundedButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EastIcon from "@mui/icons-material/East";
import services from "../../img/our_services.jpg";

const tabs = [
  {
    cat: "Making Records & Cassettes",
    items: [
      {
        title: "Design & Customization",
        desc: "With over 40 colors and over 120,000 variations, control what your record will look like.",
      },
      {
        title: "Mastering",
        desc: "Have your music mastered by engineers who specialize in mastering for vinyl.",
      },
      {
        title: "Artwork Assistance",
        desc: "Our team can help you optimize your artwork and packaging so your vinyl looks as good as it sounds.",
      },
      {
        title: "Vynil Pressing & Cassette Duplication",
        desc: "We've selected partners around the globe to provide products and services at reasonable prices and with excellent sound quality. With uncompromising partners, Qrates provides the best prices while maintaining our commitment to quality.",
      },
    ],
  },
  {
    cat: "Storage & Distribution",
    items: [
      {
        title: "Free Storage",
        desc: "At our warehouses in US, UK, and Japan, with no minimums or fees.",
      },
      {
        title: "Sell with Qrates",
        desc: "Sell your record in the Qrates shop, directly connecting with an established community of music lovers and stores worldwide.",
      },
      {
        title: "Digital Downloads",
        desc: "Make your music available for digital download in our store too.",
      },
      {
        title: "Retail Distribution",
        desc: "Simply create a Qrates page, and start your project to collect orders from 150 affiliated record stores and distributors worldwide. Let us handle the fulfillment and shipping and you focus on selling records!",
      },
    ],
  },
  {
    cat: "Support",
    items: [
      {
        title: "Customer Support",
        desc: "Our dedicated customer care team is ready to help--from order updates to refunds, returns, or exchanges. We'll handle it.",
      },
      {
        title: "Artist Support",
        desc: "Our Qrates team can guide you through all the technical details, making the production process low stress and hassle-free.",
      },
    ],
  },
];
const Services = () => {
  const [openInfo, setOpenInfo] = useState<number | boolean>(false);
  return (
    <Container>
      <Left>
        <Wrapper>
          <Button>our services</Button>
          <Heading>
            You make music.
            <br /> We do the rest.
          </Heading>
          <ImgContainer>
            <Img src={services} />
          </ImgContainer>
          <Content>
            We want you to be able to put all your energy into the creative side
            of making music. So we created a one-stop shop for everything else.
          </Content>
          <RoundedButton>Learn more</RoundedButton>
        </Wrapper>
      </Left>
      <Right>
        <ServicesTabs>
          {tabs.map((tab) => (
            <TabsCategory>
              <Category>{tab.cat}</Category>
              <TabsItems>
                {tab.items.map((item, index: number) => (
                  <Item
                    onClick={() =>
                      setOpenInfo(openInfo === index ? false : index)
                    }
                  >
                    <ItemButton>
                      {item.title} <KeyboardArrowDownIcon className="icon" />
                    </ItemButton>
                    {openInfo === index && (
                      <More>
                        <Content>{item.desc}</Content>
                        <Link>
                          Learn more
                          <EastIcon className="arrow_right" />
                        </Link>
                      </More>
                    )}
                  </Item>
                ))}
              </TabsItems>
            </TabsCategory>
          ))}
        </ServicesTabs>
      </Right>
    </Container>
  );
};

export default Services;
