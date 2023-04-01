import type { NextComponentType } from "next";

import {
  MdEmail,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Links: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="links">
      <p className="text-3xl font-bold text-white">My Links</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<MdEmail />} url="mailto:s4shahri@uwaterloo.ca" />
        <Icon icon={<AiOutlineGithub />} url="https://github.com/ssaleen" />
        <Icon icon={<AiOutlineLinkedin />} url="https://www.linkedin.com/in/saleenshahriar" />
      </div>
    </div>
  );
};

export default Links;
