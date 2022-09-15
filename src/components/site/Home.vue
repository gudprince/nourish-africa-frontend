<template>
  <main :class="{ 'mt-n8': $vuetify.breakpoint.smAndDown }">
    <v-container
      style="background: "
      class="grey lighten-3 rounded-lg mt-6 mb-10"
    >
      <v-row
        class="px-8"
        :class="{ 'text-center pt-4': $vuetify.breakpoint.smAndDown }"
      >
        <v-col cols="12" sm="6" class="mt-md-n8 mb-sm-4">
          <div
            :class="{
              'mt-16': $vuetify.breakpoint.mdAndUp,
              'mr-16': $vuetify.breakpoint.mdAndUp,
            }"
          >
            <h1>Buy, Rent or Sell your Property with Ease</h1>
            <p>
              Search, list and find your perfect home with us as your trusted
              source of homes for sales and rent
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div>
            <img
              class="mt-n8"
              :height="$vuetify.breakpoint.smAndDown ? 200 : '400'"
              src="../../assets/images/hero-image.png"
            />
          </div>
        </v-col>
      </v-row>
      <home-search-desktop />
      <home-search-mobile />
    </v-container>
    <Partners />
    <Slider />
    <v-container
      class="mx-auto"
      :class="{ 'mt-n14': $vuetify.breakpoint.smAndDown }"
    >
      <div class="text-center mt-10">
        <p>OUR SERVICES</p>
        <h1 class="mt-n4">How HouseFinder Can Help</h1>
      </div>
      <v-row class="py-10">
        <v-col cols="6" sm="3">
          <div
            style=" border: 1px solid #E0E0E0"
            class="mx-auto rounded-lg"
            max-width="344"
            :class="{ 'py-10': $vuetify.breakpoint.mdAndUp }"
          >
            <v-card-text>
              <div class="text-center">
                <svg
                  :width="$vuetify.breakpoint.smAndDown ? '80' : '120'"
                  class="text-center"
                  :height="$vuetify.breakpoint.smAndDown ? '80' : '120'"
                  viewBox="0 0 99 99"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_0_1)">
                    <circle cx="49.5" cy="46.5" r="39.5" fill="white" />
                  </g>
                  <path
                    d="M36.5 61.5833H61.5V41.0771L49 29.7146L36.5 41.0771V61.5833ZM63.5833 65.75H34.4167C33.8641 65.75 33.3342 65.5305 32.9435 65.1398C32.5528 64.7491 32.3333 64.2192 32.3333 63.6667V44.9167H26.0833L47.5979 25.3583C47.9815 25.0093 48.4814 24.8159 49 24.8159C49.5186 24.8159 50.0185 25.0093 50.4021 25.3583L71.9167 44.9167H65.6667V63.6667C65.6667 64.2192 65.4472 64.7491 65.0565 65.1398C64.6658 65.5305 64.1359 65.75 63.5833 65.75ZM39.625 49.0833H43.7917C43.7917 50.4647 44.3404 51.7894 45.3172 52.7662C46.2939 53.7429 47.6187 54.2917 49 54.2917C50.3813 54.2917 51.7061 53.7429 52.6829 52.7662C53.6596 51.7894 54.2083 50.4647 54.2083 49.0833H58.375C58.375 51.5697 57.3873 53.9543 55.6291 55.7125C53.871 57.4706 51.4864 58.4583 49 58.4583C46.5136 58.4583 44.129 57.4706 42.3709 55.7125C40.6127 53.9543 39.625 51.5697 39.625 49.0833V49.0833Z"
                    fill="#1E1C23"
                  />
                  <g clip-path="url(#clip0_0_1)">
                    <path
                      d="M55.25 49.25L51.75 45.75L55.25 49.25ZM52.9167 42.8333C52.9167 43.3696 52.811 43.9005 52.6058 44.396C52.4006 44.8914 52.0999 45.3415 51.7207 45.7207C51.3415 46.0999 50.8914 46.4006 50.396 46.6058C49.9005 46.811 49.3696 46.9167 48.8333 46.9167C48.2971 46.9167 47.7661 46.811 47.2707 46.6058C46.7753 46.4006 46.3252 46.0999 45.946 45.7207C45.5668 45.3415 45.266 44.8914 45.0608 44.396C44.8556 43.9005 44.75 43.3696 44.75 42.8333C44.75 41.7504 45.1802 40.7118 45.946 39.946C46.7118 39.1802 47.7504 38.75 48.8333 38.75C49.9163 38.75 50.9549 39.1802 51.7207 39.946C52.4865 40.7118 52.9167 41.7504 52.9167 42.8333Z"
                      stroke="#0062DF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_0_1"
                      x="0"
                      y="0"
                      width="99"
                      height="99"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="3" />
                      <feGaussianBlur stdDeviation="5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_1"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_1"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_0_1">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(42 38)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div
                class="text-md-body-1 text-center font-weight-bold text--grey"
              >
                Buy your Dream Home
              </div>
            </v-card-text>
          </div>
        </v-col>
        <v-col cols="6" sm="3">
          <div
            style=" border: 1px solid #E0E0E0"
            class="mx-auto rounded-lg"
            max-width="344"
            :class="{ 'py-10': $vuetify.breakpoint.mdAndUp }"
          >
            <v-card-text>
              <div class="text-center">
                <svg
                  class="text-center"
                  :height="$vuetify.breakpoint.smAndDown ? '80' : '120'"
                  :width="$vuetify.breakpoint.smAndDown ? '80' : '120'"
                  viewBox="0 0 99 99"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_0_1)">
                    <circle cx="49.5" cy="46.5" r="39.5" fill="#0062DF" />
                  </g>
                  <path
                    d="M63.5833 63.75H34.4167C33.8641 63.75 33.3342 63.5305 32.9435 63.1398C32.5528 62.7491 32.3333 62.2192 32.3333 61.6667V42.9167H26.0833L47.5979 23.3583C47.9815 23.0093 48.4814 22.8159 49 22.8159C49.5186 22.8159 50.0185 23.0093 50.4021 23.3583L71.9167 42.9167H65.6667V61.6667C65.6667 62.2192 65.4472 62.7491 65.0565 63.1398C64.6658 63.5305 64.1359 63.75 63.5833 63.75ZM36.5 59.5833H61.5V39.0771L49 27.7146L36.5 39.0771V59.5833ZM40.6667 51.25H57.3333V55.4167H40.6667V51.25Z"
                    fill="white"
                  />
                  <path
                    d="M54.1381 40.0753H53.1953V36.0909H51.2298V40.0753H48.7528L45.9989 36.0909H44.2305V40.0753H43.2717V41.1406H44.2305V42.3764H43.2717V43.4418H44.2305V47H46.2067V43.4418H48.9766L51.4375 47H53.1953V43.4418H54.1381V42.3764H53.1953V41.1406H54.1381V40.0753ZM47.3839 41.1406L48.2415 42.3764H46.2067V41.1406H47.3839ZM51.2298 41.1406V42.3764H50.3402L49.4879 41.1406H51.2298ZM46.2067 40.0753V39.5692H46.2972L46.6488 40.0753H46.2067ZM51.0753 43.4418H51.2298V43.527H51.1339L51.0753 43.4418Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_d_0_1"
                      x="0"
                      y="0"
                      width="99"
                      height="99"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="3" />
                      <feGaussianBlur stdDeviation="5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_1"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_1"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div
                class="text-md-body-1 text-center font-weight-bold text--grey"
              >
                Easily Sell your Home
              </div>
            </v-card-text>
          </div>
        </v-col>
        <v-col cols="6" sm="3">
          <div
            style=" border: 1px solid #E0E0E0"
            class="mx-auto rounded-lg"
            max-width="344"
            :class="{ 'py-10': $vuetify.breakpoint.mdAndUp }"
          >
            <v-card-text>
              <div class="text-center">
                <svg
                  :width="$vuetify.breakpoint.smAndDown ? '80' : '120'"
                  class="text-center"
                  :height="$vuetify.breakpoint.smAndDown ? '80' : '120'"
                  viewBox="0 0 99 99"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_0_1)">
                    <circle cx="49.5" cy="46.5" r="39.5" fill="white" />
                  </g>
                  <path
                    d="M36.5 61.5833H61.5V41.0771L49 29.7146L36.5 41.0771V61.5833ZM63.5833 65.75H34.4167C33.8641 65.75 33.3342 65.5305 32.9435 65.1398C32.5528 64.7491 32.3333 64.2192 32.3333 63.6667V44.9167H26.0833L47.5979 25.3583C47.9815 25.0093 48.4814 24.8159 49 24.8159C49.5186 24.8159 50.0185 25.0093 50.4021 25.3583L71.9167 44.9167H65.6667V63.6667C65.6667 64.2192 65.4472 64.7491 65.0565 65.1398C64.6658 65.5305 64.1359 65.75 63.5833 65.75ZM39.625 49.0833H43.7917C43.7917 50.4647 44.3404 51.7894 45.3172 52.7662C46.2939 53.7429 47.6187 54.2917 49 54.2917C50.3813 54.2917 51.7061 53.7429 52.6829 52.7662C53.6596 51.7894 54.2083 50.4647 54.2083 49.0833H58.375C58.375 51.5697 57.3873 53.9543 55.6291 55.7125C53.871 57.4706 51.4864 58.4583 49 58.4583C46.5136 58.4583 44.129 57.4706 42.3709 55.7125C40.6127 53.9543 39.625 51.5697 39.625 49.0833V49.0833Z"
                    fill="#1E1C23"
                  />
                  <g clip-path="url(#clip0_0_1)">
                    <path
                      d="M55.25 49.25L51.75 45.75L55.25 49.25ZM52.9167 42.8333C52.9167 43.3696 52.811 43.9005 52.6058 44.396C52.4006 44.8914 52.0999 45.3415 51.7207 45.7207C51.3415 46.0999 50.8914 46.4006 50.396 46.6058C49.9005 46.811 49.3696 46.9167 48.8333 46.9167C48.2971 46.9167 47.7661 46.811 47.2707 46.6058C46.7753 46.4006 46.3252 46.0999 45.946 45.7207C45.5668 45.3415 45.266 44.8914 45.0608 44.396C44.8556 43.9005 44.75 43.3696 44.75 42.8333C44.75 41.7504 45.1802 40.7118 45.946 39.946C46.7118 39.1802 47.7504 38.75 48.8333 38.75C49.9163 38.75 50.9549 39.1802 51.7207 39.946C52.4865 40.7118 52.9167 41.7504 52.9167 42.8333Z"
                      stroke="#0062DF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_0_1"
                      x="0"
                      y="0"
                      width="99"
                      height="99"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="3" />
                      <feGaussianBlur stdDeviation="5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_1"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_1"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_0_1">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(42 38)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div
                class="text-md-body-1 text-center font-weight-bold text--grey"
              >
                Rent your home you love
              </div>
            </v-card-text>
          </div>
        </v-col>
        <v-col cols="6" sm="3">
          <div
            style=" border: 1px solid #E0E0E0"
            class="mx-auto rounded-lg"
            max-width="344"
            :class="{ 'py-10': $vuetify.breakpoint.mdAndUp }"
          >
            <v-card-text>
              <div class="text-center">
                <svg
                  :width="$vuetify.breakpoint.smAndDown ? '80' : '120'"
                  class="text-center"
                  :height="$vuetify.breakpoint.smAndDown ? '80' : '120'"
                  viewBox="0 0 99 99"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_0_1)">
                    <circle cx="49.5" cy="46.5" r="39.5" fill="white" />
                  </g>
                  <path
                    d="M36.4253 48.0983H33.6219V50.9016H36.4253V48.0983Z"
                    fill="#0062DF"
                  />
                  <path
                    d="M41.3791 48.0983H38.5757V50.9016H41.3791V48.0983Z"
                    fill="#0062DF"
                  />
                  <path
                    d="M36.4253 53.155H33.6219V55.9584H36.4253V53.155Z"
                    fill="#0062DF"
                  />
                  <path
                    d="M41.3791 53.155H38.5757V55.9584H41.3791V53.155Z"
                    fill="#0062DF"
                  />
                  <path
                    d="M42.7396 38.256H39.9362V41.0594H42.7396V38.256Z"
                    fill="#0062DF"
                  />
                  <path
                    d="M47.6933 38.256H44.8899V41.0594H47.6933V38.256Z"
                    fill="#0062DF"
                  />
                  <path
                    d="M35.8863 35.3519V42.0148L29.4259 42.0145V62.0417L51.7226 62.042V39.9877L51.7185 29.3367L35.8863 35.3519ZM43.6701 60.137L31.3309 60.1368V43.9196L37.7913 43.9198V43.9196L43.6701 43.9198L43.6701 60.137ZM49.8136 39.9877H49.7657V60.137L44.9401 60.137V42.6498L37.7913 42.6496V36.666L49.8136 32.0983V39.9877Z"
                    fill="#0062DF"
                  />
                  <path
                    d="M60.8051 32.8646C60.9367 33.5438 61.3006 34.1561 61.8343 34.5963C62.368 35.0365 63.0383 35.2773 63.7302 35.2773C64.422 35.2773 65.0923 35.0365 65.626 34.5963C66.1597 34.1561 66.5236 33.5438 66.6552 32.8646L67.1111 30.5205C67.1715 30.0766 67.1362 29.6249 67.0075 29.1958C66.8788 28.7667 66.6598 28.37 66.3651 28.0326C66.0705 27.6951 65.707 27.4246 65.2991 27.2393C64.8913 27.0539 64.4485 26.958 64.0005 26.958H63.4599C63.0119 26.958 62.5691 27.0539 62.1612 27.2393C61.7533 27.4246 61.3899 27.6951 61.0952 28.0326C60.8005 28.37 60.5815 28.7667 60.4528 29.1958C60.3242 29.6249 60.2888 30.0766 60.3492 30.5205L60.8051 32.8646Z"
                    fill="#1E1C23"
                  />
                  <path
                    d="M73.4118 42.4678L73.3268 42.3107L72.569 40.9077L70.7058 37.4605C70.6279 37.3149 70.5312 37.1802 70.4183 37.0597C70.2597 36.8946 70.0539 36.7825 69.8291 36.7387C69.0607 36.58 66.9509 36.1478 66.4545 36.0816C66.3667 36.0698 66.2774 36.0761 66.1921 36.1001L66.1218 36.0761L64.7577 37.4402L64.0239 38.1721L63.7836 38.4143L63.7302 38.3608V38.343L63.7213 38.3519L63.7124 38.343V38.3608L63.6589 38.4143L63.4187 38.1721L62.6848 37.4401L61.3207 36.0761L61.2504 36.1001C61.1651 36.0761 61.0758 36.0698 60.988 36.0816C60.4916 36.1478 58.3819 36.58 57.6134 36.7387C57.3886 36.7825 57.1829 36.8946 57.0242 37.0597C56.9113 37.1802 56.8146 37.3149 56.7367 37.4605L54.8736 40.9077L54.1157 42.3107L54.0307 42.4678C53.9267 42.6628 53.8711 42.8799 53.8686 43.1009C53.866 43.3219 53.9165 43.5402 54.0159 43.7376L56.5593 48.7763C56.7067 49.0674 56.9588 49.292 57.2649 49.4051C57.571 49.5183 57.9085 49.5115 58.2099 49.3863C58.2954 49.3505 58.3766 49.3053 58.452 49.2513V56.8351C58.4516 57.519 58.5859 58.1963 58.8474 58.8283C59.1089 59.4602 59.4924 60.0344 59.976 60.518C60.4596 61.0016 61.0338 61.3851 61.6657 61.6466C62.2977 61.9081 62.975 62.0425 63.6589 62.042C63.6798 62.042 63.7005 62.0409 63.7213 62.0404C63.7421 62.0409 63.7627 62.042 63.7836 62.042C64.4676 62.0427 65.145 61.9086 65.7771 61.6472C66.4091 61.3857 66.9834 61.0022 67.4671 60.5186C67.9507 60.0349 68.3342 59.4606 68.5956 58.8286C68.8571 58.1965 68.9912 57.5191 68.9905 56.8351V49.2513C69.0659 49.3053 69.1471 49.3505 69.2326 49.3863C69.534 49.5115 69.8715 49.5183 70.1776 49.4051C70.4837 49.292 70.7358 49.0674 70.8833 48.7763L73.4266 43.7376C73.526 43.5402 73.5765 43.3219 73.574 43.1009C73.5714 42.8799 73.5158 42.6628 73.4118 42.4678ZM58.452 46.6248L57.0676 43.3236L58.452 41.4844V46.6248ZM68.9905 46.6248V41.4844L70.3749 43.3236L68.9905 46.6248Z"
                    fill="#1E1C23"
                  />
                  <defs>
                    <filter
                      id="filter0_d_0_1"
                      x="0"
                      y="0"
                      width="99"
                      height="99"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="3" />
                      <feGaussianBlur stdDeviation="5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_1"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_1"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div
                class="text-md-body-1 text-center font-weight-bold text--grey"
              >
                Be Partner with HouseFinder
              </div>
            </v-card-text>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row :class="{ 'mt-16': $vuetify.breakpoint.mdAndUp }">
        <v-col>
          <div
            class="text-center"
            :class="{ 'mt-n10': $vuetify.breakpoint.xsOnly }"
          >
            <img
              :height="$vuetify.breakpoint.smAndDown ? 320 : '500'"
              src="../../assets/images/hero-image-2.png"
              :class="{
                'mt-16': $vuetify.breakpoint.smOnly,
                'mt-n8': $vuetify.breakpoint.mdAndUp,
              }"
            />
          </div>
        </v-col>
        <v-col
          :class="{
            'order-first': $vuetify.breakpoint.smAndDown,
            'mt-n4': $vuetify.breakpoint.smAndDown,
            'mb-10': $vuetify.breakpoint.smAndDown,
          }"
        >
          <div>
            <p>About us</p>
            <h2 class="mb-2 mt-n2">
              Helping You To Find Any Property with Ease!
            </h2>
            <p>
              Welcome to Housefinder, We help you find any type of property all
              over Nigeria from the comfort of your home and also sell your
              property with Ease.
            </p>
            <p>
              We provide a range of properties from one bedroom,to terrace,
              Mansion, bungalow, rented apartment of any type etc. To meet your
              choice at any location.
            </p>
            <p>We are committed to making house hunting less daunting!</p>
            <router-link class="text-decoration-none " :to="{ path: `/about` }">
              <v-btn
                class=" darken-4 ma-2 white--text"
                color="#0062DF"
                @click="loader = 'loading3'"
              >
                Know More
                <v-icon right dark>
                  mdi-arrow-right
                </v-icon>
              </v-btn>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="mt-10 grey lighten-3 px-md-8 py-md-8">
      <v-container
        ><h1 class="maxWidth">
          Find Future Space at a Suitable Budget
        </h1></v-container
      >
      <category-product />
    </div>

    <v-container class="mt-10">
      <div class="text-center mb-10">
        <p>CLIENT'S REVIEWS</p>
        <h1>We Build With The Trust of Our</h1>
        <h1>Clients and Agents</h1>
      </div>
      <v-row style="max-width: 1200px; margin-left: auto; margin-right: auto">
        <v-col>
          <v-card
            style=" border: 1px solid #E0E0E0"
            class="mx-auto px-5 pt-5"
            elevation="0"
            min-height="330"
            max-width="400"
          >
            <div class="ml-3">
              <v-icon color="orange" size="20" class="mr-2">mdi-star</v-icon>
              <v-icon color="orange" size="20" class="mr-2">mdi-star</v-icon>
              <v-icon color="orange" size="20" class="mr-2">mdi-star</v-icon>
              <v-icon color="orange" size="20" class="mr-2">mdi-star</v-icon>
              <v-icon color="orange" size="20" class="mr-2">mdi-star</v-icon>
            </div>

            <v-card-text class="text-subtitle-1 ">
              "The site is really easy to navigate around. I found it really
              easy to post images of my properties without stress"
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <!-- <v-list-item-avatar color="grey darken-3">
									<v-img
										class="elevation-6"
										alt=""
										src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
									></v-img>
								</v-list-item-avatar> -->

                <v-list-item-content>
                  <v-list-item-title>- Nathan Segilola</v-list-item-title>
                  <!-- <small>MD at Skimin Therapy</small> -->
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col class="px-n16">
          <v-card
            style=" border: 1px solid #E0E0E0"
            class="mx-auto px-5 pt-5"
            elevation="0"
            min-height="330"
            max-width="400"
          >
            <div class="ml-3">
              <v-icon color="orange" size="20" class="mr-2">mdi-star</v-icon>
              <v-icon color="orange" size="20" class="mr-2">mdi-star</v-icon>
              <v-icon color="orange" size="20" class="mr-2">mdi-star</v-icon>
              <v-icon color="orange" size="20" class="mr-2">mdi-star</v-icon>
              <v-icon color="orange" size="20" class="mr-2">mdi-star</v-icon>
            </div>

            <v-card-text class="text-subtitle-1 ">
              "The Website is versatile and I'm loving it! Super easy to
              register as a seller and even easier to get rental spaces and buy
              both house and Land Properties."
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <!-- <v-list-item-avatar color="grey darken-3">
									<v-img
										class="elevation-6"
										alt=""
										src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
									></v-img>
								</v-list-item-avatar> -->

                <v-list-item-content>
                  <v-list-item-title>- Oghenefejiro</v-list-item-title>
                  <!-- <small>MD at Skimin Therapy</small> -->
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            style=" border: 1px solid #E0E0E0"
            class="mx-auto px-5 pt-5"
            elevation="0"
            min-height="330"
            max-width="400"
          >
            <div class="ml-3 mb-n2">
              <v-icon color="orange" size="20" class="mr-2">mdi-star</v-icon>
              <v-icon color="orange" size="20" class="mr-2">mdi-star</v-icon>
              <v-icon color="orange" size="20" class="mr-2">mdi-star</v-icon>
              <v-icon color="orange" size="20" class="mr-2">mdi-star</v-icon>
              <v-icon color="orange" size="20" class="mr-2">mdi-star</v-icon>
            </div>

            <v-card-text class="text-subtitle-1 ">
              "Housefinder feels safer and more credible than other platforms,
              having verified agents and scrutinizing agents before registration
              is so satisfying and reduces the tension of having to deal with
              fake property owners. At least this is the least thing to worry
              about now in Nigeria"
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <!-- <v-list-item-avatar color="grey darken-3">
									<v-img
										class="elevation-6"
										alt=""
										src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
									></v-img>
								</v-list-item-avatar> -->

                <v-list-item-content class="mt-n13">
                  <v-list-item-title>- Chukwuke Martins</v-list-item-title>
                  <!-- <small>MD at Skimin Therapy</small> -->
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-container>
      <div class="text-center mb-10 mt-10">
        <p>OUR PRICING</p>
        <h1>See our various packages to choose from</h1>
      </div>
      <div style="max-width: 1400px" class="mt-sm-16 mx-auto">
        <v-row style=" margin-left: auto; margin-right: auto">
          <v-col sm="4" md="4">
            <v-card
              flat
              outlined
              rounded="16"
              max-width="350"
              class="px-7 mx-auto py-12"
            >
              <div class="d-flex flex-row items-center">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 73 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="72"
                    height="72"
                    rx="9.5"
                    fill="white"
                    stroke="#1338BD"
                  />
                  <path
                    d="M36 46.39L25.4205 52.312L27.783 40.42L18.8805 32.188L30.921 30.76L36 19.75L41.079 30.76L53.1195 32.188L44.217 40.42L46.5795 52.312L36 46.39Z"
                    fill="#1338BD"
                  />
                </svg>

                <div class="ml-3">
                  <p class="font-weight-bold">Basic</p>
                  <p
                    class="mt-n3 headline font-weight-bold"
                    style="color: #4A425F"
                  >
                    ₦ 999.99
                    <span class="subtitle-2 font-weight-normal">/ Month</span>
                  </p>
                </div>
              </div>
              <p class="mt-4">
                Basic Offers the following features and benefits for users
              </p>
              <v-divider class="hr" width="full"></v-divider>
              <div class="mt-5">
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#0058cc">mdi-check-circle</v-icon>
                  </div>
                  <p style="color:#4A425F">Free Registration</p>
                </div>
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#0058cc">mdi-check-circle</v-icon>
                  </div>
                  <p style="color:#4A425F">3 - 5 Property Listings</p>
                </div>
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#0058cc">mdi-check-circle</v-icon>
                  </div>
                  <p style="color:#4A425F">Chat Support</p>
                </div>
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#BAB6C4">mdi-check-circle</v-icon>
                  </div>
                  <strike style="color:#BAB6C4"
                    ><p style=" color:#BAB6C4 ">
                      Priority placement on website
                    </p></strike
                  >
                </div>
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#BAB6C4">mdi-check-circle</v-icon>
                  </div>
                  <strike style="color:#BAB6C4"
                    ><p style=" color:#BAB6C4 ">
                      Top display on search results
                    </p></strike
                  >
                </div>
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#BAB6C4">mdi-check-circle</v-icon>
                  </div>
                  <strike style="color:#BAB6C4"
                    ><p style=" color:#BAB6C4 ">Featured Ads</p></strike
                  >
                </div>
              </div>
              <div class="d-flex justify-center mt-10">
                <v-btn
                  depressed
                  color="#cce2ff"
                  :class="{ 'px-10': $vuetify.breakpoint.mdAndUp }"
                  class="py-6 pricing-btn-color px-5 my-5"
                  >Choose Plan <span class="title ml-4">&#8594;</span></v-btn
                >
              </div>
            </v-card>
          </v-col>

          <v-col sm="4" md="4">
            <v-card
              elevation-0
              outlined
              rounded="16"
              max-width="350"
              style="background-color: #0062df"
              class="px-7 mx-auto py-12 mt-md-n10"
            >
              <div class="d-flex flex-row items-center">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 73 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="72"
                    height="72"
                    rx="9.5"
                    fill="#0062df"
                    stroke="white"
                  />
                  <g clip-path="url(#clip0_865_562)">
                    <path
                      d="M36.0139 22.4025C36.0093 22.4014 36.0046 22.4014 36 22.4025C35.9954 22.4025 35.9907 22.4014 35.9861 22.4014V22.4025C30.0177 22.4755 25.1815 27.3499 25.1815 33.3356C25.1815 39.3225 30.0177 44.1947 35.9861 44.2688V44.2699C35.9907 44.2699 35.9954 44.2699 36 44.2688C36.0046 44.2688 36.0093 44.2699 36.0139 44.2699V44.2688C41.9834 44.197 46.8185 39.3248 46.8185 33.3356C46.8197 27.3522 41.9834 22.4778 36.0139 22.4025Z"
                      fill="white"
                    />
                    <path
                      d="M48.8292 42.5241C49.144 42.0669 49.357 41.5842 49.4485 41.1211C49.5469 40.6338 49.5203 40.1766 49.3918 39.7842L49.3894 39.7819C49.3871 39.7737 49.3848 39.7645 49.3825 39.7575C49.3756 39.7425 49.3686 39.7263 49.3663 39.7101L49.364 39.7043C49.195 39.2228 49.1741 38.6266 49.3038 38.0131L49.298 38.0096C49.3223 37.9055 49.3478 37.8024 49.3813 37.6971C49.4739 37.417 49.5943 37.1565 49.7321 36.9204C50.2553 36.183 51.7613 35.5464 51.7613 33.244C51.7613 30.8339 49.8189 30.1811 49.4531 29.1323C49.4439 29.1092 49.4323 29.0965 49.423 29.0756C49.4033 29.0247 49.3837 28.9761 49.3663 28.924C49.1336 28.1889 49.1139 27.4597 49.3061 26.8844L49.3212 26.845C49.4462 26.4734 49.4774 26.0278 49.3964 25.5543H49.3952V25.5509C49.3848 25.4907 49.3709 25.4305 49.3582 25.3691L49.357 25.3506C49.3431 25.2962 49.3293 25.2406 49.313 25.1862L49.3003 25.1446C49.2887 25.0971 49.2725 25.0485 49.254 25.0022L49.2309 24.9397L49.1857 24.8251L49.151 24.7348L49.1163 24.6607C49.0966 24.6179 49.0781 24.5774 49.0572 24.5357L49.0468 24.516C48.9507 24.3308 48.8396 24.1479 48.7111 23.972L48.688 23.9407L48.6752 23.9245C48.3245 23.4487 47.9055 23.0795 47.4714 22.8375C47.0385 22.5933 46.5928 22.4764 46.1842 22.4799H46.1795C46.1691 22.4799 46.161 22.4799 46.1541 22.4787C46.1367 22.4799 46.1217 22.481 46.1031 22.4799H46.0962C45.588 22.4938 45.0127 22.3282 44.4698 22.0134L44.4664 22.0168C44.3772 21.9624 44.2858 21.9034 44.1978 21.8397C43.5762 21.3813 43.1352 20.8014 42.9546 20.2238L42.9407 20.1821C42.8249 19.8082 42.5888 19.4309 42.2439 19.0952V19.094C42.1999 19.05 42.1536 19.0072 42.1061 18.9678L42.0899 18.9528C42.0471 18.9169 42.0042 18.8799 41.9591 18.8451L41.9255 18.8185L41.8028 18.7294L41.7484 18.6923L41.6442 18.624L41.5632 18.5743L41.4914 18.5338C41.4509 18.5094 41.4104 18.4886 41.3699 18.4678L41.3502 18.4574C41.1662 18.3636 40.9682 18.2802 40.7599 18.2131L40.7228 18.2015L40.6997 18.1934C40.1371 18.0175 39.5803 17.9654 39.086 18.0233C38.5918 18.0823 38.1623 18.2478 37.8347 18.4944L37.8301 18.4956C37.8231 18.5025 37.815 18.5071 37.8069 18.5118C37.7954 18.5245 37.7826 18.5338 37.7664 18.5419L37.763 18.5453C37.3567 18.8579 36.7976 19.0593 36.1713 19.1264V19.1322C36.1146 19.138 36.0567 19.1392 36 19.1403C35.9421 19.1392 35.8842 19.1392 35.8287 19.1322V19.1276C35.2024 19.0604 34.6422 18.859 34.237 18.5465L34.2336 18.543C34.2197 18.5326 34.2058 18.5245 34.1942 18.5106C34.1861 18.506 34.178 18.5013 34.1711 18.4944L34.1676 18.4932C33.8388 18.2467 33.4094 18.0811 32.9151 18.0221C32.422 17.9642 31.8664 18.0163 31.3015 18.1923L31.2795 18.2004L31.2424 18.2131C31.0341 18.2802 30.8373 18.3636 30.6521 18.4574L30.6324 18.4678C30.5919 18.4886 30.5514 18.5094 30.5109 18.5338L30.4391 18.5743L30.3581 18.624L30.2539 18.6923L30.1995 18.7294L30.0791 18.8162L30.0444 18.844C29.9992 18.8787 29.9564 18.9146 29.9136 18.9505L29.8974 18.9655C29.8499 19.0049 29.8036 19.0477 29.7596 19.0917L29.7585 19.0929C29.4135 19.4285 29.1785 19.8071 29.0628 20.1798L29.0489 20.2226C28.8695 20.8002 28.4284 21.3813 27.8068 21.8386C27.7177 21.9046 27.6251 21.9624 27.5371 22.0168L27.5325 22.0122C26.9896 22.3271 26.4154 22.4926 25.9073 22.4799H25.9003C25.8818 22.481 25.8656 22.4799 25.8494 22.4787C25.839 22.4799 25.8332 22.4799 25.8216 22.4799H25.8181C25.4072 22.4764 24.9639 22.5921 24.5309 22.8364C24.0968 23.0783 23.6778 23.4476 23.3271 23.9233L23.3132 23.9407L23.29 23.9731C23.1604 24.1479 23.0504 24.332 22.9543 24.5172L22.9439 24.5357C22.9242 24.5774 22.9046 24.6179 22.886 24.6607L22.8513 24.7348L22.8154 24.8251L22.7703 24.9408L22.7495 25.0022C22.7321 25.0485 22.7159 25.0971 22.7031 25.1434L22.6904 25.1862C22.6742 25.2395 22.658 25.295 22.6464 25.3506L22.643 25.3703C22.6291 25.4305 22.614 25.493 22.6048 25.5509V25.5532C22.5237 26.0278 22.555 26.4723 22.6812 26.845L22.695 26.8844C22.8872 27.4597 22.8675 28.1889 22.6349 28.924C22.6186 28.9749 22.5978 29.0235 22.5781 29.0745C22.5677 29.0953 22.5561 29.1092 22.548 29.1312C22.1822 30.1799 20.2399 30.8328 20.2399 33.2428C20.2399 35.5452 21.7458 36.1819 22.2691 36.9192C22.4068 37.1554 22.526 37.4158 22.6198 37.6959C22.6534 37.8013 22.68 37.9043 22.7031 38.0085L22.6974 38.0119C22.8282 38.6255 22.8085 39.2216 22.6383 39.7031L22.636 39.7089C22.6337 39.7251 22.6267 39.7413 22.6198 39.7564C22.6175 39.7656 22.6152 39.7749 22.6129 39.7807L22.6105 39.783C22.4809 40.1754 22.4554 40.6327 22.5538 41.12C22.6453 41.5819 22.8583 42.0657 23.1731 42.5229L18.9145 50.502H23.4567L25.7637 54.0001L29.689 47.5363C29.7203 47.5676 29.7411 47.6058 29.7747 47.6359C30.1404 47.9704 30.622 48.2552 31.1846 48.4392C31.3929 48.5075 31.6013 48.5561 31.8062 48.5885L31.827 48.592C31.8745 48.599 31.9196 48.6036 31.9636 48.6094L32.0493 48.6209L32.1442 48.6291L32.2669 48.6372H32.334H32.4833H32.525C32.5817 48.6337 32.6396 48.6314 32.694 48.6256L32.7149 48.6244C32.7785 48.6186 32.8399 48.6082 32.9024 48.6001H32.9035C33.3793 48.5295 33.7914 48.3628 34.1051 48.1278L34.1386 48.1035C34.6028 47.7574 35.2684 47.5537 36.0012 47.5317C36.7339 47.5548 37.3995 47.7574 37.8637 48.1035L37.8961 48.1278C38.2098 48.3628 38.6219 48.5318 39.0988 48.6001C39.1624 48.6082 39.2226 48.6186 39.2863 48.6244L39.3083 48.6256C39.3639 48.6314 39.4217 48.6337 39.4773 48.6372H39.519H39.6694H39.7354L39.8581 48.6291L39.953 48.6209L40.0387 48.6094C40.0827 48.6036 40.1278 48.599 40.1753 48.592L40.1961 48.5885C40.4022 48.5561 40.6094 48.5075 40.8177 48.4392C41.3792 48.2552 41.8607 47.9704 42.2288 47.6359C42.2612 47.6058 42.2832 47.5676 42.3133 47.5363L46.2397 54.0001L48.5456 50.5031H53.0878L48.8292 42.5241ZM47.2364 36.6761C47.1091 37.1067 46.9597 37.5281 46.7826 37.9437C46.1853 39.3536 45.3334 40.6199 44.2464 41.7069C43.1606 42.7927 41.8954 43.6481 40.4867 44.2419C39.064 44.8427 37.5569 45.1506 36.0012 45.1668C34.4466 45.1506 32.9383 44.8427 31.5168 44.2419C30.1069 43.6446 28.8417 42.7927 27.7559 41.7069C26.6689 40.6211 25.8147 39.3536 25.2197 37.9437C25.0437 37.5304 24.8944 37.1067 24.7659 36.6761C24.6247 36.1599 24.289 34.7812 24.289 33.3366C24.289 31.5065 24.7659 29.997 24.7659 29.997C24.8932 29.5676 25.0426 29.1451 25.2197 28.7283C25.8158 27.3184 26.6701 26.0544 27.757 24.9674C28.8428 23.8817 30.108 23.0274 31.5179 22.4312C32.9406 21.8305 34.4477 21.5226 36.0023 21.5075C37.5569 21.5226 39.0652 21.8305 40.4878 22.4312C41.8966 23.0274 43.163 23.8817 44.2476 24.9674C45.3345 26.0544 46.19 27.3196 46.7838 28.7283C46.9597 29.1439 47.1091 29.5676 47.2375 29.997C47.2375 29.997 47.7145 31.5065 47.7145 33.3366C47.7133 34.7812 47.3776 36.1599 47.2364 36.6761Z"
                      fill="white"
                    />
                    <path
                      d="M36 36.6515L31.8857 38.9545L32.8045 34.3298L29.3424 31.1285L34.0248 30.5732L36 26.2915L37.9752 30.5732L42.6576 31.1285L39.1955 34.3298L40.1143 38.9545L36 36.6515Z"
                      fill="#0062df"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_865_562">
                      <rect
                        width="36"
                        height="36.0012"
                        fill="white"
                        transform="translate(18 18)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div class="ml-3">
                  <p class="white--text" style="color: #B4A36F">Standard</p>
                  <p
                    class="mt-n3 headline white--text font-weight-bold"
                    style="color: #4A425F"
                  >
                    ₦ 1999.9
                    <span class="subtitle-2 font-weight-normal">/ Month</span>
                  </p>
                </div>
              </div>
              <p class="mt-4 white--text">
                Standard Offers the following features and benefits for users
              </p>
              <v-divider color="white" width="full"></v-divider>
              <div class="mt-5">
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#cce2ff">mdi-check-circle</v-icon>
                  </div>
                  <p class="white--text">Free Registration</p>
                </div>

                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#cce2ff">mdi-check-circle</v-icon>
                  </div>
                  <p class="white--text">5 - 15 Property Listings</p>
                </div>
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#cce2ff">mdi-check-circle</v-icon>
                  </div>
                  <p class="white--text">Priority placement on website</p>
                </div>
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#cce2ff">mdi-check-circle</v-icon>
                  </div>
                  <p class="white--text">Top display on search results</p>
                </div>
               <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#BAB6C4">mdi-check-circle</v-icon>
                  </div>
                  <p style=" color:#BAB6C4 ">Optimized Search</p>
                </div>
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#cce2ff">mdi-check-circle</v-icon>
                  </div>
                  <p class="white--text">Chat Support</p>
                </div>
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#BAB6C4">mdi-check-circle</v-icon>
                  </div>
                  <strike style="color:#BAB6C4"
                    ><p style=" color:#BAB6C4 ">
                      Prioriy placement on search results
                    </p></strike
                  >
                </div>
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#BAB6C4">mdi-check-circle</v-icon>
                  </div>
                  <strike style="color:#BAB6C4"
                    ><p style=" color:#BAB6C4 ">Featured Ads</p></strike
                  >
                </div>
              </div>
              <div class="d-flex justify-center mt-1">
                <v-btn
                  depressed
                  :class="{ 'px-10': $vuetify.breakpoint.mdAndUp }"
                  class="py-6 pricing-btn-color px-5 my-5"
                  >Choose Plan <span class="title ml-4">&#8594;</span></v-btn
                >
              </div>
            </v-card>
          </v-col>

          <v-col sm="4" md="4">
            <v-card
              flat
              outlined
              rounded="16"
              max-width="350"
              class="px-7 mx-auto py-12"
            >
              <div class="d-flex flex-row items-center">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 73 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="72"
                    height="72"
                    rx="9.5"
                    fill="white"
                    stroke="#1338BD"
                  />
                  <path
                    d="M36 46.39L25.4205 52.312L27.783 40.42L18.8805 32.188L30.921 30.76L36 19.75L41.079 30.76L53.1195 32.188L44.217 40.42L46.5795 52.312L36 46.39Z"
                    fill="#1338BD"
                  />
                </svg>

                <div class="ml-3">
                  <p class="font-weight-bold">Premium</p>
                  <p
                    class="mt-n3 headline font-weight-bold"
                    style="color: #4A425F"
                  >
                    ₦ 2999.99
                    <span class="subtitle-2 font-weight-normal">/ Month</span>
                  </p>
                </div>
              </div>
              <p class="mt-4">
                Premium Offers the following features and benefits for users
              </p>
              <v-divider class="hr" width="full"></v-divider>
              <div class="mt-5">
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#0058cc">mdi-check-circle</v-icon>
                  </div>
                  <p style="color:#4A425F">Free Registration</p>
                </div>
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#0058cc">mdi-check-circle</v-icon>
                  </div>
                  <p style="color:#4A425F">Unlimited Uploads</p>
                </div>
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#0058cc">mdi-check-circle</v-icon>
                  </div>
                  <p style="color:#4A425F">Priority placement on website</p>
                </div>
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#0058cc">mdi-check-circle</v-icon>
                  </div>
                  <p style="color:#4A425F">
                    Priority placement on search results
                  </p>
                </div>
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#0058cc">mdi-check-circle</v-icon>
                  </div>
                  <p style="color:#4A425F">Featured Ads</p>
                </div>
                <div class="d-flex">
                  <div class="mr-3">
                    <v-icon color="#0058cc">mdi-check-circle</v-icon>
                  </div>
                  <p style="color:#4A425F">Chat Support</p>
                </div>
              </div>
              <div class="d-flex justify-center mt-10">
                <v-btn
                  depressed
                  color="#cce2ff"
                  :class="{ 'px-10': $vuetify.breakpoint.mdAndUp }"
                  class="py-6 pricing-btn-color px-5 my-5"
                  >Choose Plan <span class="title ml-4">&#8594;</span></v-btn
                >
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>-->

    <v-container class="grey lighten-3 rounded-lg mt-6">
      <v-row class="" :class="{ 'text-center': $vuetify.breakpoint.smAndDown }">
        <v-col cols="12" sm="6">
          <div>
            <img
              class=""
              :height="$vuetify.breakpoint.smAndDown ? 200 : '400'"
              src="../../assets/images/hero-image-3.png"
            />
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <div
            :class="{
              'mt-16': $vuetify.breakpoint.mdAndUp,
              'mr-16': $vuetify.breakpoint.mdAndUp,
            }"
          >
            <h1>Get Your Property and Apartment Listed</h1>
            <p>Register and get your home listed as a property owner</p>
            <router-link
              class="text-decoration-none "
              :to="{ path: `/dashboard` }"
            >
              <v-btn class="px-6 mt-2 darken-4 white--text" color="#0062df">
                Get Listed
              </v-btn>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
<script>
import { mapActions } from "vuex";
import Partners from "../../components/layout/Partners";
import Slider from "../../components/site/Slider";
import HomeSearchDesktop from "../../components/site/HomeSearchDesktop";
import HomeSearchMobile from "../../components/site/HomeSearchMobile";
import CategoryProduct from "../../components/site/CategoryProduct";
export default {
	components: {Partners, Slider, CategoryProduct, 
		HomeSearchDesktop, HomeSearchMobile},
	metaInfo() {
		return {
			title: "Real Estate, Property and Homes in Nigeria for Sale, Rent and Short let | Housefinder.com.ng",
			meta: [
				{
					vmid: "description",
					name: "description",
					content:`The top Nigerian real estate and property website with property in 
						Nigeria for sale, rent, lease short let, We offer Nigerian property seekers 
						an easy way to find details of property in Nigeria including homes, houses, 
						lands, shops, office spaces and other commercial properties to buy or rent 
						Thousands of property listings available`
				}
			]
		}
	},
	data () {
		return {
			loading: true,
			rating: 5,
			
		}
	},
	methods: {
		...mapActions(["getHomeData", "getFeaturedProduct"]),
		async getData(){
			await this.getFeaturedProduct();
			await this.getHomeData()
			this.loading = false;
		},
	},
	created(){
		this.getData()	 
	}
}

</script>

<style lang="scss" scoped>
.maxWidth {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 2400px;
}
.hr {
  background: #0058cc;
}
.pricing-btn-color {
  color: #0058cc;
}
.divider-color {
  background: #896d19;
}
.know-more {
  background: #896d19;
}
</style>
