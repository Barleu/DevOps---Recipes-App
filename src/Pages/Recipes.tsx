import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../Header/Header";
import MainFeaturedPost from "../Posts/MainFeaturedPost";
import FeaturedPost from "../Posts/FeaturedPost";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import recipePost1 from "../Posts/recipePost1";
import Grid from "@mui/material/Grid";

const sections = [
  { title: "Recipes", url: "recipes" },
  { title: "Cooking Tips", url: "cooking-tips" },
  { title: "International Food", url: "international-food" },
  { title: "Food vloggers", url: "food-vloggers" },
];

const mainFeaturedPost = {
  title: "Delicious Recipes for Every Occasion",
  description:
    "Explore our collection of mouthwatering recipes, from comforting classics to innovative dishes that will impress your guests.",
  image: "https://source.unsplash.com/random?recipes",
  imageText: "Recipes",
  linkText: "Explore more",
};

const featuredPosts = [
  {
    title: "Classic Spaghetti Carbonara",
    date: "June 1",
    description:
      "Indulge in this classic Italian pasta dish made with eggs, pancetta, and Parmesan cheese. It's simple, flavorful, and perfect for a cozy night in.",
    image: "https://source.unsplash.com/random?spaghetti-carbonara",
    imageLabel: "Spaghetti carbonara",
  },
];

const posts = [recipePost1];

const RecipesPage: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Recipes" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Container>
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Main title="From the kitchen" posts={posts} />
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

export default RecipesPage;
