<template>
  <div class="flex justify-between divide-x-2 mt-5">
    <div
      class="flex flex-col p-4 pl-0 pr-12 gap-4 grow text-[#8990AD] text-sm tracking-wide"
    >
      BALANCE
      <div class="text-black text-2xl font-medium">$5900.00</div>
    </div>
    <div class="flex flex-col p-4 gap-4 grow text-left text-[#8990AD] px-16">
      PROFITS
      <div class="flex gap-6 justify-start text-black text-2xl font-medium">
        $950.00
        <div
          class="flex gap-2 text-[#0F77FA] text-xs justify-center items-center"
        >
          <div
            class="border-solid border-b-[#0F77FA] border-b-8 border-x-transparent border-x-8 border-t-0"
          ></div>
          +56%
        </div>
      </div>
    </div>
    <div class="flex flex-col p-4 gap-4 grow text-left text-[#8990AD] px-16">
      LOSSES
      <div class="flex gap-6 justify-start text-black text-2xl font-medium">
        $450.00
        <div
          class="flex gap-2 text-[#FF4B75] text-xs justify-center items-center"
        >
          <div
            class="border-solid border-t-[#FF4B75] border-t-8 border-x-transparent border-x-8 border-b-0"
          ></div>
          +56%
        </div>
      </div>
    </div>
    <div class="flex flex-col p-4 gap-4 grow text-left text-[#8990AD] px-16">
      CURRENCIES
      <div class="flex gap-2">
        <div class="rounded-full bg-[#00000017] p-2">
          <svg
            id="bitcoin-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 13.5 21.215"
            class="w-4 h-4"
          >
            <path
              id="Path_17"
              data-name="Path 17"
              d="M19.709,10.9A4.33,4.33,0,0,0,16.75,3.957V2.482A.482.482,0,0,0,16.268,2H15.3a.482.482,0,0,0-.482.482V3.929H13.375V2.482A.482.482,0,0,0,12.893,2h-.964a.482.482,0,0,0-.482.482V3.929h-.964A.482.482,0,0,0,10,4.411V20.8a.482.482,0,0,0,.482.482h.964v1.446a.482.482,0,0,0,.482.482h.964a.482.482,0,0,0,.482-.482V21.286h1.446v1.446a.482.482,0,0,0,.482.482h.964a.482.482,0,0,0,.482-.482V21.286h1.292A5.406,5.406,0,0,0,23.475,16.5,5.309,5.309,0,0,0,19.709,10.9ZM11.929,5.857h4.339a2.411,2.411,0,1,1,0,4.822H11.929Zm6.268,13.5H11.929v-6.75H18.2a3.375,3.375,0,0,1,0,6.75Z"
              transform="translate(-10 -2)"
              fill="#2464fc"
            />
          </svg>
        </div>

        <div class="rounded-full bg-[#00000017] p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 13.656 23"
            class="w-4 h-4"
          >
            <g id="currency-dollar" transform="translate(1.342 0.786)">
              <line
                id="Line_11"
                data-name="Line 11"
                y2="21"
                transform="translate(5.302 0.214)"
                fill="none"
                stroke="#2464fc"
                stroke-linecap="square"
                stroke-width="2"
              />
              <path
                id="Path_18"
                data-name="Path 18"
                d="M26.254,8.7a13.476,13.476,0,0,0-4.6-.707C19.218,7.995,16,9.055,16,11.884c0,5.3,11.315,2.852,11.315,8.486,0,2.8-2.779,3.889-5.657,3.889A13.657,13.657,0,0,1,16,23.2"
                transform="translate(-16 -5.873)"
                fill="none"
                stroke="#2464fc"
                stroke-linecap="square"
                stroke-width="2"
              />
            </g>
          </svg>
        </div>
        <div class="rounded-full bg-[#00000017] p-2">
          <svg
            id="currency-euro"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18.632 21.209"
            class="w-4 h-4"
          >
            <path
              id="Path_19"
              data-name="Path 19"
              d="M18.477,19.721a6.657,6.657,0,0,1-4.284,1.357,6.67,6.67,0,0,1-6.786-5.655h6.609V14.009H7.188c-.041-.443-.064-.914-.064-1.414s.022-.97.064-1.414h6.828V9.768H7.407a6.67,6.67,0,0,1,6.786-5.655,6.635,6.635,0,0,1,4.282,1.365l.825.665,1.331-1.651-.826-.666a8.7,8.7,0,0,0-5.613-1.834c-5.5,0-8.118,3.75-8.915,7.775H2v1.414H5.072C5.026,11.657,5,12.129,5,12.6s.022.939.068,1.414H2v1.414H5.278c.8,4.025,3.419,7.775,8.915,7.775A8.715,8.715,0,0,0,19.8,21.374l.827-.664L19.3,19.056Z"
              transform="translate(-2 -1.988)"
              fill="#2464fc"
            />
          </svg>
        </div>
        <div class="rounded-full bg-[#00000017] p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14.64 20.161"
            class="w-4 h-4"
          >
            <g id="currency-yen" transform="translate(1.4 1.4)">
              <path
                id="Path_20"
                data-name="Path 20"
                d="M14,6l5.92,7.894L25.84,6"
                transform="translate(-14 -6)"
                fill="none"
                stroke="#2464fc"
                stroke-linecap="square"
                stroke-width="2"
              />
              <line
                id="Line_12"
                data-name="Line 12"
                y2="9.688"
                transform="translate(5.786 8.073)"
                fill="none"
                stroke="#2464fc"
                stroke-linecap="square"
                stroke-width="2"
              />
              <line
                id="Line_13"
                data-name="Line 13"
                x2="10.495"
                transform="translate(0.538 8.073)"
                fill="none"
                stroke="#2464fc"
                stroke-linecap="square"
                stroke-width="2"
              />
              <line
                id="Line_14"
                data-name="Line 14"
                x2="10.495"
                transform="translate(0.538 12.11)"
                fill="none"
                stroke="#2464fc"
                stroke-linecap="square"
                stroke-width="2"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoardSummary",
};
</script>
