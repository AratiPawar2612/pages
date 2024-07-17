"use client";
import React from "react";
import { Button, Flex, Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};

export default function apppage1() {
  return (
    <main>
      <div className="Home">
        <Flex gap="middle">
          <Layout style={{ height: "51.5rem", width: "100%" }}>
            <Header style={{ backgroundColor: "white" }}>
              <div className="logo">
                <img
                  style={{ height: "3rem", width: "6rem" }}
                  src="data:image/png;base64,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"
                />
              </div>
              <div
                className="nav"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <div className="logo"></div>
                <div style={{ width: "20rem" }}></div>
                <div>How it works</div>
                <div>Premium</div>
                <div>Member Stories</div>
                <div>Guides</div>
                <div>Invite</div>
                <div>Login</div>
                <div>
                  <Button
                    style={{ backgroundColor: "orange", borderRadius: "3rem" }}
                  >
                    Sign up
                  </Button>
                </div>
              </div>
            </Header>
            <Footer
              style={{
                backgroundColor: "orange",
                textAlign: "center",
                color: "white",
              }}
            ></Footer>
            <Content>
              <img
                style={{
                  height: "42.3rem",
                  width: "100%",
                  position: "absolute",
                }}
                src="https://images5.alphacoders.com/134/1346500.png"
              />
              <div className="cards">
                <div style={{ paddingTop: "3rem", marginLeft: "3rem" }}>
                  <img
                    style={{
                      height: "10rem",
                      width: "10rem",
                      position: "relative",
                      borderRadius: "15rem",
                    }}
                    src="https://gifdb.com/images/high/pastel-orange-aesthetic-500-x-500-gif-4mxhxk2fjtcmwrgy.gif"
                  />
                </div>
                <div style={{ paddingTop: "3rem", marginLeft: "3rem" }}>
                  <img
                    style={{
                      height: "10rem",
                      width: "10rem",
                      position: "relative",
                      borderRadius: "15rem",
                    }}
                    src="https://i.pinimg.com/originals/8d/74/3f/8d743fd85365d718876517b0a6554a4c.gif"
                  />
                </div>
                <div style={{ paddingTop: "3rem", marginLeft: "3rem" }}>
                  <img
                    style={{
                      height: "10rem",
                      width: "10rem",
                      position: "relative",
                      borderRadius: "15rem",
                    }}
                    src="https://gifdb.com/images/thumbnail/kawaii-orange-fruit-wink-19zcu747m4ggvlcl.webp"
                  />
                </div>
                <div className="words" style={{height:"10rem",width:"60rem",position:"relative",marginLeft:"50rem",marginTop:"-40rem"}}>
                    <h1 style={{fontSize:"10rem",marginLeft:"-10rem"}}>Hello Orange</h1>
                    <div className="button">
                        <Button style={{backgroundColor:"black",color:"orange",border:"none",marginRight:"3rem"}}>Sell Now</Button>
                        <Button style={{backgroundColor:"black",color:"orange",border:"none"}}>Buy now</Button>
                    </div>
                </div>
              </div>
            </Content>
          </Layout>
        </Flex>
      </div>
    </main>
  );
}
