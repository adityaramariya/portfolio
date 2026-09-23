import { basePath } from "@/shared/config/app-config";

const Video = () => (
  <div className="absolute inset-0 hidden overflow-hidden md:block">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 h-full w-full object-cover"
      poster={`${basePath}/images/banner-poster.webp`}
    >
      <source src={`${basePath}/videos/banner-video.webm`} type="video/webm" />
      <source src={`${basePath}/videos/banner-video.mp4`} type="video/mp4" />
    </video>
  </div>
);

export default Video;
