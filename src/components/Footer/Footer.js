import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { FooterBox } from "../../styles/FooterBox/FooterBox";
import { FooterLink } from "../../styles/FooterBox/FooterLink";
import playStore from "../../images/playstore.png"

const Footer = () => {
  return (
    <FooterBox mt={4}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Stack spacing={2}>
              <Typography variant="h4" color="primary" fontWeight={700}>
                MegaMart
              </Typography>
              <Box>
                <Typography variant="body" fontWeight={700}>
                  Contact Us
                </Typography>
                <Box display="flex" gap={1} mt={1}>
                  <WhatsAppIcon />
                  <Box>
                    <Typography variant="body">Whats App</Typography>
                    <Typography variant="body2">+1 202-918-2132</Typography>
                  </Box>
                </Box>
                <Box display="flex" gap={1} mt={1}>
                  <LocalPhoneIcon />
                  <Box>
                    <Typography variant="body">Call Us</Typography>
                    <Typography variant="body2">+1 202-918-2132</Typography>
                  </Box>
                </Box>
                <Box display="flex" gap={1} mt={1}>
                  <EmailIcon />
                  <Box>
                    <Typography variant="body">Email Us</Typography>
                    <Typography variant="body2">megamart@gmail.com</Typography>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Stack spacing={2}>
              <Typography variant="body" color="primary" fontWeight={500}>
                Popular Categories
              </Typography>
              <Box>
                <Box display="flex" gap={1} mt={1}>
                  <FooterLink>
                    <NavLink>Groceries</NavLink>
                    <NavLink>Premium Fruits</NavLink>
                    <NavLink>Home & Kitchen</NavLink>
                    <NavLink>Fashon</NavLink>
                    <NavLink>Toys & Luggage</NavLink>
                    <NavLink>Electronics</NavLink>
                    <NavLink>Home Improvement</NavLink>
                  </FooterLink>
                </Box>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Stack spacing={2}>
              <Typography variant="body" color="primary" fontWeight={500}>
                Customer Services
              </Typography>
              <Box>
                <Box display="flex" gap={1} mt={1}>
                  <FooterLink>
                    <NavLink>About Us</NavLink>
                    <NavLink>Terms & Conditions</NavLink>
                    <NavLink>FAQ</NavLink>
                    <NavLink>Privacy Policy</NavLink>
                    <NavLink>E-waste Policy</NavLink>
                    <NavLink>Concellation & Return Policy</NavLink>
                  </FooterLink>
                </Box>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Stack spacing={2}>
              <Typography variant="body" color="primary" fontWeight={500}>
                Download App
              </Typography>
              <Box>
                <Box display="flex" gap={1} mt={1}>
                  <Box>
                    <img src={playStore} alt="" style={{maxWidth: "100%", height: "50px"}} />
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </FooterBox>
  );
};

export default Footer;
