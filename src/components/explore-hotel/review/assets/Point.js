const Point = ({ point }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="75.384"
    height="59"
    viewBox="0 0 75.384 59"
  >
    <path
      id="Path_318"
      data-name="Path 318"
      d="M15,0H73.039C81.323,0,65,6.716,65,15V44A15,15,0,0,1,50,59H15A15,15,0,0,1,0,44V15A15,15,0,0,1,15,0Z"
      fill="#2d3ddf"
    />
    <text
      id="_8.4"
      data-name="8.4"
      transform="translate(33 39)"
      fill="#fff"
      fontSize="28"
      fontFamily="Poppins-SemiBold, Poppins"
      fontWeight="600"
    >
      <tspan x="-21.896" y="0">
        {point}
      </tspan>
    </text>
  </svg>
);

export default Point;
