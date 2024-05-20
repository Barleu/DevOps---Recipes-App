import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header/Header";
import MainFeaturedPost from "./Posts/MainFeaturedPost";
import FeaturedPost from "./Posts/FeaturedPost";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import post1 from "./Posts/post1";
import post2 from "./Posts/post2";
import post3 from "./Posts/post3";

const sections = [
  { title: "Recipes", url: "recipes" },
  { title: "Cooking Tips", url: "cooking-tips" },
  { title: "International Food", url: "international-food" },
  { title: "Food vloggers", url: "food-vloggers" },
];

const mainFeaturedPost = {
  title: "Mastering the Art of Homemade Pasta",
  description:
    "Dive into the delightful world of homemade pasta with this comprehensive guide. From selecting the best ingredients to mastering the perfect dough consistency, discover tips and tricks that will elevate your pasta-making skills.",
  image: "https://source.unsplash.com/random?cooking",
  imageText: "Homemade pasta in the making",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "5 Essential Tips for Perfect Sourdough Bread",
    date: "May 20",
    description:
      "Learn the secrets to baking the perfect sourdough bread, from maintaining your starter to achieving that coveted crust.",
    image: "https://source.unsplash.com/random?bread",
    imageLabel: "Sourdough bread",
  },
  {
    title: "Exploring Global Flavors: Thai Cooking at Home",
    date: "May 18",
    description:
      "Bring the vibrant flavors of Thai cuisine into your kitchen with these easy-to-follow recipes and cooking techniques.",
    image: "https://source.unsplash.com/random?thai-cooking",
    imageLabel: "Thai cuisine",
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    '"Deliciously Yours" is your go-to food blog for mouthwatering recipes and culinary inspiration. Discover a mix of global cuisines, cooking tips, and beautiful food photography, perfect for every home cook. Join us and make every meal a delicious adventure!',
  archives: [
    { title: "March 2020", url: "/archives/march-2020" },
    { title: "February 2020", url: "/archives/february-2020" },
    { title: "January 2020", url: "/archives/january-2020" },
    { title: "November 1999", url: "/archives/november-1999" },
    { title: "October 1999", url: "/archives/october-1999" },
    { title: "September 1999", url: "/archives/september-1999" },
    { title: "August 1999", url: "/archives/august-1999" },
    { title: "July 1999", url: "/archives/july-1999" },
    { title: "June 1999", url: "/archives/june-1999" },
    { title: "May 1999", url: "/archives/may-1999" },
    { title: "April 1999", url: "/archives/april-1999" },
  ],
  social: [
    {
      name: "GitHub",
      icon: GitHubIcon,
      url: "https://github.com/Barleu/DevOps---Recipes-App",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://www.instagram.com/haaave_u_met_oana/",
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      url: "https://www.facebook.com/barleu.barbu.oana/",
    },
  ],
};

const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the oven" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Deliciously Yours"
        description="Let's explore the world of flavors together!"
      />
    </ThemeProvider>
  );
}
