import React, { useEffect, useRef } from 'react';
import "../textcontent/Text.css"
import { ImCross } from "react-icons/im";
import Moneybutton from '../moneybutton/Moneybutton';

export default function Text() {
  // const videoRef1 = useRef(null);
  // const videoRef2 = useRef(null);

  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.5,
  //   };

  //   const handleIntersection1 = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         // Video 1 is in view, play
  //         videoRef1.current.play();
  //       } else {
  //         // Video 1 is out of view, pause
  //         videoRef1.current.pause();
  //       }
  //     });
  //   };

  //   const handleIntersection2 = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         // Video 2 is in view, play
  //         videoRef2.current.play();
  //       } else {
  //         // Video 2 is out of view, pause
  //         videoRef2.current.pause();
  //       }
  //     });
  //   };
    

  //   const observer1 = new IntersectionObserver(handleIntersection1, options);
  //   const observer2 = new IntersectionObserver(handleIntersection2, options);

  //   observer1.observe(videoRef1.current);
  //   observer2.observe(videoRef2.current);

  //   return () => {
  //     observer1.disconnect();
  //     observer2.disconnect();
  //   };
  // }, [videoRef1, videoRef2]);

  return (
    <>
      <div>
      {/* <div className="convideo">
  <video autoPlay controls muted ref={videoRef1} src="videos/ปัญหา.mp4" type="video/mp4" />
</div> */}



        <div className="product-promotion-title">
        เคยไหม? เข้าห้องน้ำทีไรเหมือนรู้สึกติดเกาะ
        </div>

        <div className="producttext2">
         <span className="producttext3">นั่งนานจนขาชา</span> หน้าแดง หายใจไม่สะดวก
        </div>

        <div className="producttext2">
        เบ่งจนสุดแรงเกิด<span className="producttext3"> แต่ก็ไม่ออก ! </span> 
        </div>

        <div className="producttext2">
        อึดอัด แน่นท้อง รู้สึกไม่สบายตัว
        </div>

        <Moneybutton />


        <div className="product-promotion-container">
          <div>
            <img
              src="image/AnyConv.com__10.webp"
              alt="product"
              className="product-promotion-image"
            />
          </div>
        </div>

        {/* <div className="con2video">
          <video autoPlay controls muted ref={videoRef2} src="videos/nanoVA1.mp4" type="video/mp4" />
        </div> */}


      <div className="title">
      <p>เกิดจากสาเหตุ </p>
      </div>
      <div className="productimage2">
        <div>
          <img
            src="image/1.webp"
            alt="product"
            className="productimage2"
          />
        </div>
      </div>

    <div className="title3">
    <div>
      <p>• การดื่มน้ำน้อย</p>
    </div>
    </div>

<div className="productimage3">
        <div>
          <img
            src="image/2.webp"
            alt="product"
            className="productimage3"
          />
        </div>
      </div>

  <div className="title4">
  <div>
      <p>• การรับประทานอาหารที่มีกากใยน้อย</p>
  </div>
  </div>


<div className="productimage4">
        <div>
          <img
            src="image/3.webp"
            alt="product"
            className="productimage4"
          />
        </div>
      </div>

    <div className="title5">
<div>
<p>• การขาดการออกกำลังกาย</p>
</div>
</div>

<div className="productimage5">
        <div>
          <img
            src="image/4.webp"
            alt="product"
            className="productimage5"
          />
        </div>
      </div>

<div className="title6">
<div>
<p>• การใช้ยาบางชนิด</p>
</div>
</div>

<div className="productimage6">
        <div>
          <img
            src="image/5.webp"
            alt="product"
            className="productimage6"
          />
        </div>
      </div>

  <div className="title7">
<p>nanoX2</p>
</div>


    <div className="title8">
    <p>วิตามินกาแฟ nanoX2 ช่วยปรับสมดุลระบบขับบี12 </p>
    <p>ถ่าย คุมหิว ไม่ปวดบิด รสชาติเข้มข้น </p>
    <p>อร่อยกลมกล่อม และสารสกัดที่ได้มาจากวัตถุดิบคุณภาพจากต่างประเทศ</p>
    <p>เพื่อให้ได้กาแฟที่มีมาตรฐานและตอบสนองความต้องการของลูกค้าได้อย่างดีที่สุด</p>
    <p>1 ซองให้พลังงานแค่ 70 กิโลแคลอรี่</p>
    <p>✅ 0% คอเลสเตอรอล</p>
    <p>✅ 0% ไขมันทรานส์</p>
    </div>

     

    <div className="Testtheproduct">
          มาตรฐานสินค้า 
      </div>

      <div className="imagereview4">
        <img
          src="image/Picture1.webp"
          alt="standards1"
        />
      </div>


      <div className="imagereview5">
        <img
          src="image/Picture2.webp"
          alt="standards2"
        />
      </div>
      <div className="imagereview6">
        <img
          src="image/Picture3.webp"
          alt="standards3"
        />
      </div>
      <div className="imagereview7">
        <img
          src="image/Picture6.webp"
          alt="standards4"
        />
      </div>

      <div className="imagereview8">
        <img
          src="image/AnyConv.com__13.webp"
          alt="standards5"
        />
      </div>
      <div className="imagereview9">
        <img
          src="image/AnyConv.com__14.webp"
          alt="standards6"
        />
      </div>
      <div className="imagereview10">
        <img
          src="image/product999.webp"
          alt="standards7"
        />
      </div>
 <div className="review-heading">
        รีวิว 
      </div>

    <div className="imagereview1">
      <img
        src="image/review1.jpg"
        alt="imagereview1"
      />
    </div>

    <div className="imagereview2">
      <img
        src="image/review2.jpg"
        alt="review2"
      />
    </div>

    <div className="imagereview3">
      <img
        src="image/review3.jpg"
        alt="review3"
      />
    </div>

    <div className="imagereview4">
      <img
        src="image/review4.jpg"
        alt="review4"
      />
    </div>

    <div className="imagereview5">
      <img
        src="image/review5.jpg"
        alt="review5"
      />
    </div>
      <div className="small-heading">
          nanoX2
        </div>

     </div>
    </>
  );
};