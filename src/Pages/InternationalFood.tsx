import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../Header/Header";
import MainFeaturedPost from "../Posts/MainFeaturedPost";
import FeaturedPost from "../Posts/FeaturedPost";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import chineseRecipePost from "../Posts/chineseRecipePost";
import italianRecipePost from "../Posts/italianRecipePost";
import mexicanRecipePost from "../Posts/mexicanRecipePost";
import Grid from "@mui/material/Grid";

const sections = [
  { title: "Recipes", url: "recipes" },
  { title: "Cooking Tips", url: "cooking-tips" },
  { title: "International Food", url: "international-food" },
  { title: "Food vloggers", url: "food-vloggers" },
];

const mainFeaturedPost = {
  title: "Explore Global Flavors",
  description:
    "Embark on a culinary journey around the world with our collection of international recipes. From spicy Mexican dishes to comforting Italian classics, there's something for everyone to enjoy.",
  image: "https://source.unsplash.com/random?international-food",
  imageText: "International Food",
  linkText: "Discover more",
};

const featuredPosts = [
  {
    title: "Classic Italian Margherita Pizza",
    date: "June 10",
    description:
      "Transport yourself to the streets of Naples with this classic Margherita pizza recipe. With its crispy crust, tangy tomato sauce, and creamy mozzarella cheese, it's a true taste of Italy.",
    image: "https://source.unsplash.com/random?margherita-pizza",
    imageLabel: "Margherita pizza",
  },
  {
    title: "Spicy Mexican Street Tacos",
    date: "June 5",
    description:
      "Experience the vibrant flavors of Mexico with these spicy street tacos. Packed with tender meat, fresh salsa, and zesty lime, they're a fiesta in every bite.",
    image: "https://source.unsplash.com/random?mexican-tacos",
    imageLabel: "Mexican street tacos",
  },
];

const posts = [chineseRecipePost, italianRecipePost, mexicanRecipePost];

const InternationalFoodPage: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="International Food" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Container>
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Main title="From around the world" posts={posts} />
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

export default InternationalFoodPage;
