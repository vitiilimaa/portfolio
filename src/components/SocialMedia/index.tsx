import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useSpring, animated } from "@react-spring/web";

interface SocialMediaProps {
  color: string;
  fontSize: number | string;
  containerStyle?: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({
  color,
  fontSize,
  containerStyle = "",
}) => {
  const [githubHovered, setGithubHovered] = useState(false);
  const githubAnimationProps = useSpring({
    opacity: githubHovered ? 0.6 : 1,
  });

  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const linkedinAnimationProps = useSpring({
    opacity: linkedinHovered ? 0.6 : 1,
  });

  const [instagramHovered, setInstagramHovered] = useState(false);
  const instagramAnimationProps = useSpring({
    opacity: instagramHovered ? 0.6 : 1,
  });

  return (
    <div className={`d-flex gap-2 align-items-center ${containerStyle}`}>
      <animated.div
        onMouseEnter={() => setGithubHovered(true)}
        onMouseLeave={() => setGithubHovered(false)}
        style={githubAnimationProps}
      >
        <a href="https://github.com/vitiilimaa" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: color, fontSize: fontSize }}
          />
        </a>
      </animated.div>
      <animated.div
        onMouseEnter={() => setLinkedinHovered(true)}
        onMouseLeave={() => setLinkedinHovered(false)}
        style={linkedinAnimationProps}
      >
        <a href="https://www.linkedin.com/in/dev-batista/" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: color, fontSize: fontSize }}
          />
        </a>
      </animated.div>
      <animated.div
        onMouseEnter={() => setInstagramHovered(true)}
        onMouseLeave={() => setInstagramHovered(false)}
        style={instagramAnimationProps}
      >
        <a href="https://www.instagram.com/vitorhugo.tsx/" target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: color, fontSize: fontSize }}
          />
        </a>
      </animated.div>
    </div>
  );
};

export default SocialMedia;
