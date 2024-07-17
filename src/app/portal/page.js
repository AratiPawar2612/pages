import React from "react";
import { Button, Flex, Layout } from "antd";
import {
  AppleOutlined,
  GoogleOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
  MailOutlined,
  CarOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Input, Typography } from "antd";
import { Col, Divider, Row, Card } from "antd";

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

export default function portalpage() {
  return (
    <main>
      <div className="Home">
        <Flex gap="middle">
          <Layout style={{ height: "51.5rem", width: "100%" }}>
            <Header
              style={{
                backgroundColor: "black",
                color: "white",
                height: "5rem",
              }}
            >
              <div className="navbar">
                <div className="logo" style={{ display: "flex" }}>
                  <img
                    style={{ height: "3rem", width: "5rem" }}
                    src="data:image/png;base64,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"
                  />
                  <div
                    style={{
                      color: "white",
                      height: "4rem",
                      width: "10rem",
                      fontSize: "1.5rem",
                      marginTop: "-1rem",
                    }}
                  >
                    TheTejgyanFoundation
                  </div>
                </div>
                <div
                  className="list"
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  {/* <div className="logo"></div> */}
                  <div className="v-class" style={{ width: "20rem" }}></div>
                  <div>Items 1</div>
                  <div>Items 2</div>
                  <div>Items 3</div>
                  <div>Items 4</div>
                  <div>Items 5</div>
                </div>
                <div className="burger ">
                  <MenuOutlined />
                </div>
              </div>
            </Header>

            <Content>
              <div className="row">
                <div
                  className="content1"
                  style={{
                    backgroundColor: "yellow",
                    textAlign: "center",
                    color: "black",
                    //   height: "3rem",
                    marginTop: "-1.3rem",
                  }}
                >
                  <div style={{ paddingTop: "0.1rem" }}>
                    <h1 style={{ fontSize: "1rem", textAlign: "center" }}>
                      For more details visit our website{" "}
                      <a href="./">www.tejgyan.org</a>
                    </h1>
                  </div>
                </div>

                <div
                  className="content2"
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div
                    className="left left-resp"
                    style={{
                      backgroundColor: "whitesmoke",
                      width: "20rem",
                      marginTop: "3rem",
                      height: "30rem",
                    }}
                  >
                    <div className="left-resp">
                      <h2>Welcome to,</h2>
                      <h1
                        style={{
                          font: "bold",
                          fontSize: "1.5rem",
                          fontFamily: "serif",
                        }}
                      >
                        The Tejgyan Fountation Portal
                      </h1>
                      <h3 style={{ marginTop: "2rem" }}>
                        LOGIN AS A GUEST KHOJI
                      </h3>
                      <div
                        className="button"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "1rem",
                          textAlign: "center",
                        }}
                      >
                        <Button
                          style={{ width: "20rem", borderRadius: "1rem" }}
                        >
                          <GoogleOutlined />
                          Continue with Google
                        </Button>
                        <Button
                          style={{
                            width: "20rem",
                            marginTop: "1rem",
                            borderRadius: "1rem",
                          }}
                        >
                          <AppleOutlined />
                          Continue with Apple ID
                        </Button>
                      </div>
                      <div
                        className="line"
                        style={{
                          display: "flex",
                          width: "20rm",
                          marginTop: "1rem",
                        }}
                      >
                        <hr style={{ width: "8rem", textAlign: "center" }} />
                        <div>OR</div>
                        <hr style={{ width: "8rem", textAlign: "center" }} />
                      </div>
                      <div className="title-resp">
                        <div>
                          <div>Exceed Max</div>
                          <Input
                            style={{ width: "20rem", borderRadius: "1rem" }}
                            defaultValue="xxxxxxx353"
                          />
                        </div>
                      </div>
                      <div className="conti">
                        <Button
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            width: "20rem",
                            borderRadius: "2rem",
                            marginTop: "1.5rem",
                          }}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="right"
                    style={{
                      backgroundColor: "whitesmoke",
                      width: "50rem",
                      marginTop: "9rem",
                      height: "40rem",
                    }}
                  >
                    <h3 className="login">LOGIN AS A KHOJI</h3>
                    <div
                      className="card"
                      style={{ display: "flex", gap: "5rem" }}
                    >
                      <div
                        className="submain"
                        style={{
                          position: "relative",
                          width: "35rem",
                          height: "16rem",
                          borderRadius: "10px",
                          backgroundColor: "white",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          className="img1-resp"
                          style={{
                            backgroundColor: "red",
                            width: "100%",
                            height: "40%",
                          }}
                        >
                          <img
                            style={{ height: "100%", width: "100%" }}
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFhUXFxgYGBcYGBgYGRsbIBoaGBgYHx0gHSggHRolHhgYITEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLS01LSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAEDBAYCB//EAEEQAAIBAgQDBgQEBAQFBAMAAAECEQADBBIhMQVBUQYTImFxgTKRofAUscHRI0JS4VNykvEHFTOisiRigtIlQ3P/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QALBEAAgICAgEDAgQHAAAAAAAAAAECEQMhEjETBEFRInEygZGhBRRCYcHw8f/aAAwDAQACEQMRAD8A9xpUqVACpUqVACpjT01ACpqemoARpqc01ADUqVNQAqanNNQAxpjTmmoAamp6agBGmNKmNACpjT0xoEc0xp65NMBjXJro1yaAOTXJro1yaYHNMaemNAHJrmujXNADGua6Nc0wGpUqVMDR0qVKshipU1KgBUqalQAqVKmoAVKlSoAY0qalNACNcmnmuTTARpqVNQAqY0prlm2++VAD0qaaaaAHNcmkaYmgQia5NKaYmgBE1yTSJrkmmAia5NI01ACNcmkTTGmAxpqVMTQAxpjSNMTQAqVNNNQBpKVNSmoGKlTTSmgB6ampUAPTU1KaAHpVzNNNAHVNXM000AOTTTSrkmgB6YmmmmmgBTXLHUffKkTUdy4BqSANdzQBJNNNV/xtv/ET/Uv71ycbb/xE/wBS/vTAszXJNVzjLf8AiJ/qX96Y4y3/AIif6h+9AFia5LVAMUh2df8AUP3roXAdiPnQB2TTTTTXJNAHU1yTTE000AKaaqeO4naskC44UtMaEzHoKpntLhf8X/tf/wCtFhTC5NcmhDdpcN/if9rftT4ftDh3YIrkljA8LDX5U7HxYVJrmlNck0xD09cTSoA0k0pqBsQoOUsATsJE05vr/UPnWdjJZpTXAalmoA867U8RvLirqrdcAMoADEAeBfOhP/N8QIi/dE/+9v3qx2vuf+sveq/+C0IR6TNIpBJeOYhCGOJZY/ruEj5MYNFLXb64Fghbh6rbufpArOcPRReNwoGJWNeUKxH1UD3qtxDtQ6jDOFEOSHEaGHKN+Uj1rNyldIvhGrZpr3bfFN8KXB5i2g/8mNDsR2qx5OneR5lF/wDFaD8a4nibeIORHNvMoXwkq+sFV01PprJqh204xctXyg0GURuN5oTkwcYIM3O0WOmSbnp3z/pUD8bxx/q97jn9ak7OYlr2FDt8UlZ+UHz3+lSYe3F6M+hNxQuXTwAE6xM6jWTMt5U1ZLjFUD34njTuB7lj+tc4fG32aHCZeok/qfOj2OsiDyADNtO2o00nnpQbDNoYdn0VpZQCAyhwBB6EactacW2EopOgtwDHuAwDMBOwJj5UZ/GMdJf5n96yOAvlLd1wJKgkD0WYqbs92iuXrN+69tVNoEgCdfAW51bROjUd/sYc/frUGPufwmIkGOe+tAuzfaO5iLN649oIbewGbXwlufpVThHaG7irN43ba28pQCM2syTv6CpoaaBHEcVeF3LbIiJ1A+9gK6tYjFNsbfsoq4EBYnyPKdhI0568qk4IoJMO7Si3BmG2Y6Qc5jnptrTaFq6KyvjI3T1yCu0OLba4nsq/cVocRbGVjtCudgdQJBiRMbxQ/gQBZhnuN4UueMTGfYA52O2hG2tSurKdJ0CbuDxA8TOgjWSigflVazYuN8L2mjoop/8AiRiCvc258JzMR1IgD5SaznZvEEYm1lMS6qfRjH600m1YS4p1RrkOKTYp8mH5GpRxLGKNCfIrduD9TWX7XcRf8S65oCwoHTQT8yTVzhnFGHD7zz4kfKD0nJr/AN5o3QqjdUH07S49SPFcMTP8SfzFWR20xi/EHMdVtsNweUHl1rLdmcRcOKtI7Egod+W7fLQ/OrfBmxNzGXg4OW2DnWRCAnwaTz8qexVEJcU7YtedWuoFy6fCy+51Iqc3w4DDSdaAWLrXe/7wfDcKgaaQRA0q4rwBQWtBI3ZMe1E+DrGItf51/MUAs3NR6ijnB3m/a/8A6L+dA29M9HmmJrkmmJrQ5x5pVzNKgDzviuIcguGzAn41mRpodOU6Gdaq4Pit7E3kVWYnwho2GsA/Mk1Hh8FdtrmBlHiQTIPX1ioeFP3LubYOf+UjpvNcyjFaGen9mPxVpzavuroZytIkEfoZrU5q8QwVy6t0M15pJ3HiAPnrof3reYLtG/cAkrmynefSa0ToGAO1ZX8bdLGFzLJ8sqzHnQrir21WbJnQGZmaC8W4g9y7cfU685Pv99aHfiCJy7RqPzFZyTkHJ1RueGYi2UDMbYY8tJ5j9ap4rD2Sltc1iUzQCF0JMyJGmutY7DY58yqiwSQBA1n3qTi13wksgzryYRTSZXP2PQ73GrLdyudP4dzPqwj4g8DodN6EcRazcck3rU7AaMawd+xeVbTtaULeE25AAImN509z57VLwwt31mQgzNJABBH9z5VVDu9G+4biEE2QZy7mI1naPaimVSQY1E7ADff51j8HiMl682YrBmRvuaF8O7UYo4hRcxD9yWadEHhExrlnpScTTklVnorLrPqNqE8ZbeOS9APvahPGu0lxe8W25QhTkZSCCx+EnTpVbh2Nvvh2e+5a4C0MwGwAjSNpJpRQOSegj2fk5gASc3L0FHfxKJo922p6F1n89K86s8dxLKUzKBOuVQs+sb1UxdwJBuEljso3jr5CtWZWet2rgYZlYMOqkMPmKqcY/wCnr1H615Zw/imR5R3tN/UG094jT51qsBxO/cdlvMCqidgNdBy061D1spSLNhMrEk5dTG3p1orauiInfyHL/es1xXFDMx19Rt5U1rihA+PVQIM68h+VZc5VZHOjYoYM+tSd5Onp0rJ47jzd1Fq4yXSNxETpEzvz+dDuynG8ZdxHd3sQ7LkJjwjUFRyA6mtFtGnNNh7jr293um2BEkbb89fQULwvEMOrZvxU6qYho0P61x2wuRZukdU/8lrDjGN/Svy/vVR6JnqRucfxGy7sy3112EkdB08qkwuPsd2Ua+oJI11O0H9KwbYxh/Kvyru1iiSAVWJE6GYnXnVUTZ6HhsZh0ZX75dFy7ETvzqTDcWsq95+8Q94RzjYzB015VT7aYZLeBstbUeK4u45FHNYNr7DdF+v70UFm8tYuyO8JyeJyxgprzPqfXpVhbmHaDKj/AOSj9a89wbh2ClVA5nXT61rcfgrK4K5ctlHZcg0YaS4HtzphYTxC2QpNtpbSBMjeDrXVnElCGBgqQZ6b1gcPYLnTTbST51p7blUjaACCZj60mVFmtsdqGLENfE8thpFWBxZ3170kc4OnWvN0xKSdNuYEmY1iR10q9w3E3O7Aytq51A5aQdT61Dk4ok2x4hc/xG/1f3pUIKD+oj5Uq5/5mfwgolsOpXP3jaMNGXweR0MeXvXWCxKo7ZxGfaDHIGJ5b/Wq2D4c9ww+ikSDoCVnwmBtt6jnUPEsGFJJMRtvEKFlj7kAedXyimKi42Ns65UI5GTm9ulV3x0KwnRVgA/KoUwauJVyTlk6FZ6Vxew4AJIK8jPM8gOUb0nJBxYL792nKJEeRnlrV/jvD2t5ZXKTodR10PlRLh1kMgUwoA33Bq9i8Mz6s6t8I26ka7+dVzXRfj0Y7hJZcRazLIDqRPqNaudpDF98y8505gjQ0RxWCbOoUag7qpO3P8qWMwbuc76iIkgD89RS5pi8YCvXnFu2GJYBBkXkmuunKoOGIWxNqQdHM/IxRxsJPNCBzJG0RU9jAXVYEIsjUAFdp3/vT5pDUEmZ7isnEOgOhaPqRSOGtQ0uwK7iACfSieJ4Q4uG9qzZyYHUalfPY+VVTgLjXC1zKNR0WQRIgAcxHL61VqXTFKLs7wNm20nKWWP5zMe0amavq1wALmEtqTOnT2Gn1qLDnKYAjKRptM+vlQvE3j3haSB9aypuRDTRNg7E3GzCPEP01rO8ccm/cn+qK117E21XN4vOfvegvGcML757YIYjxTEHz33rra46bCLclpGfD1vOzeuGS4+2Ur6w5C/QRWUtcGcNqwEQ3oJ0Ou/t0rQux7zu8xKIVAXlpA/Q1lldqkVTj2d8Yv5Zlo6DX5nSqnDcOCveH015amPn+lUOL3Ge4zAaSfT0Hyq1hsYFW1m0W5beeUlbjFfyip4VERzxYgXF00MSB5RMVDgiqM7HMpymCDrJIPTbSuMTxAXHzHQax6Tz+lI4rQg5ddOdUk0gSQX41czYRmmZyanU/EKy2HQaSCRJ0Gnpyo+9/Nh+6YEEmQY08JzH8jVW5hyIkFSANI3BAj6VSehy29HeF7OG6gcuFkkqCNx18tqJjgFvu1UGLogs06bzA/KfSq3CcQVuKzFiAMnKADpV3GYo95A6DkCOY+W9c03l5UmKi/2yP/4/DiQYvAEjyR6wd1AdOWn5Vr+0XEWu2ks5AMhBkRqQpX8jWcuKBuNxzH36V0QdpA4lEafKtTh5PCruhk3LYGm/jXas8xTrWjwHFwcP+HHhUAeIfESTpGmnP6VTlSFRU4FaYnI67AHUQQv7CfrRbGopBBMqAZjQR7+1D7lxkBkEQ0EmMx6etLEX/C2+0zy3FZJuTs0i9D2sAjECRGaSNPF0AiIqwlprrkLoq7mPoKErcOYtJ02j6UY4Jba4vd5jbLEksRvqPOokmSjo3GXTONOqiaVVf+UHcvvrtPpzpUeJhaL/AArHmyptOczAwGDZlZSSRlPlMEVX4fxhXxLlhca2wUEgEgEAhdNQqkmZ661U7PXLd65ba6r5ZIC5vDIEzAgyTpQwY4W8QUSyyKXUFJcPE6AyZBg/UVvHHHk20Db0bbiF2zatkrczZAzBcwJcgE5THLUbdB50J7Ou5RA1s5hdJbOvxIVJMFhyJJ9h1onwvs1cd2uW8Iwi4uTvIChP5wZbWZMjWa7vcLxN3Pmsi3cXwq2aIGhOo3Ec+U0SjF3opN2iT8aLbDQ5FLEkMojMJClY1UBtOgiojxm21sFLjkFyVJmCAwLcuR0FCcV2exhvBkZCACSVugrmjTNrrsomOQqp2R7M4m89wEKhGWS5G06kRM7D6VCxws1kpu5cdfbRobPGC7IqMIa8NSxJKfE0eWjewpu0GJtf9K3ckgO2Uvm3kiTOkFl0OwjyrvhnZB1v/wDqSLwGq3VuMjJGy5OY99KdOxltEuNjsQtprs92FdQVSQRJIiTA0EiI2NCwqLJyZFLpUBeGcRsWm8aZxkgGQeWY7mBsesz50SudqbFlEkFvCCQkSuYlgIMaabTyG9FeDdkMNojqLi6RcFxvENRsDpoeUiivFeD4IJDYa1lRB/KJESd9/feqaT0zNO1ZieEXu/a+iq9xEbNmCsT8QYgqDIiBzM6+lU8XjnuYkJ3RF3Um2FAjeGPnsf1rQYT/AIi2zd7tLRVWB2jUgHLoPIAfKgfGO0T5y+mfVZ6CdusVfjjdlQ5NP2Q/FsPetBe8uW0e58Cklm01GgED4uugq1wvg9xrtsvaz22QkXQCqzJZdDrOsTEbVqON9o8IcGoIQlrKuFIM58giWGoM85msDhu0WJvYhmDEIJmJChY8IjlsAKJKthjipPizVYzhLJdYXcLFoW81u4dQWAkqR/KekxMUI45dsLcW0lwW70JnCpmWPidQTzylvptTdpO2V6/iLAS8bdod2tyTAJkd4zciI8+R9aJ8W7N4a63fLcbMRo4KsG5ZiAAD7RQoOTEmov8AM54hisJbsNdZQ4dFVdN9NB5bfSsx/wAxV0Zu6fMtyAAS2hjxEb6aL015TW+4VwfD/hFtXVF6ZDEiB4TIjWQdRrPOn4xj7YEeFBOUnKBGhIOkaCuOGWMZOG7s28Te30ZXD9lLuILC1ftDIBmJDfzSV0jU6gGitngdpnSy473KBAElt2JI/wDd7aUH4d2ha1fc5gd1ZRHiBOjA+oU+YrTdl8Rle5dW2Azrdgl2EQDC8/ieNRsK6XXExcfqoG4rDWcOs4lO4aWEN4vFJy/DPhO/p51DhuKYfPcRwAtpQzXAAVI2OgkjUgjqKy/EsDiHe6j2mDKSfiHWJknXcajXWtF2Wxtks12whw95cqXELZ1urtlMgQSRuAIPWpcEDi09oPW2vB0DWkew9ov36qVEkGAVOoOQgEddecVLj1OjJYN2WCtliLYOmc9Y6dBVy/jmZSRoBKjTYDypuG4/Lg7eYwSzHXfXWTrIkEaHWsM8FCpL3HFXoDYm8iOyso8KFm02jU+ulC7HHLDZWuKERgIYjQeIqZPSR05mtLwy0ru7sAzE5BvEc5GxH5xVTt3hrHcraw1tLXdnNMAalP7g+3KmlBd+5pHFKd8Spgsl5nQIpe2VF0HWCwJEaeLVSP3qjxg4e05W7Y0FsXMwQEQWCx8yDWV4fxJ7WVnvPlJ8YBYE5ZjZhtyM84qzi+Mu+JRbhBU3EUhgCMhYAqQRrp1rbwxvTMfuaDiGEwdoKbiIub4YXU7eW2ooGbltYuraHdknK4zD4Trz3nyr1Xj3Z3CO6G4zgWyQBmEOCD4TOyxA0jQAVm+N8Fw6oLKDKmViLQOmp1bruevIUuKj2zbF6eWV1EzGDw6XrDsiXGZTmyWzmY6bgGeVdYfA94otqzlrjFQrKCQRMry6e1a/sjetYe1dRQFASTqS7tOkTyAB0Hl1rK8AZl4it68oCuLjCd1Y6qTOqtuPeOdCpyqyZ4pQ00BruGu2J1WAATJjLJjUb71YV7oZFIyuygrrlDK0ZYnmdNPPlXpN3hVsWL7NbW7dVHcLdGZRpChl5kgDQ9BpNYXs/h34lmsYpmRMMn8PJbVCCzAQfDBELz10FaqKZCjekVm4Lif5rttTzU3FBHtNKtPc7GWyZe5nbSWYakxqTrSocJfBp4kZzguIvtw+/asWT/Dgm4k5iWOo6lso5cvrY7J9mIK4jE5w0zkPMD4Z58gY6aUZ7BWu4webX+M7P6R4AB/pn3qPiGJa4wCZtWA2OkmKiU/qaRw5MkrpHoGF4ipsgqebbiNZjXz0oTieK5JzkrMqmqjMSNlLaT5eRoely6veEuq6HIpnKehMa+Wmv0oV2tu3hhGDphrqswAKs6FSTo4DaSD5860f4aOmGpJknFWLAOZzCB4yOs/ymOdZ/EcUa2wYESCNtAOWlWFJGGw6ORmYG5cPQcgfMLvQzEgOGJ57D8q512fUKT8SS+DWDtGttExFy4sbFP5iRuR10Oo86xf/ABB473+KePhWFHsANuX+9MuHdSczL3aw0sgeT0AOh/2qxxNcDcY3e9c3GOa5nBkmIIAURy866HJum0fP54xU2kwv/wAOsVcW0x10fwknQeGSPptWr4ge8tFycqNFvM39ROUfmNfOvOV47AFuyCvi+I85gHQbbfSvR7aqcKlm5qDahtYkx4jPXNJmhr5OZuujzBuymLs3CQoMT41I05Exvt0qtjATupJ5nqeu9aPEcfcNluaMpAnkw2zj159DNRcTA1YKYImRt5jbeqeghN7M5xDEHRT/ACqAfUCDVGxiSrBl3+9PSo8RdLEk8zSw+HzEmQIB369KZNkuY3HC82YD3Jj9a2vZ4m2r4ZnJNt5B2lW1BHlM1kMHhblu7adrbZRcRs0SIDAzI0OnKtXfxTs5ZEtBHzZbjAZsgJ35gztTToA7wm+LJuJ3uZGOZFIGdTrmHmDpFY7j3EReulCSqMyncHUCNem5q4cJly3TcDMJJUSRIkDWfKstjWUuCpOwLTHxSZjyiKwWOHkc0jRzlw4sJ4J2OJS2mim4FAGuk6+8TXpzOtmyUtnVWKs3OYDHXn8Qrz/s5hSt0Xiui6ieZPOtXi7i21e3JP8AEzFjEnMNPcZY9qTmnLR6Pocajbl2+ivxTFIR4wCevP5jUVnlYW7lzI0FhaMk9CDy9GHv5VduWjcfJMToDy6UJNsvluLv8J1jUGY19fX5VfaK9U120Gxx17lt2Xw6nwgyJ0kyfL9KjxnD3LK6yR3YkKpIkiTEaUUs4Rdc9u25J+I2yDHTSiVq+sBQAABtLVjLJ8HnKPyALmMZFW2isreA97DDKxUgiOUz67Cue1eGvfiDbKtGVAsnRmhEWDJnY9YmiuPsMXF3MMqicstrEnpBO1Trfa4FZghKCLZLGQRKsxGmu3I6+lZyl1L9TpwRlJ8E9vozXFeygFh7iOTbtvkLEA5nYT4eg89d1rNXOKN3tt7iq/d5RlICyqx4SVhthEzNen9qrS2OG4fDJrJzkzJLEEz5x+grLdm+AWrua7eUlRoomMxkgk842iI51vyUI3IxyRc5Pivv+WiDtfx38Ulu4QVVs3gLZoaczRJ28Qjy+VWezOOBsO11iWtoqDNtBLMqgzqYn6b0D7W2clzIiAWxqsAk67gnc6g0W7PXAtnLcRGEk+JFMEgE8vSk2pRRphnLFPnV6JMNi2bO1tM9xVlAASdfBoBH9QodxYXEuQ4IcgEgiDr+tbvheNsWF8K5XuAHwIeRIAJUdZoP23xVq74QR3o0U6bnZSTyOnzqfGnKxZMzlugce0F3B2TbS4xuX0ts7MZySCcijkfFqTrt0oBhe02JtvmW60kgsCZDR1n86r8XvO91jd+MaH/MND7aChpNbxVHO5v2PY+FcY7+0l4aZht0IJBHzBpV53wlb3dLldVGsA7/ABH/AHpq05mnnN/wmw1vDWrIcMy5gzBvAJZmOpgcxyqC5ekgIwJBkHrB3A6edYhsYyEqGIiV39jUPekSc7T6n5elc3DdnE8Nyuz0E4WZZ2LDf4jlHXyoTxnHJctmxbTMCVOYyduYJ58pHU1mxbZlBZiQTtJrW4C0otpCg+EfOOdVOXFHRFWYvFOysVmI0gbfKuEu3CYLHXflR7ivCXa4zgaNr11gA+37VRPC7gBI8xt+s0JxZo55Fq3+oPxGLbKykyfD+X6ffnSW5ofv7+/Oi3FbQkFrYQi2qmNCzAKJ+k0HaPP7+/vnrF2jGXe2cm7rXsPDcQGwlhgyy1sMSyl/E2rAeYJIryLB27ZeLhYDkRG87bVs8Hxk2MOtu1bDICQHaSd5PlPi9PKk2rDi+JxxvCq4YQSdweh6jX6fSp+zuKv5I7m40jUKpPv09jVW3xMFgzKSJmJXX67UYXtwB4VtMI0CgfQATVPi1smNoAYvs9h85UtettuVdFWATvy0qla4GWkLmClgquQMupiTsY03r0C3eF495cUAgQMwEgbnrzoFxnHgyq77Ry/v7VN/3KYB/wCUYhCUVlhv5lYx5wOtGsPwIuFVGGigHrAnMdecAmBzq2mCUAjOdRHxDmNSNBTNgPw1s3jMBWCyQZJ0/U/KuaeS1rs6McPqV7RU47iUTDRYUBdRMb+p3JPOsNaWXA8x8q0nEbbDCKW3aWA8iSR7xWasnxD1rTF0zr/iCjLLBxVJpaPQcPYzowDxCoV3gExmBPlr9Kbi2K/igKRlugQ0ZgSrNA+TCqvBTbdcuYg5U15SVUH38RozZW0lxGnVVYopOnUt6+Jq5cdqTCc92n10Z3FNcsvlaUPMREjrE7edXsLgLSKBcVnYnPI3kgHWNuvoetd4+wmMvZ2aVUQBynU6/Ok9zEhiUyqs6QOQkR6foAK7f6TjyZpZO/YIW2UaDN7kn86lSI+Ij3PvVK3jsQRDhHPKV/8ArFWDdJEsmvRZj865pRrpijKyw1wjZxvzobirBJKC5DlWfPqF6lTHzolbg6d3HmTpUOMZFVwF8RQ7b+3nNTB0ymALuMvYgWla08phyFZQTnACkEeHTwr5k1Pwtfw+FttczKz3GlSYhDESDsBlzdYPnXXCkyXUus7W1C5VUMAdBkEj61YxGDGcs11rmh1aGE+m3L6Cqyv2On0WLySq/wDhS7T2vCl0dYPoRofp9a44Zwu7fCWrSklgXdhHhU8yToJGg9+lUMTcZs6ljkiTJ5jUR716f2dw/wCGwozD+JdGdgu6rEIg9F+pNZcuKSH6qMsMVHvegHjuEYi1hiqugZX01Jgaagxod9ay3DeEXjeDXlLBZJB2J3gn5e1bviF6cpKtGfmcuo0Bk8txrvUBIkgBvhbeeuUgHYH0rujFI8+UmyhjkW9YAxVoHMZCiUNsjQZWB2IO0QdOlZ7B9jbFy5lU3jMkCQfONFmPOa0t7EKUmZAAO4Om2/PcVTwnE+7cMnQj560SfdBGmcns83Nbo8lskgeQ12pVO/bQqSC6SN9GpVhcza4fBi+MYXJcbeCzb+utVBYJ2HuT5+lb7iVzvH8ahjpqNeUaH0qk+AXTkNRAAgdNPKqWT2IcDKvfcALoAPetdg7lo2wVaCFHhg9Np0AE+Z0qovC7e8Fj/lkkT8qbGJ3SkwORiARvAolJS0OMeOyxfxeUak6DlGnU/KoLHFEcDL4jEEExPoYNCxxMwdF15jT8qgTE24/6enqRvvz51UYJdkuRX43jA7GDoCABpyA6b6zQkn71+/vrrRp7NhwAtvIB/R+szNVjwpeTtHmAf2rVNIzaYKNEuH48gC20kH9aT8KUbufl/ermBwuGSDcR7h5DNAp6YK0SPhbhOXu2B8wRRXg/DggJuGS3Q+RgfrUq8TYf/rATL4VBJjoSTrQx7zyYYzMkb5d9B5bVElqhp07NDhcEifA2+53qtf4SrGQ8GSTB5nU671XXGnLop000+/uKntX/ACOu81ztyRrcSW3hWiC5M8t4j+wo72mwaXrK2wCpBVQF/myjxEk6R5/nQvCuSROgPPTQf7VX41xZRfCK2VQCIncRsZ6kz865sqk5pR+51+mjydfOilxqyiqVDFuckyDoNR5RA9qxNmzLMPWP0rTcV4gGJ8QND8NeQMCRMEEgdBrXTjbjE9H1mKEpR+I/uG8IgllEAkrBB1yqgH1JqHieGdH0tm6YzZs0+gOuhHT0qG3jrRJJKrMmQdtJ1HqF+zRXB8bttEkzvqNOmhAkjSdZOu9LFyUjxstUCcM9wTK5GEaQRI39+VHMPxhSsFTtEn78p96lsYlSYPiIEA+WsftVtbKN4pHsBV5JK6ZEIurRFaxw6EfKpTeA1HPfXfzpreEHlHkP1plw86hgRpWWitkoxAJHn86mzg9Ouojaqp0jT3+xrXN1DBlue3PpzFJjspdoO7Y2tpkgrE5tRAofxHGKpKC4JG4gx842rQ8LwwF1WKnQ5jIHrQLGYfDvceVYEs20iNfvStopSWysfqJ4W3D3KnBrbXLtuLbuvepmIUlYzCQTttM+tehd61zEsRqiheuhlpHvl+cUN4FdRbKqh0TT6zP1ovhLgW090wrMzsenQfPp51MsP1qSOr12OTx4szdr/IGvnNkWTEAjwyCIg5veDUOLvwrAMTIiRuJ+HT2561axDZnGoJUbEkEGddehHKKoYjxjIYQSBqCAYERO87b7V0o8x9lbDDNcZc0gLERG5mCOun1NK9w3UxIEae339acjK5htwJI0mOcxtVu22muZp8xXNktSZrCOgYeDA9fv3pVdL+Q+YpVPKXyXxiVHxKkl1BiNAd9ortLgIkjTpzPPXnUNu0ZK8hMc+X39a6t4dtJiNd4mdz5Df6VboyTZdtNPTznXrNQ4rBllKzuB6Tp0G01PbtQNtI602jSFBHXpP71JVmU4hgntnxDSSNPSecUM75CAJM862fEQCAuh25aeo5fYrP4nBakDcco+sVtGVozcaKOBIMzcRQN5OvsOZq2ykE5YcAkZl1nnp7VH+GOvI/5QPSumwOYhSI66e9WSMtwHb61Jh1kxvqB+s/Snv8KIErtzGoO3WajsE23IOuhAM7a0IDR8Mw6ywYgmBofnV67hANiIPSPesvgscUdigESJJE7f70aTi+oBXXfnWOS7Li1RaXBLrG31j5elIYeTtGv5Uvxs6gkR0iTzG/51cRxEED9T1On9qztl0iEwgJknykDfQN6Tr7Vm73HnzEFRlBMSBMcq1V+GBBmZU6eRnr5b1n8bw+xatr3ilidMw6+gOoHSjH+OyppcFRUXiltj41T0y/mYqVLlvKWNq0dNND+hFUnwuGb4WK/PfprVd+GuJKXPCNZrpMAjZe0oJawn31qPvO9uLkQKsxHICNT99KFrgCTJaT7z7VoOz2GUMRJLAfYj3FDdIEtkRsOJOoHKN+XKPWruDe4NNeWpFGH00310ER9a4uluSTr1ge/nt9a53OzZQIbTMd5jc7iRUtvURy0nfamXc9PWZ9K4RTJE7zuPfekOmhLYnwgknlrsPlrUyLlMlvSevSuLFsgzAgbHNSu4qWMyfYD7H7VIbJhihbOZiBrHUbRr5VnsPg0uXrpLE6kiDBkmZPlRm6F5NBJ22HrrVVrSLqqydc2gBPlWkHRMkWbK5CsHQb+frRnC8TDWoa6AZgq0bDYRXn2KxjqZELOwBJqG/wASaADD+oET0rScHJadClmk8fj9rv8A37m2xWK8TEFDPIGOYIPw76e9UnvfBAgLJ0aNZOmsmCDrrWUwrB3h/CPIfpRpMHaYxbvOnVSdD579KKmvf9jGpfIUQyCSoIAnc+n5dOnnXVrEKRKbbadfcVnv+XAMYurE7nXSeevv8qTXjYIK3VI0kL08xSePl29l45Sj2aEueh+f9qVQq7/4n/aTSrGjazu3ZUNlJOblA5fzTM7nSrVvDjWWzHkOUmlSobCuyC4UUgFjJPOeXpUZCmIbYFog6j1n0+Zp6VMnolbDIR5KZ99ulV2wBjwKslpJJ30iNp9qVKkpNCZHiuFHLO4Gh15ydKpnDAeIDYxvBnT6CeVKlW0ZMlrZw+cAR4gBtMfX0qpewNxmzaZYmPofeaVKm2QztMIQsn8h7/p8qnSwBAkjUg8/v+1KlSsC3bVgYgT7D+1W1SJnmI29+tKlUM06OSoB8R1AJPl0FRYg2mVRc0U7aHcCOWu1PSpLtA+gTZwVj+VjoT1ojisEsaaREetNSrclFfFDQyoM/fqK44fjBbJ5TA9hr+v5UqVJq0F0wnb4qpMjrqYPrUox4jVWGo5jc+1KlWLiilJsmuYhYA1gSecRpr+ddG8CGCkadVgctNPXelSqWjRvQ6aaaToPvSpSpjUdCDpt++nSlSpMfsci6uY/DHoZ+9acyTCAFp10AG3L50qVJ6F2C8dwVbrKHUAsR4lEeo0361cPCMPh8gZZzHWRO/X3ilSroxPRE0ibGcCw7N/0wP8AL4fyqpiuzSKRkJEmNSG9NxNKlWpmB+J8DeyCTlMHWNNOWlDMTaKNkdYJ2GnXqKVKpbpgujXiRoGaPalSpVzm5//Z"
                          />
                        </div>

                        <div
                          className="profile-resp"
                          style={{
                            top: "4rem",
                            left: "1rem",
                            position: "absolute",
                            width: "4rem",
                            height: "4rem",
                            borderRadius: "50%",
                            backgroundColor: "pink",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src="/profile.png"
                            style={{ height: "100%", width: "100%" }}
                          ></img>
                        </div>
                        <div
                          className="midline-resp"
                          style={{
                            zIndex: "100",
                            marginTop: "1.2rem",
                            marginLeft: "1rem",
                          }}
                        ></div>
                        <div
                          className="img2-resp"
                          style={{
                            marginLeft: "10%",
                            display: "flex",

                            justifyContent: "space-between",
                          }}
                        >
                          <div
                            style={{ marginTop: "1rem", marginLeft: "-2rem" }}
                          >
                            <div id="am">Am I a Khoji?</div>
                            <p
                              style={{
                                width: "20rem",
                                height: "2rem",
                                marginTop: "2rem",
                              }}
                            >
                              RJNOKt61HNLcgCNAI11gBPXPedSmMjEggaaiFLq27Po5jiM1A
                              <br />
                              YxdHtWOdamT0cMGuz52rvD8
                            </p>
                            <div
                              style={{
                                width: "15rem",
                                height: "1rem",
                                marginTop: "-8rem",
                                marginLeft: "20.5rem",
                                position: "absolute",
                              }}
                            >
                              <div
                                className="line"
                                style={{ color: "black", width: "15rem" }}
                              >
                                Want to become a Khoji! Explore Here
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              width: "10rem",
                              height: "5rem",
                              marginTop: "5rem",
                              position: "relative",
                            }}
                          >
                            <Button
                              id="button"
                              style={{
                                backgroundColor: "black",
                                color: "white",
                              }}
                            >
                              Yes,I am a Khoji
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bottom1">
                <h1 style={{ marginLeft: "5rem" }}>Upcoming Events</h1>
                <div
                  className="cards1"
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div className="content3">
                    <Card
                      cover={
                        <img
                          style={{ height: "15rem", width: "20rem" }}
                          alt="example"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2mzHJWbHc3qpBE3rnlrHJESTyEIMPdhU9Dg&s"
                        />
                      }
                    >
                      <div style={{ height: "5rem", width: "20rem" }}>
                        <a style={{ color: "blue" }} href="./">
                          Manan Ashram . 17 Jan 2024
                        </a>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h1>Lorem ipsum dolor</h1>
                          <ArrowRightOutlined />
                        </div>

                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Dolore dignissimos dolorum nesciunt iusto saepe
                          non.
                        </p>
                      </div>
                    </Card>
                    <Card
                      cover={
                        <img
                          style={{ height: "15rem", width: "20rem" }}
                          alt="example"
                          src="data:image/jpeg;base64,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"
                        />
                      }
                    >
                      <div style={{ height: "5rem", width: "20rem" }}>
                        <a style={{ color: "blue" }} href="./">
                          Manan Ashram . 17 Jan 2024
                        </a>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h1>Lorem ipsum dolor</h1>
                          <ArrowRightOutlined />
                        </div>

                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Dolore dignissimos dolorum nesciunt iusto saepe
                          non.
                        </p>
                      </div>
                    </Card>
                    <Card
                      cover={
                        <img
                          style={{ height: "15rem", width: "20rem" }}
                          alt="example"
                          src="data:image/jpeg;base64,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"
                        />
                      }
                    >
                      <div style={{ height: "5rem", width: "20rem" }}>
                        <a style={{ color: "blue" }} href="./">
                          Manan Ashram . 17 Jan 2024
                        </a>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h1>Lorem ipsum dolor</h1>
                          <ArrowRightOutlined />
                        </div>

                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Dolore dignissimos dolorum nesciunt iusto saepe
                          non.
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="bottom2" style={{ marginTop: "5rem" }}>
                <h1 style={{ marginLeft: "5rem" }}>Upcoming Events</h1>
                <div
                  className="cards1"
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div className="content4">
                    <Card
                      cover={
                        <img
                          style={{ height: "15rem", width: "20rem" }}
                          alt="example"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2mzHJWbHc3qpBE3rnlrHJESTyEIMPdhU9Dg&s"
                        />
                      }
                    >
                      <div style={{ height: "5rem", width: "20rem" }}>
                        <a style={{ color: "blue" }} href="./">
                          Manan Ashram . 17 Jan 2024
                        </a>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h1>Lorem ipsum dolor</h1>
                          <ArrowRightOutlined />
                        </div>

                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Dolore dignissimos dolorum nesciunt iusto saepe
                          non.
                        </p>
                      </div>
                    </Card>
                    <Card
                      cover={
                        <img
                          style={{ height: "15rem", width: "20rem" }}
                          alt="example"
                          src="data:image/jpeg;base64,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"
                        />
                      }
                    >
                      <div style={{ height: "5rem", width: "20rem" }}>
                        <a style={{ color: "blue" }} href="./">
                          Manan Ashram . 17 Jan 2024
                        </a>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h1>Lorem ipsum dolor</h1>
                          <ArrowRightOutlined />
                        </div>

                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Dolore dignissimos dolorum nesciunt iusto saepe
                          non.
                        </p>
                      </div>
                    </Card>
                    <Card
                      hoverable
                      style={{
                        width: 240,
                      }}
                      cover={
                        <img
                          style={{ height: "15rem", width: "20rem" }}
                          alt="example"
                          src="data:image/jpeg;base64,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"
                        />
                      }
                    >
                      <div style={{ height: "5rem", width: "20rem" }}>
                        <a style={{ color: "blue" }} href="./">
                          Manan Ashram . 17 Jan 2024
                        </a>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h1>Lorem ipsum dolor</h1>
                          <ArrowRightOutlined />
                        </div>

                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Dolore dignissimos dolorum nesciunt iusto saepe
                          non.
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>

              <div className="black">
                <div
                  className="endbottom"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    marginTop: "5rem",
                    height: "20rem",
                    width: "100%",
                  }}
                >
                  <div style={{ marginLeft: "15rem" }}>
                    <h5 style={{ paddingTop: "2rem" }}>Contact Us</h5>
                    <h1>Get in touch</h1>
                    <h4>Our team is always here to help</h4>
                  </div>
                  <div
                    className="main"
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      marginTop: "3rem",
                    }}
                  >
                    <div className="box1">
                      <MailOutlined />
                      <h1>Email</h1>
                      <p>Lorem, ipsum dolor.</p>
                      <h4>lorembhs@gmail.com</h4>
                    </div>
                    <div className="box2">
                      <CarOutlined />
                      <h1>Office</h1>
                      <p>Lorem, ipsum dolor.</p>
                      <h4>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dignissimos, consectetur?
                      </h4>
                    </div>
                    <div className="box3">
                      <PhoneOutlined />
                      <h1>Phone</h1>
                      <p>Lorem, ipsum dolor.</p>
                      <h4>+91 9156103254</h4>
                    </div>
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
