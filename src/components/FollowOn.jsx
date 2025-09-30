import {FaLinkedin} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/anwar-basha-696796284/">
          <FaLinkedin size={20} />
        </a>
        {/* <a href="https://www.instagram.com/roadsidecoder">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.twitter.com/piyush_eon">
          <FaXTwitter size={20} />
        </a> */}
      </div>
    </div>
  );
};

export default FollowOn;