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
              src="image/264_0.png"
              alt="product"
              className="product-promotion-image"
            />
          </div>
        </div>

        <div className="title">
          <p>ริดสีดวง <span className='title-text'> เป็นภาวะที่หลอดเลือดดำบริเวณทวารหนักหรือส่วนปลายสุดของลำไส้ใหญ่เกิดอาการบวมพองหรือยืดตัว คล้ายเส้นเลือดขอด</span> </p>
        </div>

        <div className="productimage2">
          <div>
            <img
              src="image/ลำไส้แปรปรวน_0.jpg"
              alt="product"
              className="productimage2"
            />
          </div>
        </div>

        <div className="title3">
          <p>ลำไส้แปรปรวน หรือ IBS <span className='title-text'> เป็นภาวะเรื้อรังที่ส่งผลต่อลำไส้ใหญ่ ทำให้เกิดอาการปวดท้อง ท้องอืด และการเปลี่ยนแปลงของนิสัยการขับถ่าย</span></p>
        </div>

        <div className="productimage3">
          <img
            src="image/มะเร็งลำไส้_0.png"
            alt="product"
            className="productimage3"
          /> 
        </div>

        <div className="title4">
          <p>มะเร็งลำไส้ <span className='title-text'> เป็นมะเร็งที่เกิดขึ้นในลำไส้ใหญ่หรือทวารหนัก มักพบในผู้สูงอายุ แต่สามารถเกิดขึ้นได้ทุกวัย มะเร็งลำไส้เริ่มต้นจากเซลล์ปกติในลำไส้ใหญ่ที่เกิดการกลายพันธุ์  เซลล์เหล่านี้จะเติบโตและแบ่งตัวอย่างผิดปกติ จนกลายเป็นก้อนเนื้อร้าย</span></p>
        </div>

        <div className="productimage4">
          <img
            src="image/ผิวหมองคล้ำใช่ไหม_0.jpg"
            alt="product"
            className="productimage4"
          />
        </div>

        <div className="title5">
          <p>ผิวพรรณหมองคล้ำ <span className='title-text'> เป็นสภาพผิวที่ขาดความกระจ่างใส ไม่สดใส สีผิวไม่สม่ำเสมอ มักมีลักษณะคล้ำ เกิดขึ้นได้ทั้งบนใบหน้าและร่างกาย</span> </p>
        </div>

        <div className="productimage5">
          <img
            src="image/อารมณ์แปรปรวน_0.jpg"
            alt="product"
            className="productimage5"
          />
        </div>

        <div className="title6">
          <p>อารมณ์แปรปรวน <span className='title-text'> การขับถ่ายที่ไม่สม่ำเสมอ ส่งผลต่อฮอร์โมนในร่างกาย ฮอร์โมนที่ไม่สมดุล ส่งผลต่ออารมณ์ เกิดอารมณ์แปรปรวน หงุดหงิดง่าย</span> </p>
        </div>

        <div className="productimage6">
          <img
            src="image/เสียความมั่นใจ.jpg"
            alt="product"
            className="productimage6"
          />
        </div>

        <div className="title7">
          <p>เสียความมั่นใจ <span className='title-text'> สภาวะทางอารมณ์ที่รู้สึกไม่เชื่อมั่นในตัวเอง กังวล กลัว หรือคิดว่าตัวเองไม่ดีพอ มักส่งผลต่อความคิด พฤติกรรม และความสัมพันธ์</span></p>
        </div>

        <div className="title8">
          <p>อย่าปล่อยให้ปัญหาระบบขับถ่าย ทำร้ายคุณ!   มาดูแลตัวเองง่ายๆ ด้วย...</p>
        </div>

        <div className="productimage7">
          <img
            src="image/ดูดี nanoX2.jpg"
            alt="product"
            className="productimage7"
          />
        </div>

        {/* <div className="con2video">
          <video autoPlay controls muted ref={videoRef2} src="videos/nanoVA1.mp4" type="video/mp4" />
        </div> */}

        <div className="title10">
          <p>สารสกัดของผลิตภัณฑ์</p>
        </div>

        <div className="productimage8">
          <img
            src="image/กาแฟอาราบิก้า-Arabica-Coffee-นำเข้าจาก-มาเลเซีย_0.jpg"
            alt="product"
            className="productimage8"
          />
        </div>
        <div className="title11">
          <p>กาแฟอาราบิก้า : Arabica Coffee (นำเข้าจาก ประเทศมาเลเซีย)</p>
          <p>หลักการทำงาน</p>
        </div>
        <div className="title-content">
          <p>•&ensp;คาเฟอีนจะถูกดูดซึมเข้ากระแสเลือดอย่างรวดเร็วหลังจากดื่มกาแฟ</p>
          <p>•&ensp;คาเฟอีนจะไปจับกับตัวรับอะดีโนซีนในสมอง ทำให้ร่างกายรู้สึกตื่นตัว กระปรี้กระเปร่า</p>
          <p>•&ensp;คาเฟอีนยังกระตุ้นการหลั่งฮอร์โมนเอพิเนฟรินและนอร์เอพิเนฟริน ซึ่งมีผลต่อระบบประสาทอัตโนมัติ ส่งผลต่ออัตราการเต้นของหัวใจ ความดันโลหิต และการเผาผลาญ</p>
          <p>•&ensp;กรดคลอโรเจนิกจะถูกดูดซึมเข้ากระแสเลือดช้ากว่าคาเฟอีน</p>
          <p>•&ensp;กรดคลอโรเจนิกจะออกฤทธิ์ต้านอนุมูลอิสระ ช่วยชะลอวัย ป้องกันโรคเรื้อรัง ต้านการอักเสบ</p>
        </div>
        
        <div className="title11">
          <p>แหล่งที่มา</p>
        </div>
        <div className="title-content">
          <p>กาแฟอาราบิก้าเป็นกาแฟชนิดพิเศษที่ปลูกในมาเลเซีย กาแฟชนิดนี้ขึ้นชื่อในเรื่องรสชาติที่กลมกล่อมและกลิ่นหอมอันเป็นเอกลักษณ์ กาแฟอาราบิก้าของมาเลเซียปลูกในพื้นที่สูงของประเทศ โดยใช้ภูมิอากาศที่เย็นสบายและฝนตกชุกเพื่อสร้างเมล็ดกาแฟที่มีคุณภาพสูง</p>
        </div>

        <div className="productimage9">
          <img
            src="image/ไฟเบอร์จากน้ำมันมะพร้าว-Non-Dairy-Creamer_0.jpg"
            alt="product"
            className="productimage9"
          />
        </div>

        <div className="title11">
          <p>ไฟเบอร์ครีมจากน้ำมันมะพร้าว : Non Dairy Creamer (นำเข้าจากมาเลเซีย)</p>
          <p>หลักการทำงาน</p>
        </div>
        <div className="title-content">
          <p>ไฟเบอร์ครีมจากน้ำมันมะพร้าว มีความสามารถในการดูดซับน้ำสูง จึงช่วยทำให้เครื่องดื่มมีความข้นหนืด และช่วยให้อิ่มท้องได้นานขึ้น นอกจากนี้ ใยอาหารจากพืชตระกูลถั่วยังมีคุณสมบัติในการช่วยควบคุมระดับน้ำตาลในเลือด และลดความเสี่ยงในการเกิดโรคหัวใจและหลอดเลือดอีกด้วย</p>
          <p>ช่วยให้อิ่มนาน ใยอาหารมีคุณสมบัติในการดูดซับน้ำและทำให้กระเพาะอาหารขยายตัว ทำให้รู้สึกอิ่มนานขึ้น ไฟเบอร์ครีม จึงช่วยลดความอยากอาหารและรับประทานอาหารได้น้อยลง ช่วยลดการดูดซึมไขมัน ไฟเบอร์ครีมสามารถช่วยดักจับไขมันในทางเดินอาหาร ทำให้ไขมันไม่ถูกดูดซึมเข้าสู่ร่างกาย ส่งผลให้ร่างกายได้รับไขมันน้อยลง</p>
        </div>
        
        <div className="title11">
          <p>แหล่งที่มา</p>
        </div>
        <div className="title-content">
          <p>ไฟเบอร์ครีมจากน้ำมันมะพร้าวเป็นผลิตภัณฑ์ที่ผลิตจากน้ำมันมะพร้าวโดยเฉพาะ มีลักษณะเป็นผงสีขาว ละลายน้ำได้  ใช้ทำอาหารและเครื่องดื่มได้หลากหลาย ไฟเบอร์ครีมจากน้ำมันมะพร้าวจากมาเลเซียมีคุณภาพสูง </p>
        </div>

        <div className="productimage10">
          <img
            src="image/ผงว่านหางจระเข้_0.jpg"
            alt="product"
            className="productimage10"
          />
        </div>

        <div className="title11">
          <p>ผงว่านหางจระเข้ : Aloe Powder</p>
          <p>หลักการทำงาน</p>
        </div>
        <div className="title-content">
          <p>1. ต้านการอักเสบ: ว่านหางจระเข้มีสารอะโลอิน (Aloin) กรดอะซิติกซาลิไซลิก (Acetic Salicylic Acid) และกรดซินนามิก (Cinnamic Acid) ที่ช่วยลดการอักเสบ ช่วยให้แผลหายเร็ว บรรเทาอาการปวดแสบร้อน และลดอาการบวม</p>
          <p>2. กระตุ้นการสร้างคอลลาเจน: ว่านหางจระเข้มีสารไกลโคไซด์ (Glycosides) กรดอะมิโน (Amino Acids) และวิตามินซี (Vitamin C) ที่ช่วยกระตุ้นการสร้างคอลลาเจน ช่วยให้ผิวหนังยืดหยุ่น ชะลอวัย และลดเลือนริ้วรอย</p>
          <p>3. กักเก็บความชุ่มชื้น: ว่านหางจระเข้มีสารโพลีแซ็กคาไรด์ (Polysaccharides) กรดไฮยาลูโรนิก (Hyaluronic Acid) และน้ำตาล (Sugars) ที่ช่วยกักเก็บความชุ่มชื้น ช่วยให้ผิวหนังชุ่มฉ่ำ อิ่มน้ำ และลดความแห้งกร้าน</p>
          <p>4. ต้านอนุมูลอิสระ: ว่านหางจระเข้มีวิตามินเอ (Vitamin A) วิตามินซี (Vitamin C) วิตามินอี (Vitamin E) และเบต้าแคโรทีน (Beta Carotene) ที่ช่วยต้านอนุมูลอิสระ ชะลอวัย ปกป้องผิวจากแสงแดด และลดเลือนริ้วรอย</p>
          <p>5. ยับยั้งแบคทีเรีย: ว่านหางจระเข้มีสารอะโลอิน (Aloin) กรดซาลิไซลิก (Salicylic Acid) และน้ำมันหอมระเหย (Essential Oils) ที่ช่วยยับยั้งแบคทีเรีย ป้องกันการติดเชื้อ และลดการเกิดสิว</p>
          <p>6. สมานแผล: ว่านหางจระเข้มีสารอะโลอิน (Aloin) กรดซาลิไซลิก (Salicylic Acid) และกรดซินนามิก (Cinnamic Acid) ที่ช่วยสมานแผล กระตุ้นการสร้างเนื้อเยื่อใหม่ และลดรอยแผลเป็น</p>
          <p>7. บำรุงเส้นผม: ว่านหางจระเข้มีวิตามินบี (Vitamin B) วิตามินซี (Vitamin C) กรดอะมิโน (Amino Acids) และแร่ธาตุ (Minerals) ที่ช่วยบำรุงเส้นผม ช่วยให้ผมแข็งแรง เงางาม ลดการขาดร่วง และกระตุ้นการงอกใหม่</p>
          <p>8. บำรุงสุขภาพช่องปาก: ว่านหางจระเข้มีสารอะโลอิน (Aloin) กรดซาลิไซลิก (Salicylic Acid) และน้ำมันหอมระเหย (Essential Oils) ที่ช่วยลดการอักเสบ ยับยั้งแบคทีเรีย และลดการสะสมของคราบพลัค ช่วยให้เหงือกและฟันแข็งแรง</p>
        </div>
        
        <div className="title11">
          <p>แหล่งที่มา</p>
        </div>
        <div className="title-content">
          <p>ผงว่านหางจระเข้ทำมาจากเนื้อวุ้นของใบว่านหางจระเข้ ซึ่งเป็นพืชอวบน้ำที่มีใบหนาและแหลมคม ใบมีวุ้นใสที่อุดมไปด้วยวิตามิน แร่ธาตุ และสารต้านอนุมูลอิสระ วุ้นจะถูกเก็บเกี่ยวจากใบแล้วนำไปแปรรูปเป็นผง</p>
        </div>

        <div className="productimage11">
          <img
            src="image/สารสกัดจากชาเขียว_0.jpg"
            alt="product"
            className="productimage11"
          />
        </div>

        <div className="title11">
          <p>สารสกัดจากชาเขียว : Green Tea Extract (นำเข้าจากอเมริกา)</p>
          <p>หลักการทำงาน</p>
        </div>
        <div className="title-content">
          <p>1. ยับยั้งการทำงานของเอนไซม์ ATP-citrate lyase ซึ่งเป็นเอนไซม์ที่ทำหน้าที่เปลี่ยนกลูโคสจากคาร์โบไฮเดรตให้กลายเป็นไขมันสะสมในร่างกาย ส่งผลให้ร่างกายไม่สามารถเปลี่ยนกลูโคสไปเป็นไขมันสะสมได้ จึงช่วยลดการสะสมของไขมันและช่วยลดน้ำหนักได้</p>
          <p>2. เพิ่มระดับสารเคมีในสมองอย่างเซโรโทนิน (Serotonin) ซึ่งทำหน้าที่ควบคุมความอยากอาหาร ส่งผลให้รู้สึกอิ่มเร็วขึ้น และช่วยลดความอยากอาหารได้</p>
          <p>3. เพิ่มการเผาผลาญไขมัน ส่งผลให้ร่างกายเผาผลาญพลังงานมากขึ้น และช่วยลดน้ำหนักได้</p>
        </div>
        
        <div className="title11">
          <p>แหล่งที่มา</p>
        </div>
        <div className="title-content">
          <p>ชาเขียวที่ปลูกในอเมริกามักมาจากรัฐทางตะวันตกเฉียงใต้ เช่น แคลิฟอร์เนีย ออริกอน และวอชิงตัน ชาเขียวอเมริกา typically มีรสชาติที่เข้มข้นกว่าชาเขียวจากเอเชีย</p>
        </div>

        <div className="productimage12">
          <img
            src="image/น้ำมัน-Mct-ชนิดผง.jpg"
            alt="product"
            className="productimage12"
          />
        </div>

        <div className="title11">
          <p>น้ำมันเอ็มซีทีชนิดผง : Mct Oil Powder (นำเข้าจากมาเลเซีย)</p>
          <p>หลักการทำงาน</p>
        </div>
        <div className="title-content">
         <p>1. เพิ่มพลังงาน : น้ำมันเอ็มซีทีถูกเปลี่ยนเป็นคีโตนโดยตับ คีโตนเป็นแหล่งพลังงานหลักของสมองและกล้ามเนื้อ ช่วยให้ร่างกายรู้สึกมีพลังงาน</p>
         <p>2. ควบคุมน้ำหนัก : น้ำมันเอ็มซีทีช่วยกระตุ้นฮอร์โมน GLP-1 ที่ช่วยให้อิ่มนาน ลดความอยากอาหาร ส่งผลให้น้ำหนักตัวลดลง</p>
         <p>3. เร่งเผาผลาญไขมัน : น้ำมันเอ็มซีทีช่วยกระตุ้นการเผาผลาญไขมันสะสมในร่างกาย</p>
         <p>4. เพิ่มการทำงานของสมอง : น้ำมันเอ็มซีทีช่วยเพิ่มระดับคีโตนในเลือด ส่งผลดีต่อการทำงานของสมอง ความจำ และการจดจำ</p>
         <p>5. เสริมสร้างระบบย่อยอาหาร : น้ำมันเอ็มซีทีช่วยดูดซึมวิตามินและแร่ธาตุ</p>
         <p>6. ต้านเชื้อแบคทีเรียและเชื้อรา : น้ำมันเอ็มซีทีมีคุณสมบัติต้านจุลชีพ</p>
         <p>7. บำรุงสุขภาพหัวใจ : น้ำมันเอ็มซีทีช่วยเพิ่มระดับ HDL (ไขมันดี) และลดระดับ LDL (ไขมันเลว)</p>
        </div>
        
        <div className="title11">
          <p>แหล่งที่มา</p>
        </div>
        <div className="title-content">
          <p>น้ำมันเอ็มซีที (MCT Oil) ชนิดผงจากมาเลเซีย เป็นผลิตภัณฑ์ที่ได้จากการแปรรูปน้ำมันมะพร้าวหรือน้ำมันปาล์ม โดยผ่านกระบวนการทางเคมีเพื่อสกัดกรดไขมันสายปานกลาง (Medium-chain triglycerides) ออกมา น้ำมันเอ็มซีทีชนิดผงมีลักษณะเป็นผงสีขาว ละลายน้ำได้ง่าย มีจุดเด่นคือ ย่อยง่าย ดูดซึมเร็ว เผาผลาญเป็นพลังงานได้รวดเร็ว</p>
        </div>

        <div className="title12">
          <p>nano<span className='title13'>X2</span></p>
        </div>

        <div className="title14">
          <p>กาแฟนาโนเอ็กซ์ทู</p>
        </div>

          <div className="title9">
            <p>กาแฟปรุงสำเร็จชนิดผง</p>
            <p>ปรับสมดุลระบบขับถ่าย คุมหิว ไม่ปวดบิด รสชาติเข้มข้น </p>
            <p>เมล็ดกาแฟอาราบิก้าแท้จากประเทศมาเลเซีย </p>
            <p>1 ซองให้พลังงานแค่ 70 กิโลแคลอรี่</p>
            <p>❌ 0% คอเลสเตอรอล</p>
            <p>❌ 0% ไขมันทรานส์</p>
            <p>ปรับสมดุลในลำไส้ ให้ทำงานได้ปกติ</p>
            <p>เพิ่มประสิทธิภาพการทำงานของระบบทางเดินอาหาร</p>
            <p>ช่วยในการเผาผลาญไขมัน และแคลอรี่</p>
            <p>คุมหิว อิ่มนาน 8 ชั่วโมง</p>
            <p>เลขจดแจ้ง : 13-2-02660-6-0052</p>
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

          <div className="Testtheproduct">
          เครื่องหมายการค้า 
          </div>
          <div className="imagereview11">
            <img
              src="image/CFA Trademark.webp"
              alt="standards3"
            />
          </div>
          <div className="imagereview12">
            <img
              src="image/เครื่องหมายการค้า.png"
              alt="standards3"
            />
          </div>

          

          <div className="Testtheproduct">
          มาตรฐาน อย. 
          </div>

          <div className="imagereview7">
            <img
              src="image/Picture6.webp"
              alt="standards4"
            />
          </div>
          
          <div className="Testtheproduct">
          ผลิตในโรงงานที่ได้มาตรฐานสากล
          </div>

          <div className="imagereview8">
            <img
              src="image/โรงงาน.webp"
              alt="standards5"
            />
          </div>

          <div className="imagereview9">
            <img
              src="image/โรงงาน1.webp"
              alt="standards6"
            />
          </div>

          <div className="imagereview10">
            <img
              src="image/โรงงาน2.webp"
              alt="standards7"
            />
          </div>

          <div className="review-heading">
            รีวิว 
          </div>

          <div className="imagereview2">
            <img
              src="image/S__7692296_0.jpg"
              alt="review2"
            />
          </div>

          <div className="imagereview3">
            <img
              src="image/S__7692298_0.jpg"
              alt="review3"
            />
          </div>

          <div className="imagereview4">
            <img
              src="image/S__7692299_0.jpg"
              alt="review4"
            />
          </div>
          
          <div className="small-heading">
            nano<span className='small-heading1'>X2</span>
          </div>
        </div>
    </>
  );
};
