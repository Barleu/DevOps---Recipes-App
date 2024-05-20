import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../Header/Header";
import MainFeaturedPost from "../Posts/MainFeaturedPost";
import FeaturedPost from "../Posts/FeaturedPost";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import cookingTipsPost1 from "../Posts/cookingTipsPost1";
import cookingTipsPost2 from "../Posts/cookingTipsPost2";
import Grid from "@mui/material/Grid";

const sections = [
  { title: "Recipes", url: "recipes" },
  { title: "Cooking Tips", url: "cooking-tips" },
  { title: "International Food", url: "international-food" },
  { title: "Food vloggers", url: "food-vloggers" },
];

const mainFeaturedPost = {
  title: "Mastering the Art of Cooking",
  description:
    "Explore our collection of cooking tips and tricks to enhance your culinary skills and create mouthwatering dishes with confidence.",
  image: "https://source.unsplash.com/random?cooking",
  imageText: "Cooking tips",
  linkText: "Explore more",
};

const featuredPosts = [
  {
    title: "Essential Knife Skills Every Chef Should Master",
    date: "May 25",
    description:
      "Discover the fundamental knife skills that are essential for every home cook and professional chef.",
    image: "https://source.unsplash.com/random?knife-cooking",
    imageLabel: "Knife skills",
  },
  {
    title: "5 Essential Tips for Perfect Sourdough Bread",
    date: "May 25, 2022",
    description:
      "Learn the secrets to baking the perfect sourdough bread, from maintaining your starter to achieving that coveted crust.",
    image: "https://source.unsplash.com/random?bread",
    imageLabel: "Sourdough bread",
  },
];

const posts = [cookingTipsPost1, cookingTipsPost2];

const CookingTipsPage: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Cooking Tips" sections={sections} />
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

export default CookingTipsPage;
