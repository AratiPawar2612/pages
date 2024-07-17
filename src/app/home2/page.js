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
                <img style={{height:"5rem",width:"5rem"}} src="https://i.pinimg.com/564x/df/26/a9/df26a9d757bb624506b380b4a2a5bcf1.jpg"/>
                </div>
              <div className="nav" style={{display:"flex",justifyContent:"space-evenly"}}>
                <div className="logo"></div>
                <div style={{width:"20rem"}}></div>
                <div>How it works</div>
                <div>Premium</div>
                <div>Member Stories</div>
                <div>Guides</div>
                <div>Invite</div>
                <div>Login</div>
                <div>
                    <Button style={{backgroundColor:"black",color:"white",borderRadius:"3rem"}}>Sign up</Button>
                </div>
                </div>
                
            </Header>
            <Footer
              style={{
                backgroundColor: "whitesmoke",
                textAlign: "center",
                color: "black",
              }}
            >
             <h1 style={{font:"bold",fontFamily:"monospace",fontSize:"2rem"}}>World in Space-Life</h1>
            </Footer>
            <Content>
                <img style={{height:"42.3rem",width:"100%",position:"absolute"}} src="https://i.pinimg.com/originals/15/35/02/1535024c159b6f74869a0bb0d79d5a6f.gif"/>
                <div style={{position:"relative", height:"20rem",width:"30rem",textAlign:"center",paddingTop:"10rem",marginLeft:"3rem",color:"white"}}>
                    <h1 style={{fontFamily:"serif",font:"bold",fontSize:"5rem"}}>Earth In Space</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam perspiciatis nesciunt soluta illo asperiores neque ea necessitatibus eaque blanditiis non alias, culpa a odio obcaecati eum animi provident earum? Aperiam quisquam praesentium ducimus, nesciunt distinctio quaerat repudiandae quod corporis accusamus, nobis modi omnis nemo veritatis deleniti eos unde architecto repellat voluptas vel similique explicabo. Fuga nemo laborum eum est accusantium suscipit maxime, minus eius ea, odio, quos amet voluptatem dolorem molestias officia autem ipsum qui. Qui, dolores illum laudantium labore fuga ipsum ratione consequatur perferendis distinctio! Quas saepe accusantium dolores tempora? Itaque veniam sequi laudantium ut temporibus ab quo enim.</p>
                    <Button style={{background:"none",color:"whitesmoke"}}>Sky-Watching Tips</Button>          
                </div>
                
            </Content>
          </Layout>
        </Flex>
      </div>
    </main>
  );
}
