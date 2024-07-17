"use client";

import React, { useState, useEffect } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  GoogleOutlined,
  ArrowRightOutlined,
  ToolOutlined,
  PlusOutlined ,
  PoweroffOutlined
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { Flex, Progress } from 'antd';


const items = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: "Home",
  },
  {
    key: "2",
    icon: <DesktopOutlined />,
    label: "Profile",
  },
  {
    key: "3",
    icon: <ContainerOutlined />,
    label: "Courses",
  },
  {
    key: "4",
    icon: <PieChartOutlined />,
    label: "Program",
  },
  {
    key: "5",
    icon: <PieChartOutlined />,
    label: "Saved",
  },
  {
    key: "6",
    icon: <PieChartOutlined />,
    label: "Help",
  },
  {
    key: "7",
    icon: <PieChartOutlined />,
    label: "Logout",
  },
];

export default function user() {
  return (
    <div>
      <div className="nav-resp" style={{ display: "flex" }}>
        <div className="navbar">
          <header
            style={{
              height: "7rem",
              width: "10rem",
              backgroundColor: "black",
              textAlign: "center",
            }}
          >
            <img style={{height:"50%",width:"50%",marginTop:"2rem"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzO09mzXvns5o87iuMk3cqTmySVnOKnhnhQ&s" alt="" />
          </header>
          <div
            className="list"
            style={{
              width: "10rem",
              height: "50rem",
            }}
          >
            <Menu className="list-resp"
              style={{ height: "60rem" }}
              defaultSelectedKeys={["1"]}
              theme="dark"
              items={items}
            />
          </div>
        </div>

        <div className="box" style={{ flexDirection: "column", }}>
          <div
            className="box1"
            style={{
              backgroundColor: "whitesmoke",
              height: "32rem",
              width: "90rem",
            }}
          >
            <div className="firstrow" style={{ marginLeft: "20rem" }}>
              <div className="line1" style={{ display: "flex", gap: "2rem" }}>
                <h1>
                  Welcome,
                  <br />
                  Lorem Lorem
                </h1>
                <Button
                  style={{
                    backgroundColor: "yellowgreen",
                    height: "2rem",
                    width: "25rem",
                    textAlign: "center",
                    marginTop: "2.5rem",
                    borderRadius: "3rem",
                  }}
                >
                  Congratulation! You have been logged in as a Khoji Sucessfully
                </Button>
              </div>
              <div className="line2" style={{ display: "flex", gap: "1rem" }}>
                <div
                  style={{
                    height: "10rem",
                    width: "25rem",
                    backgroundColor: "violet",
                    borderRadius: "0.5rem",
                  }}
                >
                  <div style={{ display: "flex", gap: "15rem",marginLeft:"0.5rem" }}>
                    <h3>Gyan Darshan</h3>
                    <div
                      style={{
                        height: "1.5rem",
                        width: "2rem",
                        backgroundColor: "white",
                        textAlign: "center",
                        borderRadius: "7rem",
                        marginTop: "1rem",
                      }}
                    >
                      <GoogleOutlined style={{ marginTop: "0.2rem" }} />
                    </div>
                  </div>
                  <p style={{ width: "20rem", marginTop: "-0.5rem" ,marginLeft:"0.5rem"}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem, ut.
                  </p>
                  <div style={{ display: "flex", gap: "12rem",marginLeft:"0.5rem" }}>
                    <h4>Apply for gyan Darshan</h4>
                    <div
                      style={{
                        height: "1.5rem",
                        width: "1.5rem",
                        backgroundColor: "black",
                        color: "white",
                        textAlign: "center",
                        borderRadius: "7rem",
                        marginTop: "1rem",
                      }}
                    >
                      <ArrowRightOutlined />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    height: "10rem",
                    width: "14rem",
                    backgroundColor: "wheat",
                    borderRadius: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "6rem",
                      borderRadius: "1px solid",
                      marginLeft: "0.5rem",
                    }}
                  >
                    <h3>Attendance</h3>
                    <div
                      style={{
                        height: "1.5rem",
                        width: "1.5rem",
                        backgroundColor: "violet",
                        textAlign: "center",
                        borderRadius: "1rem",
                        marginTop: "1rem",
                        marginLeft:"-1rem"
                      }}
                    >
                      <GoogleOutlined style={{ marginTop: "0.2rem",marginLeft:"-0.3rem" }} />
                    </div>
                  </div>
                  <p
                    style={{
                      width: "10rem",
                      marginTop: "-0.5rem",
                      marginLeft: "0.5rem",
                    }}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem, ut.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginTop: "-2rem",
                      marginLeft: "0.5rem",
                    }}
                  >
                    <h5 style={{ width: "10rem", fontSize: "1rem" }}>
                      Mark Attendance
                    </h5>
                    <div
                      style={{
                        height: "1.5rem",
                        width: "1.5rem",
                        backgroundColor: "black",
                        color: "white",
                        textAlign: "center",
                        borderRadius: "1rem",
                        marginTop: "1rem",
                        marginLeft:"-1.5rem",
                      }}
                    >
                      <ArrowRightOutlined style={{ marginTop: "0.2rem",marginLeft:"-0.3rem" }}/>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="line3"
                style={{ display: "flex", gap: "1rem", paddingTop: "1rem" }}
              >
                <div
                  style={{
                    height: "10rem",
                    width: "14rem",
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                  }}
                >
                  <div style={{ display: "flex", gap: "8rem" ,marginLeft:"0.5rem"}}>
                    <h3>Seva</h3>
                    <div
                      style={{
                        height: "1.5rem",
                        width: "1.5rem",
                        backgroundColor: "violet",
                        textAlign: "center",
                        borderRadius: "1rem",
                        marginTop: "1rem",
                        marginLeft:"-1rem"
                      }}
                    >
                      <GoogleOutlined style={{ marginTop: "0.2rem",marginLeft:"-0.3rem"}} />
                    </div>
                  </div>
                  <p style={{ width: "10rem", marginTop: "-0.5rem",marginLeft:"0.5rem"}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem, ut.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginTop: "-1.5rem",
                    }}
                  >
                    <p style={{ width: "10rem", fontSize: "1rem",marginLeft:"0.5rem" }}>
                      Apply for Seva
                    </p>
                    <div
                      style={{
                        height: "1.5rem",
                        width: "1.5rem",
                        backgroundColor: "black",
                        color: "white",
                        textAlign: "center",
                        borderRadius: "1rem",
                        marginTop: "1rem",
                        marginLeft:"-1.5rem",
                      }}
                    >
                      <ArrowRightOutlined style={{ marginTop: "0.2rem",marginLeft:"-0.3rem" }}/>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    height: "10rem",
                    width: "12rem",
                    backgroundColor: "wheat",
                    borderRadius: "0.5rem",
                  }}
                >
                  <div style={{ display: "flex", gap: "4rem",marginLeft:"0.5rem" }}>
                    <h3>Registrations</h3>
                    <div
                      style={{
                        height: "1.5rem",
                        width: "1.5rem",
                        backgroundColor: "violet",
                        textAlign: "center",
                        borderRadius: "1rem",
                        marginTop: "1rem",
                        marginLeft:"-1rem"
                      }}
                    >
                      <GoogleOutlined style={{ marginTop: "0.2rem",marginLeft:"-0.3rem" }} />
                    </div>
                  </div>
                  <p style={{ width: "10rem", marginTop: "-0.5rem",marginLeft:"0.5rem" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem, ut.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginTop: "-1.5rem",
                    }}
                  >
                    <p style={{ width: "10rem", fontSize: "1rem",marginLeft:"0.5rem" }}>
                      Register here
                    </p>
                    <div
                      style={{
                        height: "1.5rem",
                        width: "1.5rem",
                        backgroundColor: "black",
                        color: "white",
                        textAlign: "center",
                        borderRadius: "1rem",
                        marginTop: "1rem",
                        marginLeft:"-1.5rem",
                      }}
                    >
                      <ArrowRightOutlined style={{ marginTop: "0.2rem",marginLeft:"-0.3rem" }}/>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    height: "10rem",
                    width: "12rem",
                    backgroundColor: "wheat",
                    borderRadius: "0.5rem",
                  }}
                >
                  <div style={{ display: "flex", gap: "6rem",marginLeft:"0.5rem" }}>
                    <h3>Donation</h3>
                    <div
                      style={{
                        height: "1.5rem",
                        width: "1.5rem",
                        backgroundColor: "violet",
                        textAlign: "center",
                        borderRadius: "1rem",
                        marginTop: "1rem",
                        marginLeft:"-1rem"
                      }}
                    >
                      <GoogleOutlined style={{ marginTop: "0.2rem",marginLeft:"-0.3rem" }} />
                    </div>
                  </div>
                  <p style={{ width: "10rem", marginTop: "-0.5rem" ,marginLeft:"0.5rem"}}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem, ut.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginTop: "-1.5rem",
                    }}
                  >
                    <p style={{ width: "10rem", fontSize: "1rem" ,marginLeft:"0.5rem"}}>
                      Lorem Lorem
                    </p>
                    <div
                      style={{
                        height: "1.5rem",
                        width: "1.5rem",
                        backgroundColor: "black",
                        color: "white",
                        textAlign: "center",
                        borderRadius: "1rem",
                        marginTop: "1rem",
                        marginLeft:"-1.5rem",
                      }}
                    >
                      <ArrowRightOutlined style={{ marginTop: "0.2rem",marginLeft:"-0.3rem" }}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>

          <div
            className="box2"
            style={{ backgroundColor: "white", height: "32rem", width: "90rem" }}
          >
            <div className="main" style={{backgroundColor:"white",height:"32rem",width:"80rem",marginLeft:"5rem"}}>
            <h1>Upcoming Retreats</h1>
             <div className="grid1" style={{display:"flex",justifyContent:"space-evenly"}}>
             
             <div className="card1" style={{backgroundColor:"white",height:"20rem",width:"18rem"}}>
                <div className="pic" style={{backgroundColor:"green",height:"10rem",width:"18rem"}}>
                    <img style={{height:"100%",width:"100%"}} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFhUXFxgYGBcYGBgYGRsbIBoaGBgYHx0gHSggHRolHhgYITEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLS01LSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAEDBAYCB//EAEEQAAIBAgQDBgQEBAQFBAMAAAECEQADBBIhMQVBUQYTImFxgTKRofAUscHRI0JS4VNykvEHFTOisiRigtIlQ3P/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALBEAAgICAgEDAgQHAAAAAAAAAAECEQMhEjETBEFRInEygZGhBRRCYcHw8f/aAAwDAQACEQMRAD8A9xpUqVACpUqVACpjT01ACpqemoARpqc01ADUqVNQAqanNNQAxpjTmmoAamp6agBGmNKmNACpjT0xoEc0xp65NMBjXJro1yaAOTXJro1yaYHNMaemNAHJrmujXNADGua6Nc0wGpUqVMDR0qVKshipU1KgBUqalQAqVKmoAVKlSoAY0qalNACNcmnmuTTARpqVNQAqY0prlm2++VAD0qaaaaAHNcmkaYmgQia5NKaYmgBE1yTSJrkmmAia5NI01ACNcmkTTGmAxpqVMTQAxpjSNMTQAqVNNNQBpKVNSmoGKlTTSmgB6ampUAPTU1KaAHpVzNNNAHVNXM000AOTTTSrkmgB6YmmmmmgBTXLHUffKkTUdy4BqSANdzQBJNNNV/xtv/ET/Uv71ycbb/xE/wBS/vTAszXJNVzjLf8AiJ/qX96Y4y3/AIif6h+9AFia5LVAMUh2df8AUP3roXAdiPnQB2TTTTTXJNAHU1yTTE000AKaaqeO4naskC44UtMaEzHoKpntLhf8X/tf/wCtFhTC5NcmhDdpcN/if9rftT4ftDh3YIrkljA8LDX5U7HxYVJrmlNck0xD09cTSoA0k0pqBsQoOUsATsJE05vr/UPnWdjJZpTXAalmoA867U8RvLirqrdcAMoADEAeBfOhP/N8QIi/dE/+9v3qx2vuf+sveq/+C0IR6TNIpBJeOYhCGOJZY/ruEj5MYNFLXb64Fghbh6rbufpArOcPRReNwoGJWNeUKxH1UD3qtxDtQ6jDOFEOSHEaGHKN+Uj1rNyldIvhGrZpr3bfFN8KXB5i2g/8mNDsR2qx5OneR5lF/wDFaD8a4nibeIORHNvMoXwkq+sFV01PprJqh204xctXyg0GURuN5oTkwcYIM3O0WOmSbnp3z/pUD8bxx/q97jn9ak7OYlr2FDt8UlZ+UHz3+lSYe3F6M+hNxQuXTwAE6xM6jWTMt5U1ZLjFUD34njTuB7lj+tc4fG32aHCZeok/qfOj2OsiDyADNtO2o00nnpQbDNoYdn0VpZQCAyhwBB6EactacW2EopOgtwDHuAwDMBOwJj5UZ/GMdJf5n96yOAvlLd1wJKgkD0WYqbs92iuXrN+69tVNoEgCdfAW51bROjUd/sYc/frUGPufwmIkGOe+tAuzfaO5iLN649oIbewGbXwlufpVThHaG7irN43ba28pQCM2syTv6CpoaaBHEcVeF3LbIiJ1A+9gK6tYjFNsbfsoq4EBYnyPKdhI0568qk4IoJMO7Si3BmG2Y6Qc5jnptrTaFq6KyvjI3T1yCu0OLba4nsq/cVocRbGVjtCudgdQJBiRMbxQ/gQBZhnuN4UueMTGfYA52O2hG2tSurKdJ0CbuDxA8TOgjWSigflVazYuN8L2mjoop/8AiRiCvc258JzMR1IgD5SaznZvEEYm1lMS6qfRjH600m1YS4p1RrkOKTYp8mH5GpRxLGKNCfIrduD9TWX7XcRf8S65oCwoHTQT8yTVzhnFGHD7zz4kfKD0nJr/AN5o3QqjdUH07S49SPFcMTP8SfzFWR20xi/EHMdVtsNweUHl1rLdmcRcOKtI7Egod+W7fLQ/OrfBmxNzGXg4OW2DnWRCAnwaTz8qexVEJcU7YtedWuoFy6fCy+51Iqc3w4DDSdaAWLrXe/7wfDcKgaaQRA0q4rwBQWtBI3ZMe1E+DrGItf51/MUAs3NR6ijnB3m/a/8A6L+dA29M9HmmJrkmmJrQ5x5pVzNKgDzviuIcguGzAn41mRpodOU6Gdaq4Pit7E3kVWYnwho2GsA/Mk1Hh8FdtrmBlHiQTIPX1ioeFP3LubYOf+UjpvNcyjFaGen9mPxVpzavuroZytIkEfoZrU5q8QwVy6t0M15pJ3HiAPnrof3reYLtG/cAkrmynefSa0ToGAO1ZX8bdLGFzLJ8sqzHnQrir21WbJnQGZmaC8W4g9y7cfU685Pv99aHfiCJy7RqPzFZyTkHJ1RueGYi2UDMbYY8tJ5j9ap4rD2Sltc1iUzQCF0JMyJGmutY7DY58yqiwSQBA1n3qTi13wksgzryYRTSZXP2PQ73GrLdyudP4dzPqwj4g8DodN6EcRazcck3rU7AaMawd+xeVbTtaULeE25AAImN509z57VLwwt31mQgzNJABBH9z5VVDu9G+4biEE2QZy7mI1naPaimVSQY1E7ADff51j8HiMl682YrBmRvuaF8O7UYo4hRcxD9yWadEHhExrlnpScTTklVnorLrPqNqE8ZbeOS9APvahPGu0lxe8W25QhTkZSCCx+EnTpVbh2Nvvh2e+5a4C0MwGwAjSNpJpRQOSegj2fk5gASc3L0FHfxKJo922p6F1n89K86s8dxLKUzKBOuVQs+sb1UxdwJBuEljso3jr5CtWZWet2rgYZlYMOqkMPmKqcY/wCnr1H615Zw/imR5R3tN/UG094jT51qsBxO/cdlvMCqidgNdBy061D1spSLNhMrEk5dTG3p1orauiInfyHL/es1xXFDMx19Rt5U1rihA+PVQIM68h+VZc5VZHOjYoYM+tSd5Onp0rJ47jzd1Fq4yXSNxETpEzvz+dDuynG8ZdxHd3sQ7LkJjwjUFRyA6mtFtGnNNh7jr293um2BEkbb89fQULwvEMOrZvxU6qYho0P61x2wuRZukdU/8lrDjGN/Svy/vVR6JnqRucfxGy7sy3112EkdB08qkwuPsd2Ua+oJI11O0H9KwbYxh/Kvyru1iiSAVWJE6GYnXnVUTZ6HhsZh0ZX75dFy7ETvzqTDcWsq95+8Q94RzjYzB015VT7aYZLeBstbUeK4u45FHNYNr7DdF+v70UFm8tYuyO8JyeJyxgprzPqfXpVhbmHaDKj/AOSj9a89wbh2ClVA5nXT61rcfgrK4K5ctlHZcg0YaS4HtzphYTxC2QpNtpbSBMjeDrXVnElCGBgqQZ6b1gcPYLnTTbST51p7blUjaACCZj60mVFmtsdqGLENfE8thpFWBxZ3170kc4OnWvN0xKSdNuYEmY1iR10q9w3E3O7Aytq51A5aQdT61Dk4ok2x4hc/xG/1f3pUIKD+oj5Uq5/5mfwgolsOpXP3jaMNGXweR0MeXvXWCxKo7ZxGfaDHIGJ5b/Wq2D4c9ww+ikSDoCVnwmBtt6jnUPEsGFJJMRtvEKFlj7kAedXyimKi42Ns65UI5GTm9ulV3x0KwnRVgA/KoUwauJVyTlk6FZ6Vxew4AJIK8jPM8gOUb0nJBxYL792nKJEeRnlrV/jvD2t5ZXKTodR10PlRLh1kMgUwoA33Bq9i8Mz6s6t8I26ka7+dVzXRfj0Y7hJZcRazLIDqRPqNaudpDF98y8505gjQ0RxWCbOoUag7qpO3P8qWMwbuc76iIkgD89RS5pi8YCvXnFu2GJYBBkXkmuunKoOGIWxNqQdHM/IxRxsJPNCBzJG0RU9jAXVYEIsjUAFdp3/vT5pDUEmZ7isnEOgOhaPqRSOGtQ0uwK7iACfSieJ4Q4uG9qzZyYHUalfPY+VVTgLjXC1zKNR0WQRIgAcxHL61VqXTFKLs7wNm20nKWWP5zMe0amavq1wALmEtqTOnT2Gn1qLDnKYAjKRptM+vlQvE3j3haSB9aypuRDTRNg7E3GzCPEP01rO8ccm/cn+qK117E21XN4vOfvegvGcML757YIYjxTEHz33rra46bCLclpGfD1vOzeuGS4+2Ur6w5C/QRWUtcGcNqwEQ3oJ0Ou/t0rQux7zu8xKIVAXlpA/Q1lldqkVTj2d8Yv5Zlo6DX5nSqnDcOCveH015amPn+lUOL3Ge4zAaSfT0Hyq1hsYFW1m0W5beeUlbjFfyip4VERzxYgXF00MSB5RMVDgiqM7HMpymCDrJIPTbSuMTxAXHzHQax6Tz+lI4rQg5ddOdUk0gSQX41czYRmmZyanU/EKy2HQaSCRJ0Gnpyo+9/Nh+6YEEmQY08JzH8jVW5hyIkFSANI3BAj6VSehy29HeF7OG6gcuFkkqCNx18tqJjgFvu1UGLogs06bzA/KfSq3CcQVuKzFiAMnKADpV3GYo95A6DkCOY+W9c03l5UmKi/2yP/4/DiQYvAEjyR6wd1AdOWn5Vr+0XEWu2ks5AMhBkRqQpX8jWcuKBuNxzH36V0QdpA4lEafKtTh5PCruhk3LYGm/jXas8xTrWjwHFwcP+HHhUAeIfESTpGmnP6VTlSFRU4FaYnI67AHUQQv7CfrRbGopBBMqAZjQR7+1D7lxkBkEQ0EmMx6etLEX/C2+0zy3FZJuTs0i9D2sAjECRGaSNPF0AiIqwlprrkLoq7mPoKErcOYtJ02j6UY4Jba4vd5jbLEksRvqPOokmSjo3GXTONOqiaVVf+UHcvvrtPpzpUeJhaL/AArHmyptOczAwGDZlZSSRlPlMEVX4fxhXxLlhca2wUEgEgEAhdNQqkmZ661U7PXLd65ba6r5ZIC5vDIEzAgyTpQwY4W8QUSyyKXUFJcPE6AyZBg/UVvHHHk20Db0bbiF2zatkrczZAzBcwJcgE5THLUbdB50J7Ou5RA1s5hdJbOvxIVJMFhyJJ9h1onwvs1cd2uW8Iwi4uTvIChP5wZbWZMjWa7vcLxN3Pmsi3cXwq2aIGhOo3Ec+U0SjF3opN2iT8aLbDQ5FLEkMojMJClY1UBtOgiojxm21sFLjkFyVJmCAwLcuR0FCcV2exhvBkZCACSVugrmjTNrrsomOQqp2R7M4m89wEKhGWS5G06kRM7D6VCxws1kpu5cdfbRobPGC7IqMIa8NSxJKfE0eWjewpu0GJtf9K3ckgO2Uvm3kiTOkFl0OwjyrvhnZB1v/wDqSLwGq3VuMjJGy5OY99KdOxltEuNjsQtprs92FdQVSQRJIiTA0EiI2NCwqLJyZFLpUBeGcRsWm8aZxkgGQeWY7mBsesz50SudqbFlEkFvCCQkSuYlgIMaabTyG9FeDdkMNojqLi6RcFxvENRsDpoeUiivFeD4IJDYa1lRB/KJESd9/feqaT0zNO1ZieEXu/a+iq9xEbNmCsT8QYgqDIiBzM6+lU8XjnuYkJ3RF3Um2FAjeGPnsf1rQYT/AIi2zd7tLRVWB2jUgHLoPIAfKgfGO0T5y+mfVZ6CdusVfjjdlQ5NP2Q/FsPetBe8uW0e58Cklm01GgED4uugq1wvg9xrtsvaz22QkXQCqzJZdDrOsTEbVqON9o8IcGoIQlrKuFIM58giWGoM85msDhu0WJvYhmDEIJmJChY8IjlsAKJKthjipPizVYzhLJdYXcLFoW81u4dQWAkqR/KekxMUI45dsLcW0lwW70JnCpmWPidQTzylvptTdpO2V6/iLAS8bdod2tyTAJkd4zciI8+R9aJ8W7N4a63fLcbMRo4KsG5ZiAAD7RQoOTEmov8AM54hisJbsNdZQ4dFVdN9NB5bfSsx/wAxV0Zu6fMtyAAS2hjxEb6aL015TW+4VwfD/hFtXVF6ZDEiB4TIjWQdRrPOn4xj7YEeFBOUnKBGhIOkaCuOGWMZOG7s28Te30ZXD9lLuILC1ftDIBmJDfzSV0jU6gGitngdpnSy473KBAElt2JI/wDd7aUH4d2ha1fc5gd1ZRHiBOjA+oU+YrTdl8Rle5dW2Azrdgl2EQDC8/ieNRsK6XXExcfqoG4rDWcOs4lO4aWEN4vFJy/DPhO/p51DhuKYfPcRwAtpQzXAAVI2OgkjUgjqKy/EsDiHe6j2mDKSfiHWJknXcajXWtF2Wxtks12whw95cqXELZ1urtlMgQSRuAIPWpcEDi09oPW2vB0DWkew9ov36qVEkGAVOoOQgEddecVLj1OjJYN2WCtliLYOmc9Y6dBVy/jmZSRoBKjTYDypuG4/Lg7eYwSzHXfXWTrIkEaHWsM8FCpL3HFXoDYm8iOyso8KFm02jU+ulC7HHLDZWuKERgIYjQeIqZPSR05mtLwy0ru7sAzE5BvEc5GxH5xVTt3hrHcraw1tLXdnNMAalP7g+3KmlBd+5pHFKd8Spgsl5nQIpe2VF0HWCwJEaeLVSP3qjxg4e05W7Y0FsXMwQEQWCx8yDWV4fxJ7WVnvPlJ8YBYE5ZjZhtyM84qzi+Mu+JRbhBU3EUhgCMhYAqQRrp1rbwxvTMfuaDiGEwdoKbiIub4YXU7eW2ooGbltYuraHdknK4zD4Trz3nyr1Xj3Z3CO6G4zgWyQBmEOCD4TOyxA0jQAVm+N8Fw6oLKDKmViLQOmp1bruevIUuKj2zbF6eWV1EzGDw6XrDsiXGZTmyWzmY6bgGeVdYfA94otqzlrjFQrKCQRMry6e1a/sjetYe1dRQFASTqS7tOkTyAB0Hl1rK8AZl4it68oCuLjCd1Y6qTOqtuPeOdCpyqyZ4pQ00BruGu2J1WAATJjLJjUb71YV7oZFIyuygrrlDK0ZYnmdNPPlXpN3hVsWL7NbW7dVHcLdGZRpChl5kgDQ9BpNYXs/h34lmsYpmRMMn8PJbVCCzAQfDBELz10FaqKZCjekVm4Lif5rttTzU3FBHtNKtPc7GWyZe5nbSWYakxqTrSocJfBp4kZzguIvtw+/asWT/Dgm4k5iWOo6lso5cvrY7J9mIK4jE5w0zkPMD4Z58gY6aUZ7BWu4webX+M7P6R4AB/pn3qPiGJa4wCZtWA2OkmKiU/qaRw5MkrpHoGF4ipsgqebbiNZjXz0oTieK5JzkrMqmqjMSNlLaT5eRoely6veEuq6HIpnKehMa+Wmv0oV2tu3hhGDphrqswAKs6FSTo4DaSD5860f4aOmGpJknFWLAOZzCB4yOs/ymOdZ/EcUa2wYESCNtAOWlWFJGGw6ORmYG5cPQcgfMLvQzEgOGJ57D8q512fUKT8SS+DWDtGttExFy4sbFP5iRuR10Oo86xf/ABB473+KePhWFHsANuX+9MuHdSczL3aw0sgeT0AOh/2qxxNcDcY3e9c3GOa5nBkmIIAURy866HJum0fP54xU2kwv/wAOsVcW0x10fwknQeGSPptWr4ge8tFycqNFvM39ROUfmNfOvOV47AFuyCvi+I85gHQbbfSvR7aqcKlm5qDahtYkx4jPXNJmhr5OZuujzBuymLs3CQoMT41I05Exvt0qtjATupJ5nqeu9aPEcfcNluaMpAnkw2zj159DNRcTA1YKYImRt5jbeqeghN7M5xDEHRT/ACqAfUCDVGxiSrBl3+9PSo8RdLEk8zSw+HzEmQIB369KZNkuY3HC82YD3Jj9a2vZ4m2r4ZnJNt5B2lW1BHlM1kMHhblu7adrbZRcRs0SIDAzI0OnKtXfxTs5ZEtBHzZbjAZsgJ35gztTToA7wm+LJuJ3uZGOZFIGdTrmHmDpFY7j3EReulCSqMyncHUCNem5q4cJly3TcDMJJUSRIkDWfKstjWUuCpOwLTHxSZjyiKwWOHkc0jRzlw4sJ4J2OJS2mim4FAGuk6+8TXpzOtmyUtnVWKs3OYDHXn8Qrz/s5hSt0Xiui6ieZPOtXi7i21e3JP8AEzFjEnMNPcZY9qTmnLR6Pocajbl2+ivxTFIR4wCevP5jUVnlYW7lzI0FhaMk9CDy9GHv5VduWjcfJMToDy6UJNsvluLv8J1jUGY19fX5VfaK9U120Gxx17lt2Xw6nwgyJ0kyfL9KjxnD3LK6yR3YkKpIkiTEaUUs4Rdc9u25J+I2yDHTSiVq+sBQAABtLVjLJ8HnKPyALmMZFW2isreA97DDKxUgiOUz67Cue1eGvfiDbKtGVAsnRmhEWDJnY9YmiuPsMXF3MMqicstrEnpBO1Trfa4FZghKCLZLGQRKsxGmu3I6+lZyl1L9TpwRlJ8E9vozXFeygFh7iOTbtvkLEA5nYT4eg89d1rNXOKN3tt7iq/d5RlICyqx4SVhthEzNen9qrS2OG4fDJrJzkzJLEEz5x+grLdm+AWrua7eUlRoomMxkgk842iI51vyUI3IxyRc5Pivv+WiDtfx38Ulu4QVVs3gLZoaczRJ28Qjy+VWezOOBsO11iWtoqDNtBLMqgzqYn6b0D7W2clzIiAWxqsAk67gnc6g0W7PXAtnLcRGEk+JFMEgE8vSk2pRRphnLFPnV6JMNi2bO1tM9xVlAASdfBoBH9QodxYXEuQ4IcgEgiDr+tbvheNsWF8K5XuAHwIeRIAJUdZoP23xVq74QR3o0U6bnZSTyOnzqfGnKxZMzlugce0F3B2TbS4xuX0ts7MZySCcijkfFqTrt0oBhe02JtvmW60kgsCZDR1n86r8XvO91jd+MaH/MND7aChpNbxVHO5v2PY+FcY7+0l4aZht0IJBHzBpV53wlb3dLldVGsA7/ABH/AHpq05mnnN/wmw1vDWrIcMy5gzBvAJZmOpgcxyqC5ekgIwJBkHrB3A6edYhsYyEqGIiV39jUPekSc7T6n5elc3DdnE8Nyuz0E4WZZ2LDf4jlHXyoTxnHJctmxbTMCVOYyduYJ58pHU1mxbZlBZiQTtJrW4C0otpCg+EfOOdVOXFHRFWYvFOysVmI0gbfKuEu3CYLHXflR7ivCXa4zgaNr11gA+37VRPC7gBI8xt+s0JxZo55Fq3+oPxGLbKykyfD+X6ffnSW5ofv7+/Oi3FbQkFrYQi2qmNCzAKJ+k0HaPP7+/vnrF2jGXe2cm7rXsPDcQGwlhgyy1sMSyl/E2rAeYJIryLB27ZeLhYDkRG87bVs8Hxk2MOtu1bDICQHaSd5PlPi9PKk2rDi+JxxvCq4YQSdweh6jX6fSp+zuKv5I7m40jUKpPv09jVW3xMFgzKSJmJXX67UYXtwB4VtMI0CgfQATVPi1smNoAYvs9h85UtettuVdFWATvy0qla4GWkLmClgquQMupiTsY03r0C3eF495cUAgQMwEgbnrzoFxnHgyq77Ry/v7VN/3KYB/wCUYhCUVlhv5lYx5wOtGsPwIuFVGGigHrAnMdecAmBzq2mCUAjOdRHxDmNSNBTNgPw1s3jMBWCyQZJ0/U/KuaeS1rs6McPqV7RU47iUTDRYUBdRMb+p3JPOsNaWXA8x8q0nEbbDCKW3aWA8iSR7xWasnxD1rTF0zr/iCjLLBxVJpaPQcPYzowDxCoV3gExmBPlr9Kbi2K/igKRlugQ0ZgSrNA+TCqvBTbdcuYg5U15SVUH38RozZW0lxGnVVYopOnUt6+Jq5cdqTCc92n10Z3FNcsvlaUPMREjrE7edXsLgLSKBcVnYnPI3kgHWNuvoetd4+wmMvZ2aVUQBynU6/Ok9zEhiUyqs6QOQkR6foAK7f6TjyZpZO/YIW2UaDN7kn86lSI+Ij3PvVK3jsQRDhHPKV/8ArFWDdJEsmvRZj865pRrpijKyw1wjZxvzobirBJKC5DlWfPqF6lTHzolbg6d3HmTpUOMZFVwF8RQ7b+3nNTB0ymALuMvYgWla08phyFZQTnACkEeHTwr5k1Pwtfw+FttczKz3GlSYhDESDsBlzdYPnXXCkyXUus7W1C5VUMAdBkEj61YxGDGcs11rmh1aGE+m3L6Cqyv2On0WLySq/wDhS7T2vCl0dYPoRofp9a44Zwu7fCWrSklgXdhHhU8yToJGg9+lUMTcZs6ljkiTJ5jUR716f2dw/wCGwozD+JdGdgu6rEIg9F+pNZcuKSH6qMsMVHvegHjuEYi1hiqugZX01Jgaagxod9ay3DeEXjeDXlLBZJB2J3gn5e1bviF6cpKtGfmcuo0Bk8txrvUBIkgBvhbeeuUgHYH0rujFI8+UmyhjkW9YAxVoHMZCiUNsjQZWB2IO0QdOlZ7B9jbFy5lU3jMkCQfONFmPOa0t7EKUmZAAO4Om2/PcVTwnE+7cMnQj560SfdBGmcns83Nbo8lskgeQ12pVO/bQqSC6SN9GpVhcza4fBi+MYXJcbeCzb+utVBYJ2HuT5+lb7iVzvH8ahjpqNeUaH0qk+AXTkNRAAgdNPKqWT2IcDKvfcALoAPetdg7lo2wVaCFHhg9Np0AE+Z0qovC7e8Fj/lkkT8qbGJ3SkwORiARvAolJS0OMeOyxfxeUak6DlGnU/KoLHFEcDL4jEEExPoYNCxxMwdF15jT8qgTE24/6enqRvvz51UYJdkuRX43jA7GDoCABpyA6b6zQkn71+/vrrRp7NhwAtvIB/R+szNVjwpeTtHmAf2rVNIzaYKNEuH48gC20kH9aT8KUbufl/ermBwuGSDcR7h5DNAp6YK0SPhbhOXu2B8wRRXg/DggJuGS3Q+RgfrUq8TYf/rATL4VBJjoSTrQx7zyYYzMkb5d9B5bVElqhp07NDhcEifA2+53qtf4SrGQ8GSTB5nU671XXGnLop000+/uKntX/ACOu81ztyRrcSW3hWiC5M8t4j+wo72mwaXrK2wCpBVQF/myjxEk6R5/nQvCuSROgPPTQf7VX41xZRfCK2VQCIncRsZ6kz865sqk5pR+51+mjydfOilxqyiqVDFuckyDoNR5RA9qxNmzLMPWP0rTcV4gGJ8QND8NeQMCRMEEgdBrXTjbjE9H1mKEpR+I/uG8IgllEAkrBB1yqgH1JqHieGdH0tm6YzZs0+gOuhHT0qG3jrRJJKrMmQdtJ1HqF+zRXB8bttEkzvqNOmhAkjSdZOu9LFyUjxstUCcM9wTK5GEaQRI39+VHMPxhSsFTtEn78p96lsYlSYPiIEA+WsftVtbKN4pHsBV5JK6ZEIurRFaxw6EfKpTeA1HPfXfzpreEHlHkP1plw86hgRpWWitkoxAJHn86mzg9Ouojaqp0jT3+xrXN1DBlue3PpzFJjspdoO7Y2tpkgrE5tRAofxHGKpKC4JG4gx842rQ8LwwF1WKnQ5jIHrQLGYfDvceVYEs20iNfvStopSWysfqJ4W3D3KnBrbXLtuLbuvepmIUlYzCQTttM+tehd61zEsRqiheuhlpHvl+cUN4FdRbKqh0TT6zP1ovhLgW090wrMzsenQfPp51MsP1qSOr12OTx4szdr/IGvnNkWTEAjwyCIg5veDUOLvwrAMTIiRuJ+HT2561axDZnGoJUbEkEGddehHKKoYjxjIYQSBqCAYERO87b7V0o8x9lbDDNcZc0gLERG5mCOun1NK9w3UxIEae339acjK5htwJI0mOcxtVu22muZp8xXNktSZrCOgYeDA9fv3pVdL+Q+YpVPKXyXxiVHxKkl1BiNAd9ortLgIkjTpzPPXnUNu0ZK8hMc+X39a6t4dtJiNd4mdz5Df6VboyTZdtNPTznXrNQ4rBllKzuB6Tp0G01PbtQNtI602jSFBHXpP71JVmU4hgntnxDSSNPSecUM75CAJM862fEQCAuh25aeo5fYrP4nBakDcco+sVtGVozcaKOBIMzcRQN5OvsOZq2ykE5YcAkZl1nnp7VH+GOvI/5QPSumwOYhSI66e9WSMtwHb61Jh1kxvqB+s/Snv8KIErtzGoO3WajsE23IOuhAM7a0IDR8Mw6ywYgmBofnV67hANiIPSPesvgscUdigESJJE7f70aTi+oBXXfnWOS7Li1RaXBLrG31j5elIYeTtGv5Uvxs6gkR0iTzG/51cRxEED9T1On9qztl0iEwgJknykDfQN6Tr7Vm73HnzEFRlBMSBMcq1V+GBBmZU6eRnr5b1n8bw+xatr3ilidMw6+gOoHSjH+OyppcFRUXiltj41T0y/mYqVLlvKWNq0dNND+hFUnwuGb4WK/PfprVd+GuJKXPCNZrpMAjZe0oJawn31qPvO9uLkQKsxHICNT99KFrgCTJaT7z7VoOz2GUMRJLAfYj3FDdIEtkRsOJOoHKN+XKPWruDe4NNeWpFGH00310ER9a4uluSTr1ge/nt9a53OzZQIbTMd5jc7iRUtvURy0nfamXc9PWZ9K4RTJE7zuPfekOmhLYnwgknlrsPlrUyLlMlvSevSuLFsgzAgbHNSu4qWMyfYD7H7VIbJhihbOZiBrHUbRr5VnsPg0uXrpLE6kiDBkmZPlRm6F5NBJ22HrrVVrSLqqydc2gBPlWkHRMkWbK5CsHQb+frRnC8TDWoa6AZgq0bDYRXn2KxjqZELOwBJqG/wASaADD+oET0rScHJadClmk8fj9rv8A37m2xWK8TEFDPIGOYIPw76e9UnvfBAgLJ0aNZOmsmCDrrWUwrB3h/CPIfpRpMHaYxbvOnVSdD579KKmvf9jGpfIUQyCSoIAnc+n5dOnnXVrEKRKbbadfcVnv+XAMYurE7nXSeevv8qTXjYIK3VI0kL08xSePl29l45Sj2aEueh+f9qVQq7/4n/aTSrGjazu3ZUNlJOblA5fzTM7nSrVvDjWWzHkOUmlSobCuyC4UUgFjJPOeXpUZCmIbYFog6j1n0+Zp6VMnolbDIR5KZ99ulV2wBjwKslpJJ30iNp9qVKkpNCZHiuFHLO4Gh15ydKpnDAeIDYxvBnT6CeVKlW0ZMlrZw+cAR4gBtMfX0qpewNxmzaZYmPofeaVKm2QztMIQsn8h7/p8qnSwBAkjUg8/v+1KlSsC3bVgYgT7D+1W1SJnmI29+tKlUM06OSoB8R1AJPl0FRYg2mVRc0U7aHcCOWu1PSpLtA+gTZwVj+VjoT1ojisEsaaREetNSrclFfFDQyoM/fqK44fjBbJ5TA9hr+v5UqVJq0F0wnb4qpMjrqYPrUox4jVWGo5jc+1KlWLiilJsmuYhYA1gSecRpr+ddG8CGCkadVgctNPXelSqWjRvQ6aaaToPvSpSpjUdCDpt++nSlSpMfsci6uY/DHoZ+9acyTCAFp10AG3L50qVJ6F2C8dwVbrKHUAsR4lEeo0361cPCMPh8gZZzHWRO/X3ilSroxPRE0ibGcCw7N/0wP8AL4fyqpiuzSKRkJEmNSG9NxNKlWpmB+J8DeyCTlMHWNNOWlDMTaKNkdYJ2GnXqKVKpbpgujXiRoGaPalSpVzm5//Z" alt="" />
                </div>
                <div className="info">
                    <p style={{color:"blueviolet"}}>Manan Ashram .17 Jan 2024</p>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:"-1.5rem"}}>
                        <h2>Lorem, ipsum dolor</h2>
                        <div style={{marginTop:"1.5rem"}}><ArrowRightOutlined /></div>
                    </div>
                    <p style={{width:"20rem",marginTop:"-0.5rem",color:"blueviolet"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elitAnimi illum dolore eligendi id iusto exercitationem?</p>
                </div>
             </div>

             <div className="card1" style={{backgroundColor:"white",height:"20rem",width:"18rem"}}>
                <div className="pic" style={{backgroundColor:"green",height:"10rem",width:"18rem"}}>
                    <img style={{height:"100%",width:"100%"}} src="data:image/jpeg;base64,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"alt="" />
                </div>
                <div className="info">
                    <p style={{color:"blueviolet"}}>Manan Ashram .17 Jan 2024</p>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:"-1.5rem"}}>
                        <h2>Lorem, ipsum dolor</h2>
                        <div style={{marginTop:"1.5rem"}}><ArrowRightOutlined /></div>
                    </div>
                    <p style={{width:"20rem",marginTop:"-0.5rem",color:"blueviolet"}}>Lorem ipsum dolor sit orem ipsum dolor sit amet consectetur adipisicing elitamet consectetur adipisicing elit. Animi illum dolore eligendi id iusto exercitationem?</p>
                </div>
             </div>

             <div className="card1" style={{backgroundColor:"white",height:"20rem",width:"18rem"}}>
                <div className="pic" style={{backgroundColor:"green",height:"10rem",width:"18rem"}}>
                    <img style={{height:"100%",width:"100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2mzHJWbHc3qpBE3rnlrHJESTyEIMPdhU9Dg&s" alt="" />
                </div>
                <div className="info">
                    <p style={{color:"blueviolet"}}>Manan Ashram .17 Jan 2024</p>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:"-1.5rem"}}>
                        <h2>Lorem, ipsum dolor</h2>
                        <div style={{marginTop:"1.5rem"}}><ArrowRightOutlined /></div>
                    </div>
                    <p style={{width:"20rem",marginTop:"-0.5rem",color:"blueviolet"}}>Lorem ipsum orem ipsum dolor sit amet consectetur adipisicing elitdolor sit amet consectetur adipisicing elit. Animi illum dolore eligendi id iusto exercitationem?</p>
                </div>
             </div>
             </div>
            </div>
          </div>
        </div>

        <hr style={{marginLeft:"-1rem"}}/>
        <div className="vertical" style={{backgroundColor:"white",width:"20rem"}}>
            <div className="allver" style={{backgroundColor:"white",width:"15rem",marginLeft:"2rem"}}>
                <h3>User Details</h3>
                <div style={{display:"flex",justifyContent:"space-between",marginLeft:"2rem"}}>
                    <img style={{backgroundColor:"red",height:"3rem",width:"3rem",borderRadius:"3rem",marginTop:"-0.5rem"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&s" alt="" />
                    <div style={{marginTop:"-2rem"}}>
                    <h4>Lorem Lorem</h4>
                    <p style={{marginTop:"-1rem"}}>Loremxyz@gmail.com</p>
                    </div>
                </div>
                <p style={{width:"15rem",marginTop:"-0.3rem"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque explicabo laboriosam necessitatibus commodi illum eius eaque vero sequi ab consequatur?</p>
                <div className="singlecard" style={{backgroundColor:"burlywood",height:"15rem",width:"15rem",borderRadius:"1rem",textAlign:"center"}}>
                <Progress type="circle" percent={40} style={{marginTop:"1rem"}} />
                <div style={{display:"flex"}}>
                    <h2>Complete your profile</h2>
                    <div style={{height:"2rem",width:"2rem",borderRadius:"2rem",backgroundColor:"black",color:"white",marginTop:"2rem"}}><ArrowRightOutlined style={{marginTop:"0.5rem"}}/></div>
                </div>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <h3>Family Members</h3>
                <p>View all</p>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <img style={{backgroundColor:"red",height:"3rem",width:"3rem",borderRadius:"3rem"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s" alt="" />
                   <div style={{marginTop:"-1rem"}}>
                   <h4 >Lorem Lorem</h4>
                   <div style={{marginTop:"-1rem"}}>Loremxyz@gmail.com</div>
                   </div>
                </div>
                <br />
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <img style={{backgroundColor:"red",height:"3rem",width:"3rem",borderRadius:"3rem"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s" alt="" />
                   <div style={{marginTop:"-1rem"}}>
                   <h4>Lorem Lorem</h4>
                   <div style={{marginTop:"-1rem"}}>Loremxyz@gmail.com</div>
                   </div>
                </div>
                <div className="add" style={{backgroundColor:"blueviolet",height:"5rem",width:"15rem",marginTop:"1rem",borderRadius:"0.5rem",textAlign:"center"}}>
                    <div style={{display:"flex"}}>
                    <div style={{backgroundColor:"white",height:"3rem",width:"3rem",borderRadius:"3rem",marginTop:"1rem",marginLeft:"1rem"}}><PlusOutlined style={{marginTop:"1rem"}} /></div>
                    <div style={{color:"white",marginLeft:"0.5rem",marginTop:"-0.5rem"}}>
                    <h4>Add Family Members</h4>
                    <p style={{marginTop:"-0.5rem"}}>Add upto 5 Members</p>
                    </div>
                     </div>
                </div>
           
            <div className="comm" style={{display:"flex",justifyContent:"space-between"}}>
            <h3>Communaction</h3>
                <p>View all</p>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div style={{backgroundColor:"rosybrown",height:"3rem",width:"3rem",borderRadius:"3rem"}}/>
                    <PoweroffOutlined style={{marginLeft:"-6.5rem"}}/>
                    <div style={{marginTop:"-1rem",marginLeft:"-1rem"}}>
                   <h4>Lorem Lorem</h4>
                   <div style={{marginTop:"-1rem"}}>Loremxyz@gmail.com</div>
                   </div>
                </div>
                 <br />
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div style={{backgroundColor:"rosybrown",height:"3rem",width:"3rem",borderRadius:"3rem"}}/>
                    <PoweroffOutlined style={{marginLeft:"-6.5rem"}}/>
                    <div style={{marginTop:"-1rem",marginLeft:"-1rem"}}>
                   <h4>Lorem Lorem</h4>
                   <div style={{marginTop:"-1rem"}}>Loremxyz@gmail.com</div>
                   </div> 
            </div>
            <div className="help">
                <h3>Help</h3>
                <div className="add" style={{backgroundColor:"blueviolet",height:"5rem",width:"15rem"}}>
                <div style={{display:"flex"}}>
                    <div style={{backgroundColor:"white",height:"3rem",width:"3rem",borderRadius:"3rem",marginTop:"1rem",marginLeft:"1rem"}}>
                    <ToolOutlined style={{marginLeft:"1rem",marginTop:"1rem"}} />
                    </div>
                    <div style={{color:"white",marginLeft:"0.5rem",marginTop:"-0.5rem"}}>
                    <h4>Raise a Concers</h4>
                    <p style={{marginTop:"-1rem"}}>Any concept related to profile only</p>
                    </div>
                     </div> 
                </div>
            </div>
            </div>
        </div>
       

      </div>
    </div>
  );
}
