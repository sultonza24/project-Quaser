<template>
  <!-- star inbox -->
    <div class="q-pa-md">
    <div class="row items-start q-gutter-md">
        <div class="rounded-borders bg-blue-3 text-white ">
            <h4 id="d4">The best charecter</h4>
            <!-- รูปภาพ -->
            <q-img id="d3" class="center" src="https://my-live-05.slatic.net/p/fac7753b31abc83596a3e49fcb40e9c0.jpg_2200x2200q80.jpg_.webp"></q-img>
            <h6 id="d2" >1. donquixote doflamingo</h6>
            <!-- ข้อความต่างๆ -->
            <p id="d1">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ดองกี้โฮเต้ โดฟลามิงโก้ ฉายา ปีศาจสวรรค์ หรือที่เรียกโดยสมาชิกกลุ่มว่า ดอฟฟี่ เป็นกัปตันของกลุ่มโจรสลัดดองกิโฮเต้ และเป็นอดีตเจ็ดเทพโจรสลัด เขาเป็นผู้ทรงอิทธิพลที่สุดในโลกใต้ดิน โดยใช้นามแฝงว่า โจ๊กเกอร์ และยังเป็นอดีตเผ่ามังกรฟ้าจากตระกูลดองกิโฮเต้ ปัจจุบันเขาถูกคุมขังอยู่ในเรือนจำอิมเพลดาวน์</p>
            
            <!-- รูปภาพ -->
            <q-img id="d3" class="center" src="https://img.joomcdn.net/67e00eae05e523ea825340349ab79c751f9d5b33_original.jpeg"></q-img>
            <h6 id="d2" >2. Dracule Mihawk</h6>
            <!-- ข้อความต่างๆ -->
            <p id="d1">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;แดรคูล มิฮอว์ค สมญา ตาเหยี่ยว เป็นหนึ่งในเจ็ดเทพโจรสลัด และเป็นเจ็ดเทพโจรสลัดคนแรกที่ปรากฎตัวในเนื้อเรื่อง
            มิฮอว์คยังมีฉายาว่า นักดาบมือหนึ่งของโลก เขาเป็นอาจารย์ให้กับโรโรโนอา โซโร ในช่วง 2 ปีหลังยุทธการมารีนฟอร์ด
            </p>
            
            <!-- รูปภาพ -->
            <q-img id="d3" class="center" src="data:image/jpeg;base64,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"></q-img>
            <h6 id="d2" >3. Roronoa Zoro</h6>
            <!-- ข้อความต่างๆ -->
            <p id="d1">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;โซโรเป็นเด็กที่เรียนอยู่ในโรงเรียนสอนวิชาดาบโซโรเป็นคนที่เรียนวิชา2ดาบเก่งมากแต่ก้ยังสามารถเทียบเท่าคุอินะลูกสาวเจ้าของโรงฝึกโซโรแพ้คุอินะมากว่า2000ครั้งโซโรจึงบอกให้คุอินะสัญญาว่าไม่คุอินะก็โซโรที่จะเป็นนักดาบอันดับ1ของโลกแต่พอมาอีกวันนึงโซโรก็ได้ทราบข่าวร้ายว่าคุอินะเสียชีวิตเพราะเกิดอุบัติเหตุจากการตกบันไดบ้านจนเสียชีวิตโซโรจึงขอรับดาบของคุอินะและสัญญาว่าจะเป็นนักดาบอันดับ1ของโลกแล้วโซโรก็เริ่มออกทะเลไล่ล่าค่าหัวโจรสลัดจนได้ชื่อว่า นักล่าโจรสลัด
            </p>

        </div>
    </div>
  </div>
  <!-- ข้อความต่างๆ -->
</template>

<script>

export default {

}
</script>

<style scoped>
#d1{
    margin-top: 3 px;
    margin-left: 20px;
    margin-right: 20px;
}

#d2{
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 17px;
}
#d3{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    width: 300px;
    height: 300px;
}
#d4{
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: center;
}
</style>