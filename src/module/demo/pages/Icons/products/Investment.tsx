import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const Investment = (props: IIconProps) => (
  <Icon viewBox="0 0 28 28" {...props}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21.8315 9.8737C21.3285 13.2394 18.4599 15.6663 15.1657 15.7189L14.5802 19.6368C14.9772 19.3514 15.4095 19.0974 15.8785 18.8914L15.8801 18.8807C18.2705 17.8308 19.3996 18.0333 21.093 18.3369C21.8759 18.4773 22.7794 18.6393 23.984 18.7092C26.3883 18.8416 25.6573 19.942 24.1143 22.2651L24.1141 22.2654L24.1124 22.2679C24.0274 22.3959 23.9399 22.5276 23.8504 22.663C22.1342 25.259 20.2665 27.2661 14.9168 26.5646C14.7911 26.548 14.6705 26.5317 14.5548 26.5157C14.6978 26.4066 14.8312 26.2944 14.9587 26.1871C15.035 26.1229 15.1093 26.0605 15.1822 26.0015L15.6012 25.6629L15.5814 25.1246L14.5054 25.1641C15.5814 25.1246 15.5814 25.123 15.5814 25.123L15.5813 25.1211L15.5811 25.116L15.5804 25.1009L15.5778 25.0519C15.5755 25.011 15.5718 24.954 15.5661 24.8823C15.5546 24.7391 15.535 24.5371 15.5021 24.2889C15.4363 23.7939 15.3163 23.1084 15.0981 22.3373C14.7074 20.9567 13.9769 19.2143 12.5969 17.8283L12.6026 17.7901L12.5543 17.7485L12.9086 15.3778C9.78577 14.357 7.7624 11.2042 8.26427 7.84606C8.82419 4.09958 12.3152 1.51635 16.0617 2.07627C19.8082 2.63618 22.3914 6.12721 21.8315 9.8737ZM11.4763 18.0426C9.49723 16.3397 8.35836 16.2032 6.65018 15.9984C5.86044 15.9038 4.94901 15.7945 3.7766 15.5092C1.43871 14.9329 1.81598 16.1989 2.6124 18.8717C2.65658 19.0199 2.70205 19.1725 2.74841 19.3293C3.63064 22.3136 4.82992 24.7792 10.1509 25.6724C13.1087 26.1644 13.2738 26.0277 14.2515 25.2181C14.3378 25.1466 14.4304 25.0699 14.5318 24.988C14.5318 24.988 14.3687 20.5434 11.4747 18.0532L11.4763 18.0426ZM15.1214 10.4027C15.1568 10.3358 15.1424 10.2451 15.0784 10.1313C14.8551 9.73259 14.6281 9.33318 14.4019 8.93528L14.4015 8.93443L14.3275 8.80427C14.8824 8.48294 15.161 7.94448 15.1601 7.19195C15.1601 6.64438 15.0034 6.20884 14.7034 5.88968C14.4054 5.57051 14.0152 5.41766 13.5167 5.4385C12.8964 5.46412 12.2761 5.50494 11.6558 5.56009C11.4611 5.57789 11.3478 5.68819 11.3204 5.88881C11.132 7.29139 11.0878 8.69354 11.1877 10.0961C11.202 10.2967 11.3128 10.4027 11.5155 10.4131C11.7481 10.4244 11.9803 10.4348 12.2125 10.4444C12.4156 10.4526 12.5104 10.3519 12.5011 10.1443C12.4839 9.77132 12.4733 9.39787 12.4687 9.02486C12.5935 9.02602 12.7181 9.02679 12.8427 9.02756L12.8438 9.02757L13.0308 9.02877C13.1675 9.30449 13.3066 9.58184 13.4462 9.86041L13.4466 9.86116L13.4471 9.86215L13.6385 10.2442C13.7169 10.4075 13.8429 10.4913 14.0173 10.4943C14.3072 10.4987 14.5976 10.5013 14.8879 10.5026C15.008 10.503 15.086 10.4696 15.1214 10.4027ZM13.3212 6.68476C13.0565 6.69171 12.7915 6.7004 12.5268 6.71038C12.5058 7.07123 12.4902 7.43252 12.4809 7.79337C12.7502 7.78903 13.0199 7.78512 13.2892 7.78208C13.4661 7.78034 13.6035 7.73127 13.7009 7.634C13.7978 7.53717 13.8479 7.39995 13.8513 7.22278C13.8551 7.04778 13.8108 6.91317 13.7194 6.81894C13.6275 6.72471 13.4952 6.67999 13.3212 6.68476ZM18.8077 10.1795C19.0264 9.9537 19.1474 9.67275 19.1588 9.33144C19.1752 8.8477 19.1744 8.36396 19.1567 7.88022C19.144 7.53934 19.0222 7.25795 18.8031 7.03172C18.5865 6.80808 18.3168 6.68563 17.9953 6.67217C17.9958 6.67062 17.9965 6.66921 17.9971 6.66788L17.9982 6.66522C17.7867 6.6561 17.6047 6.70213 17.4492 6.80418C17.2962 6.90362 17.185 7.03997 17.1142 7.21193L17.0501 7.21062C17.0481 7.14295 17.0456 7.07569 17.0432 7.00804L17.0429 7.00132C17.0366 6.81547 16.9431 6.71994 16.764 6.71603C16.5322 6.71082 16.3 6.70648 16.0683 6.70344C15.8917 6.70126 15.8045 6.79462 15.807 6.98265C15.8251 8.51724 15.8179 10.0523 15.7855 11.5873C15.7792 11.7753 15.8622 11.8682 16.0341 11.8643C16.2579 11.8591 16.4812 11.8522 16.7046 11.8435C16.8765 11.8365 16.9696 11.7393 16.9814 11.5534C17.0134 11.0328 17.037 10.5117 17.0522 9.99104L17.1167 9.98974C17.1875 10.1617 17.2996 10.298 17.453 10.3979C17.6085 10.5 17.7901 10.5464 17.9995 10.5377C18.3219 10.5247 18.5916 10.4027 18.8077 10.1795ZM17.9128 8.25099C17.917 8.49069 17.9183 8.73083 17.917 8.97053C17.9158 9.09342 17.8757 9.19112 17.7978 9.26494C17.7219 9.33833 17.6191 9.37611 17.4898 9.37784C17.3579 9.37915 17.2546 9.34267 17.1788 9.26755C17.1008 9.19025 17.062 9.09515 17.0629 8.98269C17.065 8.733 17.0646 8.48374 17.0625 8.23406C17.0616 8.11681 17.1 8.02172 17.1779 7.9492C17.2559 7.87668 17.3591 7.84151 17.4885 7.84324C17.6179 7.84498 17.7207 7.88276 17.7965 7.95658C17.8724 8.02997 17.9116 8.12767 17.9128 8.25099Z"
      fill="currentColor"
    />
  </Icon>
);

export default Investment;
