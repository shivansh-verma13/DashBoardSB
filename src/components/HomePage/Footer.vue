<template>
  <div id="contact" class="footer h-screen relative">
    <div
      class="form h-screen w-full flex flex-row-reverse p-auto m-auto mb-0 pb-0"
    >
      <div class="w-1/2">
        <form
          class="shadow-lg shadow-[#0E77FF] p-16 pb-10 mt-[-2%] flex flex-col gap-4 max-w-md max-h-md z-2"
        >
          <h2 class="text-2xl font-bold py-4">Send Us message</h2>
          <input placeholder="Your Email*" type="email" required />
          <input placeholder="Your Name*" type="text" required />
          <input placeholder="Phone Number*" type="number" required />
          <input placeholder="Subject" type="text" />
          <textarea type="text" rows="3" placeholder="Your Message"></textarea>
          <div class="flex gap-4">
            <input id="agree" type="checkbox" class="w-8 h-6"/>
            <label for="agree" class="text-xs font-semibold"
              >By sending this message, you confirm that you have read and
              agreed to our privacy-policy.</label
            >
          </div>
          <button class="bg-[#0E77FF] rounded-full self-start px-6 py-3 text-white">Get Started »</button>
        </form>
      </div>
    </div>
    <footer class="absolute -bottom-10 w-full py-5 text-xs mt-5 bg-[#0E77FF]">
      <div class="w-full flex justify-evenly items-center text-white">
        <div class="max-w-sm">
          Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse
          cillum dolore e uis nostrud exercitation isi ut aliquip ex ea commodo
          consequat.
          <div class="flex gap-2 mt-5">
            <img class="w-8 h-8 cursor-pointer" src="../../assets/Group 34322.png" />
            <img class="w-8 h-8 cursor-pointer" src="../../assets/Group 34323.png" />
            <div class="rounded-full p-2 border-2 border-white cursor-pointer">
              <img class="instagram w-3 h-3" src="../../assets/instagram.png" />
            </div>
          </div>
        </div>
        <div class="links flex flex-col gap-2">
          <h1 class="font-bold">Our Services</h1>
          <p class="border-b-4 border-[#21B3FF] w-1/4 pb-2 mb-2"></p>
          <p>Web Development</p>
          <p>Mobile Development</p>
          <p>Cloud Technology</p>
          <p>UI/UX Design</p>
        </div>
        <div class="links flex flex-col gap-2">
          <h1 class="font-bold">Our Links</h1>
          <p class="border-b-4 border-[#21B3FF] w-1/4 pb-2 mb-2"></p>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>Imprint</p>
          <p>Legal</p>
        </div>
        <div class="flex flex-col gap-2">
          <h1 class="font-bold">Contact US</h1>
          <p class="border-b-4 border-[#21B3FF] w-1/12 pb-2 mb-2"></p>
          <p class="flex gap-2 justify-start items-center max-w-56">
            <img class="w-4 h-6" src="../../assets/Path 36465.png" />Al. Dummyodl
            124/23 floor 123 Banswara Street, 02-577 India.
          </p>
          <p class="flex gap-2 justify-start items-center">
            <img class="w-6 h-6" src="../../assets/Group 35689.png" />00 1800 245
            453
          </p>
          <p class="flex gap-2 justify-start items-center">
            <img
              class="w-6 h-4"
              src="../../assets/Group 35688.png"
            />hello@inkyy.com
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Foot",
};
</script>

<style scoped>
.form {
  background-image: url("../../assets/Group 35686.png");
  background-size: 80vh; /* Ensures the image scales proportionally */
  background-repeat: no-repeat;
  background-position: 1% 14%;
}

.footer {
  background-image: url("../../assets/Path 37456.png");
  background-size: cover; /* Ensures the image scales proportionally */
  background-repeat: no-repeat;
  background-position: -10% center;
  z-index: 0;
}

.links>p {
  cursor: pointer;
  font-weight: 200;
}

form {
  background: #fffffff2;
  z-index: 2;
  position: relative;
}

form > input,
textarea {
  padding: 6px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
}
input:focus,
textarea:focus {
  outline: none;
}
textarea {
  resize: none;
}

::placeholder {
  color: #000;
  font-size: 12px;
  font-weight: 600;
}

textarea::placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
