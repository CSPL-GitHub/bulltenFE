function generateRandomSVG() {
  const colors = ["#7154c6", "#00165B", "#FF5733", "#33FF57", "#5733FF"];
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];

  return `
      <svg xmlns="http://www.w3.org/2000/svg" width="1864" height="960" viewBox="0 0 1864 960" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M0 914.444V111.111C0 92.7016 14.9238 77.7778 33.3333 77.7778H396.184C406.639 77.7778 416.488 72.8725 422.787 64.5283L461.5 13.2494C467.799 4.90526 477.648 0 488.103 0H1862.89C1863.5 0 1864 0.497461 1864 1.11111V825.667C1864 844.076 1849.08 859 1830.67 859H944.34C935.239 859 926.533 862.721 920.244 869.301L843.393 949.699C837.104 956.278 828.398 960 819.297 960H45.5556C20.396 960 0 939.604 0 914.444Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient id="paint0_linear" x1="1723.66" y1="0.000114398" x2="-2.45707" y2="1046.15" gradientUnits="userSpaceOnUse">
            <stop stop-color="${randomColor1}"></stop>
            <stop offset="1" stop-color="${randomColor2}"></stop>
          </linearGradient>
        </defs>
      </svg>
    `;
}
