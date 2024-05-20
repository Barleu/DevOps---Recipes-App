import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../Header/Header";
import MainFeaturedPost from "../Posts/MainFeaturedPost";
import FeaturedPost from "../Posts/FeaturedPost";
import Footer from "../Footer/Footer";
import Grid from "@mui/material/Grid";

const sections = [
  { title: "Recipes", url: "recipes" },
  { title: "Cooking Tips", url: "cooking-tips" },
  { title: "International Food", url: "international-food" },
  { title: "Food vloggers", url: "food-vloggers" },
];

const mainFeaturedPost = {
  title: "Discover Food Vloggers",
  description:
    "Explore the world of culinary delights with these talented food vloggers. From recipe tutorials to restaurant reviews, they share their passion for food in exciting ways.",
  image: "https://source.unsplash.com/random?food-vloggers",
  imageText: "Food Vloggers",
  linkText: "Find out more",
};

const featuredPosts = [
  {
    title: "Tasty Treats with Jenny",
    date: "June 20",
    description:
      "Join Jenny as she whips up delicious treats from around the world. With her easy-to-follow recipes and bubbly personality, you'll be inspired to get cooking in no time.",
    image: "https://source.unsplash.com/random?tasty-treats",
    imageLabel: "Tasty Treats with Jenny",
    link: "https://www.youtube.com/channel/UC1234567890",
  },
  {
    title: "Gourmet Adventures with Mike",
    date: "June 18",
    description:
      "Embark on gourmet adventures with Mike as he explores the culinary scene in different cities. From street food stalls to Michelin-starred restaurants, he'll take you on a gastronomic journey.",
    image: "https://source.unsplash.com/random?gourmet-adventures",
    imageLabel: "Gourmet Adventures with Mike",
    link: "https://www.youtube.com/channel/UC0987654321",
  },
];

const FoodVloggersPage: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Food Vloggers" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Container>
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
          </Container>
        </main>
      </Container>
      <Footer
        title="Deliciously Yours"
        description="Let's explore the world of flavors together!"
      />
    </>
  );
};

export default FoodVloggersPage;
