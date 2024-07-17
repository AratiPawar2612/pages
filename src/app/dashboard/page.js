"use client";
import React, { useState, useEffect } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
  ArrowRightOutlined,
  ToolOutlined,
  PlusOutlined,
  PoweroffOutlined,
  CloudUploadOutlined,
  ExceptionOutlined,
  FilterOutlined,
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
  ArrowLeftOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";

const items = [
    {
      key: "1",
      icon: <PieChartOutlined />,
      label: "Home",
    },
    {
      key: "2",
      icon: <DesktopOutlined />,
      label: "Notification",
    },
    {
      key: "3",
      icon: <ContainerOutlined />,
      label: "Logout",
    },
   
  ];

  export default function user() {
    return (
        <div className="main">
            <div className="all" style={{display:"flex"}}>
            <div className="navbar">
          <header
            style={{
              height: "7rem",
              width: "10rem",
              backgroundColor: "white",
              textAlign: "center",
            }}
          >
            <img
              style={{ height: "5rem", width: "5rem", marginTop: "1rem" }}
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </header>
          <div
            className="list"
            style={{
              width: "10rem",
              height: "30rem",
              
            }}
          >
            <div style={{display:"flex",flexDirection:"column"}}>
            <div>
            <Menu
              className="list-resp"
              style={{ height: "85rem" }}
              defaultSelectedKeys={["1"]}
              theme="light"
              items={items}
            />
            </div>

            <div style={{marginTop:"-20rem",padding:"5rem"}}>
                <img style={{height:"3rem",width:"3rem",borderRadius:"3rem",backgroundColor:"yellowgreen"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt="" />
            </div>

            </div>
          </div>
        </div>

        <div className="content"  style={{
            backgroundColor: "red",
            marginLeft: "5rem",
            width: "100%",
          }}>
            <div className="subcontent" style={{backgroundColor:"whitesmoke",height:"80rem",width:"100%",padding:"1rem"}}>
              <div className="title" style={{display:"flex",justifyContent:"space-between"}}>
              <h1><ArrowLeftOutlined />      Application Dashboard</h1>
              <Button style={{backgroundColor:"black",color:"white",height:"2.5rem",width:"10rem",borderRadius:"1rem"}}>Create an Event</Button>
              </div>

              <div className="line1 line-resp" style={{display:"flex",justifyContent:"space-evenly"}}>
                <div className="box1" style={{backgroundColor:"white",height:"8rem",width:"19rem",padding:"0.5rem",border:"1px solid black",borderRadius:"1rem"}}>
                   <div className="box1-resp">
                   <div className="icon" style={{height:"1.5rem",width:"1.5rem",backgroundColor:"lightblue",color:"white",textAlign:"center",padding:"0.2rem"}}>
                    <ExceptionOutlined />
                    </div>
                    <p style={{font:"bold"}}>All Applications/Completed </p>
                    <div className="info" style={{display:"flex",justifyContent:"space-between",marginTop:"-1.5rem"}}>
                        <div>
                        
                        <p>04 Event / 400 Applications</p>
                        </div>
                        <div style={{height:"2rem",width:"2rem",borderRadius:"2rem",backgroundColor:"white",textAlign:"center",}}>
                        <ArrowRightOutlined style={{marginTop:"0.5rem"}} />
                        </div>
                        <div id="more-resp" style={{display:"none"}}><a href="./">View More</a></div>
                    </div>
                   </div>
                </div>
                

                <div className="box2 box-resp" style={{backgroundColor:"white",height:"8rem",width:"19rem",padding:"0.5rem",border:"1px solid black",borderRadius:"1rem"}}>
                   <div className="box-resp">
                   <div className="icon" style={{height:"1.5rem",width:"1.5rem",backgroundColor:"lightgreen",color:"white",textAlign:"center",padding:"0.2rem"}}>
                    <ExceptionOutlined />
                    </div>
                    <p style={{font:"bold"}}>All Applications/Completed </p>
                    <div className="info" style={{display:"flex",justifyContent:"space-between",marginTop:"-1.5rem"}}>
                        <div>
                        
                        <p>04 Event / 400 Applications</p>
                        </div>
                        <div style={{height:"2rem",width:"2rem",borderRadius:"2rem",backgroundColor:"white",textAlign:"center",}}>
                        <ArrowRightOutlined style={{marginTop:"0.5rem"}} />
                        </div>
                   </div>
                    </div>
                </div>

                <div className="box3 box-resp" style={{backgroundColor:"white",height:"8rem",width:"19rem",padding:"0.5rem",border:"1px solid black",borderRadius:"1rem"}}>
                    <div className="box-resp">
                    <div className="icon" style={{height:"1.5rem",width:"1.5rem",backgroundColor:"yellow",color:"white",textAlign:"center",padding:"0.2rem"}}>
                    <ExceptionOutlined />
                    </div>
                    <p style={{font:"bold"}}>All Applications/Completed </p>
                    <div className="info" style={{display:"flex",justifyContent:"space-between",marginTop:"-1.5rem"}}>
                        <div>
                        
                        <p>04 Event / 400 Applications</p>
                        </div>
                        <div style={{height:"2rem",width:"2rem",borderRadius:"2rem",backgroundColor:"white",textAlign:"center",}}>
                        <ArrowRightOutlined style={{marginTop:"0.5rem"}} />
                        </div>
                    </div>
                    </div>
                </div>

                <div className="box4 box-resp" style={{backgroundColor:"white",height:"8rem",width:"19rem",padding:"0.5rem",border:"1px solid black",borderRadius:"1rem"}}>
                    <div className="box-resp">
                    <div className="icon" style={{height:"1.5rem",width:"1.5rem",backgroundColor:"red",color:"white",textAlign:"center",padding:"0.2rem"}}>
                    <ExceptionOutlined />
                    </div>
                    <p style={{font:"bold"}}>All Applications/Completed </p>
                    <div className="info" style={{display:"flex",justifyContent:"space-between",marginTop:"-1.5rem"}}>
                        <div>
                        
                        <p>04 Event / 400 Applications</p>
                        </div>
                        <div style={{height:"2rem",width:"2rem",borderRadius:"2rem",backgroundColor:"white",textAlign:"center",}}>
                        <ArrowRightOutlined style={{marginTop:"0.5rem"}} />
                        </div>
                    </div>
                    </div>
                </div>
              </div>

              <div className="title" style={{display:"flex",justifyContent:"space-between"}}>
              <h1>Upcoming Events</h1>
              <div className="buttons">
              <Button style={{height:"2.5rem",width:"13rem",borderRadius:"1rem"}}> <SearchOutlined />Search here</Button>
              <Button style={{height:"2.5rem",width:"10rem",borderRadius:"1rem",margin:"1rem"}}> <FilterOutlined /> Apply filter</Button>
              </div>
              </div>

              <div className="line2 line-resp" style={{display:"flex",justifyContent:"space-evenly"}}>
              <div className="box21" style={{
                  backgroundColor: "white",
                  height: "23rem",
                  width: "19rem",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  border:"1px solid black"
                }}>
                    <div className="icon" style={{height:"1.5rem",width:"1.5rem",backgroundColor:"whitesmoke",color:"white",textAlign:"center",padding:"1rem",border:"0.5px solid grey"}}>
                    <PlusOutlined style={{color:"black"}} />
                    </div>
                    <div style={{paddingTop:"2rem"}}>
                    <h3 style={{font:"bold",height:"2rem",width:"8rem"}}>Create and Assign Event </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                       <div className="button" style={{textAlign:"center",paddingTop:"3rem"}}>
                        <Button style={{backgroundColor:"black",color:"white",height:"2rem",width:"10rem"}}>Create Here</Button>
                       </div>
                </div>

                <div className="box22" style={{
                  backgroundColor: "white",
                  height: "23rem",
                  width: "19rem",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  border:"1px solid black"
                }}>
                   <div className="date" style={{display:"flex",justifyContent:"space-between"}}>
                    <div style={{paddingTop:"-2rem"}}>
                        <h1>04</h1>
                        <h3 style={{marginTop:"-0.5rem"}}>JANUARY</h3>
                    </div>
                    <div style={{marginLeft:"3rem"}}>
                        <Button style={{marginTop:"1rem",height:"2rem",width:"6rem",backgroundColor:"whitesmoke"}}>75 Registations</Button>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                   </div>
                <hr style={{marginTop:"-1rem",color:"whitesmoke"}}/>
                <div className="date2" style={{paddingTop:"-2rem"}} >
                    <p>10.02.24</p>
                    <h3 style={{paddingTop:"-2rem"}}>MANAN ASHRAM</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo.</p>
                </div>
                <div className="date3" style={{display:"flex",justifyContent:"space-between",marginTop:"5rem"}}>
                    <div>
                        <Button style={{backgroundColor:"black",color:"white"}}>View status</Button>
                    </div>
                    <div>
                        <img style={{backgroundColor:"black",height:"3rem",width:"3rem",borderRadius:"3rem"}} src="data:image/png;base64,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" alt="" />
                    </div>
                </div>
                </div>

                <div
                className="box22"
                style={{
                    backgroundColor: "white",
                    height: "23rem",
                    width: "19rem",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    border:"1px solid black"
                  }}
              >
                <div
                  className="date"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ paddingTop: "-2rem" }}>
                    <h1>04</h1>
                    <h3 style={{ marginTop: "-0.5rem" }}>JANUARY</h3>
                  </div>
                  <div style={{ marginLeft: "3rem" }}>
                    <Button
                      style={{
                        marginTop: "1rem",
                        height: "2rem",
                        width: "6rem",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      75 Registations
                    </Button>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <hr style={{ marginTop: "-1rem", color: "whitesmoke" }} />
                <div className="date2" style={{ paddingTop: "-2rem" }}>
                  <p>10.02.24</p>
                  <h3 style={{ paddingTop: "-2rem" }}>MANAN ASHRAM</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo.
                  </p>
                </div>
                <div
                  className="date3"
                  style={{ display: "flex", justifyContent: "space-between" ,marginTop:"5rem"}}
                >
                  <div>
                    <Button
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      View status
                    </Button>
                  </div>
                  <div>
                    <img
                      style={{
                        backgroundColor: "black",
                        height: "3rem",
                        width: "3rem",
                        borderRadius: "3rem",
                      }}
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div
                className="box22"
                style={{
                    backgroundColor: "white",
                    height: "23rem",
                    width: "19rem",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    border:"1px solid black"
                  }}
              >
                <div
                  className="date"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ paddingTop: "-2rem" }}>
                    <h1>04</h1>
                    <h3 style={{ marginTop: "-0.5rem" }}>JANUARY</h3>
                  </div>
                  <div style={{ marginLeft: "3rem" }}>
                    <Button
                      style={{
                        marginTop: "1rem",
                        height: "2rem",
                        width: "6rem",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      75 Registations
                    </Button>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <hr style={{ marginTop: "-1rem", color: "whitesmoke" }} />
                <div className="date2" style={{ paddingTop: "-2rem" }}>
                  <p>10.02.24</p>
                  <h3 style={{ paddingTop: "-2rem" }}>MANAN ASHRAM</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo.
                  </p>
                </div>
                <div
                  className="date3"
                  style={{ display: "flex", justifyContent: "space-between" ,marginTop:"5rem"}}
                >
                  <div>
                    <Button
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      View status
                    </Button>
                  </div>
                  <div>
                    <img
                      style={{
                        backgroundColor: "black",
                        height: "3rem",
                        width: "3rem",
                        borderRadius: "3rem",
                      }}
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              </div>

              <div className="line3" style={{margin:"1rem"}}>
                <div style={{height:"2rem",width:"89rem",backgroundColor:"whitesmoke",borderRadius:"0.5rem",textAlign:"end"}}>
                <Button><LeftOutlined />Next<RightOutlined /></Button>
                </div>
              </div>

              <div className="title" style={{display:"flex",justifyContent:"space-between"}}>
              <h1>Past Events</h1>
              <div className="buttons">
              <Button style={{height:"2.5rem",width:"13rem",borderRadius:"1rem"}}> <SearchOutlined />Search here</Button>
              <Button style={{height:"2.5rem",width:"10rem",borderRadius:"1rem",margin:"1rem"}}> <FilterOutlined /> Apply filter</Button>
              </div>
              </div>

              <div className="line4 line-resp" style={{display:"flex",justifyContent:"space-evenly"}}>
              <div
                className="box31"
                style={{
                    backgroundColor: "white",
                    height: "23rem",
                    width: "19rem",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    border:"1px solid black"
                  }}
              >
                <div
                  className="date"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ paddingTop: "-2rem" }}>
                    <h1>04</h1>
                    <h3 style={{ marginTop: "-0.5rem" }}>JANUARY</h3>
                  </div>
                  <div style={{ marginLeft: "3rem" }}>
                    <Button
                      style={{
                        marginTop: "1rem",
                        height: "2rem",
                        width: "6rem",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      75 Registations
                    </Button>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <hr style={{ marginTop: "-1rem", color: "whitesmoke" }} />
                <div className="date2" style={{ paddingTop: "-2rem" }}>
                  <div style={{display:"flex"}}>
                 <div> <p>10.02.24</p>
                <div style={{height:"2rem",width:"10rem"}}> <h3 style={{ paddingTop: "-2rem" }}>MANAN ASHRAM</h3></div>
                </div>
                  <div style={{display:"flex",gap:"0.5rem"}}>
                        <div>
                        <div style={{height:"0.5rem",width:"0.5rem",backgroundColor:"yellow",borderRadius:"0.5rem",marginTop:"1.3rem"}}></div>
                        </div>
                        <p>Resheduale</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo.
                  </p>
                </div>
                <div
                  className="date3"
                  style={{ display: "flex", justifyContent: "space-between",marginTop:"5rem" }}
                >
                  <div>
                    <Button
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      View status
                    </Button>
                  </div>
                  <div>
                    <img
                      style={{
                        backgroundColor: "black",
                        height: "3rem",
                        width: "3rem",
                        borderRadius: "3rem",
                      }}
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </div>
                </div>
              </div>


                <div className="box32"
                 style={{
                    backgroundColor: "white",
                    height: "23rem",
                    width: "19rem",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    border:"1px solid black"
                  }}>
                   <div className="date" style={{display:"flex",justifyContent:"space-between"}}>
                    <div style={{paddingTop:"-2rem"}}>
                        <h1>04</h1>
                        <h3 style={{marginTop:"-0.5rem"}}>JANUARY</h3>
                    </div>
                    <div style={{marginLeft:"3rem"}}>
                        <Button style={{marginTop:"1rem",height:"2rem",width:"6rem",backgroundColor:"whitesmoke"}}>75 Registations</Button>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                   </div>
                <hr style={{marginTop:"-1rem",color:"whitesmoke"}}/>
                <div className="date2" style={{paddingTop:"-2rem"}} >
                   <div style={{display:"flex"}}>
                    <div>
                    <p>10.02.24</p>
                    <div style={{height:"2rem",width:"10rem"}}> <h3 style={{ paddingTop: "-2rem" }}>MANAN ASHRAM</h3></div>
                    </div> 
                    <div style={{display:"flex",gap:"0.5rem"}}>
                        <div>
                        <div style={{height:"0.5rem",width:"0.5rem",backgroundColor:"green",borderRadius:"0.5rem",marginTop:"1.3rem"}}></div>
                        </div>
                        <p>Scheduale</p>
                    </div>
                   </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo.</p>
                </div>
                <div className="date3" style={{display:"flex",justifyContent:"space-between",marginTop:"5rem"}}>
                    <div>
                        <Button style={{backgroundColor:"black",color:"white"}}>View status</Button>
                    </div>
                    <div>
                        <img style={{backgroundColor:"black",height:"3rem",width:"3rem",borderRadius:"3rem"}} src="data:image/png;base64,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" alt="" />
                    </div>
                </div>
                </div>

                <div
                className="box32"
                style={{
                    backgroundColor: "white",
                    height: "23rem",
                    width: "19rem",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    border:"1px solid black"
                  }}
              >
                <div
                  className="date"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ paddingTop: "-2rem" }}>
                    <h1>04</h1>
                    <h3 style={{ marginTop: "-0.5rem" }}>JANUARY</h3>
                  </div>
                  <div style={{ marginLeft: "3rem" }}>
                    <Button
                      style={{
                        marginTop: "1rem",
                        height: "2rem",
                        width: "6rem",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      75 Registations
                    </Button>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <hr style={{ marginTop: "-1rem", color: "whitesmoke" }} />
                <div className="date2" style={{ paddingTop: "-2rem" }}>
                  <div style={{display:"flex"}}>
                 <div> <p>10.02.24</p>
                <div style={{height:"2rem",width:"10rem"}}> <h3 style={{ paddingTop: "-2rem" }}>MANAN ASHRAM</h3></div>
                </div>
                  <div style={{display:"flex",gap:"0.5rem"}}>
                        <div>
                        <div style={{height:"0.5rem",width:"0.5rem",backgroundColor:"maroon",borderRadius:"0.5rem",marginTop:"1.3rem"}}></div>
                        </div>
                        <p>Cancelled</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo.
                  </p>
                </div>
                <div
                  className="date3"
                  style={{ display: "flex", justifyContent: "space-between",marginTop:"5rem" }}
                >
                  <div>
                    <Button
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      View status
                    </Button>
                  </div>
                  <div>
                    <img
                      style={{
                        backgroundColor: "black",
                        height: "3rem",
                        width: "3rem",
                        borderRadius: "3rem",
                      }}
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div style={{display:"flex"}}>
              <div
                className="box22"
                style={{
                  backgroundColor: "white",
                  height: "23rem",
                  width: "19rem",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  border:"1px solid black"
                }}
              >
                <div
                  className="date"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ paddingTop: "-2rem" }}>
                    <h1>04</h1>
                    <h3 style={{ marginTop: "-0.5rem" }}>JANUARY</h3>
                  </div>
                  <div style={{ marginLeft: "3rem" }}>
                    <Button
                      style={{
                        marginTop: "1rem",
                        height: "2rem",
                        width: "6rem",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      75 Registations
                    </Button>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                </div>
                <hr style={{ marginTop: "-1rem", color: "whitesmoke" }} />
                <div className="date2" style={{ paddingTop: "-2rem" }}>
                  <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div>
                    <p>10.02.24</p>
                    <div style={{height:"2rem",width:"10rem"}}> <h3 style={{ paddingTop: "-2rem" }}>MANAN ASHRAM</h3></div>
                    </div>
                    <div style={{display:"flex",gap:"0.5rem"}}>
                        <div>
                        <div style={{height:"0.5rem",width:"0.5rem",backgroundColor:"maroon",borderRadius:"0.5rem",marginTop:"1.3rem"}}></div>
                        </div>
                        <p>Cancelled</p>
                    </div>
                  </div>
                  
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo.
                  </p>
                </div>
                <div
                  className="date3"
                  style={{ display: "flex", justifyContent: "space-between" ,marginTop:"5rem"}}
                >
                  <div>
                    <Button
                      style={{ backgroundColor: "black", color: "white" }}
                    >
                      View status
                    </Button>
                  </div>
                  <div>
                    <img
                      style={{
                        backgroundColor: "black",
                        height: "3rem",
                        width: "3rem",
                        borderRadius: "3rem",
                      }}
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </div>
                </div>
                
              </div>
              <div style={{display:"flex"}}>
              <div style={{backgroundColor:"maroon",height:"0.3rem",width:"3rem",marginTop:"15rem"}}></div>
              <div style={{backgroundColor:"maroon",height:"0.3rem",width:"3rem",marginTop:"15rem"}}></div>
              </div>
              </div>
             
              
              </div>

              <div className="line3" style={{margin:"1rem"}}>
                <div style={{height:"2rem",borderRadius:"0.5rem",alignItems:"end"}}>
                <div style={{display:"flex",gap:"5rem",marginLeft:"80rem"}}>
                <Button><LeftOutlined />Next<RightOutlined /></Button>
                <div style={{height:"2rem",width:"3rem", borderRadius:"2rem",backgroundColor:"skyblue",color:"white",textAlign:"center"}}>
                <MessageOutlined style={{paddingTop:"0.5rem"}}/>
                </div>
                </div>
                </div>
              </div>
              


            </div>
        </div>
            </div>
        </div>
    )
}