
import React from 'react'
import styled from 'styled-components';
  const Svg = styled.svg`
    width: 55.3vw;
    height: 57vh;
    top: 3vmin;
    right: 3vw;
    position: absolute;
    z-index: -1;
    @media (max-width: 480px){
      width: 96.3vw;
    height: 43vh;
    top: 34vmin;
    left: -21vw;
    position: absolute;
    }
  `
export const UnknownClouds = () => {
  return (
<Svg width="814" height="436" viewBox="0 0 814 436" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M399.645 1.18231C397.26 1.18231 394.875 1.2396 392.494 1.3594C390.109 1.47398 387.729 1.65106 385.354 1.88544C382.979 2.11981 380.614 2.41148 378.255 2.76044C375.89 3.1094 373.541 3.52085 371.203 3.9844C368.859 4.45315 366.531 4.97398 364.218 5.5521C361.906 6.13544 359.604 6.77085 357.322 7.46356C355.036 8.15627 352.77 8.90106 350.526 9.70835C348.281 10.5104 346.052 11.3698 343.848 12.2813C341.645 13.1927 339.463 14.1615 337.307 15.1823C335.145 16.2031 333.015 17.2761 330.911 18.4011C328.807 19.5261 326.734 20.6979 324.687 21.9271C322.64 23.1511 320.625 24.4271 318.64 25.7552C316.656 27.0781 314.703 28.4531 312.786 29.875C310.869 31.2969 308.989 32.7656 307.145 34.2761C305.302 35.7917 303.494 37.349 301.729 38.9531C299.958 40.5521 298.229 42.1979 296.541 43.8854C294.854 45.5729 293.213 47.2969 291.609 49.0677C290.005 50.8334 288.447 52.6406 286.932 54.4844C285.421 56.3281 283.953 58.2084 282.531 60.125C281.109 62.0417 279.734 63.9948 278.411 65.974C277.083 67.9584 275.807 69.974 274.583 72.0209C273.354 74.0677 272.177 76.1459 271.052 78.25C269.927 80.3542 268.854 82.4844 267.838 84.6406C266.817 86.7969 265.848 88.974 264.937 91.1823C264.02 93.3854 263.166 95.6094 262.359 97.8542C261.557 100.104 260.807 102.37 260.114 104.651C259.421 106.932 258.786 109.234 258.208 111.547C257.625 113.859 257.104 116.188 256.64 118.531C256.171 120.87 255.765 123.219 255.416 125.578C255.062 127.938 254.77 130.307 254.536 132.682C254.307 135.057 254.13 137.432 254.01 139.818C253.895 142.198 253.838 144.583 253.838 146.969C253.869 152.37 254.203 157.745 254.833 163.109C199.838 172.979 158.578 217.391 158.578 271.005C158.578 331.922 211.833 380.958 277.979 380.958H704.015C764.942 380.958 813.989 335.375 813.989 278.755C813.989 222.49 765.546 177.146 705.151 176.583C704.916 174.698 704.635 172.818 704.307 170.943C703.984 169.073 703.619 167.208 703.213 165.354C702.802 163.495 702.354 161.651 701.864 159.818C701.369 157.979 700.838 156.156 700.265 154.344C699.692 152.531 699.078 150.734 698.421 148.953C697.765 147.167 697.072 145.401 696.338 143.646C695.604 141.896 694.828 140.161 694.015 138.443C693.203 136.724 692.348 135.026 691.463 133.344C690.572 131.667 689.645 130.01 688.677 128.37C687.713 126.734 686.713 125.12 685.677 123.526C684.64 121.938 683.562 120.37 682.458 118.823C681.348 117.281 680.203 115.76 679.026 114.271C677.848 112.781 676.64 111.313 675.395 109.875C674.156 108.438 672.88 107.031 671.572 105.651C670.265 104.271 668.927 102.922 667.562 101.604C666.192 100.281 664.796 98.9948 663.369 97.7396C661.947 96.4792 660.489 95.2604 659.01 94.0677C657.531 92.875 656.02 91.7188 654.489 90.599C652.958 89.474 651.395 88.3854 649.817 87.3334C648.234 86.2813 646.625 85.2656 645 84.2865C643.369 83.3073 641.718 82.3646 640.052 81.4584C638.38 80.5521 636.687 79.6875 634.979 78.8542C633.265 78.0261 631.541 77.2344 629.796 76.4844C628.046 75.7344 626.286 75.0209 624.51 74.349C622.729 73.6823 620.937 73.0469 619.13 72.4584C617.328 71.8698 615.505 71.3177 613.677 70.8073C611.843 70.3021 610 69.8334 608.151 69.4063C606.296 68.9844 604.437 68.599 602.567 68.2604C600.697 67.9167 598.822 67.6198 596.937 67.3594C595.052 67.1042 593.166 66.8906 591.276 66.7188C589.38 66.5469 587.484 66.4219 585.588 66.3334C583.687 66.25 581.786 66.2031 579.885 66.2031C570.911 66.2188 562.036 67.1771 553.26 69.0834C544.489 70.9896 536.015 73.8021 527.843 77.5156C526.286 74.6459 524.635 71.8281 522.89 69.0729C521.145 66.3125 519.312 63.6146 517.385 60.9792C515.463 58.3438 513.447 55.7761 511.354 53.2761C509.255 50.7761 507.072 48.349 504.812 45.9948C502.552 43.6406 500.213 41.3646 497.802 39.1667C495.39 36.9688 492.906 34.8542 490.348 32.8281C487.791 30.7969 485.171 28.8542 482.484 27C479.796 25.1459 477.052 23.3802 474.25 21.7136C471.442 20.0417 468.588 18.4688 465.677 16.9896C462.765 15.5104 459.807 14.1354 456.807 12.8542C453.802 11.5729 450.76 10.3959 447.677 9.32294C444.598 8.24481 441.484 7.27606 438.333 6.41148C435.187 5.54689 432.015 4.78648 428.817 4.13023C425.619 3.47919 422.401 2.93231 419.166 2.49481C415.932 2.05731 412.687 1.72919 409.432 1.51044C406.171 1.29169 402.911 1.18231 399.645 1.18231Z" fill="#898888"/>
<path d="M241.13 56.0469C238.745 56.0469 236.359 56.1042 233.974 56.2188C231.594 56.3385 229.214 56.5156 226.839 56.75C224.464 56.9844 222.094 57.276 219.734 57.625C217.375 57.974 215.026 58.3802 212.682 58.849C210.344 59.3125 208.016 59.8333 205.703 60.4167C203.385 60.9948 201.089 61.6302 198.802 62.3229C196.521 63.0156 194.255 63.7656 192.005 64.5677C189.76 65.375 187.536 66.2292 185.328 67.1458C183.125 68.0573 180.943 69.026 178.786 70.0417C176.63 71.0625 174.5 72.1354 172.396 73.2604C170.292 74.3854 168.214 75.5625 166.167 76.7865C164.12 78.0156 162.104 79.2917 160.12 80.6146C158.135 81.9427 156.188 83.3177 154.271 84.7344C152.354 86.1563 150.474 87.625 148.63 89.1406C146.781 90.651 144.979 92.2083 143.208 93.8125C141.443 95.4167 139.714 97.0625 138.026 98.7448C136.339 100.432 134.693 102.161 133.089 103.927C131.49 105.698 129.932 107.505 128.417 109.349C126.901 111.193 125.432 113.073 124.016 114.99C122.594 116.906 121.219 118.854 119.891 120.839C118.568 122.823 117.292 124.839 116.063 126.885C114.839 128.932 113.661 131.005 112.536 133.109C111.411 135.214 110.339 137.344 109.318 139.5C108.297 141.656 107.333 143.839 106.417 146.042C105.505 148.245 104.646 150.474 103.844 152.719C103.036 154.964 102.292 157.229 101.599 159.516C100.906 161.797 100.271 164.094 99.6875 166.411C99.1094 168.724 98.5885 171.052 98.1198 173.391C97.6563 175.729 97.2448 178.083 96.8958 180.443C96.5469 182.802 96.2552 185.167 96.0208 187.542C95.7865 189.917 95.6094 192.297 95.4948 194.677C95.375 197.063 95.3177 199.448 95.3177 201.833C95.349 207.229 95.6823 212.609 96.3125 217.969C41.3177 227.844 0.0625 272.25 0.0625 325.87C0.0625 386.781 53.3125 435.823 119.464 435.823H545.5C606.427 435.823 655.474 390.24 655.474 333.62C655.474 277.349 607.031 232.01 546.635 231.443C546.396 229.557 546.115 227.682 545.792 225.807C545.469 223.938 545.099 222.073 544.693 220.214C544.286 218.359 543.833 216.516 543.344 214.677C542.854 212.844 542.323 211.016 541.745 209.208C541.172 207.396 540.557 205.599 539.906 203.813C539.25 202.031 538.552 200.26 537.818 198.51C537.083 196.755 536.313 195.021 535.5 193.302C534.682 191.589 533.833 189.885 532.943 188.208C532.052 186.531 531.125 184.87 530.161 183.234C529.198 181.599 528.193 179.984 527.156 178.391C526.12 176.797 525.047 175.229 523.938 173.688C522.828 172.141 521.688 170.625 520.51 169.135C519.333 167.641 518.125 166.177 516.88 164.74C515.635 163.302 514.365 161.891 513.057 160.51C511.75 159.135 510.411 157.781 509.042 156.464C507.677 155.146 506.281 153.854 504.854 152.599C503.427 151.344 501.974 150.12 500.495 148.927C499.01 147.74 497.505 146.583 495.969 145.458C494.438 144.339 492.88 143.25 491.297 142.198C489.714 141.146 488.109 140.13 486.479 139.146C484.854 138.167 483.203 137.224 481.531 136.318C479.859 135.417 478.172 134.547 476.458 133.719C474.75 132.891 473.021 132.099 471.276 131.349C469.531 130.599 467.771 129.885 465.99 129.214C464.214 128.542 462.422 127.911 460.615 127.323C458.807 126.729 456.99 126.182 455.156 125.672C453.328 125.161 451.484 124.698 449.63 124.271C447.781 123.844 445.917 123.464 444.047 123.12C442.177 122.781 440.302 122.479 438.422 122.224C436.536 121.969 434.651 121.755 432.755 121.583C430.865 121.411 428.969 121.281 427.068 121.198C425.172 121.109 423.271 121.068 421.37 121.068C412.391 121.078 403.516 122.042 394.745 123.948C385.969 125.854 377.495 128.661 369.323 132.375C367.766 129.505 366.12 126.693 364.375 123.932C362.63 121.172 360.797 118.479 358.87 115.844C356.943 113.208 354.932 110.641 352.833 108.135C350.734 105.635 348.557 103.208 346.297 100.854C344.036 98.5 341.698 96.224 339.286 94.0313C336.87 91.8333 334.385 89.7188 331.828 87.6875C329.276 85.6563 326.651 83.7135 323.969 81.8594C321.281 80.0052 318.536 78.2448 315.729 76.5729C312.927 74.9063 310.068 73.3333 307.156 71.8542C304.25 70.375 301.292 68.9948 298.286 67.7188C295.286 66.4375 292.245 65.2604 289.161 64.1823C286.078 63.1094 282.964 62.1406 279.818 61.2708C276.672 60.4063 273.495 59.6458 270.297 58.9948C267.099 58.3385 263.885 57.7969 260.651 57.3594C257.417 56.9219 254.167 56.5937 250.911 56.375C247.656 56.1563 244.396 56.0469 241.13 56.0469Z" fill="#D9D9D9"/>
<path d="M324.5 187.2C344.3 187.2 360.3 192.8 372.5 204C384.7 215.2 390.8 230.2 390.8 249C390.8 270 384.3 285.6 371.3 295.8C358.3 305.8 340.7 310.8 318.5 310.8L317.6 339.3H293.9L292.7 291.9H301.4C321.2 291.9 336.7 288.9 347.9 282.9C359.1 276.9 364.7 265.6 364.7 249C364.7 237 361.1 227.5 353.9 220.5C346.7 213.5 337 210 324.8 210C312.4 210 302.6 213.4 295.4 220.2C288.4 226.8 284.9 235.9 284.9 247.5H259.1C259.1 235.5 261.8 225 267.2 216C272.6 206.8 280.2 199.7 290 194.7C300 189.7 311.5 187.2 324.5 187.2ZM305.6 400.8C300.4 400.8 296 399 292.4 395.4C288.8 391.8 287 387.4 287 382.2C287 377 288.8 372.6 292.4 369C296 365.4 300.4 363.6 305.6 363.6C310.6 363.6 314.8 365.4 318.2 369C321.8 372.6 323.6 377 323.6 382.2C323.6 387.4 321.8 391.8 318.2 395.4C314.8 399 310.6 400.8 305.6 400.8Z" fill="black"/>
<path d="M372.5 204L373.176 203.263L373.176 203.263L372.5 204ZM371.3 295.8L371.91 296.593L371.917 296.587L371.3 295.8ZM318.5 310.8V309.8H317.531L317.501 310.768L318.5 310.8ZM317.6 339.3V340.3H318.569L318.6 339.332L317.6 339.3ZM293.9 339.3L292.9 339.325L292.925 340.3H293.9V339.3ZM292.7 291.9V290.9H291.674L291.7 291.925L292.7 291.9ZM347.9 282.9L347.428 282.019L347.428 282.019L347.9 282.9ZM295.4 220.2L296.086 220.928L296.087 220.927L295.4 220.2ZM284.9 247.5V248.5H285.9V247.5H284.9ZM259.1 247.5H258.1V248.5H259.1V247.5ZM267.2 216L268.058 216.515L268.062 216.506L267.2 216ZM290 194.7L289.553 193.806L289.546 193.809L290 194.7ZM292.4 395.4L291.693 396.107L291.693 396.107L292.4 395.4ZM292.4 369L291.693 368.293L291.693 368.293L292.4 369ZM318.2 369L317.473 369.687L317.483 369.697L317.493 369.707L318.2 369ZM318.2 395.4L317.493 394.693L317.483 394.703L317.473 394.713L318.2 395.4ZM324.5 188.2C344.101 188.2 359.843 193.738 371.824 204.737L373.176 203.263C360.757 191.862 344.499 186.2 324.5 186.2V188.2ZM371.824 204.737C383.789 215.721 389.8 230.438 389.8 249H391.8C391.8 229.962 385.611 214.679 373.176 203.263L371.824 204.737ZM389.8 249C389.8 269.784 383.378 285.053 370.683 295.013L371.917 296.587C385.222 286.147 391.8 270.216 391.8 249H389.8ZM370.69 295.007C357.918 304.832 340.557 309.8 318.5 309.8V311.8C340.843 311.8 358.682 306.768 371.91 296.593L370.69 295.007ZM317.501 310.768L316.601 339.268L318.6 339.332L319.5 310.832L317.501 310.768ZM317.6 338.3H293.9V340.3H317.6V338.3ZM294.9 339.275L293.7 291.875L291.7 291.925L292.9 339.325L294.9 339.275ZM292.7 292.9H301.4V290.9H292.7V292.9ZM301.4 292.9C321.281 292.9 336.968 289.891 348.372 283.781L347.428 282.019C336.432 287.909 321.119 290.9 301.4 290.9V292.9ZM348.372 283.781C359.999 277.553 365.7 265.837 365.7 249H363.7C363.7 265.363 358.201 276.247 347.428 282.019L348.372 283.781ZM365.7 249C365.7 236.787 362.028 227.007 354.597 219.783L353.203 221.217C360.172 227.993 363.7 237.213 363.7 249H365.7ZM354.597 219.783C347.172 212.564 337.201 209 324.8 209V211C336.799 211 346.228 214.436 353.203 221.217L354.597 219.783ZM324.8 209C312.212 209 302.143 212.456 294.713 219.473L296.087 220.927C303.057 214.344 312.588 211 324.8 211V209ZM294.714 219.472C287.473 226.3 283.9 235.686 283.9 247.5H285.9C285.9 236.114 289.327 227.3 296.086 220.928L294.714 219.472ZM284.9 246.5H259.1V248.5H284.9V246.5ZM260.1 247.5C260.1 235.655 262.763 225.338 268.057 216.514L266.343 215.486C260.837 224.662 258.1 235.345 258.1 247.5H260.1ZM268.062 216.506C273.363 207.476 280.819 200.507 290.454 195.591L289.546 193.809C279.581 198.893 271.837 206.124 266.338 215.494L268.062 216.506ZM290.447 195.594C300.287 190.674 311.63 188.2 324.5 188.2V186.2C311.37 186.2 299.713 188.726 289.553 193.806L290.447 195.594ZM305.6 399.8C300.659 399.8 296.515 398.101 293.107 394.693L291.693 396.107C295.485 399.899 300.141 401.8 305.6 401.8V399.8ZM293.107 394.693C289.699 391.285 288 387.141 288 382.2H286C286 387.659 287.901 392.315 291.693 396.107L293.107 394.693ZM288 382.2C288 377.259 289.699 373.115 293.107 369.707L291.693 368.293C287.901 372.085 286 376.741 286 382.2H288ZM293.107 369.707C296.515 366.299 300.659 364.6 305.6 364.6V362.6C300.141 362.6 295.485 364.501 291.693 368.293L293.107 369.707ZM305.6 364.6C310.328 364.6 314.264 366.289 317.473 369.687L318.927 368.313C315.336 364.511 310.872 362.6 305.6 362.6V364.6ZM317.493 369.707C320.901 373.115 322.6 377.259 322.6 382.2H324.6C324.6 376.741 322.699 372.085 318.907 368.293L317.493 369.707ZM322.6 382.2C322.6 387.141 320.901 391.285 317.493 394.693L318.907 396.107C322.699 392.315 324.6 387.659 324.6 382.2H322.6ZM317.473 394.713C314.264 398.111 310.328 399.8 305.6 399.8V401.8C310.872 401.8 315.336 399.889 318.927 396.087L317.473 394.713Z" fill="black"/>
</Svg>
  )
}
export default UnknownClouds