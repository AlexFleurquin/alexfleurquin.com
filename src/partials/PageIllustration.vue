<template>
  <svg width="1440" height="318" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient x1="38.706%" y1="-187.115%" x2="18.675%" y2="110.984%" id="a">
        <stop stop-color="#FF6C50" stop-opacity="0.8" offset="0%"/>
        <stop stop-color="#FA9F92" offset="100%"/>
      </linearGradient>

      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c">
        <stop stop-color="#FEFCDB" stop-opacity="0" offset="0%"/>
        <stop stop-color="#FF6C50" stop-opacity=".72" offset="100%"/>
      </linearGradient>
     
      <filter id="b"><feTurbulence type="fractalNoise" numOctaves="2" baseFrequency=".3" result="turb"/>
      <feComposite in="turb" operator="arithmetic" k1=".1" k2=".1" k3=".1" k4=".1" result="result1"/>
      <feComposite operator="in" in="result1" in2="SourceGraphic" result="finalFilter"/>
      <feBlend mode="multiply" in="finalFilter" in2="SourceGraphic"/></filter>
    </defs>
    <g fill="none" fill-rule="evenodd">
        <path d="M250.464 367.471c101.27 115.965 283.227-105.29 283.227-154.996 0-49.705-111.929-90-250-90s-250 40.295-250 90c0 49.706 115.503 39.032 216.773 154.996z" fill="url(#c)" transform="rotate(143 810.285 354.367)"/>  
        <path d="M88.494 90c67.04 7.177 161.094-24.753 224.996-90H.2c25.3 48.079 42.361 85.083 88.294 90z" transform="translate(1051)" fill="url(#a)" filter="url(#b)"/>

    </g>
  </svg>
</template>

<script>
export default {
  name: 'PageIllustration',
}
</script>

