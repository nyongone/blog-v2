interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const EmailIcon = ({ width, height, color }: Props) => {
  return (
    <svg
      width={width ?? "24px"}
      height={height ?? "24px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
        stroke={color ?? "#222222"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke={color ?? "#222222"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EmailIcon;
